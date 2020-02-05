<template>
    <div class="wrapper">
        <b-row>
            <div class="logo-wrapper">
                <b-list-group class="user-box">
                    <div class="h2 mb-0">
                        <b-icon icon="person-fill"></b-icon>
                    </div>
                </b-list-group>
                <p>{{userName}}</p>
            </div>
        </b-row>

        <div>
            <h2><span v-if="myPage">My</span> Questions</h2>
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
            <p v-if="questions.length === 0">No questions by this user yet.</p>
        </div>

        <br />

        <div>
            <h2><span v-if="myPage">My</span> Answers</h2>
            <hr />
            <div class="answer" v-bind:key="answer.id" v-for="(answer, index) in answers">
                <Answer
                    v-bind:answer="answer"
                    @updateAnswer="(ans) => updateAnswer(index, ans)"
                    @deleteAnswer="() => deleteAnswer(index)"
                />
            </div>
            <p v-if="answers.length === 0">No answers by this user yet.</p>
        </div>
    </div>
</template>

<script>
import api from "@/api.js";
import Question from "@/components/Question";
import Answer from "@/components/Answer";

export default {
    components: {
        Question,
        Answer
    },
    data() {
        return {
            userName: 'ZetaOverflow User',
            questions: [],
            answers: [],
            currentUserId: localStorage.getItem("userId"),
            userId: '',
            myPage: false
        };
    },
    methods: {
        updateQuestion(index, ques) {
            let quesArr = [...this.questions];
            quesArr[index] = ques;
            this.questions = quesArr;
        },
        deleteQuestion(index) {
            this.questions.splice(index, 1);
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
        let userId = this.$route.path.split('/').pop();
        this.userId = userId;

        this.myPage = userId === this.currentUserId;

        api.get(`/users/${this.userId}/name`)
            .then(res => this.userName = res.data)
            .catch(err => window.console.log(err));
        
        api.get(`/answers/user/${this.userId}`)
            .then(res => {
                this.answers = res.data;
                window.console.log(this.answers);
            })
            .catch(err => window.console.log(err));

        api.get(`/questions/user/${this.userId}`)
            .then(res => {
                this.questions = res.data;
            })
            .catch(err => window.console.log(err));
    }
};
</script>

<style scoped>
.logo-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}
.user-box {
    border-radius: 50%;
    background: #633da5;
    color: #ffffff;
    padding: 10px;
    margin: 15px;
    width: 60px;
    text-align: center;
}

.logo-wrapper > p {
    font-size: 1.5rem;
}

.card {
    margin: 15px 0;
}
</style>