<template>
    <div class="app">
        <div class="app-header">
            <img src="../../assets/images/logo-vue.png" class="app-logo" alt="logo" />
            <h2>Welcome to Vue</h2>
        </div>
        <p class="app-intro">
            To get started, edit
            <code>src/components/app/app.vue</code> and save to reload.
        </p>
        <hello-word name="word" 
            :enthusiasmLevel="enthusiasmLevel"
            @onDecrement="onDecrement"
            @onIncrement="onIncrement"/>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import helloAccessor from "../../store/hello";
import HelloWord from "../hello-word/hello-word.vue";
// import HelloWord from "../hello-word/hello-word-tsx";
// import HelloWord from "../hello-word/hello-word-extend.vue";

@Component({
    components: {
        HelloWord
    }
})
export default class App extends Vue {
    public get enthusiasmLevel(): number {
        return helloAccessor.enthusiasmLevel(this.$store);
    }

    public onIncrement(): void {
        helloAccessor.increment(this.$store, 1);
    }

    public onDecrement(): void {
        if(this.enthusiasmLevel <= 1) {
            return;
        }

        helloAccessor.decrement(this.$store, 1);
    }
}
</script>

<style scoped lang="scss">
.app {
    text-align: center;
}

.app-logo {
    height: 80px;
}

.app-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
}

.app-intro {
    font-size: large;
}
</style>
