<template>
    <div class="hello">
        <div class="greeting">
            {{helloMessage}}
        </div>
        <div>
            <button @click="onDecrement">-</button>
            <button @click="onIncrement">+</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
})
export default class HelloWord extends Vue { 

    @Prop({type: String, default: ""})
    name: string;

    @Prop({type: Number, default: 1 })
    enthusiasmLevel: number;

    public get helloMessage(): string {
        return "Hello " + this.name + this.getExclamationMarks(this.enthusiasmLevel);
    }

    public getExclamationMarks(numChars: number): string {
        return Array(numChars + 1).join('!');
    }

    public onDecrement() {
        this.$emit("onDecrement");
    }

    public onIncrement() {
        this.$emit("onIncrement");
    }
}
</script>

<style scoped lang="scss">
.hello {
    text-align: center;
    margin: 20px;
    font-size: 48px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  
.hello {
    button {
        margin-left: 25px;
        margin-right: 25px;
        font-size: 40px;
        min-width: 50px;
    }
}
</style>
