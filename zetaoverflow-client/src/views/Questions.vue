<template>
    <div class="questions">
        <h1>All Questions</h1>
        <b-tabs content-class="mt-3" align="right">
            <b-tab @click="sortBy = 'oldest'" title="Oldest" active></b-tab>
            <b-tab @click="sortBy = 'latest'" title="Latest"></b-tab>
            <b-tab @click="sortBy = 'votes'" title="Most Voted"></b-tab>
        </b-tabs>
        <!-- <hr /> -->
        <div v-bind:key="question.id" v-for="(question, index) in questions">
            <b-card>
                <Question
                    v-bind:question="question"
                    @updateQuestion="(ques) => updateQuestion(index, ques)"
                    @deleteQuestion="() => deleteQuestion(index)"
                />
            </b-card>
        </div>
        <!-- <hr /> -->
        <div class="mt-3">
            <b-pagination
                v-if="rows > 5"
                v-model="currentPage"
                :per-page="perPage"
                :total-rows="rows"
                align="center"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
import Question from "@/components/Question";
import api from "@/api.js";

export default {
    name: "questions",
    components: {
        Question
    },
    data() {
        return {
            questions: [],
            rows: 1,
            currentPage: 1,
            perPage: 5,
            sortBy: "oldest"
        };
    },
    watch: {
        currentPage: {
            handler: "loadQuestions",
            immediate: true
        },
        sortBy: {
            handler: "loadQuestions",
            immediate: true
        }
    },
    methods: {
        loadQuestions() {
            api.get(
                `/questions/page/${this.currentPage - 1}?sortBy=${this.sortBy}`
            )
                .then(res => {
                    let quess = res.data.content;
                    this.limitQuestions(quess);
                    this.questions = quess;
                    this.rows = res.data.totalElements;
                })
                .catch(err => window.console.log(err));
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
        }
    },
    created() {
        let tag = this.$route.query.tag;
        if (tag) {
            api.get(`tags/${tag}/questions`)
                .then(res => {
                    this.limitQuestions(res.data);
                    this.questions = res.data;
                })
                .catch(err => window.console.log(err));
        } else {
            this.loadQuestions();
        }
    }
};
</script>

<style scoped>
.questions {
    margin-top: 20px;
}

.card {
    margin: 15px 0;
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