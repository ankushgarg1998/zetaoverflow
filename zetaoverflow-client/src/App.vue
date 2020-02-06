<template>
    <div style="position: relative;">
        <div id="app">
            <Header />
            <b-container>
                <router-view :key="$route.fullPath" />
            </b-container>
        </div>
        <footer>
            v1.0 | Made by Ankush, Samarth and Vaibhav for
            <strong>Zeta</strong> | 2020
        </footer>
    </div>
</template>

<script>
import Header from "./components/Header";

export default {
    name: "app",
    components: {
        Header
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", "Muli", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: relative;
    padding-bottom: 150px;
    min-height: 100vh;
}

footer {
    text-align: center;
    padding: 5px 0;
    background: #633da5;
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
}

pre {
    background-color: #eff0f1;
    padding: 12px 8px;
    border-radius: 3px;
}

@media only screen and (max-width: 768px) {
    footer {
        font-size: 0.8rem;
    }
}
</style>
