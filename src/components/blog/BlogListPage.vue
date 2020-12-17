<template>
    <div class="block">
        <div>
            <el-timeline>
                <el-timeline-item 
                :timestamp="blog.createTime" 
                placement="top"
                :key="blog.id"
                v-for="blog in blogs">
                    <el-card>
                        <h3>
                            <router-link
                            :to="{name:'BlogDetail',params:{blogId:blog.id}}"  target="_blank">{{blog.title}}</router-link>
                        </h3>
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
        //=====滚动回原来位置====
        mounted() {
            window.CateListScrollTop = 0;
        },
        beforeRouteLeave (to, from, next) {
        //离开该页面的时候把高度记录
            window.CateListScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            next()
        },
        activated() { 
        //返回的时候滚动到记录的高度
        //延时200ms，不延迟滚动的话，有商品页内容高度比较小的情况就返不回原来的位置
            setTimeout(() => {
            window.scrollTo(0, window.CateListScrollTop);
            }, 200);
        },
        //=====滚动回原来位置====
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
            },
            goBack() {
                console.log('go back');
            },
        },
    }
</script>

<style scoped>

</style>