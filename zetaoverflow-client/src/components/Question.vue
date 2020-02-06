<template>
    <div class="answers-question">
        <router-link
            :to="{path:'/answers', query: {questionId: this.question.id}}"
            v-if="!this.edit"
        >
            <h4 class="card-title">{{question.title}}</h4>
        </router-link>
        <b-form-input v-model="updatedQuestion.title" v-if="this.edit" placeholder="Question Title" maxlength="200"></b-form-input>

        <b-row>
            <b-col cols="2" sm="1">
                <div class="votes">
                    <b-icon
                        @click="upvote"
                        icon="chevron-compact-up"
                        class="vote upvote"
                        v-bind:class="{'upvote-active': currentUserVote === 1}"
                    ></b-icon>
                    <h5>{{votes}}</h5>
                    <b-icon
                        @click="downvote"
                        icon="chevron-compact-down"
                        class="vote downvote"
                        v-bind:class="{'downvote-active': currentUserVote === -1}"
                    ></b-icon>
                </div>
            </b-col>
            <b-col cols="10" sm="11" class="question-text">
                <div class="edit-answer" v-if="this.edit">
                    <br />
                    <b-form-textarea
                        id="textarea"
                        v-model="updatedQuestion.text"
                        placeholder="Explain your question..."
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                    <br />
                </div>

                <b-card-text v-if="!this.edit" v-html="question.text">{{question.text}}</b-card-text>
                <b-row>
                    <b-col sm="8">
                        <ul v-if="!this.edit">
                            <li v-bind:key="tag.id" v-for="tag in tags">
                                <b-badge variant="primary" class="tag">{{tag.name}}</b-badge>
                            </li>
                        </ul>
                        <b-form-group :state="state" v-if="this.edit">
                            <b-form-tags
                                v-model="updatedQuestion.tags"
                                tag-variant="primary"
                                placeholder="Enter space seperated tags..."
                                :state="state"
                                :tag-validator="tagValidator"
                                separator=" "
                            ></b-form-tags>
                            <template v-slot:invalid-feedback>You must provide no more than 10 tags</template>
                            <template
                                v-slot:description
                            >Tags must less than 20 characters and lowercase.</template>
                        </b-form-group>
                    </b-col>
                    <b-col sm="4">
                        <b-row>
                            <b-col cols="9">
                                <p>
                                    <sub>asked {{timeDiff(question.createdAt)}} by</sub>
                                    <br />
                                    <sub
                                        v-if="question.updatedAt"
                                    >updated {{timeDiff(question.updatedAt)}} by</sub>
                                </p>
                                <router-link :to="`/profile/${question.user.id}`">
                                <p>
                                    <b-icon icon="person-fill"></b-icon>
                                    {{question.user.username}}
                                </p>
                                </router-link>
                            </b-col>
                            <b-col
                                v-if="currentUserId === question.user.id"
                                cols="3"
                                class="options"
                            >
                                <b-icon @click="editQuestion" icon="pencil" class="edit option"></b-icon>
                                <b-icon
                                    @click="deleteQuestion"
                                    icon="x-circle"
                                    class="delete option"
                                ></b-icon>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-button v-if="this.edit" variant="primary" @click="updateQuestion">Update question</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import helper from "../helpers/helper";
import api from "@/api.js";

export default {
    name: "questionComponent",
    props: ["question"],
    data() {
        return {
            loggedIn: localStorage.getItem('userId') !== null,
            tags: [],
            votes: 0,
            currentUserVote: 0,
            updatedQuestion: {
                title: "",
                text: "",
                tags: []
            },
            currentUserId: localStorage.getItem("userId"),
            edit: false,
            dirty: false
        };
    },
    computed: {
        state() {
            return this.dirty ? this.updatedQuestion.tags.length < 11 : null;
        }
    },
    watch: {
        question: {
            handler: "loadTags",
            immediate: true
        },
        'updatedQuestion.tags': function(newVal, oldVal) {
            this.dirty = true;
        }
    },
    methods: {
        tagValidator(tag) {
            return (
                tag === tag.toLowerCase() && tag.length > 0 && tag.length < 20
            );
        },
        loadTags() {
            // window.console.log("bla", this.question);
            this.question.text = this.question.text.replace(/\r?\n/g, "<br />");
            api.get(`/questions/${this.question.id}/tags`)
                .then(res => {
                    this.tags = res.data;
                    this.question.tags = this.tags;
                })
                .catch(err => window.console.log(err));
            this.loadVotes();
        },
        loadVotes() {
            api.get(`/questions/${this.question.id}/vote`)
                .then(res => {
                    let v = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        v += res.data[i].value;
                        if (res.data[i].userId == this.currentUserId)
                            this.currentUserVote = res.data[i].value;
                    }
                    this.votes = v;
                })
                .catch(err => window.console.log(err));
        },
        tagClick(event) {
            let tagName = event.target.innerHTML;
            this.$router.push(`/questions?tag=${tagName}`);
        },
        editQuestion() {
            this.updatedQuestion.title = this.question.title;
            this.updatedQuestion.text = this.question.text;
            this.updatedQuestion.tags = this.tags.map(tag => tag.name);
            this.edit = !this.edit;
        },
        updateQuestion() {
            let valid = true;
            if(this.updatedQuestion.title.length < 5){
                alert("Title of the question must be atleast 5 characters long.");
                valid = false;
            }
            if(valid){
                let questionObj = {
                title: this.updatedQuestion.title,
                text: this.updatedQuestion.text
                };
                api.put(`/questions/${this.question.id}`, questionObj)
                    .then(res => (this.question = res.data))
                    .catch(err => window.console.log(err));
                api.post(
                    `/questions/${this.question.id}/tags`,
                    this.updatedQuestion.tags
                )
                    .then(res => (this.tags = res.data))
                    .catch(err => window.console.log(err));
                this.edit = false;
                this.$emit("updateQuestion", this.question);
            }
        },
        deleteQuestion() {
            api.delete(`/questions/${this.question.id}`)
                .then(res => {
                    this.$emit("deleteQuestion");
                    if(this.$route.query.questionId)
                        this.$router.push("/questions");
                })
                .catch(err => window.console.log(err));
        },
        timeDiff: helper.timeDiff,
        upvote() {
            if(!this.loggedIn) {
                alert(`Please login to vote.`)
            } else {
                api.post(
                    `/questions/${this.question.id}/vote/${
                        this.currentUserVote === 1 ? 0 : 1
                    }`
                )
                    .then(res => {
                        this.votes +=
                            this.currentUserVote === 0
                                ? 1
                                : this.currentUserVote === 1
                                ? -1
                                : 2;
                        this.currentUserVote = this.currentUserVote === 1 ? 0 : 1;
                    })
                    .catch(err => window.console.log(err));
            }
        },
        downvote() {
            if(!this.loggedIn) {
                alert(`Please login to vote.`)
            } else {
                api.post(
                    `/questions/${this.question.id}/vote/${
                        this.currentUserVote === -1 ? 0 : -1
                    }`
                )
                    .then(res => {
                        this.votes +=
                            this.currentUserVote === 0
                                ? -1
                                : this.currentUserVote === -1
                                ? 1
                                : -2;
                        this.currentUserVote = this.currentUserVote === -1 ? 0 : -1;
                    })
                    .catch(err => window.console.log(err));
            }
        }
    }
};
/* eslint-enable no-unused-vars */
</script>

<style scoped>

.card-title:hover {
    color: #666;
    cursor: pointer;
    transition: 0.1s;
}

.question-text {
    /* border-left: 1px solid rgba(0, 0, 0, 0.125); */
    min-height: 50px;
}

.votes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.votes h5 {
    margin: 0;
}

.vote {
    font-size: 2rem;
    transition: all 0.3s linear;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    -o-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    cursor: pointer;
    color: #aaa;
}

.upvote:hover,
.upvote-active {
    color: #633da5;
    transform: scale(1.9) translateY(-2px);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    text-emphasis: bold;
}

.downvote:hover,
.downvote-active {
    color: #633da5;
    transform: scale(1.9) translateY(2px);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-flow: wrap;
    font-size: 1.1rem;
}

li {
    margin: 0 5px;
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.options {
    display: flex;
    flex-direction: column;
}

.option {
    margin-bottom: 10px;
    cursor: pointer;
}

.option:hover {
    transform: scale(2);
    transition: 0.2s;
}

@media only screen and (max-width: 768px) {
    .card-title {
        font-size: 1rem;
    }

    .card-text {
        font-size: 0.8rem;
    }

    .card-body {
        font-size: 1rem;
    }

    ul {
        font-size: 1rem;
    }

    p {
        font-size: 0.8rem;
    }

    .vote {
        font-size: 1.5rem;
    }
}
</style>