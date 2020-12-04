<template>
    <div class="block">
        <el-timeline>

            <el-timeline-item :timestamp="blog.createTime" placement="top" v-for="blog in blogs">
                <el-card>
                    <h4>{{blog.title}}</h4>
                    <p>{{blog.userId}} 提交于 {{blog.createTime}}</p>
                </el-card>
            </el-timeline-item>

        </el-timeline>
        <el-pagination
                background
                layout="prev, pager, next"
                @size-change="handleSizeChange"
                @current-change="page"
                :currentPage="currentPage"
                :total="total"
                :page-size="pageSize"
                :page-sizes="[2,4,6]">
        </el-pagination>

        <el-image
                style="width: 100px; height: 100px;margin-right: 10px;"
                :src="url"
                :preview-src-list="srcList">
        </el-image>
    </div>
</template>

<script>
    export default {
        name: "BlogListPage",
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                blogs: {},
                currentPage: 1,
                total: 0,
                pageSize: 5,
            }
        },
        created() {
            this.page(1)
        },
        methods: {
            handleSizeChange(pageSize) {
                const _this = this
                _this.$axios.get("/api-activity/blog/pageBlog?currentPage=1&pageSize=" + pageSize).then(res => {
                    const response = res.data;
                    this.blogs = response.data.records
                    this.currentPage = response.data.current
                    this.total = response.data.total
                    this.pageSize = response.data.size
                })
            },
            page(currentPage) {
                const _this = this
                _this.$axios.get("/api-activity/blog/pageBlog?currentPage=" + currentPage + "&pageSize=" + this.pageSize).then(res => {
                    const response = res.data;
                    this.blogs = response.data.records
                    this.currentPage = response.data.current
                    this.total = response.data.total
                    this.pageSize = response.data.size
                })
            }
        },
    }
</script>

<style scoped>

</style>