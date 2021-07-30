<template>
    <div>
        <!--<PanelTitle msg="区" style="margin-left: -10px;"/>-->
        <!--<BlogListPage/>-->

        <div style="margin-bottom: 10px;">
            <el-card>
                <div style="font-size: 14px;text-align: left;">
                    <el-row>
                        <el-col :span="24" style="margin-bottom: 10px;">
                            <el-input
                                    type="textarea"
                                    style=""
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="有什么新鲜事想分享给大家"
                                    v-model="quickUserTopic.topicContent">
                            </el-input>
                        </el-col>
                        <el-col :span="4" :offset="21">
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
                            <div><span style="line-height: 22px;font-size: 14px;font-weight: bold;">{{item.auhor}}</span></div>
                            <div><span class="datePublished">8楼 </span><span class="datePublished">6-22 23:53 知名搞笑幽默博主</span></div>
                            <p style="font-size: 14px;margin: 8px 0 8px 0;">{{item.content}}</p>
                            <div style="width: 370px;">
                                <div v-for="o in 9" :key="o">
                                    <el-col :span="8">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                             style="width: 120px;border-radius: 5px;"
                                        />
                                    </el-col>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" style="text-align: center;line-height: 30px;margin-top: 10px;cursor: pointer;" class="datePublished">
                        <el-col :span="8">
                            <a><span class="iconfont  icon-chakanguo"> </span>&nbsp;转发</a>
                        </el-col>
                        <el-col :span="8">
                            <a><span class="iconfont  icon-pinglun"> </span>&nbsp;评论</a>
                        </el-col>
                        <el-col :span="8">
                            <a><span class="iconfont  icon-dianzan"> </span>&nbsp;赞</a>
                        </el-col>
                    </el-col>
                </el-row>

            </el-card>
        </div>

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
                        auhor: '全是另类',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    },
                    {
                        auhor: '全是另类.',
                        content: '隔离手段只要能满足你们业务场景那种都可以，只是如果所有微服务要公用一套common配置文件的时候，有解决方案吗',
                    }
                ]
            }
        },
        methods: {
            load () {
                this.count += 2
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