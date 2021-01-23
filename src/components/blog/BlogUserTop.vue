<template>
    <div>
        <el-avatar :src="avatarUrl" class="avatar"></el-avatar>
        <el-button type="success" round class="btn-hollow">+ 关注</el-button>
        <el-button type="success" plain  round class="btn-hollow">留言</el-button>
        <div style="margin-left: 8px;padding: 5px 0px 0px 80px;">
            <div style="height: auto;">
                <span style="font-size: 21px;font-weight: 700;">{{blog.userId}}Randolph555</span>
                <i class="iconfont  icon-chakanguo"></i>
            </div>
            <div class="top-info">
                <ul>
                    <li @click="hrefToBlogUserFollowers_1">
                        <p>6</p>关注<i  class="iconfont icon-right-arrow"></i>
                    </li>
                    <li @click="hrefToBlogUserFollowers_2">
                        <p>67</p>粉丝<i class="iconfont icon-right-arrow"></i>
                    </li>
                    <li @click="hrefToBlogUser">
                        <p>48</p>文章<i class="iconfont icon-right-arrow"></i>
                    </li>
                    <li>
                        <p>64545</p>字数
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import VueEvent from '../../common/VueEvent.js'

    export default {
        name: "BlogUserTop",
        data(){
            return {
                blog: { },

                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",


            }
        },
        methods:{
            hrefToBlogUser(){
                this.$router.push({
                    path: '/blogUser',
                    query:{
                        p: "first"
                    }
                })
            },
            hrefToBlogUserFollowers_1(){
                VueEvent.$emit('blog_top_activeName', "first");
                this.$router.push({
                    name: 'BlogUserFollowers',
                    params:{
                        p:"first"
                    }
                });
            },
            hrefToBlogUserFollowers_2(){
                VueEvent.$emit('blog_top_activeName', "second");
                this.$router.push({
                    name: 'BlogUserFollowing',
                    params:{
                        p:"second"
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .avatar {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: -2px;
    }
    .top-info{
        display: flex;
        padding: 0px;
        margin-top: 5px;
    }
    .top-info> ul{
        list-style-type: none;
        padding: 0px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .top-info> ul> li{
        float: left;
        font-size: 12px;
        color: rgb(150,150,150);
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
        cursor: pointer;
    }
    .top-info> ul> li:last-child{
        border-right: 0px ;
    }
    .top-info> ul> li> p{
        font-size: 15px;
        color: black;
        margin: 0;
    }
    .top-info> ul> li> i{
        font-size: 10px;
    }
    .btn-hollow{
        float: right;
        margin: 23px 0 23px 16px;
        font-size: 15px
    }
</style>