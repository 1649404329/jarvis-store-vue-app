<template>
    <div>
        <el-row>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>文章排行榜</span>
                    <el-button @click="getByRecommend" style="float: right; padding: 3px 0;color: rgb(205,205,205);" type="text"><i class="el-icon-refresh"></i> 换一批</el-button>
                </div>
                <div :key="blog.id" v-for="blog in blogsOfRecommend">
                    <div class="whiteTopic font-small">
                        <router-link
                            :to="{name:'BlogDetail',params:{blogId:blog.id}}" >
                        <el-col :span="8">
                            <el-image
                                    style="max-width: 120px; height: 60px"
                                    :src="url"
                                    :fit="fill"></el-image>
                        </el-col>
                        <el-col :span="14"  :offset="2" style="height: 60px;white-space:nowrap;text-overflow: clip;">
                            <span> {{blog.title}}</span>
                            <p style=" "> {{blog.userId}} <span style="float: right;"><i  class="el-icon-view"></i> {{blog.viewCount}}</span></p>
                        </el-col>
                        </router-link>
                    </div>
                </div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "BlogRanking",
        data() {
            return {
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                blogsOfRecommend: [
                    {"title":"标题","createTime":1627121613000,'userId':0,'viewCount':23},
                    {"title":"标题","createTime":1627121613000,'userId':0,'viewCount':23},
                    {"title":"标题","createTime":1627121613000,'userId':0,'viewCount':23},
                    {"title":"标题","createTime":1627121613000,'userId':0,'viewCount':23},
                ],
            }
        },
        created() {
            this.getByRecommend(1)
        },
        methods: {
            getByRecommend() {
                const _this = this
                _this.$axios.get("/api-activity/blog/getByRecommend").then(res => {
                    const response = res.data;
                    this.blogsOfRecommend = response.data
                })
            }
        },
    }
</script>

<style scoped>
    .whiteTopic {
        /*background-color: rgba(240, 242, 245, 1);*/
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        border-radius: 4px;
        margin: 0 0 10px;
    }

    .font-small {
        font-size: 12px;
    }


    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: auto;
    }
</style>