<template>
    <div class="blogHome wrapper" style="height:100%;">
        <el-backtop :visibility-height="20" :right="40" :bottom="40">↑</el-backtop>
        <div class="accountHome">
            <el-container>

                <el-header>
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
                                        <el-main style="width: 660px;display: flex;padding: 10px;margin-bottom: 0px;">
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

                                        <el-col :span="24">
                                            <el-main  class="main" style="padding: 0px;text-align: center;width: 660px;">
                                                <div style="padding: 20px;">
                                                    <ul class="user-list">
                                                        <li v-for="(item, key) in blogUserFans " :key="item">
                                                            <a><el-avatar :src="avatarUrl" class="avatar"></el-avatar></a>
                                                            <el-dropdown class="btn-hollow" @command="handleFocusCommand" @click.native="handleFocusClick(key)">
                                                              <span class="el-dropdown-link">
                                                                <el-button class="btn-hollow" v-if="item.backFollowStatus===0" :loading="true" size="small" type="warning" plain round slot="reference">{{'回粉'}}</el-button>
                                                                <el-button class="btn-hollow" v-if="item.backFollowStatus===1" :loading="true" size="small" type="info" plain round slot="reference">{{'互相关注'}}</el-button>
                                                              </span>
                                                                <el-dropdown-menu slot="dropdown">
                                                                    <el-dropdown-item :command="item.toUserName+'_'+item.toUserName" icon="el-icon-remove-outline">取消关注</el-dropdown-item>
                                                                    <el-dropdown-item :command="item.toUserName+'_'+item.toUserFansCount" icon="el-icon-circle-plus-outline">设置备注</el-dropdown-item>
                                                                </el-dropdown-menu>
                                                            </el-dropdown>
                                                            <div class="info">
                                                                <p class="title">{{item.toUserName}}</p>
                                                                <div class="meta">
                                                                    <span>{{item.alias}}</span>
                                                                    <el-divider  direction="vertical"></el-divider>
                                                                    <span>关注 {{item.toUserFollowersCount}}</span>
                                                                    <el-divider  direction="vertical"></el-divider>
                                                                    <span>粉丝 {{item.toUserFansCount}}</span>
                                                                    <el-divider  direction="vertical"></el-divider>
                                                                    <span>文章 {{item.toUserPostCount}}</span>
                                                                </div>
                                                                <div class="meta">
                                                                    <span>{{item.desc}}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </el-main>
                                        </el-col>

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
        name: 'AccountFans',
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,

                avatarUrl: "https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006wpMnaly8gq15cd3saxj30ro0romyz.jpg?KID=imgbed,tva&Expires=1627124560&ssig=E9hopwu17f",
                avatarUrls: ["https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006wpMnaly8gq15cd3saxj30ro0romyz.jpg?KID=imgbed,tva&Expires=1627124560&ssig=E9hopwu17f"],

                blogUserFans:[
                    {"toUserName":"tutu1","alias":"搞笑幽默博主","toUserFollowersCount":423, "toUserFansCount":23,
                        "toUserPostCount":232,"desc":"感谢所有球迷朋友们在过去的这个赛季里对NBA的关注和支持。","backFollowStatus":1},
                    {"toUserName":"tutu2","alias":"知名前线记者","toUserFollowersCount":423, "toUserFansCount":23,
                        "toUserPostCount":232,"desc":"万里长征是唤醒民众的伟大远征，是中国工农红军书写的人间奇迹","backFollowStatus":1},
                    {"toUserName":"tutu3","alias":"头条文章作者","toUserFollowersCount":423, "toUserFansCount":23,
                        "toUserPostCount":232,"desc":"感受一下细节做到极致的体验","backFollowStatus":0},
                ],

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
            },
            handleFocusClick(index) {
                if (this.blogUserFans[index].backFollowStatus === 1) {
                    this.$set(this.blogUserFans[index], 'backFollowStatus', 0);
                    this.$message('取消关注成功' + index);
                } else {
                    this.$set(this.blogUserFans[index], 'backFollowStatus', 1);
                    this.$message('回粉成功' + index);
                }
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

    /*用户列表*/
    .user-list{
        list-style: none;
        clear: both;
        padding-left: 0;
        text-align: left;
    }
    .user-list >li {
        /*display: flex;*/
        position: relative;
        width: 100%;
        margin: 0 0 15px 0;
        padding: 0 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        box-sizing: border-box;
    }
    .user-list .title:visited {
        color: #969696;
    }
    .title {
        margin: -2px 0 4px;
        display: inherit;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .user-list .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
    .user-list .meta span {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .user-list .meta a i{
        font-size: 12px;
    }
    .user-list .meta a {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .avatar {
        float: left;
        width: 52px;
        height: 52px;
        margin-right: 8px;
    }
    .info{
        max-width: 450px;
    }
    .btn-hollow{
        float: right;
        margin-top: 8px;
        padding:  0;
        width: 100px;
        font-size: 15px;
    }
    .btn-hollow li:hover{
        background-color:#99CC00;
        cursor:pointer;
    }
</style>
<style>
    /*图片预览大图时候退出图标（“X”）的位置调低*/
    .el-image-viewer__close{
        top: 80px !important;
    }
</style>