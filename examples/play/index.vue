<template>
    <div style="margin: 20px;">
        <el-button @click="handleClick">打开弹窗</el-button>

    </div>
</template>

<script>
import El from 'main/index.js'
import SettingDialog from './SettindDialog.vue'
export default {
    data() {
        return {
            input: 'Hello Element UI!',
            title: '测试弹窗'
        };
    },

    methods: {
        handleClick() {
            console.log(El)
            El.CommonUtils.JsDialog(SettingDialog, {
                title: '123',
                onConfirm: () => {
                    console.log(777)
                }
            }).show()
        },

    }
};
</script>
