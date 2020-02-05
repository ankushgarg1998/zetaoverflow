<template>
    <div class="home">
        <div>
            <p class="heading">Welcome to ZetaOverflow</p>
            <b-row>
                <b-col class="box-wrapper">
                    <div class="div-box">
                        <h1>{{ userCount }}</h1>
                        <p>Users</p>
                    </div>
                </b-col>

                <b-col class="box-wrapper">
                    <div class="div-box">
                        <h1>{{ questionCount }}</h1>
                        <p>Questions</p>
                    </div>
                </b-col>

                <b-col class="box-wrapper">
                    <div class="div-box">
                        <h1>{{ answerCount }}</h1>
                        <p>Answers</p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import api from "@/api.js";

export default {
    data() {
        return {
            loggedIn: localStorage.getItem("userId") !== null,
            userCount: 0,
            questionCount: 0,
            answerCount: 0
        };
    },
    created() {
        //get the question count
        api.get("/questions/count")
            .then(res => (this.questionCount = res.data))
            .catch(err => window.console.log(err));

        //get the users count
        api.get("/users/count")
            .then(res => (this.userCount = res.data))
            .catch(err => window.console.log(err));

        //get the answers count
        api.get("/answers/count")
            .then(res => (this.answerCount = res.data))
            .catch(err => window.console.log(err));
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.heading {
    text-align: center;
    font-size: 8vh;
    margin: 40px 0;
}

.div-box {
    text-align: center;
    margin: 0 20px;
    padding: 30px 30px;
    background: #633da5;
    color: #fff;
    border: 5px solid #633da5;
    /* box-shadow: 0px 2px 7px 1px #633DA5; */
    border-radius: 5px;
    transform: scale(0.8);

    transition: all 0.3s linear;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    -o-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    cursor: pointer;
}

.div-box:hover {
    transform: scale(0.8) translateY(-10px);
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.div-box h1 {
    font-size: 12vh;
    /* font-weight: 100; */
}
.div-box p {
    font-size: 5vh;
}

.dashboard {
    background: #633da5;
    color: #fff;
}

@media only screen and (max-width: 768px) {
    .heading {
        font-size: 6vh;
    }

    .div-box h1 {
        font-size: 8vh;
    }
    
    .div-box p {
        font-size: 3vh;
    }
}
</style>