<template>
    <div>
        <el-container>
            <el-header>
                    <!--<span>Jarvis store 小店，欢迎光临~</span>-->
                    <Header/>
            </el-header>

            <el-row>
                <el-col :span="14" offset="6">
                    <el-container class="grayTopic">
                        <!--<el-main style="margin-bottom: 0;">-->
                            <!--<BlogBanner/>-->
                        <!--</el-main>-->
                    </el-container>
                </el-col>
            </el-row>

        <el-row>
            <div class="left-fixed">
                <div class="left-fixed-btn">
                <el-button circle icon="iconfont icon-dianzan"></el-button><br>点赞</div>

                <div class="left-fixed-btn">
                <el-button type="text" circle style="background: #fff;">赏</el-button><br>赞赏</div>
                
                <div class="left-fixed-btn">
                <el-button plain circle icon="iconfont icon-dianzan"></el-button><br>扫一扫</div>

            </div>

            <el-col :span="10" offset="6">
                <el-main  class="main detail">
                    <div>
                        <div>
                            <div class="backTop_wrap"></div>
                            <div>
                                <el-page-header @back="goBack" content="详情页面">
                                </el-page-header>
                            </div>

                            <h2>{{blog.title}}</h2>
                            <el-row>
                                <el-col :span="18" style="color:rgb(150,150,150);font-size:12px;">
                                    <div class="rEsl9f">
                                        <el-avatar :src="avatarUrl" :size="32" style="vertical-align: middle;"></el-avatar>
                                        <div style="display: block;margin-left: 8px;">
                                            <div>
                                                <span>{{blog.userId}}作者 </span>
                                                <!--<el-button round style="font-size:12px">圆角按钮</el-button>-->

                                                <el-link icon="el-icon-edit" v-if="ownBlog">
                                                    <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">
                                                        编辑
                                                    </router-link>
                                                </el-link>
                                            </div>
                                            <div>
                                                <span><i class="el-icon-s-flag"></i>{{this.publicMethod.dateFormat(blog.createTime)}} </span>
                                                <span><i class="el-icon-user-solid"></i>{{blog.userId}} </span>
                                            </div>
                                        </div>
                                    </div>
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
                            <div style="padding-bottom: 20px;"><span v-html="blog.content"></span></div>

                            <div>
                                <el-button class="_2Bo4Th" circle icon="iconfont icon-dianzan"></el-button>
                                <el-button type="text" style="color: rgb(150,150,150);" @click="open"><span class="gt">38人点赞</span></el-button>
                                <el-button type="info" class="_2Bo4Th" circle icon="iconfont icon-dianzan"></el-button>
                            </div>
                            <el-divider></el-divider>
                            <div style="display:flex;flex-direction: column;align-items: center;">
                                <p>扫码联系作者</p>
                                <img style="width: 100px; height: 100px" src="../../assets/images/weixin.png"><br>
                                <p style="font-size: 16px;">"小礼物走一走，来小店关注我"</p>
                                <el-button type="danger" size="mini" class="_2Bo4Th"  round>赞赏支持</el-button>
                                <p style="font-size: 14px;color: rgb(150,150,150)">还没有人赞赏，支持一下</p>
                            </div>

                            <el-row class="d0hShY">

                                <el-avatar :src="avatarUrl" :size="38" style="vertical-align: middle;"></el-avatar>
                                <div style="display: block;margin-left: 8px;width:90%;">
                                    <div>
                                        <span>{{blog.userId}}作者 </span>
                                    </div>
                                    <div style="font-size: 14px;color: #969696;">
                                        <span><i class="el-icon-s-flag"></i>{{this.publicMethod.dateFormat(blog.createTime)}} </span>
                                        <span><i class="el-icon-user-solid"></i>{{blog.userId}} </span>
                                        <span>总资产6 (约0.28元)</span>
                                        <span>共写了3581字</span>
                                        <span>获得52个赞共13个粉丝</span>
                                    </div>
                                </div>
                                <el-button type="danger" size="mini" class="_2Bo4Th" round style="margin-right: 0px;">关注</el-button>
                            </el-row>

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
                                        style=""
                                        :autosize="{ minRows: 2, maxRows: 4}"
                                        placeholder="请输入内容"
                                        v-model="comment_textarea">
                                </el-input>
                            </el-col>
                            <el-col :span="4" :offset="20">
                                <div>
                                    <el-col :span="12"><el-button type="danger" size="mini" round>发布</el-button></el-col>
                                    <el-col :span="12"><el-button type="info" size="mini" round plain>取消</el-button></el-col>
                                </div>
                            </el-col>
                        </el-row>
                    </div>

                    <div class="comment-list">
                        <h3 style="border-left: 4px solid #ec7259;font-weight: 500;height: 20px;line-height: 20px;font-size: 18px;display: flex;">
                            <div style=" padding-left: 12px;width: 75%;">
                                <span>全部评论</span>
                                <span style="margin-left: 6px;font-size: 14px;font-weight: normal;">15</span>
                                <span style="font-size: 12px; font-weight: normal; color: #969696; margin-left: 12px;"></span>
                                <el-tooltip :content="'随心所欲'" placement="top">
                                    <el-switch
                                            v-model="lookSwitch"
                                            active-color="#409EFF"
                                            inactive-color="#ff4949"
                                            active-text="全都要"
                                            inactive-text="只看作者">
                                    </el-switch>
                                </el-tooltip>
                            </div>
                            <div style="display: flex;font-size: 14px;margin-right: 0px;">
                                <span style="margin-left: 12px;">按时间倒序</span>
                                <span style="margin-left: 12px;">按时间正序</span>
                            </div>
                        </h3>
                        <div v-for="(item, key) in 2 ">
                            <el-row>
                                <el-col :span="24" style="display: flex;">
                                    <el-avatar :src="avatarUrl" :size="42" ></el-avatar>
                                    <div style="margin-left: 10px;width: 100%;">
                                        <div><span style="line-height: 22px">uuIOO</span></div>
                                        <div><span class="datePublished">8楼 </span><span class="datePublished">10个月前</span></div>
                                        <p style="font-size: 16px;margin: 8px 0 8px 0;">隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗</p>
                                        <div>
                                            <span class="comment-reply-button"><i class="iconfont icon-dianzan"></i> 赞</span>
                                            <span class="comment-reply-button"><i class="iconfont icon-pinglun"></i> 回复</span></div>
                                        <el-divider class="comment-divider"></el-divider>
                                        <div style="margin-bottom: 20px;">
                                            <el-row>
                                                <el-col :span="24" style="display: flex;">
                                                    <el-avatar :src="avatarUrl" :size="38"></el-avatar>
                                                    <div style="margin-left: 10px;width: 100%;">
                                                        <div><span style="line-height: 22px">村上花开</span></div>
                                                        <div><span class="datePublished">10个月前</span></div>
                                                    </div>
                                                </el-col>
                                                <el-col :span="24" >
                                                    <p>百度网盘很多链接失效了，可以更新下链接吗 dataid 的约定规则</p>
                                                    <div> <span type="text" class="comment-reply-button"><i class="iconfont icon-pinglun"></i> 回复</span></div>
                                                    <el-divider class="comment-divider"></el-divider>
                                                    <div>
                                                        <span class="comment-reply-button"><i class="el-icon-edit"></i>添加新评论</span>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-main>
            </el-col>
            <el-col :span="4">
                <el-main  class="main detail" style="padding: 0px;text-align: center;width: 280px;">
                    <div>
                        <el-row>
                            <el-col :span="24">
                                <el-card shadow="hover" :body-style="{ padding: '0px',marginBottom: '80px' }">
                                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                         class="image">
                                    <div class="blog-avatar">
                                        <router-link :to="{name:'BlogUser'}">
                                            <el-avatar :src="avatarUrl" :size="72" style="vertical-align: middle;cursor: pointer;"></el-avatar>
                                        </router-link>
                                    </div>
                                    <div style="padding: 14px;font-size: 14px;">
                                        <span>王淳的猫</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{ currentDate }}</time><br>
                                            <el-button type="" class="button" plain round>+ 关注</el-button>
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
                <div ref="scrollFixedNav" >
                <el-main  class="main " style="width: 280px;">
                    <BlogRanking/>
                </el-main>
                </div>
            </el-col>
        </el-row>

        <el-footer>
            <Footer/>
        </el-footer>

        </el-container>

        <el-backtop target=".backTop_wrap"></el-backtop>

        <!--查看点赞人-->
        <transition name="el-zoom-in-center">
        <div v-if="play" class="box-card-out" @click="playPopover">
            <div @click.stop="stopPlayPopover">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>4人点赞</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click.stop="playPopover">收回</el-button>
                    </div>
                    <div class="box-card-body" style="padding: 10px;">
                        <div v-for="o in 40" :key="o" class="look-like-text look-like-item">
                            <!--{{'列表内容 ' + o }}-->
                            <a><el-avatar :src="avatarUrl" class="avatar"></el-avatar></a>
                            <el-button type="danger" plain round class="btn-hollow">+ 关注</el-button>
                            <div class="info">
                                <p class="title">xiaotian是个混子</p>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        </transition>
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

                lookSwitch:true,

                play: false,
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

            //绑定页面滚动事件
            window.addEventListener('scroll',this.scrollHandle);
        },
        methods: {
            scrollHandle(e){
                let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
                if(top>493){
                    this.$refs.scrollFixedNav.classList.add('sfixed')
                }else{
                    this.$refs.scrollFixedNav.classList.remove('sfixed')
                }
            },
            goBack() {
                console.log('go back');
                this.$router.push({
                    path: '/blogHome',
                    name: 'BlogHome',
                    params: {
                        key: 'blogId',
                        msgKey: this.blog.id
                    },
                    /*query: {  
                        key: 'key',   
                        msgKey: this.msg  
                    }*/
                })
            },
            open() {
                // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'warning'
                // }).then(() => {
                //     this.$message({
                //         type: 'success',
                //         message: '删除成功!'
                //     });
                // }).catch(() => {
                //     this.$message({
                //         type: 'info',
                //         message: '已取消删除'
                //     });
                // });

                // this.$message('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                //     dangerouslyUseHTMLString: true
                // });

                this.playPopover();
            },

            //显示关闭遮罩层
            playPopover(){
                this.play=!this.play;
            },
            stopPlayPopover(){

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
        cursor: pointer;
        margin-right: 16px;
        color: #b0b0b0;
        font-size: 16px;
    }

    /*左侧点赞/赞赏固定悬浮按钮*/
    .left-fixed{
        position: fixed;
        top: 30%;
        /*left: calc((100vw - 1000px)/2 - 190px);*/
        left: 20%;
        user-select: none;
    }
    .left-fixed-btn{
        cursor: pointer;
        flex-direction: column;
        margin-bottom: 16px;
        font-size: 14px;
        color: rgba(150,150,150,1);
    }

    .rEsl9f {
        display: flex;
        /*justify-content: space-between;*/
        /*align-items: center;*/
        /*margin-bottom: 32px;*/
        /*font-size: 13px;*/
    }
    ._2Bo4Th {
        /*width: 30px;*/
        /*height: 30px;*/
        border: 1px solid #eee;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
    }
    .gt:after {
        font-size: 5px;
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 2px solid #BBBBBB;
        border-right: 2px solid #BBBBBB;
        transform: rotate(45deg);
        margin-left: 7px;
    }
    .d0hShY {
        display: flex;
        align-items: center;
        background-color: #fafafa;
        border-radius: 4px;
        padding: 12px 16px;
    }
    .sfixed{
        position:fixed;
        top:50px;
        z-index:10;
    }
    .comment-divider{
        margin: 16px 0px 16px 0;
    }

    /*全局遮罩层*/
    .box-card-out{
        width: 100%;
        height: 100%;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        background:rgba(0,0,0,0.5);
    }
    .box-card {
        position:fixed;
        background: #fff;
        top: calc(50% - 250px);
        left: calc(50% - 260px);
        width: 640px;
        height: 520px;
        margin-top:auto;
        margin-bottom:auto;
        text-align: left;
        z-index: 11;
    }
    .box-card-body{
        height: 420px;
        overflow: scroll;
        overflow-x:hidden
    }
    .look-like-text {
        font-size: 14px;
    }
    .look-like-item {
        margin-bottom: 18px;
        display: block;
        width: 100%;
        line-height: 50px;
        border-bottom: 1px solid rgb(249,249,249);
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }


    .avatar {
        float: left;
        width: 52px;
        height: 52px;
        margin-right: 8px;
    }
    .info{
        max-width: 450px;
    }
    .btn-hollow{
        float: right;
        margin-top: 8px;
        padding: 8px 0;
        width: 100px;
        font-size: 15px;
        box-sizing: border-box;
    }
</style>