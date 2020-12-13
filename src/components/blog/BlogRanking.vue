<template>
    <div>
        <el-row>
            <div :key="blog.id" v-for="blog in blogsOfRecommend">
                <div class="whiteTopic font-small">
                    <el-col :span="8">
                        <el-image
                                style="width: 80px; height: 60px"
                                :src="url"
                                :fit="fill"></el-image>
                    </el-col>
                    <el-col :span="14"  :offset="2" style="height: 60px;white-space:nowrap;text-overflow: clip;">
                        <span> {{blog.title}}</span>
                        <p style=" "> {{blog.userId}} <span style="float: right;"><i  class="el-icon-view"></i> {{blog.viewCount}}</span></p>
                    </el-col>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "BlogRanking",
        data() {
            return {
                url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                blogsOfRecommend: {},
            }
        },
        created() {
            this.page(1)
        },
        methods: {
            page(currentPage) {
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
</style>