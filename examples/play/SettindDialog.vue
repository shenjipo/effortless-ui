<template>

    <el-easy-dialog :title="title" :hasConfirm="true" :hasCancel="true" @handleConfirm="handleConfirm"
        @handleCancel="handleCancel">

        <div>123</div>
    </el-easy-dialog>

</template>

<script>


export default {
    name:'SettingDialog',
    data() {
        return {
          
        };
    },
    props:['title','onConfirm'],
    methods:{
        handleConfirm(){
            this.onConfirm()
        },
        handleCancel(){
            this.$emit('hide')
        }
    }

};
</script>
