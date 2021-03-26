<template>
    <div>
        <div class="accountHome">
            <!--<img alt="Vue logo" src="../assets/logo.png">-->
            <!--<HelloWorld msg="Welcome to Your Vue.js App ！ jarvis-store-vue-app！！"/>-->
            <el-container>

                <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
                </el-header>

                <el-container>
                    <el-row style="margin: 0 auto;">
                        <div style="width: 1200px;">
                            <el-row>
                    <el-col :span="24">
                        <el-container class="grayTopic">
                            <el-aside width="200px">
                                <Aside/>
                            </el-aside>

                            <el-main>
                                <div class="main">
                                    <Main/>
                                </div>
                            </el-main>
                        </el-container>
                    </el-col>
                </el-row>
                        </div>
                    </el-row>
                </el-container>

                <el-footer><Footer/></el-footer>

                <el-backtop target=".el-header" visibility-height="10"></el-backtop>

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
        name: 'AccountHome',
        data() {
            return {

                username: '',
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,
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
            }
        }

    }
</script>

<style scoped>

    .grayTopic {
        background-color: rgba(240, 242, 245, 1);
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

</style>