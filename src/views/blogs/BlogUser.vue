<template>
    <div>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-container style="background: #fff;width: 100%;height: 100%;padding-top: 40px;">
                <el-col :span="9" offset="6">

                    <el-main  class="main detail">
                        <div>
                            <div class="backTop_wrap"></div>

                            <div>
                                <BlogUserTop/>
                            </div>


                            <div style="margin-top: 10px;margin-bottom: 10px;">
                                <el-tabs v-model="blog_activeName" @tab-click="handleClick">
                                    <el-tab-pane label="文章" name="first">
                                        <span slot="label"><i class="iconfont icon-top-wenzhang"></i> 文章</span>
                                        <div style="padding-bottom: 30px;">
                                            <ul class="note-list">
                                                <li v-for="(item, key) in 2 ">
                                                    <div class="content">
                                                        <p class="title">
                                                        <p class="abstract">
                                                            <router-link
                                                                    :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                                                                Spring Event使用
                                                            </router-link></p>
                                                        <p>SpringEvent 自定义事件链，实用性很强的一种设计，可以利用它来做业务剥离，复杂场景解耦、代码独立等，也是事件驱动模型的核心，并且可以处...</p>

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
                                    </el-tab-pane>
                                    <el-tab-pane label="动态" name="second">
                                        <span slot="label"><i class="iconfont icon-top-clock"></i> 动态</span>
                                        <div style="padding-bottom: 30px;">
                                            <ul class="note-list">
                                                <li v-for="(item, key) in 2 ">
                                                    <div class="content">
                                                        <p class="title">Spring Event使用2</p>
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
                                    </el-tab-pane>
                                    <el-tab-pane label="动态" name="second">
                                        <span slot="label"><i class="iconfont icon-top-remenx"></i> 动态</span>
                                    </el-tab-pane>

                                </el-tabs>
                            </div>


                        </div>
                    </el-main>
                </el-col>

                <el-col :span="3">
                    <el-main  class="main detail">
                        <BlogUserAside/>
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
    import BlogUserTop from '@/components/blog/BlogUserTop.vue'
    import TestComponents from '@/components/blog/TestComponents.vue'
    import BlogUserAside from '@/components/blog/BlogUserAside.vue'

    export default {
        name: "BlogUser",
        data() {
            return {
                blog: { },
                ownBlog: true,

                comment_textarea: "",


                lookSwitch:true,

                blog_activeName: 'first',
            }
        },
        components: {
            Header,
            Footer,
            BlogUserTop,
            TestComponents,
            BlogUserAside,
        },
        created() {
            let params_page = this.$route.params.p;
            if(!this.publicMethod.isEmpty(params_page)){
                this.blog_activeName = String(params_page);
            }else{
                this.blog_activeName = "first";
            }
            console.info("this.blog_activeName: "+this.blog_activeName);
        }
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
<!--scoped去掉让重写的样式显示出来-->
<style>
    .el-tabs__item{
        font-size: 16px !important;
    }
    .el-tabs__item.is-active{
        color: #646464 !important;
        font-size: 16px;
        font-weight: 700;
    }
    .el-tabs__active-bar{
        background-color: #646464 !important;
    }
</style>