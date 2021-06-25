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
                                <BlogUserTop :deliverBlogUserInfo="blogUserInfo"/>
                            </div>

                            <div style="margin-top: 10px;margin-bottom: 10px;">
                                <el-tabs v-model="blog_top_activeName" @tab-click="handleClick">
                                    <el-tab-pane   name="first">
                                        <span slot="label">关注用户 {{blogUserFollows.length}}</span>
                                        <div style="padding-bottom: 30px;">
                                            <ul class="user-list">
                                                <li v-for="(item, key) in blogUserFollows " :key="item">
                                                    <a><el-avatar :src="avatarUrl" class="avatar"></el-avatar></a>
                                                    <el-button type="success" round class="btn-hollow">+ 关注</el-button>
                                                    <div class="info">
                                                        <p class="title">{{item.toUserName}}</p>
                                                        <div class="meta">
                                                            <span>关注 {{item.toUserFollowersCount}}</span>
                                                            <el-divider  direction="vertical"></el-divider>
                                                            <span>粉丝 {{item.toUserFansCount}}</span>
                                                            <el-divider  direction="vertical"></el-divider>
                                                            <span>文章 {{item.toUserPostCount}}</span>
                                                            <!--<span style="margin-right: 10px;color: #b4b4b4;">2019.03.12 16:07</span>-->
                                                        </div>
                                                        <div class="meta">
                                                            <span>写了 {{item.toUserWordsCount}} 字，获得了 {{item.toUserPraisedCount}} 个喜欢</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <el-divider></el-divider>
                                    </el-tab-pane>
                                    <el-tab-pane name="second">
                                        <span slot="label">粉丝 {{blogUserFans.length}}</span>
                                        <div style="padding-bottom: 30px;">
                                            <ul class="user-list">
                                                <li v-for="(item, key) in blogUserFans ">
                                                    <a><el-avatar :src="avatarUrl" class="avatar"></el-avatar></a>
                                                    <el-button type="success" round class="btn-hollow">+ 关注</el-button>
                                                    <div class="info">
                                                        <p class="title">{{item.toUserName}}</p>
                                                        <div class="meta">
                                                            <span>关注 {{item.toUserFollowersCount}}</span>
                                                            <el-divider  direction="vertical"></el-divider>
                                                            <span>粉丝 {{item.toUserFansCount}}</span>
                                                            <el-divider  direction="vertical"></el-divider>
                                                            <span>文章 {{item.toUserPostCount}}</span>
                                                            <!--<span style="margin-right: 10px;color: #b4b4b4;">2019.03.12 16:07</span>-->
                                                        </div>
                                                        <div class="meta">
                                                            <span>写了 {{item.toUserWordsCount}} 字，获得了 {{item.toUserPraisedCount}} 个喜欢</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <el-divider></el-divider>
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
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import BlogUserTop from '@/components/blog/BlogUserTop.vue'
    import TestComponents from '@/components/blog/TestComponents.vue'
    import BlogUserAside from '@/components/blog/BlogUserAside.vue'
    import VueEvent from '../../common/VueEvent.js'

    export default {
        name: "BlogUserFans",
        data(){
            return {

                blog_top_activeName: 'first',
                avatarUrl: "https://upload.jianshu.io/users/upload_avatars/18253298/adc2ffe8-16ba-4ad7-a0d0-4d3f768625a0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",

                blogUserInfo: {},

                blogUserFollows:[],
                blogUserFans:[],
            }
        },
        components: {
            Header,
            Footer,
            BlogUserTop,
            TestComponents,
            BlogUserAside,
        },
        methods:{
            /**
             * 获取我的关注
             */
            getMyFollows(blogUserId){
                this.$axios.get('/api-user/user/fans/myFollow/get?blogUserId=' + blogUserId).then(res => {
                    const info = res.data.data  ;
                    console.info("获取我的关注:")
                    console.info(JSON.stringify(info))
                    this.blogUserFollows = info;
                });
            },
            /**
             * 获取我的粉丝
             */
            getMyFans(blogUserId){
                this.$axios.get('/api-user/user/fans/myFans/get?blogUserId=' + blogUserId).then(res => {
                    const info = res.data.data;
                    this.blogUserFans = info;
                });
            }
        },
        created() {
            //显示“关注”/“粉丝”
            console.log("this.$route.query: "+this.$route.query.p)
            console.log("this.$route.params: "+this.$route.params.p)
            let query_page = this.$route.query.p;
            let params_page = this.$route.params.p;
            if(!this.publicMethod.isEmpty(query_page)){
                this.blog_top_activeName = String(query_page);
            }else if(!this.publicMethod.isEmpty(params_page)){
                this.blog_top_activeName = String(params_page);
            }else{
                this.blog_top_activeName = "first";
            }
            console.info("this.blog_top_activeName: "+this.blog_top_activeName);

            //查询正在浏览的博客用户信息
            let blogUserId = this.$route.params.blogUserId;
            console.log("blogUserId:"+ blogUserId);
            if(!blogUserId){
                blogUserId = this.$store.getters.getBlogUserInfoId;
                console.log("本页面F5刷新，获取正在浏览用户的缓存数据")
            }
            this.$store.commit('set_blogUserInfoId', blogUserId);
            console.log("当前浏览的其他用户的博客主页的用户id: " + blogUserId);
            console.log("_this.$store.getters.getBlogUserInfoId: " + this.$store.getters.getBlogUserInfoId);
            if(blogUserId){
                this.$axios.get('/api-user/user/info?userId=' + blogUserId).then(res => {
                    const userInfo = res.data.data;
                    console.log("userInfo="+JSON.stringify(userInfo));
                    this.blogUserInfo = userInfo;
                    console.log("userInfo="+JSON.stringify(this.blogUserInfo));
                });
            }
            //end

            //getMyFans
            this.getMyFollows(blogUserId);
            this.getMyFans(blogUserId);
        },
        mounted() {
            VueEvent.$on('blog_top_activeName', function (data) {
                this.blog_top_activeName = ""+String(data);
                console.log(this.blog_top_activeName);
                this.blog_top_activeName = "2";
            })
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

    .user-list{
        list-style: none;
        clear: both;
        padding-left: 0;

    }
    .user-list >li {
        /*display: flex;*/
        position: relative;
        width: 100%;
        margin: 0 0 15px 0;
        padding: 0px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
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
        padding: 8px 0;
        width: 100px;
        font-size: 15px;
    }

</style>
<!--scoped去掉让重写的样式显示出来-->
<style>
    .el-tabs__item{
        font-size: 16px !important;
        color: #969696 !important;
        font-weight: 700 !important;
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