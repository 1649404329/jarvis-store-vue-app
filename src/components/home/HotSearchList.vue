<template>
    <div class="hotSearchList">
        <el-row>
            <el-col :span="8" style="border-right: 1px dashed #E4E7ED">
                <b><i class="el-icon-loading"></i> 热搜榜</b><br>
                <div v-for="hotWord in hotWords" :key="hotWord">
                    <el-col :span="8">
                        <el-link :underline="false" class="hot-search-text">{{hotWord}}</el-link>
                    </el-col>
                </div>
            </el-col>
            <el-col :span="8" >
                <b><i class="el-icon-s-promotion"></i> 地铁线</b>
                <div v-for="subway in subways" :key="subway">
                    <el-col :span="8">
                        <el-link :underline="false" class="hot-search-text">{{subway}}</el-link>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "HotSearchList",
        data() {
            return {
                hotWords: ['水果生鲜', '下午茶', '饮品糖水',
                    '奥林匹克中心', '长隆', '嘉禾望岗',
                    '小白', '小白', '小白'],
                subways: ['3号线', '1号线', '2号线',
                    '5号线', '8号线', '6号线',
                    'APM线', '广佛线', '21号线',],
            }
        }
    }
</script>

<style scoped>
    .hotSearchList {
        font-size: 15px;
        color: #333333;
    }

    .hot-search-text {
        line-height: 38px;
        font-size: 10px;
    }
</style>