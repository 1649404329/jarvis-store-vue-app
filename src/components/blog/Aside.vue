<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <el-menu-item index="2">
                <i class="el-icon-star-off"></i>
                <span slot="title">技术文章</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-edit"></i>
                <span slot="title">细节技巧</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-view"></i>
                <span slot="title">旅行记录</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>今日排行榜</span>
                </template>
                <el-menu-item-group title="[ 出行 分享 ]">
                    <el-menu-item index="1-3">旅行记录</el-menu-item>
                    <el-menu-item index="1-3">摄影美图</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group index="1-4">
                    <template slot="title">[ 今日排行榜 ]</template>
                    <el-menu-item index="1-4-1">创作排行</el-menu-item>
                    <el-menu-item index="1-4-1">电影排行</el-menu-item>
                    <el-menu-item index="1-4-1">音乐排行</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>