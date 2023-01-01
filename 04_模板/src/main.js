// 引入createApp方法
import { createApp } from 'vue';
// 引入根组件
import App from './App.vue';

// 创建应用实例
const app = createApp(App);

// 通过app对象向vue中添加一些全局变量
// app.config.globalProperties.hello = "你好, 我是全局的属性";
// app.config.globalProperties.alert = alert.bind(this);

// 将应用实例挂载到页面中
app.mount('#app');
