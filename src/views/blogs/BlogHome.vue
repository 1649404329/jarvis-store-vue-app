<template>
    <div>
        <div class="blogHome">
            <!--<img alt="Vue logo" src="../assets/logo.png">-->
            <!--<HelloWorld msg="Welcome to Your Vue.js App ！ jarvis-store-vue-app！！"/>-->
            <el-container>

                <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
                </el-header>

<transition name="animated  el-zoom-in-bottom">
    <div v-show="showTransition" class="transition-box">
                <!--<el-row>-->
                    <!--<el-col :span="14" offset="6">-->
                        <!--<el-container class="grayTopic">-->
                            <!--<el-main style="margin-bottom: 0;">-->
                                <!--<BlogBanner/>-->
                            <!--</el-main>-->
                        <!--</el-container>-->
                    <!--</el-col>-->
                <!--</el-row>-->

                <el-row class="grayTopic">
                    <el-main style="position: fixed;top: 60px;left:12%;padding:0;/*background-color: rgba(240, 242, 245, 1);*/">
                        <BlogBanner2/>
                    </el-main>
                    <el-col :span="10" offset="6">
                        <el-main>
                            <div class="main"  style="height: 2000px">
                                <Main/>
                            </div>
                        </el-main>
                    </el-col>
                    <el-col :span="4">

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
                                    <span>王淳的猫2</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time><br>
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
                </el-row>
    </div>
     </transition>

                <el-footer>
                    <Footer/>
                </el-footer>

            </el-container>
        </div>

        <el-backtop target=".el-header" visibility-height="10"></el-backtop>
    </div>

</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import Aside from '@/components/blog/Aside.vue'
    import Main from '@/components/blog/Main.vue'
    import BlogBanner from '@/components/blog/BlogBanner.vue'
    import BlogBanner2 from '@/components/blog/BlogBanner2.vue'
    import BlogRanking from '@/components/blog/BlogRanking.vue'
    import HotTopic from '@/components/blog/HotTopic.vue'

    export default {
        name: 'BlogHome',
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",

                showTransition:false
            }
        },
        components: {
            HelloWorld,
            Header,
            Footer,
            Aside,
            Main,
            BlogBanner,
            BlogBanner2,
            BlogRanking,
            HotTopic,
        },
        mounted(){
            this.showTransition=true;

            //绑定页面滚动事件
            window.addEventListener('scroll',this.scrollHandle);
        },
        methods: {
            scrollHandle(e){
                let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
                if(top>593){
                    this.$refs.scrollFixedNav1.classList.add('sfixed')
                    this.$refs.scrollFixedNav2.classList.add('sfixed2')
                }else{
                    this.$refs.scrollFixedNav1.classList.remove('sfixed')
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
        overflow-y: auto;
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