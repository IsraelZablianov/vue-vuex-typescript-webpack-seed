
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types";
import "./hello-word-tsx.scss";

@Component({
})
export default class HelloWord extends Vue {

    @Prop({ type: String, default: "" })
    name: string;

    @Prop({ type: Number, default: 1 })
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

    public render(h: CreateElement): VNode {
            return ( 
            <div class="hello">
                <div class="greeting">
                    {this.helloMessage}
                </div>
                <div>
                    <button onClick={() => this.onDecrement()}>-</button>
                    <button onClick={() => this.onIncrement()}>+</button>
                </div>
            </div>
        );
    }
}
