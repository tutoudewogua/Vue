<script setup>
// 引入ref方法, 引入computed方法
import { ref, computed } from "vue";

// 定义变量
const msg = ref("Hello Vue");
// obj.value.name
const obj = ref({
	name: "孙悟空",
	age: 18,
}); // { value: obj }
// obj2.name.value
const obj2 = {
	name: ref("孙悟空"), // { value: "孙悟空" }
	age: ref(18), // { value: 18 }
}
// 将ref对象解构为顶层对象
const { name, age } = obj2;

// 定义方法
const changeMsg = () => {
	// 修改ref对象时必须通过value
	msg.value = "你好 Vue";
}

// 定义计算属性
// computed 用来生成计算属性
const newMsg = computed(() => {
	// 函数的返回值就是计算属性的值
	return msg.value + ", 秃头的窝瓜";
});
</script>

<template>
	<!-- ref对象在模板中可以自动解包(要求ref对象必须是顶层对象) -->
	<h1>{{ msg }}</h1>
	<h1>{{ newMsg }}</h1>
	<h2>{{ obj.name }}</h2>
	<!-- name不是顶层的响应式对象, 所以不能自动解包 -->
	<!-- <h2>{{ obj2.name.value }}</h2> -->
	<h2>{{ name }}</h2>
	<hr>
	<h2>{{ obj.age + 1 }}</h2>
	<h2>{{ age + 1 }}</h2>
	<button @click="changeMsg">点我一下</button>
</template>
