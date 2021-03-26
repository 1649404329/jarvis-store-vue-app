<template>
    <div class="panelTitle">
        <div class="title">
            <span class="title-main">{{ msg }}</span>
            <span v-if="showAllBtn" class="title-small">全部<i class="el-icon-arrow-right"></i></span>
        </div>
    </div>
</template>

<script>
    // 每个面板的标题公共组件
    export default {
        name: "PanelTitle",
        props: {
            msg: String,
            showAllBtn: Boolean,
        }
    }
</script>

<style scoped>
    .title {
        border-left: 6px solid dodgerblue;
        text-align: left;
        padding-left: 4px;
        margin-left: 10px;
        margin-bottom: 5px;
    }

    .title-main {
        line-height: 32px;
        font-size: 16px;
        font-weight: bold;
    }

    .title-small {
        line-height: 32px;
        font-size: 14px;
        float: right;
    }

    item {
        margin-top: 10px;
        margin-right: 40px;
        height: 20px;
        width: 40px;
    }
</style>