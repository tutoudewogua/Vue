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
        MyButton,
        // MB: MyButton,
        // "my-button": MyButton,
    },

    /* 
        template是用字符串的形式在编写模板
            1.这些字符串会在项目运行时, 在浏览器中被编译为js的函数(性能不太好)
            2.在字符串中编写代码, 体验很差

        为了解决这个问题, Vue为我们提供了一种单文件组件(SFC)
            - 单文件组件的格式是vue(vscode需要安装插件 Vue Language Features(Volar))
            - vue文件用来编写单文件组件, vue文件本身并不能被浏览器所识别
                所以它必须要被构建工具打包后, 才可使用
            - 同时vue文件在打包时, 构建工具会直接将template转换为函数,
                无需在浏览器中再去编译, 这样一来性能也会有所提升
    */
    // 视图
    template: `
        <h1>{{message}}</h1>
        <MyButton></MyButton>
    `
}