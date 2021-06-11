<template>
    <div>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-container style="background: #fff;width: 100%;height: 100%;padding-top: 40px;">
                <el-row style="margin: 0 auto;">
                    <div style="width: 800px;float: left;">

                        <el-main  class="main detail">
                            <div>
                                <div class="backTop_wrap"></div>

                                <div>
                                    <BlogUserTop :deliverBlogUserInfo="blogUserInfo" />
                                </div>


                                <div style="margin-top: 10px;margin-bottom: 10px;">
                                    <el-tabs v-model="blog_activeName" @tab-click="handleClick">
                                        <el-tab-pane label="文章" name="first">
                                            <block v-if="pageBlog_blogList.length>0">
                                                <span slot="label"><i class="iconfont icon-top-wenzhang"></i> 文章</span>
                                                <div style="padding-bottom: 30px;">
                                                    <ul class="note-list">
                                                        <li v-for="blog in pageBlog_blogList ">
                                                            <div class="content">
                                                                    <router-link class="title"
                                                                            :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                                                                        {{blog.title}}
                                                                    </router-link>
                                                                <p class="abstract">
                                                                {{blog.content}}
                                                                </p>

                                                                <div class="meta">
                                                                    <span class="jsd-meta"><i class="iconfont icon-chakanguo">dsd</i></span>
                                                                    <a><i class="iconfont icon-pinglun">{{blog.viewCount}}</i></a>
                                                                    <a><i class="iconfont icon-pinglun">{{blog.commentCount}}</i></a>
                                                                    <a><i class="iconfont icon-pinglun">{{blog.voteUp}}</i></a>
                                                                    <span style="margin-right: 10px;color: #b4b4b4;">{{dateFormat(blog.createTime)}}</span>
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
                                            </block>
                                            <block v-else>
                                                <div style="text-align: center; ">

                                                    <NoDataPage/>

                                                    <el-divider></el-divider>
                                                </div>
                                            </block>
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
                    </div>

                    <div style="width: 200px;float: left;">
                        <el-main  class="main detail">
                            <BlogUserAside/>
                        </el-main>
                    </div>
                </el-row>
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
    import NoDataPage from '@/components/common/NoDataPage.vue'
    import VueEvent from '../../common/VueEvent.js'

    export default {
        name: "BlogUser",
        data() {
            return {
                blog: { },
                ownBlog: true,

                userInfo:{},

                comment_textarea: "",


                lookSwitch:true,

                blog_activeName: 'first',

                blogUserInfo: {},
                blogUserId: 0,
                pageBlog_currentPage: 0,
                pageBlog_pageSize: 20,
                pageBlog_total: 0,
                pageBlog_blogList: [],
            }
        },
        components: {
            Header,
            Footer,
            BlogUserTop,
            TestComponents,
            BlogUserAside,
            NoDataPage,
            VueEvent
        },
        created() {

            const _this = this;
            //跳转选中
            let params_page = this.$route.params.p;
            if(!this.publicMethod.isEmpty(params_page)){
                this.blog_activeName = String(params_page);
            }else{
                this.blog_activeName = "first";
            }
            console.info("this.blog_activeName: "+this.blog_activeName);

            //查询正在浏览的博客用户信息
            let blogUserId = this.$route.params.blogUserId;
            console.log("blogUserId:"+ blogUserId);
            if(!blogUserId){
                blogUserId = _this.$store.getters.getBlogUserInfoId;
                console.log("本页面F5刷新，获取正在浏览用户的缓存数据")
            }
            this.blogUserId = blogUserId;
            _this.$store.commit('set_blogUserInfoId', blogUserId);
            console.log("当前浏览的其他用户的博客主页的用户id: " + blogUserId);
            console.log("_this.$store.getters.getBlogUserInfoId: " + _this.$store.getters.getBlogUserInfoId);
            if(blogUserId){
                //1 查询博主信息
                this.$axios.get('/api-user/user/info?userId=' + blogUserId).then(res => {
                    const userInfo = res.data.data;
                    console.log("userInfo="+JSON.stringify(userInfo));
                    _this.blogUserInfo = userInfo;
                    console.log("userInfo="+JSON.stringify(this.blogUserInfo));
                });

                //2 查询博主的文章
                this.$axios.get("/api-activity/blog/pageBlog?currentPage=" + this.pageBlog_currentPage
                    + "&pageSize=" + this.pageBlog_pageSize
                    + "&userId=" + blogUserId
                ).then(res => {
                    const response = res.data;
                    this.pageBlog_blogList = response.data.records;
                    this.pageBlog_currentPage = response.data.current;
                    this.pageBlog_total = response.data.total;
                    this.pageBlog_pageSize = response.data.size;
                })

            }
            //end

        },
        methods:{
            dateFormat(time){
                let date = new Date(time);
                let year = date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                 * */
                let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                // 拼接
                return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
            }
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
        color: #000;
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

    /**
    a标签样式
     */
    a {
        text-decoraction: none;
    }
    .router-link-active {
        text-decoration: none;
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