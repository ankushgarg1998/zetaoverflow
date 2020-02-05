<template>
    <div>
        <b-row>
            <b-col sm="6" offset-sm="3">
                <b-jumbotron class="header-body">
                    <template v-slot:header>SignUp</template>
                    <form class="form-body" @submit="validate">
                        <label>Username:</label>
                        <b-form-input v-model="Username" placeholder="Enter your Username"></b-form-input>
                        <br />
                        <label>Email:</label>
                        <b-form-input v-model="Email" type="email" placeholder="Enter your Email"></b-form-input>
                        <br />
                        <label>Password:</label>
                        <b-form-input
                            v-model="Password"
                            type="password"
                            placeholder="Enter your Password"
                        ></b-form-input>
                        <br />
                        <label>Re-Enter Password:</label>
                        <b-form-input
                            v-model="ConformPassword"
                            type="password"
                            placeholder="Re-Enter your Password"
                        ></b-form-input>
                        <br />
                        <div class="buttons">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-light">Reset</button>
                            <p></p>
                            <a href="/login">Already have an account?</a>
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
    name: "signup",
    data() {
        return {
            Username: "",
            Email: "",
            Password: "",
            ConformPassword: ""
        };
    },
    methods: {
        validate(e) {
            e.preventDefault();
            let valid = true;

            if (
                this.Password == "" ||
                this.Username == "" ||
                this.Email == ""
            ) {
                alert("Invalid details!");
                valid = false;
            }

            if (this.Password != this.ConformPassword) {
                alert("Password does not match! :(");
                valid = false;
            }

            // password validation
            if(this.Password.length < 4) {
                alert("Password must be atleast 4 characters long.");
                valid = false;
            }

            /*
            if(valid == true){
                //regex for minimum 1 Uppercase, 1 Lowercase, 1 number, 1 special character and mimimum 6 characters
                let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$");
                let regexTest = regex.test(this.Password);
                if(regexTest == false){
                    alert("Password must contain 1 Uppercase, 1 Lowercase, 1 number, 1 special character and minimum 6 characters");
                    valid = false;
                }
            }*/

            //Code to push data into database
            if (valid == true) {
                let newUser = {
                    username: this.Username,
                    email: this.Email,
                    password: this.Password
                };
                /* eslint-disable no-unused-vars */
                api.post("/users", newUser)
                    .then(res => {
                        this.$router.push("/login");
                    })
                    .catch(err => {
                        alert(
                            "An account with this username or email already exists. Please Login."
                        );
                        window.console.log(err.response);
                    });
                /* eslint-enable no-unused-vars */
            }
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
</style>