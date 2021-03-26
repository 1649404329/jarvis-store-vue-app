<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App ！ jarvis-store-vue-app！！"/>-->
        <el-container>
            <!--头部-->
            <el-header>
                <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                <Header/>
            </el-header>

            <el-container>
                <el-row style="margin: 0 auto;">
                    <div style="width: 1300px;">
                        <!--欢迎横幅-->
                        <el-row>
                            <el-container class="grayTopic" style="margin-top:60px;">
                                <el-main>
                                    <div class="main">
                                        <MyWelcomeBanner/>
                                    </div>
                                </el-main>
                            </el-container>
                        </el-row>

                        <el-row>
                            <el-col :span="5" >
                                <!--首页分类大纲-->
                                <el-container>
                                    <el-main style="padding:0;/*background-color: rgba(240, 242, 245, 1);*/">
                                        <ClassOutline/>
                                    </el-main>
                                </el-container>
                            </el-col>

                            <el-col :span="14">
                                <!--首页发现轮播图-->
                                <el-col :span="24">
                                    <el-container>
                                        <el-main style="padding: 0;background-color: rgba(240,242,245,1);">
                                            <div class="main">
                                                <HomeCarousel/>
                                            </div>
                                        </el-main>
                                    </el-container>
                                </el-col>
                                <el-col :span="24">
                                    <el-container>
                                        <el-main>
                                            <div class="main">
                                                <HotSearchList/>
                                            </div>
                                        </el-main>
                                    </el-container>
                                </el-col>
                            </el-col>

                            <el-col :span="5">
                                <!--自定义快速导航-->
                                <el-container>
                                    <el-main>
                                        <div class="main">
                                            <span>自定义快捷导航</span><br><br>
                                            <el-card shadow="hover">
                                                <el-button style="padding: 3px 0" type="text">+ 自定义设置</el-button>
                                            </el-card>
                                            <el-divider></el-divider>
                                            <img style="width: 100px; height: 100px" src="../assets/images/weixin.png"><br>
                                            <span>扫码联系作者</span>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                        </div>
                                    </el-main>
                                </el-container>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="9" offset="2">
                                <!--美食-->
                                <el-container>
                                    <el-main>
                                        <div class="main">
                                            <PanelTitle msg="美食" showAllBtn/>

                                            <div class="tab-pane-content-text">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <el-image
                                                                style="width: 50px; height: 50px"
                                                                :src="eatList"
                                                                :fit="fill"></el-image>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <span>美食美食美食美食美食美食</span>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <span style="color: #909399">上下九</span>
                                                    </el-col>
                                                </el-row>
                                                <el-divider></el-divider>
                                                <div v-for="item in 4">
                                                    <el-row>
                                                        <el-col :span="4">
                                                            <el-image
                                                                    style="width: 50px; height: 50px"
                                                                    :src="eatList"
                                                                    :fit="fill"></el-image>
                                                        </el-col>
                                                        <el-col :span="8">
                                                            <span>美食美食美食美食美食美食</span>
                                                        </el-col>
                                                        <el-col :span="6">
                                                            <span style="color: #909399">北京路</span>
                                                        </el-col>
                                                    </el-row>
                                                    <el-divider></el-divider>
                                                </div>
                                            </div>

                                        </div>
                                    </el-main>
                                </el-container>
                            </el-col>
                            <el-col :span="9">
                                <!--电影-->
                                <el-container>
                                    <el-main>
                                        <div class="main">
                                            <PanelTitle msg="电影" showAllBtn/>

                                            <div class="tab-pane-content-text">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <el-image
                                                                style="width: 50px; height: 50px"
                                                                :src="eatList"
                                                                :fit="fill"></el-image>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <span>美食美食美食美食美食美食</span>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <span style="color: #909399">上下九</span>
                                                    </el-col>
                                                </el-row>
                                                <el-divider></el-divider>
                                                <div v-for="item in 4">
                                                    <el-row>
                                                        <el-col :span="4">
                                                            <el-image
                                                                    style="width: 50px; height: 50px"
                                                                    :src="eatList"
                                                                    :fit="fill"></el-image>
                                                        </el-col>
                                                        <el-col :span="8">
                                                            <span>美食美食美食美食美食美食</span>
                                                        </el-col>
                                                        <el-col :span="6">
                                                            <span style="color: #909399">北京路</span>
                                                        </el-col>
                                                    </el-row>
                                                    <el-divider></el-divider>
                                                </div>
                                            </div>

                                        </div>
                                    </el-main>
                                </el-container>
                            </el-col>
                            <el-col :span="20" offset="2">
                                <!--公告栏-->
                                <el-container>
                                    <el-main>
                                        <div class="main">
                                            <PanelTitle msg="公告栏" showAllBtn/>

                                            <Bulletin/>
                                        </div>
                                    </el-main>
                                </el-container>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="21" offset="2">
                                <!--旅游-->
                                <el-container>
                                    <el-main>
                                        <div class="main">
                                            <PanelTitle msg="旅游" showAllBtn/>

                                            <div class="tab-pane-content-text">
                                                <el-row>
                                                    <el-col :span="4">
                                                        <el-image
                                                                style="width: 50px; height: 50px"
                                                                :src="eatList"
                                                                :fit="fill"></el-image>
                                                    </el-col>
                                                    <el-col :span="8">
                                                        <span>美食美食美食美食美食美食</span>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <span style="color: #909399">上下九</span>
                                                    </el-col>
                                                </el-row>
                                                <el-divider></el-divider>
                                                <div v-for="item in 4">
                                                    <el-row>
                                                        <el-col :span="4">
                                                            <el-image
                                                                    style="width: 50px; height: 50px"
                                                                    :src="eatList"
                                                                    :fit="fill"></el-image>
                                                        </el-col>
                                                        <el-col :span="8">
                                                            <span>美食美食美食美食美食美食</span>
                                                        </el-col>
                                                        <el-col :span="6">
                                                            <span style="color: #909399">北京路</span>
                                                        </el-col>
                                                    </el-row>
                                                    <el-divider></el-divider>
                                                </div>
                                            </div>

                                        </div>
                                    </el-main>
                                </el-container>
                            </el-col>
                        </el-row>

                    </div>
                </el-row>
            </el-container>

        </el-container>

        <el-footer>
            <Footer/>
        </el-footer>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import Aside from '@/components/common/Aside.vue'
    import PanelTitle from '@/components/common/PanelTitle.vue'
    import Bulletin from '@/components/home/Bulletin.vue'
    import MyWelcomeBanner from '@/components/home/MyWelcomeBanner.vue'
    import ClassOutline from '@/components/home/ClassOutline.vue'
    import HomeCarousel from '@/components/home/HomeCarousel.vue'
    import HotSearchList from '@/components/home/HotSearchList.vue'

    export default {
        name: 'Home',
        data() {
            return {
                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,

                eatList: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            }
        },
        components: {
            HelloWorld,
            PanelTitle,
            Header,
            Footer,
            Aside,
            MyWelcomeBanner,
            Bulletin,
            ClassOutline,
            HomeCarousel,
            HotSearchList
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>
<style scoped>

    .el-main {
        margin: 10px 10px 5px 0;
        padding: 10px;
    }

    .home {
        margin: 0;
    }

    .grayTopic {
        background-color: rgba(240, 242, 245, 1);
        height: auto;
        overflow: hidden;
        margin: 0;
        padding: 0 0 0 0;
        overflow-y: auto;
        box-sizing: border-box;
    }

    .tab-pane-content-text {
        margin-top: 16px;
        margin-bottom: 20px;
        font-size: 10px;
        padding-left: 20px;
        text-align: left;
        box-sizing: border-box;
    }

    .el-divider {
        margin: 10px 0;
    }
</style>
