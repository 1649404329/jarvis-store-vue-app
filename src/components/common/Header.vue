<template>
    <div>
        <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 text-color="rgb(57,77,97)" active-text-color="rgb(91,137,230)">
            <el-menu-item index="/home" style="border-bottom: 2px solid #FFF; color: rgb(0,0,0);">
                <!--<el-avatar :size="50">JARVIS</el-avatar>-->
                <el-avatar :src="logoUrl" :size="40"></el-avatar>
                <b> 饭团</b><br>
            </el-menu-item>

            <el-menu-item index="/home">广场</el-menu-item>

            <el-menu-item index="/goodsHome">我的小店</el-menu-item>

            <el-submenu index="3" disabled>
                <template slot="title">今日推荐</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-submenu index="3-4">
                    <template slot="title">专属博客</template>
                    <el-menu-item index="3-4-1">选项1</el-menu-item>
                    <el-menu-item index="3-4-2">选项2</el-menu-item>
                    <el-menu-item index="3-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-menu-item index="/blogHome">写点啥</el-menu-item>

            <el-menu-item index="6" disabled>交易中心</el-menu-item>

            <!--<el-menu-item index="6"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
            <el-menu-item index="/accountHome">账号管理</el-menu-item>

            <el-submenu index="8" style="float: right;">
                <template slot="title">
                    <el-avatar :size="30" :src="avatarUrl"></el-avatar>
                    立忠
                </template>
                <el-menu-item index="8-1">已绑定手机号</el-menu-item>
                <el-menu-item index="8-2">账号信息</el-menu-item>
                <el-menu-item index="/login">退出登录</el-menu-item>
            </el-submenu>

            <el-menu-item index="5" disabled style="float: right;color: rgb(255,78,85)">充值</el-menu-item>

            <el-menu-item index="5" style="float: right;">
                <i class="el-icon-message"></i>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String,
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                // logoUrl: require('@/assets/images/JarvisLogo.jpg'),
                logoUrl: require('@/assets/images/jarvisLogo2.png'),
                // avatarUrl: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },


    }
</script>

<style scoped>

</style>