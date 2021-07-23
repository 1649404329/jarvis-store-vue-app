<template>
    <div>
        <div class="accountHome">
            <!--<img alt="Vue logo" src="../assets/logo.png">-->
            <!--<HelloWorld msg="Welcome to Your Vue.js App ！ jarvis-store-vue-app！！"/>-->
            <el-container>

                <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
                </el-header>

                <el-container>
                    <el-row style="margin: 0 auto;">
                        <div style="width: 1200px;">
                                    <el-container class="grayTopic">
                                        <el-aside width="200px">
                                            <Aside/>
                                        </el-aside>

                                        <el-row>
                                        <el-col :span="24">
                                        <el-main  class="main" style="padding: 0px;text-align: center;width: 660px;">
                                            <el-card shadow="hover" :body-style="{ padding: '0px',marginBottom: '80px' }">
                                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                                     class="image">
                                                <div class="blog-avatar">
                                                    <router-link :to="{name:'BlogUser'}">
                                                        <el-avatar :src="avatarUrl" :size="72" style="vertical-align: middle;cursor: pointer;"></el-avatar>
                                                    </router-link>
                                                </div>
                                                <div style="padding: 14px;font-size: 14px;">
                                                    <span>王淳的猫1</span>
                                                    <div class="bottom clearfix">
                                                        <time class="time">{{  }}</time><br>
                                                    </div>
                                                    <el-col :span="6"><p><b>89</b></p>文章</el-col>
                                                    <el-col :span="6"><p><b>46</b></p>评论</el-col>
                                                    <el-col :span="6"><p><b>4324</b></p>浏览</el-col>
                                                    <el-col :span="6"><p><b>786</b></p>获赞</el-col>
                                                </div>
                                            </el-card>
                                        </el-main>
                                        </el-col>

                                        <el-col :span="24">
                                        <el-main style="width: 660px;">
                                            <div class="main">
                                                <Main/>
                                            </div>
                                        </el-main>
                                        </el-col>
                                        </el-row>

                                    </el-container>
                        </div>
                    </el-row>
                </el-container>

                <el-footer><Footer/></el-footer>

                <el-backtop target=".el-header" visibility-height="10"></el-backtop>

            </el-container>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import Aside from '@/components/account/Aside.vue'
    import Main from '@/components/account/Main.vue'
    import PanelTitle from '@/components/common/PanelTitle.vue'

    export default {
        name: 'AccountHome',
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,

                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            }
        },
        components: {
            HelloWorld,
            Header,
            Footer,
            Aside,
            Main,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<style scoped>

    .grayTopic {
        height: 100%;
        width: auto;
        overflow: hidden;
        margin: 0;
        padding: 60px 0 0 0;
        overflow-y: auto;
        box-sizing: border-box;
    }

    .main {
        height: auto;
        text-align: left;
        margin-bottom: 24px;
        box-sizing: border-box;
    }


    .image {
        width: 100%;
        height: 150px;
        display: block;
        z-index: 1;
        position: relative;
    }
    .blog-avatar{
        display: block;
        background: rgba(255,255,255,1);
        border-radius: 50%;
        border: 1px #ffffff solid;
        width: 74px;
        height: 74px;
        margin-bottom: -30px;
        z-index: 2;
        position: relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
</style>