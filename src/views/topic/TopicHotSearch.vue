<template>
    <div class="blogHome wrapper" style="height:100%;">
        <el-backtop :visibility-height="20" :right="40" :bottom="40">UP</el-backtop>
        <el-container>

            <el-header>
                <Header/>
            </el-header>

            <el-row style="width: 100%;height: 100%;background-color: #FFFFFF;">
                <div style="width: 700px;margin: 0 auto ;margin-top: 70px;margin-bottom: 50px;" class="hot_table">
                    <el-table
                            :data="tableData"
                            size="mini"
                            style="width: 100%">
                        <el-table-column
                                prop="num"
                                label="序号"
                                width="100">
                            <template slot-scope="scope">
                                <span style="color: rgb(242,109,95);cursor: pointer;">{{scope.row.num}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="关键词"
                                width="500">
                            <template slot-scope="scope">
                                <span style="color: rgb(0,145,255);cursor: pointer;font-size: 13px;">{{scope.row.name}}&nbsp;&nbsp;</span>
                                <span style="color: rgb(110,110,111);cursor: pointer;font-size: 12px;">{{scope.row.viewCount}}&nbsp;&nbsp;</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="tag"
                                label="">
                            <template slot-scope="scope">
                                <el-tag v-if="scope.row.tag==='新'"
                                        size="mini"
                                        type="danger"
                                        effect="dark">
                                    {{scope.row.tag}}
                                </el-tag>
                                <el-tag v-if="scope.row.tag==='热'"
                                        size="mini"
                                        type="warning"
                                        effect="dark">
                                    {{scope.row.tag}}
                                </el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-row>
        </el-container>

        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'

    export default {
        name: "TopicHotSearch",
        data(){
            return{
                tableData: [{
                    num: 1,
                    date: '2016-05-02',
                    name: '肖若腾获自由体操铜牌',
                    tag: '新',
                    viewCount: 6077038
                }, {
                    num: 2,
                    date: '2016-05-04',
                    name: '海南一男护士撞脸李现',
                    tag: '新',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    num: 3,
                    date: '2016-05-01',
                    name: '韩国选手自由操转着转着没劲了',
                    tag: '新',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    num: 4,
                    name: '施廷懋女子3米板夺金',
                    tag: '',
                },{
                    num: 5,
                    name: '油条冰淇淋',
                    tag: '',
                },{
                    num: 6,
                    name: '张雨霏说不跟男的游了',
                    tag: '',
                },{
                    num: 7,
                    name: '杨倩家乡手绘冠军墙火了',
                    tag: '',
                },{
                    num: 8,
                    name: '刘诗雯说请理解自己和队伍的决定',
                    tag: '',
                },{
                    num: 9,
                    name: '马龙这张图好绝',
                    tag: '热',
                },{
                    num: 10,
                    name: '湖北急寻D3078次列车阳性病例同乘者',
                    tag: '新',
                },],
            }
        },
        components: {
            Header,
            Footer,
        }
    }
</script>

<style scoped>
    .hot_table >tr{
        height: 10px;
    }
</style>