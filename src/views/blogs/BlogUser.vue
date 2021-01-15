<template>
    <div>
        <el-container>
            <el-header>
                <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                <Header/>
            </el-header>

            <el-container style="background: #fff;width: 100%;height: 100%;padding-top: 40px;">
                <el-col :span="9" offset="6">
                    <el-main  class="main detail">
                        <div>
                            <div class="backTop_wrap"></div>

                            <div >
                                <div>
                                    <el-avatar :src="avatarUrl" class="avatar"></el-avatar>
                                    <el-button type="success" round class="btn-hollow">+ 关注</el-button>
                                    <el-button type="success" plain  round class="btn-hollow">留言</el-button>
                                    <div style="margin-left: 8px;padding: 5px 0px 0px 80px;">
                                        <div style="height: auto;">
                                            <span style="font-size: 21px;font-weight: 700;">{{blog.userId}}Randolph555</span>
                                            <i class="iconfont  icon-chakanguo"></i>
                                        </div>
                                        <div class="top-info">
                                            <ul>
                                                <li>
                                                    <p>6</p>关注<i  class="iconfont icon-right-arrow"></i>
                                                </li>
                                                <li>
                                                    <p>67</p>粉丝<i class="iconfont icon-right-arrow"></i>
                                                </li>
                                                <li>
                                                    <p>48</p>文章<i class="iconfont icon-right-arrow"></i>
                                                </li>
                                                <li>
                                                    <p>64545</p>字数
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <el-divider></el-divider>
                            <div style="padding-bottom: 30px;">
                                <ul class="note-list">
                                    <li v-for="(item, key) in 2 ">
                                        <div class="content">
                                            <p class="title">Spring Event使用</p>
                                            <p class="abstract">SpringEvent 自定义事件链，实用性很强的一种设计，可以利用它来做业务剥离，复杂场景解耦、代码独立等，也是事件驱动模型的核心，并且可以处...</p>
                                            <div class="meta">
                                                <span class="jsd-meta"><i class="iconfont icon-chakanguo">dsd</i></span>
                                                <a><i class="iconfont icon-pinglun"> 0</i></a>
                                                <a><i class="iconfont icon-pinglun"> 0</i></a>
                                                <a><i class="iconfont icon-pinglun"> 0</i></a>
                                                <span style="margin-right: 10px;color: #b4b4b4;">2019.03.12 16:07</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <el-divider></el-divider>
                            <div style="display:flex;flex-direction: column;align-items: center;">
                                <p>扫码联系作者</p>
                                <img style="width: 100px; height: 100px" src="../../assets/images/weixin.png"><br>
                                <p style="font-size: 16px;">"小礼物走一走，来小店关注我"</p>
                                <el-button type="danger" size="mini" class="_2Bo4Th"  round>赞赏支持</el-button>
                                <p style="font-size: 14px;color: rgb(150,150,150)">还没有人赞赏，支持一下</p>
                            </div>

                        </div>
                    </el-main>
                </el-col>

                <el-col :span="3">
                    <el-main  class="main detail">
                        <div>
                            <div style=" margin-bottom: 10px; font-size: 14px;color: #969696;">
                                暂无个人介绍
                            </div>
                            <el-divider></el-divider>
                            <div><a class="blog-user-aside" >
                                <i class="iconfont icon-huati-caidan" style=" margin-right: 20px;"></i><span>他关注的话题</span></a>
                            </div>
                            <div><a class="blog-user-aside" >
                                <i class="iconfont icon-huati-xihuan" style=" margin-right: 20px;"></i><span>他喜欢的文章</span></a>
                            </div>
                            <el-divider></el-divider>
                        </div>
                    </el-main>
                </el-col>
            </el-container>

            <el-footer>
                <Footer/>
            </el-footer>

        </el-container>
        <el-backtop target=".backTop_wrap"></el-backtop>
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'

    export default {
        name: "BlogUser",
        data() {
            return {
                blog: { },
                ownBlog: true,

                comment_textarea: "",
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",

                lookSwitch:true,
            }
        },
        components: {
            Header,
            Footer,
        },
    }
</script>

<style scoped>
    .main {
        height: auto;
        text-align: left;
        box-sizing: border-box;
    }

    .detail {
        margin-top: 20px;
        /*text-align: center;*/
        /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);*/
        /*width: 96%;*/
        min-height: 300px;
        padding: 20px;
        box-sizing: border-box;
    }
    .avatar {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: -2px;
    }
    .top-info{
        display: flex;
        padding: 0px;
        margin-top: 5px;
    }
    .top-info> ul{
        list-style-type: none;
        padding: 0px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .top-info> ul> li{
         float: left;
        font-size: 12px;
        color: rgb(150,150,150);
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
     }
    .top-info> ul> li:last-child{
        border-right: 0px ;
    }
    .top-info> ul> li> p{
        font-size: 15px;
        color: black;
        margin: 0;
    }
    .top-info> ul> li> i{
        font-size: 10px;
    }
    .btn-hollow{
        float: right;
        margin: 23px 0 23px 16px;
        font-size: 15px
    }

    .note-list{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .note-list li {
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }
    .note-list .title:visited {
        color: #969696;
    }
    .note-list .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .note-list .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .note-list .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
    .note-list .meta span {
        margin-right: 10px;
    }
    .jsd-meta {
        color: #ea6f5a!important;
    }
    .note-list .meta a i{
        font-size: 12px;
    }
    .note-list .meta a {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .blog-user-aside{
        font-size: 16px;
        color: #333;
        line-height: 30px;
    }
</style>