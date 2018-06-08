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

<script>
import Vue from "vue";
export default Vue.extend({
    props: {

        name: {
            type: String,
            default: ""
        },
        enthusiasmLevel: {
            type: Number,
            default: 1
        }
    },
    computed: {
        helloMessage() {
            return "Hello " + this.name + this.getExclamationMarks(this.enthusiasmLevel);
        }
    },
    methods: {
        getExclamationMarks(numChars) {
            return Array(numChars + 1).join('!');
        },
        onDecrement() {
            this.$emit("onDecrement");
        },

        onIncrement() {
            this.$emit("onIncrement");
        }
    }

})
</script>

<style scoped lang="scss">
.hello {
    text-align: center;
    margin: 20px;
    font-size: 48px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    button {
        margin-left: 25px;
        margin-right: 25px;
        font-size: 40px;
        min-width: 50px;
    }
}

</style>
