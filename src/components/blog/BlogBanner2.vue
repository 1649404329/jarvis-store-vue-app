<template>
    <div>
        <div style="flex-direction: column;font-size: 14px;">
            <div>
                <span>首页</span>
            </div>
            <div>
                <span>我的赞</span>
            </div>
            <div>
                <span>我的收藏</span>
            </div>
            <el-divider direction="horizontal"></el-divider>
            <div>
                <span>我的创作</span>
            </div>
            <el-divider direction="horizontal"></el-divider>
            <div>
                <span>文章池</span>
            </div>
            <el-divider direction="horizontal"></el-divider>
            <div>
                <span>好友圈</span>
            </div>
            <el-divider direction="horizontal"></el-divider>
            <div>
                <span>特别关注</span>
            </div>
            <el-divider direction="horizontal"></el-divider>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogBanner",
        data() {
            return {
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            };
        },
    }
</script>

<style scoped>


</style>