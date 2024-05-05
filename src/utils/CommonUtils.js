// 弹窗工具类
import Vue from "vue";

export default class CommonUtils {
    static JsDialog(options, propsData = {}) {
        const div = document.createElement('div');
        const el = document.createElement('div');
        div.appendChild(el);
        document.body.appendChild(div);
        // vue.extend 生成一个Vue子类的构造函数
        const dialogConstructor = Vue.extend(options)
        // 通过构造函数 生成vue组件实例，,通过propsData传递的参数在组件中可以通过props接收到
        let instance = new dialogConstructor({ propsData })
        instance.show = () => {
            instance.$mount(el)
        }
        instance.destroy = () => {
            if (instance) {
                instance.$destroy();
                instance = null
                div.parentNode && div.parentNode.removeChild(div);
            }
        }
        // vue组件内置的发布订阅函数，once仅监听一次，在dialog组件中，通过emit可以触发此事件   
        instance.$once('hide', () => {
            if (instance) {
                instance.$destroy();
                instance = null
                div.parentNode && div.parentNode.removeChild(div);
            }
        })
        return instance
    }
}
