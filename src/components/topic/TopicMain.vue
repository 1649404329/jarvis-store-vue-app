<template>
    <div>
        <!--<PanelTitle msg="区" style="margin-left: -10px;"/>-->
        <!--<BlogListPage/>-->

        <div style="margin-bottom: 10px;">
            <el-card>
                <div style="text-align: left;">
                    <el-row>
                        <el-col :span="24" style="margin-bottom: 10px;">
                            <el-input
                                    type="textarea"
                                    style="color: black;"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="有什么新鲜事想分享给大家"
                                    v-model="quickUserTopic.topicContent">
                            </el-input>
                        </el-col>
                        <el-col :span="24">
                            <div style="margin-bottom: 10px;">
                                <el-upload
                                    action="#"
                                    list-type="picture-card"
                                    :auto-upload="false">
                                <i slot="default" class="el-icon-plus"></i>
                                <div slot="file" slot-scope="{file}">
                                    <img
                                            class="el-upload-list__item-thumbnail"
                                            :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                >
                                  <i class="el-icon-zoom-in"></i>
                                </span>
                                <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                >
                                  <i class="el-icon-download"></i>
                                </span>
                                <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                >
                                  <i class="el-icon-delete"></i>
                                </span>
                              </span>
                                </div>
                            </el-upload>
                            </div>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-col>
                        <el-col :span="22">
                            <span style="font-size: 22px;color: rgb(147,147,147);">
                                <el-tooltip class="item" effect="dark" content="投票" placement="top">
                                    <a><i class="el-icon-mobile" @click="dialogFormVisible = true"></i>&nbsp;</a>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="艾特" placement="top">
                                    <a @click="editTopicAdd('@')"><span>@&nbsp;</span></a>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="话题" placement="top">
                                    <a @click="editTopicAdd('#')"><span>#&nbsp;</span></a>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="图片" placement="top">
                                    <a><i class="el-icon-picture-outline"  @click="dialogFormVisible = true"></i>&nbsp;</a>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="位置" placement="top">
                                    <a><i class="el-icon-location-outline"  @click="dialogFormVisible = true"></i>&nbsp;</a>
                                </el-tooltip>
                            </span>
                        </el-col>
                        <el-col :span="2">
                            <div>
                                <el-col :span="11"><el-button type="warning" size="mini" round @click="saveQuickUserTopic">发送</el-button></el-col>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </div>

        <div v-for="item in userTopicList" :key="item"  class="text item">
            <el-card class="box-card" shadow="never" style="margin-bottom: 10px;">
                <el-row>
                    <el-col :span="24" style="display: flex;">
                        <el-avatar :src="avatarUrl" :size="45" ></el-avatar>
                        <div style="margin-left: 10px;width: 100%;">
                            <div><span style="line-height: 22px;font-size: 14px;font-weight: bold;">{{item.author}}</span></div>
                            <div><span class="datePublished">8楼 </span><span class="datePublished">6-22 23:53 知名搞笑幽默博主</span></div>
                            <p style="font-size: 14px;margin: 8px 0 8px 0;">{{item.content}}</p>

                            <div style="width: 500px;background-color: rgb(249,249,249);margin-bottom: 20px;padding: 10px;">
                                <p><span style="font-size: 14px;">Q：微信支持多设备同时在线，你觉得能怎么样</span></p>
                                <p><el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress></p>
                                <p><el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress></p>
                                <p><el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress></p>
                                <p><el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress></p>
                            </div>

                            <div style="width: 370px;">
                                <div v-for="o in 9" :key="o">
                                    <el-col :span="8">
                                        <el-image
                                                :preview-src-list="topicUrls"
                                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                             style="width: 120px;border-radius: 5px;"
                                        />
                                    </el-col>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" style="text-align: center;line-height: 30px;margin-top: 10px;cursor: pointer;" class="datePublished">
                        <a><el-col :span="8">
                            <a><span class="iconfont  icon-chakanguo"> </span>&nbsp;转发</a>
                        </el-col></a>
                        <a><el-col :span="8">
                            <a><span class="iconfont  icon-pinglun"> </span>&nbsp;评论</a>
                        </el-col></a>
                        <a><el-col :span="8">
                            <a><span class="iconfont  icon-dianzan"> </span>&nbsp;赞</a>
                        </el-col></a>
                    </el-col>
                </el-row>

            </el-card>
        </div>

        <!--dialog-->
        <el-dialog title="投票内容" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref="dynamicValidateForm">
                <el-form-item label="标题" :label-width="formLabelWidth"
                              :rules="{  required: true, message: '标题不能为空', trigger: 'blur'  }">
                    <el-input v-model="form.name" type="text" size="small "
                              placeholder="请输入内容" maxlength="30"
                              show-word-limit autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  :label-width="formLabelWidth"
                        v-for="(domain, index) in form.domains"
                        :label="'选项' + (index+1)"
                        :key="domain.key"
                        :prop="'domains.' + index + '.value'"
                        :rules="{  required: true, message: '选项不能为空', trigger: 'blur'  }"
                >
                    <el-col :span="16"><el-input v-model="domain.value" size="small " maxlength="30" show-word-limit ></el-input></el-col>
                    <el-col :span="1" :offset="1"><el-button @click.prevent="removeDomain(domain)"  size="small ">删除</el-button></el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="16" :offset="5">
                    <el-button @click="addDomain"  size="small ">新增域名</el-button>
                    <el-button @click="resetForm('dynamicValidateForm')"  size="small ">重置</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import BlogListPage from '@/components/blog/BlogListPage.vue'
    import PanelTitle from '@/components/common/PanelTitle.vue'

    export default {
        name: "TopicMain",
        data () {
            return {
                count: 0,
                //快速编辑话题
                quickUserTopic: {
                    topicContent: '',
                },
                //话题列表数据
                userTopicList:[
                    // userTopic: {
                    //     topicContent: '',
                    // },
                    {
                        author: '全是另类',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    },
                    {
                        author: '全是另类.',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    }
                ],

                topicUrls: ["https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006wpMnaly8gq15cd3saxj30ro0romyz.jpg?KID=imgbed,tva&Expires=1627124560&ssig=E9hopwu17f",
                "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",],


                // dialog
                dialogFormVisible: false,
                formLabelWidth: '120px',
                form: {
                    domains: [{
                        value: ''
                    }],
                    name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                },

                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
            }
        },
        methods: {
            load () {
                this.count += 2
            },

            editTopicAdd(content){
              this.quickUserTopic.topicContent=this.quickUserTopic.topicContent+ content;
            },

            saveQuickUserTopic(){
                this.$message({
                    type: 'success',
                    message: this.quickUserTopic.topicContent,
                });
                let message = this.quickUserTopic.topicContent;
                let userTopic = {
                    auhor: '全是另类.2222',
                    content: message
                };
                this.userTopicList.unshift(userTopic)
                this.quickUserTopic.topicContent = '';
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.form.domains.indexOf(item)
                if (index !== -1) {
                    this.form.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.form.domains.push({
                    value: '',
                    key: Date.now()
                });
            },

            //上传图片
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            }
        },
        components: {
            PanelTitle,
            BlogListPage,
        },
    }
</script>

<style scoped>
    .datePublished{
        font-size: 12px;
        color: rgb(147,147,147);
    }
</style>