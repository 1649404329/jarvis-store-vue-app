<template>
    <div>
        <el-container>
            <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
            </el-header>

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
                        <div>
                            <el-page-header @back="goBack" content="详情页面">
                            </el-page-header>
                        </div>

                        <div class="detail">
                            <h2>{{blog.title}}</h2>
                            <el-row>
                                <el-col :span="18">
                                    <span><i class="el-icon-alarm-clock"></i>{{blog.createTime}} </span>
                                    <span><i class="el-icon-user-solid"></i>{{blog.createTime}} </span>

                                    <el-link icon="el-icon-edit" v-if="ownBlog">
                                        <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">
                                            编辑
                                        </router-link>
                                    </el-link>
                                </el-col>
                                <el-col :span="6">右边</el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <!-- <div class="markdown-body" v-html="blog.content"></div> -->
                            <div><span v-html="blog.content"></span></div>
                        </div>
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

        <el-footer>
            <Footer/>
        </el-footer>

        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    // import "github-markdown-css/github-markdown.css"
    import BlogBanner from '@/components/blog/BlogBanner.vue'
    import BlogRanking from '@/components/blog/BlogRanking.vue'

    export default {
        name: "BlogDetail",
        data() {
            return {
                blog: {
                    // id: '',
                    // title: '',
                    // content: '',
                    // editMode:'',
                },
                ownBlog: true
            }
        },
        components: {
            Header,
            Footer,
            BlogBanner,
            BlogRanking,
        },
        created() {
            const _this = this
            const blogId = this.$route.params.blogId
            console.log(blogId)
            if (blogId) {
                this.$axios.get('/api-activity/blog/detail/' + blogId).then(res => {
                    const blog = res.data.data
                    console.log(blog);
                    _this.blog=blog
                    _this.blog.id = blog.id
                    _this.blog.title = blog.title
                    _this.blog.content = blog.content
                    if(blog.editMode===0){
                        
                    }
                    // var MarkDownIt = require("markdown-it")
                    // var md = new MarkDownIt()
                    // var resultContent = md.render(blog.content)
                    // _this.blog.content = resultContent

                    //编辑按钮可见性
                    _this.ownBlog = (blog.userId === _this.$store.getters.getUser.id)
                })
            }
        },
        mounted(){
            window.scrollTo(0,0);
        },
        methods: {
            goBack() {
                console.log('go back');
                this.$router.push({
                    path: '/blogHome',   
                    name: 'BlogHome',  
                    params: {   
                        key: 'blogId',   
                        msgKey: this.blog.id  
                    }  
                    /*query: {  
                        key: 'key',   
                        msgKey: this.msg  
                    }*/
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

    .detail {
        margin: 0 auto;
        margin-top: 20px;
        /*text-align: center;*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 96%;
        min-height: 700px;
        padding: 20px;
        box-sizing: border-box;
    }
</style>