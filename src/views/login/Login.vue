<template>
    <div>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-main>
                <el-carousel height="360px">
                    <el-carousel-item v-for="item in urls" :key="item">
                        <el-image :fit="fill" :src="item"></el-image>
                    </el-carousel-item>
                </el-carousel>
                <el-card shadow="always" style="position: absolute;top: 80px;
                right: calc((100vw - 1000px)/2 - 78px);width: 225px;height: 250px; z-index: 99;text-align: left;">
                    <p>用户登录</p>
                    <el-form>
                        <el-form-item>
                            <el-input
                                    placeholder="请输入手机号"
                                    prefix-icon="el-icon-mobile"
                                    clearable
                                    size="medium"
                                    v-model="username">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                    placeholder="请输入密码"
                                    prefix-icon="el-icon-key"
                                    clearable
                                    show-password
                                    size="medium"
                                    v-model="password">
                            </el-input>
                        </el-form-item>
                        <el-button type="primary" style="width: 100%" @click="login()">立即登录</el-button>
                    </el-form>
                </el-card>

            </el-main>

            <el-main>
                <el-row>
                    <el-col :span="20" offset="2">
                        <h3>“发现小店”的想法</h3>
                        <h5>每个人拥有自己的小店</h5>
                        <h5>将生活的点滴通过本小店进行展览</h5>
                        <h5>小店贩卖的不是商品，而是生活 ~</h5>
                        <h5>分享 让每个行者愉快地前进！</h5>
                    </el-col>
                </el-row>
            </el-main>

            <el-main style="background-color: #f9fafc;">
                <h3>他们的小店</h3>
                <el-row style="margin:0 auto; width: 1200px;">
                    <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                        <div style="width:200px;">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                 class="image">
                            <div style="padding: 14px;font-size: 14px;">
                                <el-avatar :src="avatarUrl" :size="25" style="vertical-align: middle;"></el-avatar>
                                <span>王淳的猫</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">+ 关注</el-button>
                                </div>
                            </div>
                        </el-card>
                        </div>
                    </el-col>
                </el-row>
                <br/>
                <br/>
                <br/>
            </el-main>

            <el-main>
                <el-row>
                    <el-col :span="20" offset="2">
                        <h3>AND</h3>
                        <h4>小店还在等着你掌管呢，你还在等待什么？</h4>
                        <el-button type="primary" size="small">成为自己的店长</el-button>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </el-col>
                </el-row>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/login/Header.vue'

    export default {
        name: "Login",
        components: {
            Header,
        },
        data() {
            return {
                username: '',
                password: '',
                avatarUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                ]
            }
        },
        methods: {
            login(){
                const _this = this;
                let loginReq = {
                    username: this.username,
                    password: this.password,
                };
                _this.$axios.post('/post/blog/edit', loginReq, {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(res => {
                    //成功跳到博客列表页面
                    this.$alert('操作成功', '提示', {
                        confirmButtonText: '确定',
                        showClose: false,
                        callback: action => {
                            const jwt=res.headers['authorization'];
                            const userInfo=res.data.data;

                            _this.$store.commit('SET_TOKEN',jwt);
                            _this.$store.commit('SET_USERINFO',userInfo);
                            console.log(_this.$store.getters.getUser)
                            _this.$router.push("/blogs")
                        }
                    });
                })
                this.$router.push("/blogHome")
            }
        }
    }
</script>

<style scoped>
    .el-main {
        margin: 0 0 0 0;
        padding: 0;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .image {
        width: 100%;
        height: 100px;
        display: block;
    }
</style>