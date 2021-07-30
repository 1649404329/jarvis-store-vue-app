<template>
    <div class="accountAside">
        <el-menu
                :default-active="$route.path"
                router
                active-text-color="rgb(255,130,0)"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                style="min-height: 350px;width:auto;
                height:auto;overflow-x: hidden;border-right: none;
                text-align: left;overflow-y: hidden;">
            <el-menu-item index="">
                <span slot="title" style="font-size: 20px;">个人主页</span>
            </el-menu-item>
            <el-menu-item index="/accountHome">
                <i class="el-icon-document"></i>
                <span slot="title">我的主页</span>
            </el-menu-item>
            <el-menu-item index="/accountFollows">
                <i class="el-icon-setting"></i>
                <span slot="title">我的关注</span>
            </el-menu-item>
            <el-menu-item index="/accountFans">
                <i class="el-icon-setting"></i>
                <span slot="title">我的粉丝</span>
            </el-menu-item>
            <el-menu-item index="3" >
                <i class="el-icon-document"></i>
                <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">我的赞</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">我的博文</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            }
        }
    }
</script>

<style scoped>
    .accountAside {
        padding: 10px;
        box-sizing: border-box;
    }

    .aside-row {
        padding: 5px;
        text-align: center;
        height: auto;
        line-height: normal;
        font-size: 14px;
        box-sizing: border-box;
    }

</style>