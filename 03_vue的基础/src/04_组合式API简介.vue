<script>
// 引入reactive方法
import { reactive } from 'vue';

export default {
    // setup是一个钩子函数, 可以通过这个函数向外部暴露组件的配置
    setup() {
        /* 
            在组合式api中直接声明的变量, 就是一个普通的变量, 不是响应式属性,
                修改这些属性时, 不会在视图中产生效果
        */
        // 定义变量
        let msg = "秃头的窝瓜";
        let count = 0;

        // 可以通过reactive()来创建一个响应式的对象
        // 通过reactive()创建的响应式对象是深层响应式对象
        const stu = reactive({
            name: "孙悟空",
            age: 18,
            gender: "男",
        });

        function changeAge() {
            // 使用组合式API声明的变量使用时不用加this
            stu.age = 20;
        }

        // 在setup中可以通过返回值来指定哪些内容要暴露给外部
        // 暴露后的内容, 可以在模板中直接使用
        return {
            msg,
            count,
            stu,
            changeAge,
        }
    }
}
</script>

<template>
    <h1>演示组合式API</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ count }}</h3>
    <button @click="changeAge">点我一下</button>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
</template>