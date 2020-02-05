<template>
    <div class="new-question">
        <h3>Add Question</h3>
        <br />
        <b-form-input v-model="newQuestion.title" placeholder="Question Title" maxlength="200"></b-form-input>
        <br />
        <b-form-textarea
            id="textarea"
            v-model="newQuestion.text"
            placeholder="Explain your question..."
            rows="8"
            max-rows="8"
        ></b-form-textarea>
        <br />
        <b-form-group :state="state">
            <b-form-tags
                v-model="tagsArray"
                tag-variant="primary"
                placeholder="Enter space seperated tags..."
                :state="state"
                :tag-validator="tagValidator"
                separator=" "
            ></b-form-tags>
            <template v-slot:invalid-feedback>You must provide no more than 10 tags</template>
            <template v-slot:description>
                Tags must less than 20 characters and lowercase.
            </template>
        </b-form-group>
        <br />
        <br />
        <b-button variant="primary" @click="addQuestion">Post your question</b-button>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import api from "@/api.js";

export default {
    name: "addQuestion",
    data() {
        return {
            newQuestion: {
                title: "",
                text: ""
            },
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
        addQuestion() {
            let valid = true;
            if(this.newQuestion.title.length < 5) {
                alert("Title of the question must be atleast 5 characters long.");
                valid = false;
            }
            if(valid) {
                api.post(`/questions`, this.newQuestion)
                .then(res => {
                    api.post(`/questions/${res.data.id}/tags`, this.tagsArray)
                        .then(res => this.$router.push("/questions"))
                        .catch(err => window.console.log(err));
                })
                .catch(err => window.console.log(err));
            }
        }
    }
};
/* eslint-enable no-unused-vars */
</script>

<style scoped>
.new-question {
    margin-top: 20px;
}
</style>