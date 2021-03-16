<template>
    <div>
        <div>
            <table>
                <tr>
                    <td width="100px">用户名:</td>
                    <td><input id="uname" name="uname" placeholder="uname" type="text" value=""
                               @blur="checkUname();" /><span id="unameSpan">
						    *4-8位字母或数字
						</span></td>
                </tr>
                <tr>
                    <td>密码:</td>
                    <td><input id="pwd" name="pwd" placeholder="pwd" type="password" value=""
                               @blur="checkPwd();" /><span id="pwdSpan">
							*6-16位字母或数字
						</span></td>
                </tr>
                <tr>
                    <td>确认密码:</td>
                    <td><input id="pwd2" name="pwd2" type="password" value="" @blur="checkPwd2()" /><span
                        id="pwd2Span">

						</span></td>
                </tr>
                <tr>
                    <td>电话:</td>
                    <td><input id="phone" name="phone" type="text" value="" @blur="checkPhone();" /><span
                        id="phoneSpan">
						</span></td>
                </tr>
                <tr>
                    <td>邮箱:</td>
                    <td><input id="email" name="email" type="text" value="" @blur="checkEmail();" /><span
                        id="emailSpan">

						</span></td>
                </tr>
                <tr>
                    <td>性别:</td>
                    <td>男:<input checked="checked" name="sex" type="radio" value="1" />
                        女:<input name="sex" type="radio" value="2" /></td>
                </tr>
                <tr>
                    <td>个人介绍</td>
                    <td><input id="dec" name="describe" type="text" value="" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input id="login" name="" type="button" value="立即注册" @click="checkSub" /></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        checkUname() {
            //获取信息
            var uname = document.getElementById('uname').value;
            //创建校验规则
            var reg = /^[A-Za-z0-9]{4,12}$/;
            //获取span对象
            var span = document.getElementById('unameSpan');
            //开始校验
            if (uname === '' || uname == null) {
                //输出校验结果
                span.innerHTML = '用户名不能为空';
                span.style.color = 'red';
                return false;
            } else if (reg.test(uname)) {
                //输出校验结果
                span.innerHTML = '用户名正确';
                span.style.color = 'green';
                return true;
            } else {
                //输出校验结果
                span.innerHTML = '用户名不符合规则';
                span.style.color = 'red';
                return false;
            }
        },
        checkPwd() {
            //获取信息
            var pwd = document.getElementById('pwd').value;
            //创建校验规则
            var reg = /^[A-Za-z0-9]{6,16}$/;
            //获取span对象
            var span = document.getElementById('pwdSpan');
            //开始校验
            if (pwd === '' || pwd == null) {
                //输出校验结果
                span.innerHTML = '密码不能为空';
                span.style.color = 'red';
                this.checkPwd2();
                return false;
            } else if (reg.test(pwd)) {
                //输出校验结果
                span.innerHTML = '密码符合规则';
                span.style.color = 'green';
                this.checkPwd2();
                return true;
            } else {
                //输出校验结果
                span.innerHTML = '密码不符合规则';
                span.style.color = 'red';
                this.checkPwd2();
                return false;
            }
            // this.checkPwd2();   //这里有一个调用c2,因为如果不调用，如果先把确认密码的地方写好了，再修改密码，确认密码层的提示不会消失
        },

        checkPwd2() {
            //获取第一次密码
            var pwd = document.getElementById('pwd').value;
            //获取确认密码
            var pwd2 = document.getElementById('pwd2').value;
            //获取span对象
            var span = document.getElementById('pwd2Span');
            //确认两次密码是否相同
            if (pwd2 === '' || pwd2 == null) {
                span.innerHTML = '密码不能为空';
                span.style.color = 'red';
                return false;
            } else if (pwd === pwd2) {
                span.innerHTML = '确认密码OK';
                span.style.color = 'green';
                return true;
            } else {
                span.innerHTML = '两次密码不一致';
                span.style.color = 'red';
                return false;
            }
        },
        checkPhone() {
            //获取信息
            var phone = document.getElementById('phone').value;
            //创建校验规则
            var reg3 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            //获取span对象
            var span = document.getElementById('phoneSpan');
            //开始校验
            if (phone === '' || phone == null) {
                //输出校验结果
                span.innerHTML = '手机号码不能为空';
                span.style.color = 'red';
                return false;
            } else if (reg3.test(phone)) {
                //输出校验结果
                span.innerHTML = '手机号码符合规则';
                span.style.color = 'green';
                return true;
            } else {
                //输出校验结果
                span.innerHTML = '手机号码不符合规则';
                span.style.color = 'red';
                return false;
            }
        },
        checkEmail() {
            //获取信息
            var email = document.getElementById('email').value;
            //创建校验规则
            var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/;
            //获取span对象
            var span = document.getElementById('emailSpan');
            //开始校验
            if (email === '' || email == null) {
                //输出校验结果
                span.innerHTML = '邮箱不能为空';
                span.style.color = 'red';
                return false;
            } else if (reg.test(email)) {
                //输出校验结果
                span.innerHTML = '邮箱符合规则';
                span.style.color = 'green';
                return true;
            } else {
                //输出校验结果
                span.innerHTML = '邮箱不符合规则';
                span.style.color = 'red';
                return false;
            }
        },
//提交判断
        checkSub() {
            this.checkUname();
            this.checkPwd();
            this.checkPwd2();
            this.checkPhone();
            this.checkEmail();
            let result = this.checkEmail() && this.checkPhone() && this.checkPwd() && this.checkPwd2() && this.checkUname();
            if (result) {
                this.$router.push('/');
            }
        }
    }
};
</script>

<style scoped>
table {
    margin: auto;
    margin-top: 40px;
    border: solid 1px;
    border-radius: 10px;
    width: 600px;
    height: 700px;
}

input {
    margin-left: 20px;
}

#login {
    margin-left: 250px;
}

#dec {
    width: 300px;
    height: 150px;
}
</style>