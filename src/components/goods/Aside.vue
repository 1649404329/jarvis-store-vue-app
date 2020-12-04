<template>
    <div class="accountAside">
        <div class="aside-row ">
            <el-avatar shape="square" :size="100" :fit="fits[0]" :src="avatarUrl"></el-avatar>
        </div>
        <div class="aside-row ">
            <i class="el-icon-edit"></i>
        </div>

        <div class="aside-row ">小店大名：<b>鸡鸡娃娃堡</b></div>

        <div class="aside-row ">店长：<b>Lee</b></div>

        <div class="aside-row ">小店注册时间：2020-08-01</div>

        <div class="aside-row ">小店经营了1年零8个月啦</div>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            }
        }
    }
</script>

<style scoped>
    .accountAside {
        padding: 10px;
        box-sizing: border-box;
    }

    .aside-row {
        padding: 5px;
        text-align: center;
        height: auto;
        line-height: normal;
        font-size: 14px;
        box-sizing: border-box;
    }

</style>