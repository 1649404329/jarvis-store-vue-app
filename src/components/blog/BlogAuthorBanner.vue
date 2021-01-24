<template>
    <div>
        <div class="board">
            <div>
                <span class="title">推荐作者</span>
                <a class="page-change"><i class="el-icon-refresh"></i>换一批</a>
            </div>
            <div>
                <div class="author-list">
                    <el-row v-for="(item, key) in 5 " class="author-list-item">
                        <router-link :to="{name:'BlogUser'}">
                            <el-avatar :src="avatarUrl" class="avatar"></el-avatar>
                        </router-link>
                        <el-button type="text" class="btn-hollow">+ 关注</el-button>
                        <div class="info">
                            <p class="title">xiaotian是个混子</p>
                            <div class="meta">
                                <span>写了371.2k字 · 1.4k喜欢</span>
                            </div>
                        </div>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogAuthorBanner"
    }
</script>

<style scoped>
    .board{
        text-align: left;
    }
    .title{
        text-align: left;
        font-size: 14px;
        color: #969696;
        box-sizing: border-box;
    }
    .page-change{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
    }
    .author-list{
        list-style-type: none;
        clear: both;
        padding-left: 0;
    }
    .author-list-item{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 8px;
    }
    .info{
        width: 100%;
    }
    .info .title {
        margin: -2px 0 4px;
        display: inherit;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .btn-hollow{
        float: right;
        margin-top: 8px;
        padding: 8px 0;
        font-size: 10px;
    }
    .author-list .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
    .author-list .meta span {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .author-list .meta a i{
        font-size: 12px;
    }
    .author-list .meta a {
        margin-right: 10px;
        color: #b4b4b4;
    }
</style>