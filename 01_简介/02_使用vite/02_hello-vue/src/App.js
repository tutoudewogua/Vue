// 引入子组件
import MyButton from "./components/MyButton.js";

// 创建根组件
export default {
    // 模型
    data() {
        return {
            message: "我爱Vue",
        }
    },

    // 在组件中注册子组件
    components: {
        // MB: MyButton,
        "my-button": MyButton,
        // MyButton
    },

    // 视图
    // template: `
    //     <h1>{{message}}</h1>
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    // `
}