<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" :close-on-click-modal="false"
        :close-on-press-escape="false" @close="handleCancel" :append-to-body="true" :custom-class="customClass">
        <slot></slot>
        <span slot="footer" class="dialog-footer">
            <el-button v-if="hasConfirm" size="mini" @click="handleCancel">取 消</el-button>
            <el-button v-if="hasCancel" size="mini" type="primary" @click="handleConfirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    name: 'ElEasyDialog',
    data() {
        return {
            dialogVisible: true,

        }
    },
    props: ['hasConfirm', 'hasCancel', 'title', 'customClass'],
    methods: {
        handleCancel() {
            this.$emit('handleCancel')
        },
        handleConfirm() {
            this.$emit('handleConfirm')
        }
    }
};
</script>
