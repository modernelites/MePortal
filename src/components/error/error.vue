<template>
  <div class="error_p">
    <div class="error_p_wrapper">
      <div class="content clearfix">
        <div class="content_left">
          <i class="pic"></i>
        </div>
        <div class="content_right">
          <h1 class="title_1">出错了 !</h1>
          <h3 class="title_3">这个页面打不开了 </h3>
          <div class="btn_wrapper">
            <a href="javascript:;" class="refresh_btn btn"> 刷新页面</a>
            <a href="#/home" class="back_btn btn">返回首页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'error',
    data() {
      return {};
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error_p {
    background: #f7f7f7;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 152px;
  }

  .error_p_wrapper {
    width: 600px;
    margin: 0 auto;
  }

  .error_p_wrapper .content {
    width: 600px;
  }

  .error_p .content_left {
    width: 328px;
    float: left;
  }

  .error_p .content_left .pic {
    display: inline-block;
    background: url(./../../assets/img/error@2x.png) no-repeat;
    width: 328px;
    height: 476px;
  }

  .error_p .content_right {
    width: 272px;
    padding-left: 18px;
    float: left;
  }

  .error_p .content_right .title_1 {
    font-size: 60px;
    color: #000;
    font-weight: bold;
    padding-top: 12px;
    margin-bottom: 30px
  }

  .error_p .content_right .title_3 {
    font-size: 24px;
    color: #000;
    font-weight: bold;
    margin-bottom: 66px;
  }

  .error_p .content_right .btn_wrapper {
    font-size: 0;
  }

  .error_p .content_right .btn {
    display: inline-block;
    font-size: 12px;
    color: #000;
    width: 86px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 2px solid #000;
    font-weight: 500;
    transition: all .3s ease;
  }

  .error_p .content_right .btn:hover {
    background: #000;
    color: #fff;
  }

  .error_p .content_right .back_btn {
    margin-left: 22px;
  }

  @media screen and (max-width: 1020px) {
    .error_p_wrapper {
      max-width: 750px;
      min-width: 320px;
      margin: 0;
    }
    .error_p_wrapper .content {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .error_p .content_left {
      width: 100%;
    }
    .error_p .content_left .pic {
      display: block;
      background: url(./../../assets/img/error@2x.png) no-repeat;
      width: 164px;
      height: 238px;
      background-size: 100% 100%;
      margin: 0 auto;
    }
    .error_p .content_right {
      display: block;
      width: 100%;
      text-align: center
    }
    .error_p .content_right .title_1 {
      font-size: 30px;
      padding: 80px 0 12px;
      margin-bottom: 0;
    }
    .error_p .content_right .title_3 {
      font-size: 12px;
      margin-bottom: 50px;
    }
    .error_p .content_right .btn {
      width: 100px;
      height: 40px;
      font-weight: normal;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 0;
      border: 1px solid #000;
      vertical-align: middle;
    }
  }

</style>
