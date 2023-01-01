<script setup>
// 引入reactive方法
import { reactive } from 'vue';

const msg = "我爱vue";
const count = 0;
const stu = reactive({
    name: "孙悟空"
});

function fn() {
    alert("秃头的窝瓜")
}
</script>

<template>
    <h1>组合式的API</h1>
    <h2>{{ msg }} -- {{ count }}</h2>
    <h3>{{ stu.name }}</h3>
</template>