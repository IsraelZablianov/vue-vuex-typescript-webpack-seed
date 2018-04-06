# Vue Vuex TypeScript Webpack seed  

This seed project includes some of the 'hot' and latests web technologies such as [TypeScript](https://www.typescriptlang.org/), [Vue](https://vuejs.org), [Vuex](https://vuex.vuejs.org/en/),[Vuex-Typescript](https://github.com/istrib/vuex-typescript), [webpack](https://webpack.js.org/), [SASS](https://sass-lang.com/) and more, all working together beautifully.

This project is simple enough to understand with examples for every needed part e.g. hello component with typescript and property decorators, hello store with `Vuex` and `Vuex-Typescript`.

# Getting Started

Let's run some commands.

```sh
npm install // or yarn install
npm run build
npm start
```

In this point you should have zero errors ( if you do, please open an issue or contact me for help )
And you can start coding.


For readable and maintainable code, please save the following structure
```txt
src/
├─ components/
|  └─ specificComponentFolder
└─ store/
   └─ specificModuleStateFolder/
```

The project is configured with webpack, and webpack-dev-server with hot reloading.<br/>
So all you need to do is save the changes and the page will refresh automatically


# Using decorators to define a component

This seed project contains example of components, defined using [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html), [vue-class-component](https://github.com/vuejs/vue-class-component) and [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)


```ts
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class HelloDecorator extends Vue {
    @Prop(type: String, default: "")
    name: string;

    @Prop()
    initialEnthusiasm: number;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.enthusiasm++;
    }

    decrement() {
        this.enthusiasm--;
    }
    
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
```

Instead of using `Vue.extend` to define our component, we create a class extending `Vue` and decorate it using the `@Component` decorator from the `vue-class-component` package (which was re-exported from the `vue-property-decorator` package).

Properties are defined by prefixing instance variables with the `@Prop()` decorator from the `vue-property-decorator` package.

Regular instance variables, such as `enthusiasm` in our example, are automatically made available for data binding to the template, just as if they had been defined in the `data` field.
Note that all variables must be set to a value other than `undefined` for the binding to work.

Similarly, methods such as `increment` are treated as if they had been written in the `methods` field, and are automatically made available for the template.

Finally, computed properties like `exclamationMarks` are simply written as `get` accessors.

This seed project is based on Microsoft-TypeScript-Vue-Starter