import Vue from "vue";
import Vuex from "vuex";
import App from "./components/app/app.vue";
import store from "./store";
import "./index.scss";

new Vue({
    el: "#app",
    store,
    template: `
    <App/>
    `,
    components: {
        App
    }
});
