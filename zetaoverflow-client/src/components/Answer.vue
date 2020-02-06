<template>
    <b-card>
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
                    <b-form-textarea id="textarea" v-model="updatedAnswer" rows="3" max-rows="6"></b-form-textarea>
                    <br />
                    <b-button variant="primary" @click="updateAnswer">Update answer</b-button>
                </div>
                <b-card-text v-if="!this.edit" v-html="answer.text">{{answer.text}}</b-card-text>
                <b-row>
                    <b-col sm="9"></b-col>
                    <b-col sm="3">
                        <b-row>
                            <b-col cols="9">
                                <p>
                                    <sub>answered {{timeDiff(answer.createdAt)}} by</sub>
                                    <br />
                                    <sub
                                        v-if="answer.updatedAt"
                                    >updated {{timeDiff(answer.updatedAt)}} by</sub>
                                </p>
                                <router-link :to="`/profile/${answer.user.id}`">
                                <p>
                                    <b-icon icon="person-fill"></b-icon>
                                    {{answer.user.username}}
                                </p>
                                </router-link>
                            </b-col>
                            <b-col v-if="currentUserId === answer.user.id" cols="3" class="options">
                                <b-icon @click="editAnswer" icon="pencil" class="edit option"></b-icon>
                                <b-icon @click="deleteAnswer" icon="x-circle" class="delete option"></b-icon>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import helper from "../helpers/helper";
import api from "@/api.js";

export default {
    name: "answer",
    data() {
        return {
            loggedIn: localStorage.getItem('userId') !== null,
            edit: false,
            updatedAnswer: "",
            votes: 0,
            currentUserVote: 0,
            currentUserId: localStorage.getItem("userId"),
        };
    },
    props: ["answer"],
    watch: {
        answer: {
            handler: "loadVotes",
            immediate: true
        }
    },
    methods: {
        loadVotes() {
            this.answer.text = this.answer.text.replace(/\r?\n/g, "<br />");
            api.get(`/answers/${this.answer.id}/vote`)
                .then(res => {
                    window.console.log(res.data);
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
        editAnswer() {
            this.updatedAnswer = this.answer.text;
            this.edit = !this.edit;
        },
        updateAnswer() {
            let valid = true;
            if(this.updatedAnswer.length < 5) {
                alert("Answer must be atleast 5 characters long.");
                valid = false;
            }
            if(valid) {
                this.$emit("updateAnswer", { text: this.updatedAnswer });
                this.edit = false;
            }
        },
        deleteAnswer() {
            this.$emit("deleteAnswer");
        },
        timeDiff: helper.timeDiff,
        /* eslint-disable no-unused-vars */
        upvote() {
            if(!this.loggedIn) {
                alert(`Please login to vote.`)
            } else {
                api.post(`/answers/${this.answer.id}/vote/${this.currentUserVote === 1 ? 0: 1}`)
                        .then(res => {
                            this.votes += (this.currentUserVote === 0? 1:(this.currentUserVote === 1 ? -1 : 2));
                            this.currentUserVote = this.currentUserVote === 1 ? 0: 1;
                        })
                        .catch(err => window.console.log(err));
            }
        },
        downvote() {
            if(!this.loggedIn) {
                alert(`Please login to vote.`)
            } else {
                api.post(`/answers/${this.answer.id}/vote/${this.currentUserVote === -1 ? 0: -1}`)
                        .then(res => {
                            this.votes += (this.currentUserVote === 0? -1:(this.currentUserVote === -1 ? 1 : -2));
                            this.currentUserVote = this.currentUserVote === -1 ? 0: -1;
                        })
                        .catch(err => window.console.log(err));
            }
        }
        /* eslint-enable no-unused-vars */
    }
};
</script>

<style scoped>
.card {
    margin: 15px 0;
}

.card-text {
    overflow: scroll;
    max-height: 500px;
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

.upvote:hover, .upvote-active {
    color: #633da5;
    transform: scale(1.5) translateY(-4px);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.downvote:hover, .downvote-active {
    color: #633da5;
    transform: scale(1.5) translateY(4px);
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
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