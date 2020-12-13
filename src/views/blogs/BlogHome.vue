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
                <el-row>
                    <el-col :span="18" offset="3">
                        <el-container class="grayTopic">
                            <el-main style="margin-bottom: 0;">
                                <BlogBanner/>
                            </el-main>
                        </el-container>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="13" offset="3">
                        <el-main>
                            <div class="main">
                                <Main/>
                            </div>
                        </el-main>
                    </el-col>
                    <el-col :span="5">
                        <el-main>
                            <div class="main">
                                <BlogRanking/>
                            </div>
                        </el-main>
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
    import BlogRanking from '@/components/blog/BlogRanking.vue'

    export default {
        name: 'BlogHome',
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,

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
            BlogRanking,
        },
        mounted(){
            this.showTransition=true;
        },
        methods: {
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

</style>