import { ActionContext, Store } from "vuex";
import { getStoreAccessors } from "vuex-typescript";
import { GlobalState } from "../state-types";

export interface HelloState {
    enthusiasmLevel: number;
}

type HelloContext = ActionContext<HelloState, GlobalState>;

export const helloModule = {
    state: {
       enthusiasmLevel: 1
    },

    getters: {
        getEnthusiasmLevel(state: HelloState) {
            return state.enthusiasmLevel;
        },
    },

    mutations: {
        increment(state: HelloState, amount: number) {
            state.enthusiasmLevel += amount;
        },

        decrement(state: HelloState, amount: number) {
            state.enthusiasmLevel -= amount;
        }
    },

    actions: {
    },
};

const { commit, read, dispatch } = getStoreAccessors<HelloState, GlobalState>("");

const getters = helloModule.getters;

const helloAccessor = {
    enthusiasmLevel: read(helloModule.getters.getEnthusiasmLevel),
    increment: commit(helloModule.mutations.increment), 
    decrement: commit(helloModule.mutations.decrement) 
}

export default helloAccessor;