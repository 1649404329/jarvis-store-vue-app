<template>
    <div class="wrapper"  style="height:100%; ">
        <el-backtop target=".wrapper" :visibility-height="20" :right="40" :bottom="40"></el-backtop>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <div style="margin-top: 40px;">

                <div class="editor-title">
                    <el-input
                            class="rule-input-title"
                            type="text"
                            placeholder="请在这里输入标题"
                            v-model="article.textTitle"
                            maxlength="64"
                            show-word-limit
                    ></el-input>
                    <el-input
                            class="rule-input-author"
                            type="text"
                            placeholder="请在这里输入作者"
                            v-model="article.textAuthor"
                            maxlength="10"
                            show-word-limit
                    ></el-input>
                </div>
                <div class="my-editor-area"><Editor v-model="article.content"></Editor></div>

                <div class="editor-extend">
                    <el-divider></el-divider>
                    <div class="setting-group__cover_area">
                        <div class="setting-group__title">
                            封面和摘要
                        </div>
                        <div class="setting-group__content">
                            <!--<div class="js_cover">-->
                            <!--<el-upload-->
                            <!--class="avatar-uploader"-->
                            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                            <!--:show-file-list="false"-->
                            <!--:on-success="handleAvatarSuccess"-->
                            <!--:before-upload="beforeAvatarUpload">-->
                            <!--<img v-if="imageUrl" :src="article.imageUrl" class="avatar">-->
                            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                            <!--</el-upload>-->
                            <!--</div>-->
                            <div class="js_description_area">
                                <el-input
                                        style="width: 300px;"
                                        type="textarea"
                                        placeholder="请输入内容"
                                        v-model="article.textarea"
                                        maxlength="30"
                                        show-word-limit
                                >
                                </el-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-save">
                <div style="padding: 20px 60px 15px 30px;">
                    <div style="float: left; margin-top: 5px;vertical-align: middle; font-size: 16px;">正文字数 0</div>
                    <div style="float: right;">
                        <el-button type="success" @click="saveMyArticle()">保存</el-button>
                        <el-button >预览</el-button>
                    </div>
                </div>
            </div>

        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'
    import Editor from '@/components/common/QuillEditor.vue'
    export default {
        name: "BlogAdd.vue",
        components: {
            Header,
            Footer,
            Editor,
        },
        data() {
            return {
                article: {
                    id:'',
                    textTitle: '',
                    content: '',
                    textAuthor: '',
                    imageUrl: '',
                    textarea: '',
                },
                ruleForm: {
                    id: '',
                    title: '',
                    content: '',
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                        {min: 3, max: 100, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请填写内容', trigger: 'blur'}
                    ]
                },


                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                }
            };
        },
        created() {
            // const blogId = this.$route.params.blogId
            // this.queryArticle(blogId);
        },
        mounted(){

        },
        methods: {
            //查询文章
            queryArticle(blogId){
                const _this = this

                console.log("编辑页博客id="+blogId)
                if (blogId) {
                    this.$axios.get('/api-activity/blog/detail/' + blogId).then(res => {
                        const blog = res.data.data
                        _this.ruleForm.id = blog.id
                        _this.ruleForm.title = blog.title
                        _this.ruleForm.content = blog.content
                        _this.article.id = blog.id
                        _this.article.textTitle = blog.title
                        _this.article.textAuthor = blog.author
                        _this.article.imageUrl = blog.imageUrl
                        _this.article.content = blog.content
                    })
                }
            },
            //保存文章
            saveMyArticle(){
                this.$message({
                    type: 'info',
                    message: this.article,
                });
            },

            //通过form表单保存文章
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this;
                        _this.$axios.post('/post/blog/edit', this.ruleForm, {
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        }).then(res => {
                            //成功跳到博客列表页面
                            this.$alert('操作成功', '提示', {
                                confirmButtonText: '确定',
                                showClose: false,
                                callback: action => {
                                    /*this.$message({
                                        type: 'info',
                                        message: `action: ${action}`
                                    });*/
                                    this.$router.push("/blogs")
                                }
                            });
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

        }
    }
</script>
<style>
    .my-editor-area {
        margin: 0 auto;
        min-height: 300px;
        height: auto;
    }
    /**
    编辑器样式
     */
    .editor {
        height: 100%;
    }
    .ql-toolbar {
        background-color: rgb(250,250,250);
        position: fixed;
        top: 60px;
        z-index: 21;
        width: 100%;
        border: none !important;
    }
    .ql-container {
        border: none !important;
        min-height: 200px;
        height: auto;
    }
    .ql-editor {
        padding: 26px;
        margin: 0 auto;
        width: 50%;
        min-height: 300px;
        height: auto;
        z-index: 10;
        background-color: rgb(255,255,255);
    }
    .ql-editor.ql-blank::before {
        margin: 0 auto;
        width: 50%;
        color: rgba(0,0,0,0.6);
        content: attr(data-placeholder);
        font-style: italic;
        padding-left: 45px;
        pointer-events: none;
        position: absolute;
        right: 15px;
    }
</style>
<style>
    .main {
        height: auto;
        text-align: left;
        box-sizing: border-box;
    }

    .detail {
        margin-top: 60px;
        /*text-align: center;*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        /*width: 96%;*/
        min-height: 300px;
        padding: 20px;
        box-sizing: border-box;
    }
    .form-save {
        position: fixed;
        background-color: rgb(255,255,255);
        left:0;
        right:0;
        bottom:0;
        width:50%;
        height:80px;
        margin: 0 auto;
        z-index: 20;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }


    /**
    文章设置
    */
    .editor-title {
        margin: 100px auto 0;
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
        left: 0;
        right: 0;
        background-color: rgb(255,255,255);
    }
    .editor-extend {
        background-color: rgb(255,255,255);
        left: 0;
        right: 0;
        box-sizing: border-box;
        padding: 1px 26px 100px 26px;
        margin: 0 auto;
        width: 50%;
        height: 100%;
        color: rgba(0,0,0,0.6);
    }
    .setting-group__title {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    .setting-group__cover_area {
        margin-bottom: 50px;
        text-align: left;
    }
    .setting-group__content {

    }
    /**
    标题input去边框
    */
    .rule-input-title input.el-input__inner {
        border: none;
        font-size: 20px;
    }
    .rule-input-author input.el-input__inner {
        border: none;
        font-size: 14px;
    }
    /**
    封面
     */
    .js_cover {
        display: inline-block;
    }
    .avatar-uploader .el-upload {
        display: none;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 200px;
        height: 80px;
        line-height: 60px;
        text-align: center;
    }
    .avatar {
        width: 80px;
        height: 80px;
        display: block;
    }
    /**
    摘要
     */
    .js_description_area {
        margin-left: 20px;
        display:inline-block;
    }
</style>