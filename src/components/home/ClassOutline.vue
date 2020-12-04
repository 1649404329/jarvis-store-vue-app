<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="width:auto;height:auto;overflow-x: hidden;text-align: left;">
            <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span>美食 <small class="text-color-secondary">火锅 面包甜点</small></span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">休闲娱乐 <small class="text-color-secondary">ktv</small></span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">周边游 <small class="text-color-secondary">景点</small></span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">电影演出赛事 <small class="text-color-secondary">电影院</small></span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">购物 <small class="text-color-secondary">小店看看 </small></span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">运动健身 <small class="text-color-secondary">健身房</small></span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span slot="title">音乐 <small class="text-color-secondary">网易云 酷狗</small></span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "ClassOutline",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .text-color-secondary{
        color: #909399;
    }
</style>