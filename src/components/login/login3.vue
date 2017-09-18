<template>
  <!-- 注册区域 -->
  <div class="content_box register_content_box" id="register_content_box">
    <h3 class="title_3">立即注册</h3>
    <input ref="userName" type="text" name="username" class="username input_item" placeholder="手机号" required="" autocomplete="off">
    <label class="verification_label">
      <input ref="SMSCode" type="text" name="verification" class="verification_input input_item" placeholder="验证码" required="" autocomplete="off">
      <a href="javascript:;" class="verification_code">
        <button ref="btnRegister" class="info" @click="getRegisterCode">{{info}}</button>
      </a>
    </label>
    <input type="submit" name="login_submit" class="login_submit_btn" value="注册" @click="registerLoginMethod">
    <div v-show="tips" class="tips">{{tips}}</div>
    <div class="bottom_btn">
      <a href="#/login/login1" title="账号密码登录" class="account_btn btn">账号密码登录</a>
      <a href="#/login/login2" title="验证码登录" class="verification_btn btn">验证码登录</a>
    </div>
  </div>
</template>
<script>
import { globalPath } from './../../common/js/path';
import { saveToLocal, loadFromLocal } from './../../common/js/store';
export default {
  data() {
    return {
      login: {},
      tips: null,
      info: '获取验证码',
      nums: 60,
      clock: {},
      LoginName: {},
      UserID: {}
    };
  },
  methods: {
    // 获取注册验证码
    getRegisterCode() {
      let userName = this.$refs.userName.value;
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (!reg.test(userName)) {
        this.tips = '请输入正确的手机号码';
        return this.tips;
      }
      var path = globalPath();
      this.$http.get(path + 'me/Account/PhoneCode_Get?PhoneNo=' + userName + '&Type=1').then((response) => {
        response = response.body;
        this.login = response;
        if (this.login.Status === 400) {
          this.tips = this.login.Msg;
          return this.tips;
        }
        this.tips = '验证码已经发送到你的手机,请注意查收';
        let btn = this.$refs.btnRegister;
        btn.disabled = true;
        this.info = this.nums + '秒后可重新获取';
        this.clock = setInterval(this.doLoop, 1000);
      }, function() {
        console.log('请求发送失败');
      });
    },
    doLoop() {

      this.nums--;
      if (this.nums > 0) {
        this.info = this.nums + '秒后可重新获取';

      } else {
        clearInterval(this.clock);
        let btn = this.$refs.btnRegister;
        btn.disabled = false;
        this.info = '获取验证码';
        this.nums = 60;
      }

    },
    // 进行登陆验证
    registerLoginMethod() {
      let userName = this.$refs.userName.value;
      let SMSCode = this.$refs.SMSCode.value;
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (!reg.test(userName)) {
        this.tips = '请输入正确的手机号码';
        return this.tips;
      }
      var path = globalPath();
      var param = { LoginName: userName, Pwd: '', LoginType: 2, SMSCode: SMSCode };
      this.$http.post(path + 'me/Account/Login', param).then((response) => {
        response = response.body;
        this.login = response;
        if (this.login.Status !== 200) {
          this.tips = '验证码错误请重新输入';
        } else {
          window.localStorage.setItem('user', JSON.stringify(response.Data));
          this.$router.push({
            path: '/index,1'
          })
        }
      }, function() {
        console.log('请求发送失败');
      });
    }
  }
};

</script>
