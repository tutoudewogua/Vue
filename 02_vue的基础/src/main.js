// 引入vue核心文件
import { createApp } from 'vue';
// 引入App根组件
import App from './App.vue';

/* 
    App.vue是根组件
        - createApp(App): 将根组件关联到应用上
            - 会返回一个应用实例
        - app.mount("#app"): 将应用挂载到页面中
            - 会返回一个根组件的实例, 组件的实例通常可以命名为vm
            - 组件实例是一个Proxy对象(代理对象)

*/
// 将根组件关联到应用上
const app = createApp(App);

// 将应用挂载到页面中
const vm = app.mount("#app");

// 我们在使用esm规范编写的变量处理闭包之中, 外部无法访问
// 将vm设置为全局变量, 使其可以在全局被访问
window.vm = vm;

// createApp(App).mount('#app');
