<template>
    <div class="blogHome wrapper" style="height:100%;">
        <!--<div class="demo-image__preview">-->
            <!--<el-image-->
                    <!--style="width: 100px; height: 100px"-->
                    <!--:src="avatarUrl"-->
                    <!--:preview-src-list="avatarUrls">-->
            <!--</el-image>-->
        <!--</div>-->
        <el-backtop :visibility-height="20" :right="40" :bottom="40">↑</el-backtop>
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
                        <div style="width: 1000px;">
                                    <el-container class="grayTopic">
                                        <el-aside width="200px" >
                                            <Aside/>
                                        </el-aside>

                                        <el-row >
                                        <el-col :span="24">
                                        <el-main  class="main" style="padding: 0px;text-align: center;width: 660px;margin-bottom: 0px;">
                                            <el-card shadow="hover" :body-style="{ padding: '0px', }">
                                                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                                                     class="image">
                                                <div class="blog-avatar">
                                                    <!--<router-link :to="{name:'BlogUser'}">-->
                                                        <el-image :src="avatarUrl"
                                                                  :preview-src-list="avatarUrls"
                                                                  :size="100" style="vertical-align: middle;cursor: pointer;border-radius: 50%;"></el-image>
                                                    <!--</router-link>-->
                                                </div>
                                                <div style="padding: 14px;font-size: 14px;margin-top: 5px;text-align: left;">
                                                    <div style=" margin-left: 140px;">
                                                        <div><span style="font-size: 18px;line-height: 26px;"><b>王淳的猫</b></span></div>
                                                        <div style="font-size: 14px;">
                                                            <a style="margin-right: 20px;">
                                                                <span>粉丝&nbsp;&nbsp;</span><span>50  </span>
                                                            </a>
                                                            <a>
                                                                <span>关注&nbsp;&nbsp;</span><span>2  </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div style=" margin-left: 20px;padding: 5px;">
                                                        <el-tag type="warning">昨日发博31，阅读数100万+，互动数2.7万</el-tag>&nbsp;&nbsp;
                                                        <el-tag type="warning">标签五</el-tag>&nbsp;&nbsp;
                                                        <el-tag type="warning">互动数2.7万</el-tag>&nbsp;&nbsp;
                                                        <el-tag type="warning">标签五</el-tag>&nbsp;&nbsp;
                                                    </div>
                                                    <div class="description">
                                                        <div><i class="iconfont icon-chakanguo"></i>登录手机号</div>
                                                        <div><i class="iconfont icon-chakanguo"></i>159****4812</div>
                                                        <div><i class="el-icon-date"></i>2010-12-12 加入微博&nbsp;&nbsp;<i class="el-icon-location-information"></i>广州</div>
                                                        <div>
                                                            <i class="iconfont icon-chakanguo"></i>文章 89 <i class="iconfont icon-chakanguo"></i>评论 89
                                                            <i class="iconfont icon-chakanguo"></i>浏览 89 <i class="iconfont icon-chakanguo"></i>获赞 89</div>
                                                    </div>
                                                </div>
                                            </el-card>
                                        </el-main>
                                        </el-col>

                                        <el-col :span="24">
                                            <!--<el-main style="width: 660px;display: flex;padding: 10px;">-->
                                                <!--<el-col :span="3" class="banner-bar">精选</el-col>-->
                                                <!--<el-col :span="3"  class="banner-bar">微博</el-col>-->
                                                <!--<el-col :span="3"  class="banner-bar">相册</el-col>-->
                                            <!--</el-main>-->

                                            <el-main style="width: 660px;display: flex;padding: 10px;">
                                                <el-menu
                                                        :default-active="activeIndex2"
                                                        class="el-menu-demo"
                                                        mode="horizontal"
                                                        @select="handleSelect"
                                                        text-color="#000000"
                                                        active-text-color="#F58200">
                                                    <el-menu-item index="1">精选</el-menu-item>
                                                    <el-menu-item index="2">微博</el-menu-item>
                                                    <el-menu-item index="3">相册</el-menu-item>
                                                </el-menu>
                                            </el-main>

                                            <div class="main">
                                                <Main/>
                                            </div>



                                        </el-col>
                                        </el-row>

                                    </el-container>
                        </div>
                    </el-row>
                </el-container>

                <el-footer><Footer/></el-footer>

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

                avatarUrl: "https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006wpMnaly8gq15cd3saxj30ro0romyz.jpg?KID=imgbed,tva&Expires=1627124560&ssig=E9hopwu17f",
                avatarUrls: ["https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006wpMnaly8gq15cd3saxj30ro0romyz.jpg?KID=imgbed,tva&Expires=1627124560&ssig=E9hopwu17f"],
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
        width: 100px;
        height: 100px;
        margin-bottom: -30px;
        z-index: 2;
        position: absolute;
        top: 8%;
        left: 5%;
        /*transform:translate(-50%,-50%);!*水平垂直居中，还可以根据屏幕的大小来调节自身的宽度，做弹框时不用设置宽高*!*/
    }

    /*鼠标经过样式：*/
    .banner-bar:hover {
        cursor: pointer;
        color: rgb(255,130,0);
    }
    .banner-bar:visited {
        color: rgb(255,130,0);
    }
    .el-menu.el-menu--horizontal{
        border-bottom: none;
    }
    .el-menu--horizontal > .el-menu-item{
        height: 30px;
        margin-left: 40px;
        margin-right: 40px;
        line-height: 30px;
    }

    /*简介描述区*/
    .description{
        margin-left: 30px;
        font-size: 13px;
        color: rgb(147,147,147);
    }
    .description div{
        line-height: 26px;
    }
    .description i{
        margin-right: 5px;
    }

</style>
<style>
    /*图片预览大图时候退出图标（“X”）的位置调低*/
    .el-image-viewer__close{
        top: 80px !important;
    }
</style>