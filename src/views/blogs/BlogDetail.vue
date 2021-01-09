<template>
    <div>
        <el-container>
            <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
            </el-header>

            <el-row>
                <el-col :span="16" offset="4">
                    <el-container class="grayTopic">
                        <el-main style="margin-bottom: 0;">
                            <BlogBanner/>
                        </el-main>
                    </el-container>
                </el-col>
            </el-row>

        <el-row>
            <div class="left-fixed">
                <div class="left-fixed-btn">
                <el-button type="info" circle icon="iconfont icon-dianzan"></el-button><br>点赞</div>

                <div class="left-fixed-btn">
                <el-button type="text" circle style="background: #fff;">赏</el-button><br>赞赏</div>

            </div>

            <el-col :span="11" offset="4">
                <el-main  class="main detail">
                    <div>
                        <div>
                            <div>
                                <el-page-header @back="goBack" content="详情页面">
                                </el-page-header>
                            </div>

                            <h2>{{blog.title}}</h2>
                            <el-row>
                                <el-col :span="18">
                                    <span><i class="el-icon-s-flag"></i>{{this.publicMethod.dateFormat(blog.createTime)}} </span>
                                    <span><i class="el-icon-user-solid"></i>{{blog.userId}} </span>

                                    <el-link icon="el-icon-edit" v-if="ownBlog">
                                        <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">
                                            编辑
                                        </router-link>
                                    </el-link>
                                </el-col>
                                <el-col :span="6">
                                    <el-col :span="8">
                                        <span class="iconfont  icon-chakanguo">{{blog.userId}}</span>
                                    </el-col>
                                    <el-col :span="8">
                                    <span class="iconfont  icon-pinglun">{{blog.userId}}</span>
                                    </el-col>
                                    <el-col :span="8">
                                    <span class="iconfont  icon-dianzan">{{blog.userId}}</span>
                                    </el-col>
                                </el-col>

                            </el-row>
                            <el-divider></el-divider>
                            <!-- <div class="markdown-body" v-html="blog.content"></div> -->
                            <div><span v-html="blog.content"></span></div>
                        </div>

                    </div>
                </el-main>

                <el-main>
                    <div>
                        <div>
                            <el-badge :value="12" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge :value="3" class="item">
                                <el-button size="small">回复</el-button>
                            </el-badge>
                            <el-badge :value="1" class="item" type="primary">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge :value="2" class="item" type="warning">
                                <el-button size="small">回复</el-button>
                            </el-badge>

                            <el-dropdown trigger="click">
                                  <span class="el-dropdown-link">
                                    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                                  </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="clearfix">
                                        评论
                                        <el-badge class="mark" :value="12" />
                                    </el-dropdown-item>
                                    <el-dropdown-item class="clearfix">
                                        回复
                                        <el-badge class="mark" :value="3" />
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </el-main>

                <el-main>
                    <div style="font-size: 14px;text-align: left;">
                    <p><b>版权声明：</b>大鹏 发表于 2020-06-30 12:58:57。</p>
                    <p><b>转载请注明：</b>无损音乐与高清MV资源索引 | 爱达杂货铺</p>
                    </div>
                </el-main>

                <el-main>
                    <div style="font-size: 14px;text-align: left;">
                        <el-row>
                            <el-col :span="6"><b > 上一篇 </b><br>免费音乐下载软件合集</el-col>
                            <el-col :span="6" :offset="12"><b > 下一篇 </b><br>免费音乐下载软件合集</el-col>
                        </el-row>
                    </div>
                </el-main>

                <h4 style="text-align: left;"><b>评论区</b></h4>
                <el-main>
                    <div style="font-size: 14px;text-align: left;margin-bottom: 20px;">
                        <el-row>
                            <el-col :span="24" style="margin-bottom: 10px;">
                                <el-input
                                        type="textarea"
                                        style="background-color: rgba(240,242,245,1)"
                                        :autosize="{ minRows: 2, maxRows: 4}"
                                        placeholder="请输入内容"
                                        v-model="comment_textarea">
                                </el-input>
                            </el-col>
                            <el-col :span="5" :offset="19"><el-button type="primary" round>发表评论</el-button></el-col>
                        </el-row>
                    </div>

                    <div class="comment-list">
                        <div v-for="(item, key) in 2 ">
                            <el-row>
                                <el-col :span="2"><el-avatar :src="avatarUrl" :size="42" ></el-avatar></el-col>
                                <el-col :span="22">
                                    <span style="line-height: 22px">uuIOO</span>
                                    <p>百度网盘很多链接失效了，可以更新下链接吗 </p>
                                    <div><span class="datePublished">10个月前</span> <el-button type="text" class="comment-reply-button">回复</el-button></div>
                                    <el-divider></el-divider>
                                    <div class="children">
                                        <el-row>
                                            <el-col :span="2"><el-avatar :src="avatarUrl" :size="38"></el-avatar></el-col>
                                            <el-col :span="22">
                                                <span style="line-height: 22px">uuIOO</span>
                                                <p>百度网盘很多链接失效了，可以更新下链接吗 </p>
                                                <div><span class="datePublished">10个月前</span> <el-button type="text" class="comment-reply-button">回复</el-button></div>
                                                <el-divider></el-divider>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-main>
            </el-col>
            <el-col :span="5">
                <el-main  class="main detail" style="padding: 0px;text-align: center;">
                    <div>
                        <el-row>
                            <el-col :span="24">
                                <el-card shadow="hover" :body-style="{ padding: '0px',marginBottom: '80px' }">
                                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                         class="image">
                                    <div class="blog-avatar">
                                        <el-avatar :src="avatarUrl" :size="72" style="vertical-align: middle;"></el-avatar>
                                    </div>
                                    <div style="padding: 14px;font-size: 14px;">
                                        <span>王淳的猫</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time><br>
                                            <el-button type="" class="button" plain>+ 关注</el-button>
                                        </div>
                                        <el-col :span="6"><p><b>89</b></p>文章</el-col>
                                        <el-col :span="6"><p><b>46</b></p>评论</el-col>
                                        <el-col :span="6"><p><b>4324</b></p>浏览</el-col>
                                        <el-col :span="6"><p><b>786</b></p>获赞</el-col>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
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
                blog: { },
                ownBlog: true,

                comment_textarea: "",
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            }
        },
        components: {
            Header,
            Footer,
            BlogBanner,
            BlogRanking,
        },
        created() {
            console.log(this.publicMethod.dateFormat('2020-06-02T15:40:18'))
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
        margin-top: 20px;
        /*text-align: center;*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        /*width: 96%;*/
        min-height: 300px;
        padding: 20px;
        box-sizing: border-box;
    }

    .item {
        margin-top: 10px;
        margin-right: 40px;
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

    .comment-list{
        font-size: 14px;
        text-align: left;
    }
    .datePublished{
        color: #6c757d;
        font-size: 12px;
    }
    .comment-reply-button{
        float: right;
    }

    /*左侧点赞/赞赏固定悬浮按钮*/
    .left-fixed{
        position: fixed;
        top: 30%;
        /*left: calc((100vw - 1000px)/2 - 190px);*/
        left: 10%;
        user-select: none;
    }
    .left-fixed-btn{
        cursor: pointer;
        flex-direction: column;
        margin-bottom: 16px;
        font-size: 14px;
        color: rgba(150,150,150,1);
    }
</style>