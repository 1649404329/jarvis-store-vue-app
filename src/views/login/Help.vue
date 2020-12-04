<template>
    <div style="background-color: #fff;">
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-row style="margin-top: 60px;">
                <el-col :span="18" offset="3">
                    <el-container>

                        <el-aside width="200px" style="margin: 0;">
                            <el-menu
                                    default-active="2"
                                    text-color="#394D60"
                                    background-color="#F0F2F5"
                                    active-text-color="#52A7EE"
                                    class="el-menu-vertical-demo">
                                <!--@open="handleOpen"-->
                                <!--@close="handleClose">-->
                                <el-menu-item index="2" @click.native="getMenuDetailById(1)">
                                    <span slot="title">名称解释</span>
                                </el-menu-item>
                                <el-submenu v-for="item in menuList"
                                            :key="item.id"
                                            :index="item.id+''">
                                    <template slot="title">
                                        <span>{{item.label}}</span>
                                    </template>
                                    <el-menu-item
                                            :index="subItem.id + ''"
                                            :key="subItem.id"
                                            v-for="subItem in item.children"
                                            @click.native="getMenuDetailById(subItem.id )"
                                    >
                                        <span slot="title">{{ subItem.label }}</span>
                                    </el-menu-item>
                                </el-submenu>
                            </el-menu>
                        </el-aside>

                        <el-main>
                            <div class="main content">
                                <h2>{{currentName}}</h2>
                                <div  v-html="currentContent"></div>
                            </div>
                        </el-main>

                    </el-container>
                </el-col>
            </el-row>

            <el-footer>
                <Footer/>
            </el-footer>

        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/login/Header.vue'
    import Footer from '@/components/common/Footer.vue'

    export default {
        name: "Help",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                username: '',
                password: '',
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ],
                menuList: [],
                currentName: "",
                currentContent: "",
            }
        },
        created() {
            this.getMenuList();
            this.getMenuDetailById(1);
        },
        methods: {
            getMenuList() {
                const _this = this;
                this.$axios.get("/api-admin/knowledgeBase/listSuper").then((res) => {
                    console.log(res);
                    if (res.data.code !== 200) {
                        this.$message({
                            message: res.data.msg,
                            type: "error",
                        });
                    }
                    this.menuList = res.data.data;
                    console.log(res.data.data);
                });
            },
            getMenuDetailById(id) {
                const _this = this;
                this.$axios.get("/api-admin/knowledgeBase/getDetailById/" + id).then((res) => {
                    console.log("输出细节：" + res.data.data.content)
                    if (res.data.code !== 200) {
                        this.$message({
                            message: res.data.msg,
                            type: "error",
                        });
                    }
                    this.currentContent = res.data.data.content;
                    this.currentName = res.data.data.label;
                });
            },
        },

    }
</script>

<style scoped>
    .el-main {
        margin: 0 0 0 0;
        padding: 0;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .image {
        width: 100%;
        height: 100px;
        display: block;
    }

    .content{
        text-align: left;
        padding: 20px;
    }
</style>