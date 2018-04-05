import { HelloState } from "./hello";
import { Store as VuexStore } from "vuex";

export interface GlobalState {
    hello: HelloState;
}

export type Store = VuexStore<GlobalState>;

declare module "vue/types/vue" {
    
    export interface ComponentOptions {
        $store: Store;
    }
}
