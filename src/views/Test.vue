<template>
    <div>
        <el-row>
            <el-col :span="24">

                <el-menu default-active="0">
                    <el-submenu
                            :index="item.id + ''"
                            v-for="item in menuList"
                            :key="item.id"
                    >
                        <template slot="title">
                            <span>{{ item.authName }}</span>
                        </template>
                        <el-menu-item
                                :index="subItem.id + ''"
                                v-for="subItem in item.children"
                                :key="subItem.id"
                        >
                            <span slot="title">{{ subItem.authName }}</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>

                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="2">
                        <i class="el-icon-star-off"></i>
                        <span slot="title">名称解释</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-edit"></i>
                        <span slot="title">小店等级</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-view"></i>
                        <span slot="title">5分钟入门</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-view"></i>
                        <span slot="title">更多功能</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-view"></i>
                        <span slot="title">常见问题</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>今日排行榜</span>
                        </template>
                        <el-menu-item-group title="[ 出行 分享 ]">
                            <el-menu-item index="1-3">旅行记录</el-menu-item>
                            <el-menu-item index="1-3">摄影美图</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group index="1-4">
                            <template slot="title">[ 今日排行榜 ]</template>
                            <el-menu-item index="1-4-1">创作排行</el-menu-item>
                            <el-menu-item index="1-4-1">电影排行</el-menu-item>
                            <el-menu-item index="1-4-1">音乐排行</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                menuList: [
                    {
                        "id":125,
                        "authName":"用户管理",
                        "path":"users",
                        "children":[
                            {
                                "id":110,
                                "authName":"用户列表",
                                "path":"users",
                                "children":[

                                ],
                                "order":null
                            }
                        ],
                        "order":1
                    },
                    {
                        "id":103,
                        "authName":"权限管理",
                        "path":"rights",
                        "children":[
                            {
                                "id":111,
                                "authName":"角色列表",
                                "path":"roles",
                                "children":[

                                ],
                                "order":null
                            },
                            {
                                "id":112,
                                "authName":"权限列表",
                                "path":"rights",
                                "children":[

                                ],
                                "order":null
                            }
                        ],
                        "order":2
                    },
                    {
                        "id":101,
                        "authName":"商品管理",
                        "path":"goods",
                        "children":[
                            {
                                "id":104,
                                "authName":"商品列表",
                                "path":"goods",
                                "children":[

                                ],
                                "order":1
                            },
                            {
                                "id":115,
                                "authName":"分类参数",
                                "path":"params",
                                "children":[

                                ],
                                "order":2
                            },
                            {
                                "id":121,
                                "authName":"商品分类",
                                "path":"categories",
                                "children":[

                                ],
                                "order":3
                            }
                        ],
                        "order":3
                    },
                    {
                        "id":102,
                        "authName":"订单管理",
                        "path":"orders",
                        "children":[
                            {
                                "id":107,
                                "authName":"订单列表",
                                "path":"orders",
                                "children":[

                                ],
                                "order":null
                            }
                        ],
                        "order":4
                    },
                    {
                        "id":145,
                        "authName":"数据统计",
                        "path":"reports",
                        "children":[
                            {
                                "id":146,
                                "authName":"数据报表",
                                "path":"reports",
                                "children":[

                                ],
                                "order":null
                            }
                        ],
                        "order":5
                    }

                ],
            };
        },
        created() {
            //this.getMenuList();
        },
        methods: {
            getMenuList() {
                this.$http.get("menus").then((res) => {
                    console.log(res);
                    if (res.data.meta.status !== 200) {
                        this.$message({
                            message: res.data.meta.msg,
                            type: "error",
                        });
                    }
                    this.menuList = res.data.data;
                });
            },
        },

    };
</script>

<style scoped>
    .el-row {
        width: 200px;
    }
</style>