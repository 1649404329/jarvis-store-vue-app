<template>
    <div>
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <div style="width: 1000px;margin: 0 auto;padding-top: 70px;">
                <el-main>
                    <el-row>
                            <el-main>
                                <PanelTitle msg="平台注册" />

                                <div style="padding: 30px 40px;text-align: left;min-height: 300px;margin: 0 auto;width: 450px;">
                                    <el-form :label-position="labelPosition" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input v-model.number="ruleForm.username" placeholder="用户名5-20个英文，数字"></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="pass">
                                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="6-16位字母+数字组合，区分大小写"></el-input>
                                        </el-form-item>
                                        <el-form-item label="确认密码" prop="checkPass">
                                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
                                        </el-form-item>
                                        <el-form-item label="年龄" prop="age">
                                            <el-input v-model.number="ruleForm.age" placeholder="选填"></el-input>
                                        </el-form-item>
                                        <el-form-item label="手机号" prop="phone">
                                            <el-input v-model.number="ruleForm.phone" placeholder="请输入11位手机号"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="smsCode">
                                            <el-row>
                                                <el-col :span="15">
                                                    <el-input v-model.number="ruleForm.smsCode" placeholder="请输入验证码"></el-input>
                                                </el-col>
                                                <el-col :span="4" :offset="1">
                                                    <el-button type="warning" >获取验证码</el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                        <el-form-item >
                                                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>

                            </el-main>
                    </el-row>
                </el-main>
            </div>
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/login/Header.vue'
    import PanelTitle from '@/components/common/PanelTitle.vue'

    export default {
        name: "Register",
        components: {
            Header,
            PanelTitle
        },
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                labelPosition:'left',
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    username: [
                        { required: true, message: '用户名5-20个英文，数字', validator: checkAge, trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '6-16位字母+数字组合，区分大小写', validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, message: '请确认密码', validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '选填', validator: checkAge, trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入11位手机号', validator: checkAge, trigger: 'blur' }
                    ],
                    smsCode: [
                        { required: true, message: '请输入验证码', validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .my-input{
        width: 280px;
    }
</style>