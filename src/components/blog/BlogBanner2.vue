<template>
    <div>
        <el-menu
                :default-active="$route.path"
                router
                active-text-color="rgb(255,130,0)"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                style="min-height: 350px;width:auto;height:auto;overflow-x: hidden;text-align: left;overflow-y: hidden;">
            <el-menu-item index="">
                <span slot="title" style="font-size: 20px;">首页</span>
            </el-menu-item>
            <el-menu-item index="/topicGroup">
                <i class="el-icon-document"></i>
                <span slot="title">最新热点</span>
            </el-menu-item>
            <el-menu-item index="/topicGroupAllFocusOn">
                <i class="el-icon-setting"></i>
                <span slot="title">全部关注</span>
            </el-menu-item>
            <el-menu-item index="3" >
                <i class="el-icon-document"></i>
                <span slot="title">赞和收藏</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">我的创作</span>
            </el-menu-item>
            <!--<template slot="title"><el-divider></el-divider></template>-->
            <el-menu-item-group>
                <el-menu-item index="1" style="border-top: 1px solid rgb(245,245,245)">
                    <span slot="title" style="font-size: 16px;">自定义分组</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">投票</span>
                </el-menu-item>
                <el-menu-item index="/blogHome">
                    <i class="el-icon-setting"></i>
                    <span slot="title">博客区</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">热搜榜</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">旅游 生活</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">电影 小说</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">运动 健身</span>
                </el-menu-item>
            </el-menu-item-group>
            <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span>娱乐</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                    <!--<template slot="title">热门视频</template>-->
                    <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="分组2">-->
                    <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--</el-submenu>-->
            <!--</el-submenu>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "BlogBanner2",
        data() {
            return {
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            };
        },
    }
</script>

<style scoped>
    .el-menu-item{
        height: 50px;
    }
</style>