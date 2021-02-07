<template>
    <div>
        <el-row :gutter="20">
            <!--<el-col :span="16">-->
                <div class="font-size-middle bg-withe" style="float: left;">
                    <el-col :span="4" style="color:rgb(0,126,233);;">
                        <i class="el-icon-star-off"></i>&nbsp;
                        <span>我的收藏</span>
                    </el-col>
                    <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4" style="color: rgb(0,126,233);">
                        <i class="el-icon-edit"></i>&nbsp;
                        <span>我的创作</span>
                    </el-col>
                    <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4" style="color:rgb(0,126,233);;">
                        <i class="el-icon-view"></i>&nbsp;
                        <span>我的关注</span>
                    </el-col>
                    <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4" style="color: rgb(0,126,233);;">
                        <i class="el-icon-orange"></i>&nbsp;
                        <span>文章池</span>
                    </el-col>
                    <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4" style="color:rgb(0,126,233);;">
                        <i class="el-icon-orange"></i>&nbsp;
                        <span>闲聊区</span>
                    </el-col>
                </div>
            <!--</el-col>-->

            <el-col :span="6" offset="2" style="float: right;">
                <div class="font-size-small bg-withe">
                    <el-col :span="5">
                        <span>关注</span><br/>
                        <span>45</span>
                    </el-col>
                    <el-col :span="4"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="6">
                        <span>粉丝</span><br/>
                        <span>548</span>
                    </el-col>
                    <el-col :span="4"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="5">
                        <span>获赞</span><br/>
                        <span>45K</span>
                    </el-col>
                </div>
            </el-col>
        </el-row>
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

    .bg-withe {
        background: #ffffff;
    }
    .font-size-middle{
        font-size: 15px;
    }
    .font-size-small{
        font-size: 12px;
    }
</style>