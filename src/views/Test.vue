<template>
    <div id="app" class="wrapper" style="overflow: auto;">
        <el-backtop target=".wrapper" :visibility-height="20" :right="40" :bottom="40"></el-backtop>

        <div style=" width: 50%;">
            <quill-editor class="editor"
                          ref="myTextEditor"
                          v-model="content"
                          :options="editorOption"
                          @blur="onEditorBlur($event)"
                          @focus="onEditorFocus($event)"
                          @ready="onEditorReady($event)"
                          @change="onEditorChange($event)">
            </quill-editor>
        </div>

        <!--<Editor v-model="article.content"/>-->


        <el-row style="height: 10px;">
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

        <p @click="backtop">回到顶部</p>
            </el-col>
        </el-row>

        <Footer/>
    </div>
</template>

<script>
    import Editor from '@/components/common/QuillEditor.vue'
    import Footer from '@/components/common/Footer.vue'
    export default {
        name: "Test",
        components: {
            Editor,
            Footer
        },
        data() {
            return {
                article: {
                    content: '# kkkkkkk\\n151514***斜体***\\n```\\ndsdsd\\n````\\n==sdsadda==',
                },
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

                //编辑器
                content: "# kkkkkkk\\n151514***斜体***\\n```\\ndsdsd\\n````\\n==sdsadda==",
                editorOption: {
                    modules: {
                        toolbar: [
                            // 加粗 斜体 下划线 删除线 代码块 公式 图片 视频
                            ["bold", "italic", "underline", "strike", "formula", "image", "video", "clean"],
                            // 引用  代码块
                            ["blockquote", "code-block"],
                            // 1、2 级标题
                            [{ header: 1 }, { header: 2 }],
                            // 有序、无序列表
                            [{ list: "ordered" }, { list: "bullet" }],
                            // 上标/下标
                            [{ script: "sub" }, { script: "super" }],
                            // 缩进
                            [{ indent: "-1" }, { indent: "+1" }],
                            // 文本方向
                            // [{'direction': 'rtl'}],
                            // 字体大小
                            [{ size: ["small", false, "large", "huge"] }],
                            // 标题
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            // 字体颜色、字体背景颜色
                            [{ color: [] }, { background: [] }],
                            // 字体种类
                            [{ font: [] }],
                            // 对齐方式
                            [{ align: [] }],
                            // 清除文本格式
                            ["clean"],
                            // 链接、图片、视频
                            ["link", "image", "video"],

                        ], //工具菜单栏配置
                    },
                    placeholder: '请在这里记录你的美好瞬间', //提示
                    readyOnly: false, //是否只读
                    theme: 'snow', //主题 snow/bubble
                    syntax: true, //语法检测
                }//editorOption
            }//return;
        },
        created() {
            //this.getMenuList();
        },
        mounted() {
            window.addEventListener("scroll",this.showbtn,true);

        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
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

            showbtn(){
                let that = this;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                that.scrollTop = scrollTop
            },
            backtop(){
                var timer = setInterval(function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    this.isTop = true;
                    if(osTop === 0){
                        clearInterval(timer);
                    }
                },30)
            },



            // 失去焦点
            onEditorBlur(editor) {},
            // 获得焦点
            onEditorFocus(editor) {},
            // 开始
            onEditorReady(editor) {},
            // 值发生变化
            onEditorChange(editor) {
                this.content = editor.html;
                console.log(editor);
            },

        },

    };
</script>

<style scoped>
    .el-row {
        width: 200px;
    }
</style>
<style scoped>
    .ql-toolbar {
        background-color: rgb(250,250,250);
        position: fixed;
        top: 60px;
        z-index: 20;
        width: 100%;
        border: none !important;
    }
</style>