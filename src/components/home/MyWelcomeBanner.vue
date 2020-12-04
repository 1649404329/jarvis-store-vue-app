<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-withe">
                    <el-avatar :size="36" :src="avatarUrl" style="margin-right: 10px"></el-avatar>
                    <span>晚上好，亲爱的用户</span>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="font-size-small bg-withe">
                    <el-col :span="5">
                        <span>关注</span><br/>
                        <span>45</span>
                    </el-col>
                    <el-col :span="4"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="6">
                        <span>我的粉丝</span><br/>
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
        name: "MyWelcomeBanner",
        data() {
            return {
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            };
        },
    }
</script>

<style scoped>

    .el-row {

    /*margin-bottom: 20px;*/
    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-withe {
        background: #ffffff;
    }
    .font-size-small{
        font-size: 12px;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        min-height: 36px;
        text-align: left;
        float: left;
        display: flex;
        line-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>