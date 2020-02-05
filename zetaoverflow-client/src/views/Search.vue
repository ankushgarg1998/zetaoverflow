<template>
    <div class="wrapper">
        <br />
        <b-row>
            <b-col cols="12" sm="6">
                <b-form @submit="search">
                    <b-input-group>
                        <b-form-input v-model="searchString" placeholder="Search..."></b-form-input>
                        <b-input-group-append>
                            <b-button type="submit" variant="primary">
                                <b-icon icon="search" style="color: #fff"></b-icon>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </b-col>
            <!-- <b-col cols="2" class="kaafi-center">
                <h4>|</h4>
            </b-col>-->
            <b-col cols="12" sm="6">
                <b-form @submit="searchTags">
                    <b-input-group>
                        <b-form-tags
                            v-model="tagsArray"
                            tag-variant="primary"
                            placeholder="Search by tags..."
                            :state="state"
                            :tag-validator="tagValidator"
                            separator=" "
                        ></b-form-tags>
                        <template v-slot:invalid-feedback>You must provide no more than 10 tags</template>
                        <template
                            v-slot:description
                        >Tags must less than 20 characters and lowercase.</template>
                        <b-input-group-append>
                            <b-button type="submit" variant="primary">
                                <b-icon icon="search" style="color: #fff"></b-icon>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </b-col>
        </b-row>

        <br />
        <br />
        <h1>Search Results</h1>
        <!-- <b-tabs content-class="mt-3" align="right">
            <b-tab @click="sortBy = 'oldest'" title="Oldest" active></b-tab>
            <b-tab @click="sortBy = 'latest'" title="Latest"></b-tab>
            <b-tab @click="sortBy = 'votes'" title="Most Voted"></b-tab>
        </b-tabs>-->
        <hr />
        <div v-bind:key="question.id" v-for="(question, index) in questions">
            <b-card>
                <Question
                    v-bind:question="question"
                    @updateQuestion="(ques) => updateQuestion(index, ques)"
                    @deleteQuestion="() => deleteQuestion(index)"
                />
            </b-card>
        </div>
        <p v-if="questions.length === 0">No results found...</p>
        <!-- <hr /> -->
        <!-- <div class="mt-3">
            <b-pagination
                v-if="rows > 5"
                v-model="currentPage"
                :per-page="perPage"
                :total-rows="rows"
                align="center"
            ></b-pagination>
        </div>-->
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Question from "@/components/Question";
import api from "@/api.js";

export default {
    name: "search",
    components: {
        Question
    },
    data() {
        return {
            questions: [],
            searchString: "",
            tagsArray: [],
            dirty: false
        };
    },
    computed: {
        state() {
            return this.dirty ? this.tagsArray.length < 11 : null;
        }
    },
    watch: {
        tagsArray(newVal, oldVal) {
            this.dirty = true;
        }
    },
    methods: {
        tagValidator(tag) {
            return (
                tag === tag.toLowerCase() && tag.length > 0 && tag.length < 20
            );
        },
        loadQuestions(terms) {
            if(terms === '') {
                api.get(`/questions`)
                    .then(res => {
                        let quess = res.data;
                        this.limitQuestions(quess);
                        this.questions = quess;
                    })
                    .catch(err => {
                        alert('Invalid Search String.')
                        this.questions = [];
                        window.console.log(err);
                    });
            } else {
                api.get(`/questions/search?q=${terms}`)
                    .then(res => {
                        let quess = res.data;
                        this.limitQuestions(quess);
                        this.questions = quess;
                    })
                    .catch(err => {
                        alert('Invalid Search String.')
                        this.questions = [];
                        window.console.log(err);
                    });
            }
        },
        limitQuestions(data) {
            let maxTitleLength = 170;
            let maxTextLength = 550;
            data.forEach(q => {
                if (q.title.length > maxTitleLength)
                    q.title = `${q.title.substring(0, maxTitleLength)}...`;
                if (q.text.length > maxTextLength)
                    q.text = `${q.text.substring(0, maxTextLength)}...`;
            });
        },
        updateQuestion(index, ques) {
            let quesArr = [...this.questions];
            quesArr[index] = ques;
            this.questions = quesArr;
        },
        deleteQuestion(index) {
            this.questions.splice(index, 1);
        },
        search(e) {
            e.preventDefault();
            this.$router.push(`/questions/search?q=${this.searchString}`);
            // this.loadQuestions(this.searchString);
        },
        filterQuestions() {
            this.questions = this.questions.filter(ques => {
                let quesTags = ques.tags.map(t => t.name);
                let temp = this.tagsArray.filter(t => quesTags.includes(t))
                return temp.length == this.tagsArray.length;
            });
        },
        searchTags(e) {
            e.preventDefault();
            this.filterQuestions();
        }
    },
    created() {
        let terms = this.$route.query.q;
        this.loadQuestions(terms);
    }
};
/* eslint-enable no-unused-vars */
</script>

<style scoped>
.wrapper {
    margin-top: 20px;
}

.card {
    margin: 15px 0;
}

.search-btn {
    position: relative;
    left: -12px;
}

.kaafi-center {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.col-12 {
    margin: 10px 0;
}

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 1.5rem;
    }
    .tabs {
        font-size: 0.8rem;
    }
}
</style>