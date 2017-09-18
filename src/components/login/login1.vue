<template>
  <!-- 账号密码登录 -->
  <div class="content_box account_content_box" id="account_content_box">
    <h3 class="title_3">欢迎登录</h3>
    <form action="login_submit" method="get" accept-charset="utf-8">
      <input ref="username" type="text" name="username" class="username input_item" placeholder="账号" required="" autocomplete="off">
      <input ref="password" type="password" name="password" class="password input_item" placeholder="密码" required="" autocomplete="off">
      <input type="button" name="login_submit" class="login_submit_btn" value="登录" @click="loginMethod">
      <div v-show="tips" class="tips">{{tips}}</div>
      <div class="bottom_btn">
        <a href="#/login/login2" title="验证码登录" class="verification_btn btn">验证码登录</a>
        <a href="#/login/login3" title="立即注册" class="register_btn btn">立即注册</a>
      </div>
    </form>
  </div>
</template>
<script>
import { globalPath } from './../../common/js/path';
import md5 from 'js-md5';
// import {saveToLocal, loadFromLocal} from './../../common/js/store';
export default {
  data() {
    return {
      login: {},
      tips: null
    };
  },
  ready() {},
  created() {},
  methods: {
    // 用户登录方法
    loginMethod: function() {
      let userName = this.$refs.username.value;
      let passWord = md5(md5(this.$refs.password.value));
      if (!userName || !passWord) {
        this.tips = '账号或者密码为空 请重新输入';
        return this.tips;
      }
      var param = { LoginName: userName, Pwd: passWord, LoginType: 1 };
      this.$http.post(this.ApiUrl + 'me/Account/Login', param).then((response) => {
        response = response.body;
        this.login = response;
        if (this.login.Status !== 200) {
          this.tips = '账号或者密码错误请重新输入';
        } else {
         window.localStorage.setItem('user', JSON.stringify(response.Data));
          this.$router.push({
            path: '/index,1'
          })
        }
        console.log(this.login);
      }, function() {
        console.log('请求发送失败');
      });
    }
  }
};

</script>
