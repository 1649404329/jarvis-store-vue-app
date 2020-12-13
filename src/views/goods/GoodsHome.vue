<template>
    <div>
        <div class="goodsHome">
            <el-container>

                <el-header>
                    <Header/>
                </el-header>

<transition name="animated  el-zoom-in-bottom">
    <div v-show="showTransition" class="transition-box">
                <el-row>
                    <el-col :span="18" offset="3">
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
     </transition>

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
    import Aside from '@/components/goods/Aside.vue'
    import Main from '@/components/goods/Main.vue'

    export default {
        name: 'GoodsHome',
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
        },
        mounted(){
            this.showTransition=true;
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