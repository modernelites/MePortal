<template>
  <div class="login_p">
    <div class="content_wrapper">
      <div class="header_wrapper ">
      </div>
      <div class="login_content_wrapper  clearfix">
        <router-view :getLoginName="getLoginName()"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loginName: {}
      }
    },
    created() {

    },
    methods: {
      getLoginName(data) {
        if (data === null) {
          console.log('未登录');
        } else {
          this.loginName = data;
          console.log(this.loginName);
        }

      }
    },
    mounted() {
      this.getLoginName()
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .btn {
    border: 0;
  }

  .login_p .inner_header {
    opacity: 0;
    display: none;
  }

  .login_p .tips {
    text-align: center;
    font-size: 12px;
    color: #d0d0d0;
    padding-bottom: 15px;
  }

  .login_p {
    background: #fefefe;
    height: 100%;
    width: 100%;
    background: #666 url("./../../assets/img/login_bg_2@2x.png") no-repeat center top;
  }

  .login_p .header_wrapper {
    padding-top: 26px;
    padding-bottom: 104px;
  }

  .login_p .header_wrapper a {
    display: inline-block;
  }

  .login_p .content_box {
    float: right;
    width: 388px;
    min-height: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    /* background: #353535; */
  }

  .login_p .content_box .title_3 {
    height: 120px;
    line-height: 120px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    border-bottom: 1px solid #f24d4d;
    background: #353535;
  }

  .login_p .content_box .bg_c {
    background-color: #353535;
    overflow: hidden;
  }

  .login_p .content_box input {
    box-sizing: border-box;
  }

  .login_content_wrapper {
    padding-right: 20%;
  }

  .login_p .content_box .input_item {
    display: block;
    width: 260px;
    margin: 0 auto;
    height: 56px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 16px;
    font-size: 14px;
    background: #494949;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #929292;
  }

  .login_p .content_box .username {
    margin: 30px auto 20px;
  }

  .login_p .content_box .login_submit_btn {
    display: block;
    width: 200px;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #fff;
    border-radius: 16px;
    background: #f24d4d;
    margin: 20px auto 36px;
    outline: none;
    border: none;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }

  .login_p .content_box .login_submit_btn:hover {
    background: #f93434;
  }

  .login_p .content_box .bottom_btn {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .login_p .content_box .bottom_btn .btn {
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 14px;
    color: #d0d0d0;
    background: #323232;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 20%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 0;
  }

  .login_p .account_content_box .bottom_btn .verification_btn,
  .login_p .account_content_box .bottom_btn .register_btn,
  .login_p .verification_content_box .bottom_btn .account_btn,
  .login_p .verification_content_box .bottom_btn .register_btn,
  .login_p .register_content_box .bottom_btn .account_btn,
  .login_p .register_content_box .bottom_btn .verification_btn {
    background: linear-gradient(rgb(35, 35, 35), rgb(55, 55, 55));
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 1;
  }

  .login_p .register_content_box .verification_label,
  .login_p .verification_content_box .verification_label {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 260px;
    margin: 0 auto;
  }

  .login_p .register_content_box .verification_input,
  .login_p .verification_content_box .verification_input {
    -webkit-box-flex: 184px;
    -moz-box-flex: 184px;
    width: 184px;
    -webkit-flex: 184px;
    -ms-flex: 184px;
    flex: 184px;
  }

  .login_p .register_content_box .verification_code,
  .login_p .verification_content_box .verification_code {
    -webkit-box-flex: 72px;
    -moz-box-flex: 72px;
    width: 72px;
    -webkit-flex: 72px;
    -ms-flex: 72px;
    flex: 72px;
    height: 56px;
    line-height: 56px;
    background: #f24d4d;
    color: #fff;
    text-align: center;
    margin-left: 4px;
    border-radius: 16px;
  }

  .login_p .register_content_box .verification_code .info,
  .login_p .verification_content_box .verification_code .info {
    display: block;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    -webkit-transform: scale(0.8);
    font-size: 12px;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
    .login_p .tips {
      background-color: #353535;
    }
  @media screen and (max-width: 1020px) {
    .login_p {
      background: #fefefe;
      height: 100%;
      width: 100%;
      max-width: 750px;
      margin: 0 auto;
      background: url('./../../assets/img/login_bg_mobile@2x.png') no-repeat center top;
    }
    .login_p .content_box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      min-height: 300px;
      box-shadow: 0 0 20px rgba(0, 0, 0, .3);
      max-width: 388px;
    }
    .login_p .tips {
      background-color: #353535;
    }
  }

</style>
