<template>
    <div class="wrapper"  style="height:100%; ">
        <el-backtop target=".wrapper" :visibility-height="20" :right="40" :bottom="40"></el-backtop>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-row style="margin: 0 auto;">
                <div>
                    <div style="width: 800px;float: left;">
                        <el-main  class="main detail">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="标题" prop="title">
                                    <el-input v-model="ruleForm.title"></el-input>
                                </el-form-item>

                                <el-form-item label="内容" prop="content">
                                    <mavon-editor v-model="ruleForm.content"
                                                  defaultOpen ='preview'></mavon-editor>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-main>
                    </div>
                </div>
            </el-row>

        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'

    export default {
        name: "BlogEdit",
        data() {
            return {
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
        components: {
            Header,
            Footer,
        },
        created() {
            const _this = this
            const blogId = this.$route.params.blogId
            if (blogId) {
                this.$axios.get('/post/blog/' + blogId).then(res => {
                    const blog = res.data.data
                    _this.ruleForm.id = blog.id
                    _this.ruleForm.title = blog.title
                    _this.ruleForm.content = blog.content
                })
            }
        },
        mounted(){

        },
        methods: {
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
            }
        }
    }
</script>

<style scoped>
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
</style>