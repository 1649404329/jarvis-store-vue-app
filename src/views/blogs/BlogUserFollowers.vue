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
                                <el-tabs v-model="blog_top_activeName" @tab-click="handleClick">
                                    <el-tab-pane   name="first">
                                        <span slot="label">关注用户</span>
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
                                    </el-tab-pane>
                                    <el-tab-pane name="second">
                                        <span slot="label">粉丝</span>
                                        动态
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
        name: "BlogUserFollowers",
        data(){
            return {

                blog_top_activeName: 'first',
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
                this.blog_top_activeName = "1";
            }
            console.info("this.blog_top_activeName: "+this.blog_top_activeName);
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