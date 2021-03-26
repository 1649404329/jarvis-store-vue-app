<template>
    <div>
        <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 text-color="rgb(57,77,97)" active-text-color="rgb(91,137,230)" style="width: 1200px;margin: 0 auto;">
            <el-menu-item index="/home" style="border-bottom: 2px solid #FFF; color: rgb(82,127,255);">
                <!--<el-avatar :size="50">JARVIS</el-avatar>-->
                <el-avatar :src="logoUrl" :size="40"></el-avatar>
                <b> 发现小店</b>
            </el-menu-item>

            <el-menu-item index="/home" style="color: #909399;">记录远行的每一次航向</el-menu-item>

            <el-menu-item index="/help" style="float: right;">帮助</el-menu-item>

            <el-menu-item index="/register" style="float: right;">
                <el-button type="primary">立即注册</el-button>
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