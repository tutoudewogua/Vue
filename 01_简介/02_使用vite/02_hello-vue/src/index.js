// 引入vue
import { createApp } from "vue/dist/vue.esm-bundler.js";
// 引入App组件
import App from "./App.js";

// 创建应用并挂载
// mount()的返回值是根组件的实例
const vm = createApp(App).mount("#root");