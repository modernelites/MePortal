<template>
  <!-- 验证码登录 -->
  <div class="content_box verification_content_box" id="verification_content_box">
    <h3 class="title_3">欢迎登录</h3>
    <div class="bg_c">
      <input ref="userName" type="text" name="username" class="username input_item" placeholder="手机号" required="" autocomplete="off">
      <label class="verification_label">
        <input ref="SMSCode" type="text" name="verification" class="verification_input input_item" placeholder="验证码" required=""
          autocomplete="off">
        <a href="javascript:;" class="verification_code">
          <button ref="btnVerify" class="info" @click="getVerifyCode">{{info}}</button>
        </a>
      </label>
      <input type="button" name="login_submit" class="login_submit_btn" value="登录" @click="verifyLoginMethod">
      <div v-show="tips" class="tips">{{tips}}</div>
    </div>
    <div class="bottom_btn">
      <a href="#/login/login1" title="账号密码登录" class="account_btn btn">账号密码登录</a>
      <a href="#/login/login3" title="验证码登录" class="register_btn btn">立即注册</a>
    </div>
  </div>
</template>
<script>
  import {
    globalPath
  } from './../../common/js/path';
  import {
    saveToLocal,
    loadFromLocal
  } from './../../common/js/store';
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
      // 给手机发送验证码方法
      getVerifyCode() {
        let userName = this.$refs.userName.value;
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!reg.test(userName)) {
          this.tips = '请输入正确的手机号码';
          return this.tips;
        }
        var path = globalPath();
        this.$http.get(path + 'me/Account/PhoneCode_Get?PhoneNo=' + userName + '&Type=2').then((response) => {
          response = response.body;
          this.login = response;
          console.log('请求发送成功');
          this.tips = '验证码已经发送到你的手机,请注意查收';
          let btn = this.$refs.btnVerify;
          btn.disabled = true;
          this.info = this.nums + '秒后可重新获取';
          this.clock = setInterval(this.doLoop, 1000);
          console.log(this.login);
        }, function () {
          console.log('请求发送失败');
        });
      },
      doLoop() {
        this.nums--;
        if (this.nums > 0) {
          this.info = this.nums + '秒后可重新获取';
        } else {
          clearInterval(this.clock);
          let btn = this.$refs.btnVerify;
          btn.disabled = false;
          this.info = '获取验证码';
          this.nums = 60;
        }
      },
      verifyLoginMethod() {
        let userName = this.$refs.userName.value;
        let SMSCode = this.$refs.SMSCode.value;
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!reg.test(userName)) {
          this.tips = '请输入正确的手机号码';
          return this.tips;
        }
        var path = globalPath();
        var param = {
          LoginName: userName,
          Pwd: '',
          LoginType: 2,
          SMSCode: SMSCode
        };
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
          console.log(this.login);
        }, function () {
          console.log('请求发送失败');
        });
      }
    }
  };

</script>
