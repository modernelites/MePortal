<template>
  <dl class="item mod_paw_single">
    <label class="old_password" v-show="noPwd">
      <span class="dec">原始密码:</span>
      <input type="password" name="password" class="password" ref='old_pwd'>
    </label>
    <label class="new_password">
      <span class="dec">新密码:</span>
      <input type="password" name="password" class="password" ref='new_pwd'>
    </label>
    <label class="affirm_password">
      <div class="a_pwd">
        <span class="dec"> 确认密码:</span>
        <input type="password" name="password" class="password" ref="affirm_pwd">
      </div>

      <span class="tips">{{tips}}</span>
    </label>
    <div class="btn_wrapper">
      <a href="javascript:;" @click="modPwd()" class="save_btn">保存</a>
    </div>
  </dl>
</template>
<script>
  import md5 from 'js-md5';
  export default {

    data() {
      return {
        noPwd: JSON.parse(window.localStorage.getItem("user")).Pwd == 1 ? true : false,
        tips:'密码要求至少6位数字或者号码或数字中来切超过6位'
      }
    },
    methods: {
      modPwd: function () {
        let old_pwd = this.$refs.old_pwd.value,
          new_pwd = this.$refs.new_pwd.value,
          affirm_pwd = this.$refs.affirm_pwd.value,
          info = {};
        if (JSON.parse(window.localStorage.getItem("user")).Pwd == 1) {
          console.log('有密码');

          if (new_pwd.length > 5 && new_pwd === affirm_pwd) {

            info.UserID = JSON.parse(window.localStorage.getItem("user")).UserID;
            // console.log(new_pwd, old_pwd);
            info.Pwd = md5(md5(new_pwd));
            info.OldPwd = md5(md5(old_pwd));
            // console.log(info);
            this.$http.post(this.ApiUrl + 'me/Account/UserInfo_Pwd_Upd', info).then((response) => {
              response = response.body;
                this.tips = '修改成功';
              if (response.IsSuccess === false) {
                  this.tips = '旧密码错误';
              }
            }, function () {
              console.log('failure');
            })

            // console.log('修改成功');
          } else {
            this.tips = '密码太短或不一致';
          }

        } else {
          console.log('没有密码');
          if (new_pwd.length > 5 && new_pwd === affirm_pwd) {
            info.UserID = JSON.parse(window.localStorage.getItem("user")).UserID;

            info.Pwd = md5(md5(new_pwd));
            console.log(info);

            this.$http.post(this.ApiUrl + 'me/Account/UserInfo_Pwd_Upd', info).then((response) => {
              response = response.body;
              console.log(response.Msg);
            }, function () {
              console.log('failure');
            })
            console.log('修改成功');
          } else {
            this.tips= '密码太短或不一致';
          }
        }

      }
    }

  }

</script>
