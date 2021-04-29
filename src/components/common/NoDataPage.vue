<template>
    <div class="noDataPage">
        <div class="d-img">
            <span class="title-main">{{ msg }}</span>
            <span v-if="showAllBtn" class="title-small">全部<i class="el-icon-arrow-right"></i></span>
            <img style="width: 100px; height: 100px" src="../../assets/images/nodata.png">
            <div style="color: rgb(150,150,150);">暂无数据</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoDataPage"
    }
</script>

<style scoped>
    .d-img{

    }
</style>