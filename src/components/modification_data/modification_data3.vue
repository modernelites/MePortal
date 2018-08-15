<template>
  <dl class="item mod_number_single">
    <label class="old_number">
      <span class="dec">原手机号:</span>
      <input type="text" name="number" class="number" ref="old_number" v-model="old_number" readonly>
    </label>
    <label class="new_number">
      <span class="dec">新手机号:</span>
      <input type="text" name="number" class="number" ref="new_number">
    </label>
    <label class="affirm_number">
      <span class="dec"> 验证码:</span>
      <div class="var_wrapper">
        <input type="text" name="number" class="number" ref="SMSCode">
        <a href="javascript:;" class="tips tips_left" @click="dec()" ref="btnVerify">{{info}}</a>
      </div>
      <div class="tips tips_right">{{tips}}</div>
    </label>
    <div class="btn_wrapper">
      <a href="javascript:;" class="save_btn" @click="mod_phone()">保存</a>
    </div>
  </dl>
</template>
<script>
  export default {

    data() {
      return {
        old_number: JSON.parse(window.localStorage.getItem("user")).LoginName,
        info: '获取验证码',
        tips: null,
        nums: 60,
        clock: {}

      }
    },
    methods: {
      dec: function () {
        let userName = this.$refs.new_number.value;
        let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if (!reg.test(userName)) {
          alert('请输入正确的手机号码');
          // return this.tips;
        } else {
          this.$http.get(this.ApiUrl + 'me/Account/PhoneCode_Get?PhoneNo=' + userName + '&Type=2').then((response) => {
            response = response.body;
            this.login = response;
            console.log('请求发送成功');
            this.tips = '已发送';
            let btn = this.$refs.btnVerify;
            btn.disabled = true;
            // this.info = this.nums + '秒后可重新获取';
            this.clock = setInterval(this.doLoop, 1000);
            console.log(this.login);
          }, function () {
            console.log('请求发送失败');
          });
        }


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
      mod_phone: function () {
        let userName = this.$refs.new_number.value;
        let SMSCode = this.$refs.SMSCode.value;
        let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/;
        if (!reg.test(userName)) {
          this.tips = '请输入正确的手机号码';
          return this.tips;
        }
        var param = {
          UserID: JSON.parse(window.localStorage.getItem("user")).UserID,
          LoginName: userName,
          SMSCode: SMSCode
        };
        this.$http.post(this.ApiUrl + 'me/Account/UserInfo_LoginName_Upd', param).then((response) => {
          response = response.body;
          console.log(response)
          this.login = response;
          if (this.login.Msg == "not login") {
            this.$layer.alert("登录已失效 请重新登录");
          } else if (this.login.Msg == "smsCode error") {
            this.tips = '验证码错误';
            console.log(this.login)

          } else if (this.login.Status == 200) {
            console.log(this.login);
            this.$layer.alert('修改成功');
            this.tips = '';
            this.info = '获取验证码';
          } else {
            console.log(this.login)
          }

        }, function () {
          console.log('请求发送失败');
        });
      }
    }

  }

</script>
<style  scoped>
.affirm_number .tips_right {
  display: block;
  margin: 0 auto;
  background-color: #fff;
  color: #f24d4d;
  width: auto;
  }
</style>
