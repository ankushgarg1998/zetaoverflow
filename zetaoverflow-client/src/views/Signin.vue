<template>
    <div>
        <b-row>
            <b-col sm="6" offset-sm="3">
                <b-jumbotron class="header-body">
                    <template v-slot:header>Login</template>
                    <form class="form-body" @submit="validate">
                        <label>Username:</label>
                        <b-form-input v-model="Username" placeholder="Enter your Username" value></b-form-input>
                        <br />
                        <label>Password:</label>

                        <b-form-input
                            v-model="Password"
                            :type="(Eye==true) ? 'password' : 'text'"
                            placeholder="Enter your Password"
                            value
                        ></b-form-input>
                        <div class="h3 mb-1 eye-button">
                            <b-icon
                                v-on:click="toggleEye"
                                :icon="(Eye==false) ? 'eye-fill' : 'eye-slash'"
                            ></b-icon>
                        </div>
                        <br />
                        <div class="buttons">
                            <button type="submit" class="btn btn-primary">LogIn</button>
                            <button type="reset" class="btn btn-light">Reset</button>
                            <p></p>
                            <a href="/signup">Create an account</a>
                        </div>
                    </form>
                </b-jumbotron>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import api from "@/api.js";
export default {
    name: "signin",
    data() {
        return {
            Username: "",
            Password: "",
            Eye: true,
            User: ""
        };
    },
    methods: {
        validate(e) {
            e.preventDefault();
            let valid = true;
            if (this.Username == "" || this.Password == "") {
                alert("Invalid Details!");
                valid = false;
            }
            if (valid) {
                let userobj = {
                    username: this.Username,
                    password: this.Password
                };
                this.login(userobj);
            }
        },
        toggleEye() {
            this.Eye = !this.Eye;
        },
        login(userObj) {
            api.post(`/login`, userObj)
                .then(res => {
                    let auth = res.headers.authorization;
                    localStorage.setItem("authorization", auth);
                    let bleh = auth.split(".")[1];
                    let obj = JSON.parse(atob(bleh));
                    window.console.log(obj);
                    localStorage.setItem("username", obj.sub);
                    localStorage.setItem("userId", obj.userId);
                    window.location.pathname = '/questions';
                })
                .catch(err => {
                    alert(`Incorrect credentials.`);
                    window.console.log("lol", err);
                });
        }
    }
};
</script>

<style scoped>
.buttons {
    text-align: center;
}
.btn {
    margin: 5px;
}
.header-body {
    margin-top: 50px;
    text-align: center;
}
.form-body {
    text-align: left;
}
.eye-button {
    margin-top: -34px;
    float: right;
    margin-right: 10px;
    color: #aaa;
}
.b-icon {
    cursor: pointer;
}
</style>