<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部公告" name="first">
                <div class="tab-pane-content-text">
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【平台公告】测试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【商品公告】新测试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【商品公告】更测试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【商品公告】更新测试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【平台公告】更新公告试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="平台公告" name="second">
                <div class="tab-pane-content-text">
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【平台公告】更新公告更新</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-col :span="1"><i class="el-icon-message"></i></el-col>
                        <el-col :span="17">
                            <span>【商品公告】更新测试公告</span>
                            <span style="color: #909399">159****4812</span>
                        </el-col>
                        <el-col :span="6">
                            <span>2020-10-01 12:01:12</span>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="交易公告" name="third">角色管理</el-tab-pane>
        </el-tabs>

        <el-col :span="8">
            <div class="grid-content bg-purple"></div>
        </el-col>

        <el-col :span="8"><el-pagination small background layout="prev, pager, next" :total="1000"></el-pagination></el-col>
    </div>
</template>

<script>
    export default {
        name: "Bulletin",
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .tab-pane-content-text {
        margin-top: 16px;
        margin-bottom: 20px;
        font-size: 10px;
        padding-left: 20px;
        text-align: left;
        box-sizing: border-box;
    }
    .el-divider {
        margin: 10px 0;
    }
</style>