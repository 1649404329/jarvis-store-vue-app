<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <el-submenu
                    v-for="item in menuList"
                    :key="item.id"
                    :index="item.id+''">
                <template slot="title">
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item
                        :index="subItem.id + ''"
                        :key="subItem.id"
                        v-for="subItem in item.children">
                    <span slot="title">{{ subItem.label }}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                menuList: [],
            }
        },
        created() {
            this.getMenuList();
        },
        methods: {
            getMenuList() {
                const _this = this;
                this.$axios.get("/api-admin/knowledgeBase/listSuper").then((res) => {
                    console.log(res);
                    if (res.data.code !== 200) {
                        this.$message({
                            message: res.data.msg,
                            type: "error",
                        });
                    }
                    this.menuList = res.data.data;
                    console.log(res.data.data);
                });
            },
        },

    }
</script>

<style scoped>

</style>