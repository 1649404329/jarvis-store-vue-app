<template>
    <div class="block">
        <div>
            <el-timeline>
                <el-timeline-item 
                :timestamp="dateFormat(blog.createTime)"
                placement="top"
                :key="blog.id"
                v-for="blog in blogs">
                    <el-card shadow="hover">
                        <h3>
                            <router-link
                            :to="{name:'BlogDetail',params:{blogId:blog.id}}"  target="_blank">{{blog.title}}</router-link>
                        </h3>
                        <p class="blog-content" v-html="blog.content"></p>
                        <p style="align-items: center;display: flex;"><el-avatar :src="url" :size="30" ></el-avatar>
                            <span>{{blog.userId}} 提交于 {{dateFormat(blog.createTime)}}</span></p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
            <el-pagination
                    style="text-align: center;"
                    background
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="page"
                    :currentPage="currentPage"
                    :total="total"
                    :page-size="pageSize"
                    :page-sizes="[2,4,6]">
            </el-pagination>
            <!--<el-image-->
                    <!--style="width: 100px; height: 100px;margin-right: 10px;"-->
                    <!--:src="url"-->
                    <!--:preview-src-list="srcList">-->
            <!--</el-image>-->
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
                _this.$axios.get("/api-activity/blog/pageBlog?currentPage=" + currentPage + "&pageSize=" + this.pageSize
                    // ,{
                    // headers: {
                    //     "token": "dsdsd",//localStorage.getItem("token")，
                    //     "userId": "4545"
                    // }}
                    ).then(res => {
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

            dateFormat(time){
                let date = new Date(time);
                let year = date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                 * */
                let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                // 拼接
                return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
            }
        },
    }
</script>

<style scoped>

    .blog-content{
        display:-webkit-box;
        text-overflow:ellipsis;
        overflow:hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient:vertical;
    }
</style>