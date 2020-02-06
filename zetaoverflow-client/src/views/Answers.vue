<template>
    <div>
        <div class="question">
            <Question v-bind:question="question" />
        </div>
        <h4>{{this.rows}} Answers</h4>
        <b-tabs content-class="mt-3" align="right">
            <b-tab @click="sortBy = 'oldest'" title="Oldest"></b-tab>
            <b-tab @click="sortBy = 'latest'" title="Latest"></b-tab>
            <b-tab @click="sortBy = 'votes'" title="Most Voted" active></b-tab>
        </b-tabs>
        <!-- <hr /> -->
        <div class="answers">
            <div class="answer" v-bind:key="answer.id" v-for="(answer, index) in answers">
                <Answer
                    v-bind:answer="answer"
                    @updateAnswer="(ans) => updateAnswer(index, ans)"
                    @deleteAnswer="() => deleteAnswer(index)"
                />
            </div>
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
        <!-- <hr /> -->
        <AddAnswer @addAnswer="addAnswer" />
    </div>
</template>

<script>
import api from "@/api.js";
import Question from "@/components/Question";
import AddAnswer from "@/components/AddAnswer";
import Answer from "@/components/Answer";

export default {
    name: "answers",
    components: {
        Question,
        Answer,
        AddAnswer
    },
    data() {
        return {
            question: {},
            tags: [],
            answers: [],
            rows: 1,
            currentPage: 1,
            perPage: 5,
            sortBy: 'votes'
        };
    },
    watch: {
        currentPage: {
            handler: "loadAnswers",
            immediate: true
        },
        sortBy: {
            handler: "loadAnswers",
            immediate: true
        }
    },
    methods: {
        loadAnswers() {
            let questionId = this.$route.query.questionId;
            api.get(`/questions/${questionId}/answers/page/${this.currentPage-1}?sortBy=${this.sortBy}`)
                .then(res => {
                    window.console.log(res.data);
                    this.answers = res.data.content;
                    this.rows = res.data.totalElements;
                })
                .catch(err => window.console.log(err));
        },
        addAnswer(ans) {
            api.post(`/questions/${this.question.id}/answers`, ans)
                .then(res => this.answers.push(res.data))
                .catch(err => window.console.log(err));
        },
        updateAnswer(index, ans) {
            api.put(`/answers/${this.answers[index].id}`, ans)
                .then(res => {
                    let arr = [...this.answers]
                    arr[index] = res.data;
                    this.answers = arr;
                })
                .catch(err => window.console.log(err));
        },
        deleteAnswer(index) {
            /* eslint-disable no-unused-vars */
            api.delete(`/answers/${this.answers[index].id}`)
                .then(res => {this.answers.splice(index, 1)})
                .catch(err => window.console.log(err));
            /* eslint-enable no-unused-vars */
        }
    },
    created() {
        let questionId = this.$route.query.questionId;
        if(!questionId)
            this.$router.push('/');
        api.get(`/questions/${questionId}`)
            .then(res => (this.question = res.data))
            .catch(err => window.console.log(err));
        this.loadAnswers();
    }
};
</script>

<style scoped>
.question {
    margin: 20px;
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

@media only screen and (max-width: 768px) {
    h4 {
        font-size: 1.3rem;
    }
    .tabs {
        font-size: 0.8rem;
    }
}
</style>