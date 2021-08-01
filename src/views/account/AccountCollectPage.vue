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

                                <el-row style="width: 660px;text-align: left;margin-top: 20px;">
                                    <div v-for="item in userTopicList" :key="item"  class="text item">
                                        <el-card class="box-card" shadow="never" style="margin-bottom: 10px;">
                                            <el-row>
                                                <el-col :span="24" style="display: flex;">
                                                    <el-avatar :src="avatarUrl" :size="45" ></el-avatar>
                                                    <div style="margin-left: 10px;width: 100%;">
                                                        <div><span style="line-height: 22px;font-size: 14px;font-weight: bold;">{{item.auhor}}</span></div>
                                                        <div><span class="datePublished">8楼 </span><span class="datePublished">6-22 23:53 知名搞笑幽默博主</span></div>
                                                        <p style="font-size: 14px;margin: 8px 0 8px 0;">{{item.content}}</p>
                                                        <div style="width: 370px;">
                                                            <div v-for="o in 3" :key="o">
                                                                <el-col :span="8">
                                                                    <el-image
                                                                            :preview-src-list="topicUrls"
                                                                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                                                            style="width: 120px;border-radius: 5px;"
                                                                    />
                                                                </el-col>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </el-col>
                                                <el-col :span="24" style="text-align: center;line-height: 30px;margin-top: 10px;cursor: pointer;" class="datePublished">
                                                    <a><el-col :span="8">
                                                        <a><span class="iconfont  icon-chakanguo"> </span>&nbsp;转发</a>
                                                    </el-col></a>
                                                    <a><el-col :span="8">
                                                        <a><span class="iconfont  icon-pinglun"> </span>&nbsp;评论</a>
                                                    </el-col></a>
                                                    <a><el-col :span="8">
                                                        <a><span class="iconfont  icon-dianzan"> </span>&nbsp;赞</a>
                                                    </el-col></a>
                                                </el-col>
                                            </el-row>

                                        </el-card>
                                    </div>
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
        name: 'AccountCollectPage',
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

                //话题列表数据
                userTopicList:[
                    // userTopic: {
                    //     topicContent: '',
                    // },
                    {
                        auhor: '全是另类',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    },
                    {
                        auhor: '全是另类.',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    }
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
                    this.$set(this.blogUserFans[index], 'backFollowStatus', 3);
                    setTimeout(()=>{
                        this.$set(this.blogUserFans[index], 'backFollowStatus', 0)
                        this.$message('取消关注成功' + index);
                    },1000);

                } else {
                    this.$set(this.blogUserFans[index], 'backFollowStatus', 2);
                    setTimeout(()=>{
                        this.$set(this.blogUserFans[index], 'backFollowStatus', 1);
                        this.$message('回粉成功' + index);
                    },1000);
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
    .datePublished{
        font-size: 12px;
        color: rgb(147,147,147);
    }
</style>
<style>
    /*图片预览大图时候退出图标（“X”）的位置调低*/
    .el-image-viewer__close{
        top: 80px !important;
    }
</style>