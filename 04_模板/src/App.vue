<script setup>
// 引入ref方法
import { ref } from "vue";

// 定义变量
// 图片路径
const imgPath = ref("/images/messi.png");
// 属性
const attrs = {
	id: "box1",
	class: "box1"
}
// 布尔值属性
const isDisabled = "";
// 属性名
const attrName = "title";
// 属性值
const attrValue = "这是一个title属性";

// 定义方法
const changeImg = () => {
	// 改变路径的值
	imgPath.value = "/images/neymar.png"
}
</script>

<template>
	<!-- 
		当我们需要为标签动态设置属性时, 需要使用v-bind指令
			v-bind可以简写为 :
		当我们为一个布尔值设置属性时,
			如果值为true, 则元素上有该属性(转换后为true, 也算true)
			如果值为false, 则元素上没有该属性(转换后为false, 也算false)
			特殊情况: ""空串在这里会被当成真值
	-->
	<!-- <button @click="changeImg">切换图片</button> -->
	<img :[attrName] = attrValue :src="imgPath" alt="梅西">

	<div :="attrs"></div>	

	<input type="text" :disabled="isDisabled">
</template>
