<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand router-link to="/">
                <strong>ZetaOverflow</strong>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item router-link to="/questions">All questions</b-nav-item>
                    <b-nav-item v-if="loggedIn" router-link to="/questions/add">Ask question</b-nav-item>
                    <b-nav-item router-link to="/questions/search?q=">Find question</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit="search">
                        <b-input-group>
                            <b-form-input
                                v-model="searchString"
                                size="sm"
                                class
                                placeholder="Search"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button type="submit" variant="light" size="sm">
                                    <b-icon icon="search"></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-nav-form>
                    
                    <b-nav-item></b-nav-item>
                    <b-nav-item v-if="!loggedIn" router-link to="/login">Login</b-nav-item>
                    <b-nav-item v-if="!loggedIn" router-link to="/signup">Signup</b-nav-item>
                    <b-nav-item v-if="loggedIn" router-link :to="`/profile/${currentUserId}`">My Profile</b-nav-item>
                    <b-nav-item v-if="loggedIn" @click="logout">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
// import api from '@/api.js'

export default {
    name: "nav-header",
    data() {
        return {
            loggedIn: localStorage.getItem("userId") !== null,
            currentUserId: localStorage.getItem("userId"),
            searchString: ""
        };
    },
    methods: {
        logout() {
            this.loggedIn = false;
            localStorage.clear();
            // api.post('/logout', {})
            //     .then(res => {s
            //         window.console.log(res);
            //     })
            //     .catch(err => window.console.log(err));
            window.location.pathname = "/";
        },
        search(e) {
            e.preventDefault();
            let q = this.searchString;
            this.$router.push(`/questions/search?q=${q}`);
        }
    }
};
</script>

<style scoped>
nav {
    box-shadow: 0px 0 5px 0px #000;
}
</style>