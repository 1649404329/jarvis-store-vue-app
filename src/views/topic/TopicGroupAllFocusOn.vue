<template>
    <div class="blogHome wrapper" style="height:100%;">
        <el-backtop target=".wrapper" :visibility-height="20" :right="40" :bottom="40">UP</el-backtop>
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App ！ jarvis-store-vue-app！！"/>-->
        <el-container>

            <el-header>
                <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                <Header/>
            </el-header>

            <!--<transition name="animated  el-zoom-in-bottom">-->
                <div v-show="showTransition" class="transition-box" >
                    <!--<el-row>-->
                    <!--<el-col :span="14" offset="6">-->
                    <!--<el-container class="grayTopic">-->
                    <!--<el-main style="margin-bottom: 0;">-->
                    <!--<BlogBanner/>-->
                    <!--</el-main>-->
                    <!--</el-container>-->
                    <!--</el-col>-->
                    <!--</el-row>-->

                    <!--todo start-->
                    <el-row class="grayTopic" style="margin: 0 auto;" >
                        <!--<div>-->
                        <!--<el-main style="padding:0;-->
                        <!--position: fixed;-->
                        <!--left: 20%;-->
                        <!--/*background-color: rgba(240, 242, 245, 1);*/">-->
                        <!--<BlogBanner2/>-->
                        <!--</el-main>-->
                        <!--</div>-->
                        <div style="position: fixed;
            left: calc((100vw - 1000px)/2 - 78px);
            width: 200px;
            top:70px;">
                            <el-main style="padding:0;/*background-color: rgba(240, 242, 245, 1);*/">
                                <BlogBanner2/>
                            </el-main>
                        </div>

                        <div style="position: relative;
            left: calc((100vw - 1000px)/2 + 120px);
            width: 1000px;
            height: 1000px;
            top: 10px;" >

                            <el-col :span="16">
                                <el-main style="background-color: rgb(240,242,245);padding: 0">
                                    <div class="main"  style=" overflow: hidden;">
                                        <TopicMain/>
                                    </div>
                                </el-main>
                            </el-col>

                            <el-col :span="8">
                                <el-main  class="main" style="padding: 0px;text-align: center;width: 280px;">
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

                                <div ref="scrollFixedNav1">
                                    <el-main style="width: 280px;padding: 0">
                                        <div class="main" >
                                            <BlogRanking/>
                                        </div>
                                    </el-main>
                                </div>

                                <div ref="scrollFixedNav2">
                                    <el-main style="width: 280px;padding: 0">
                                        <div class="main" >
                                            <HotTopic/>
                                        </div>
                                    </el-main>
                                </div>
                            </el-col>
                        </div>


                    </el-row>
                    <!--todo end-->


                </div>
            <!--</transition>-->

            <el-footer>
                <Footer/>
            </el-footer>

        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import Aside from '@/components/blog/Aside.vue'
    import Main from '@/components/blog/Main.vue'
    import TopicMain from '@/components/topic/TopicMain.vue'
    import BlogBanner from '@/components/blog/BlogBanner.vue'
    import BlogBanner2 from '@/components/blog/BlogBanner2.vue'
    import BlogRanking from '@/components/blog/BlogRanking.vue'
    import HotTopic from '@/components/blog/HotTopic.vue'

    export default {
        name: "TopicGroupAllFocusOn",
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",

                showTransition:false,
            }
        },
        components: {
            HelloWorld,
            Header,
            Footer,
            Aside,
            Main,
            TopicMain,
            BlogBanner,
            BlogBanner2,
            BlogRanking,
            HotTopic,
        },
        mounted(){
            this.showTransition=true;

            //绑定页面滚动事件
            window.addEventListener('scroll',this.scrollHandle, true);
        },
        methods: {
            scrollHandle(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;    // 获取页面滚动高度
                // console.log("scrollHandle：" + scrollTop);
                if(scrollTop>593){
                    this.$refs.scrollFixedNav1.classList.add('sfixed');
                    this.$refs.scrollFixedNav2.classList.add('sfixed2')
                }else{
                    this.$refs.scrollFixedNav1.classList.remove('sfixed');
                    this.$refs.scrollFixedNav2.classList.remove('sfixed2')
                }
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            test() {
                const _this = this;
                _this.$axios.get('/api-activity/blog/pageBlog?pageNo=0&pageSize=10').then(res => {
                    this.$alert('操作成功', '提示', {
                        confirmButtonText: '确定',
                        showClose: false,
                        callback: action => {
                            /*this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });*/
                        }
                    });
                })
            }
        }

    }
</script>

<style scoped>

    .grayTopic {
        background-color: rgba(240, 242, 245, 1);
        height: 100%;
        overflow: hidden;
        margin: 0;
        padding-top: 60px;
        /*overflow-y: auto;*/
        box-sizing: border-box;
    }

    .main {
        height: auto;
        text-align: left;
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

    .sfixed{
        position:fixed;
        top:300px;
        z-index:10;
    }
    .sfixed2{
        position:fixed;
        top:50px;
        z-index:10;
    }
</style>