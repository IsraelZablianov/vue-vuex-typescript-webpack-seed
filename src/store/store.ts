import * as Vuex from "vuex";
import Vue from "vue";
import { helloModule } from "./hello";
import { GlobalState } from "./state-types";

Vue.use(Vuex);

const store = new Vuex.Store<GlobalState>({
    modules: {
        helloModule
    },
});

export default store;