<template>
    <div class="new-answer">
        <div v-if="loggedIn">
            <h5>Your Answer</h5>
            <br>
            <b-form-textarea id="textarea" v-model="newAnswer" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
            <br>
            <b-button variant="primary" @click="addAnswer">Post your answer</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addAnswer',
    data() {
        return  {
            newAnswer: '',
            loggedIn: localStorage.getItem('userId') !== null
        }
    },
    methods: {
        addAnswer() {
            let valid = true;
            if(this.newAnswer.length < 5) {
                alert("Answer must be atleast 5 characters long.");
                valid = false;
            }
            if(valid) {
                let ans = { text: this.newAnswer };
                this.$emit('addAnswer', ans);
                this.newAnswer = '';
            }
        }
    }
}
</script>

