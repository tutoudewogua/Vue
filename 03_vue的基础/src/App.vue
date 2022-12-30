<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<template>
    <button @click="count++">点我一下</button>
    <h1>点击次数: {{ count }}</h1>
</template>