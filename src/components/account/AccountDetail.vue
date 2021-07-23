<template>
    <div class="block">
        <el-tabs><!--type="border-card"-->
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> 精选</span>
                <div class="tab-pane-content-text">
                    <el-row>
                        <el-col :span="1"><i class="el-icon-lock"></i></el-col>
                        <el-col :span="19">
                            <span> 支付密码</span>
                            <br>
                            <span style="color: #909399"> 状态：已设置</span>
                        </el-col>
                        <el-col :span="4"><el-button type="text">修改</el-button></el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-mobile-phone"></i></el-col>
                        <el-col :span="19">
                            <span> 已绑定手机号</span>
                            <br>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="4"><el-button type="text">解绑</el-button></el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-lock"></i></el-col>
                        <el-col :span="19">
                            <span> 已绑定微信</span>
                            <br>
                            <span style="color: #909399">*立*</span>
                        </el-col>
                        <el-col :span="4"><el-button type="text" disabled>请联系客服解绑</el-button></el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-lock"></i></el-col>
                        <el-col :span="19">
                            <span> 已绑定支付宝</span>
                            <br>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="4"><el-button type="text" disabled>请联系客服解绑</el-button></el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="19">
                            <span> 已绑定邮箱</span>
                            <br>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="4"><el-button type="text">解绑</el-button></el-col>
                    </el-row>
                </div>
            </el-tab-pane>

            <el-tab-pane label="微博">
                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                <el-divider></el-divider>
                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
            </el-tab-pane>

            <el-tab-pane label="相册">我的关注</el-tab-pane>

        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "BlogListPage"
    }
</script>

<style scoped>
    .tab-pane-content-text {
        margin-top: 16px;
        font-size: 13px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .el-divider{
        margin: 10px 0;
    }
</style>