<template>
    <div>
        <el-row>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>热门话题</span>
                    <el-button @click="getByRecommend" style="float: right; padding: 3px 0" type="text"><i class="el-icon-refresh"></i> 换一批</el-button>
                </div>
                <div :key="blog.id" v-for="blog in blogsOfRecommend">
                    <div class="whiteTopic font-small">
                        <router-link
                            :to="{name:'BlogDetail',params:{blogId:blog.id}}"  >
                        <el-col :span="18" style="display:-webkit-box;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
                            <span>#{{blog.title}}</span>
                            <span>#{{blog.userId}}</span>
                        </el-col>
                        <el-col :span="6"  style="height: auto;text-overflow: clip;">
                            <span style="float: right;"> {{blog.viewCount}}亿</span>
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
        name: "HotTopic",
        data() {
            return {
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                blogsOfRecommend: {},
            }
        },
        created() {
            this.getByRecommend()
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