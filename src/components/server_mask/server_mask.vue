<template>
  <div class="server_mask">
    <!-- 侧边导航按钮 -->
    <div class="side_fixed_wrapper">
      <a class="item" id="side_fixed_apply_btn" href="#/register/register1"></a>
      <a class="item" id="side_fixed_server_btn" href="javascript:;" v-on:click="show = true"></a>
      <a class="item" id="side_fixed_go_top_btn" href="javascript:;" ref="go_top_btn" @click="goTop()"></a>
    </div>
    <!-- 弹窗 -->
    <div class="server_wrapper_mask">
      <transition v-show="show" name="fade">
        <div v-show="show" class="service_shade" v-on:click="show= false"></div>
      </transition>
      <transition name="course-fade-con">
        <div v-show="show" class="service_shade_con">
          <div class="top">
            <h3 class="title_3">客服</h3>
            <a href="javascript:;" class="close_btn" v-on:click="show = false"></a>
          </div>
          <div class="btn_wrap">
            <div class="m_row service_link clearfix">
              <div class="m_col-lg-4">
                <a href="javascript:;" class="line_ser"></a>
              </div>
              <div class="m_col-lg-4">
                <a href="javascript:;" class="we_char"></a>
              </div>
              <div class="m_col-lg-4">
                <a href="javascript:;" class="phone"></a>
              </div>
            </div>
            <div class="m_row clearfix service_font">
              <div class="m_col-lg-4"><a href="javascript:;">谢老师</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
            </div>
            <div class="m_row clearfix service_font">
              <div class="m_col-lg-4"><a href="javascript:;">谢老师</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
            </div>
            <div class="m_row clearfix service_font">
              <div class="m_col-lg-4"><a href="javascript:;">谢老师</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
              <div class="m_col-lg-4"><a href="javascript:;">12345678901</a></div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'server_mase',
  data() {
    return {
      show: false,
      scroll: null
    };
  },
  ready() {
    this.goTop();
    this.menu();
  },
  methods: {
    goTop() {
      if (this.$refs.go_top_btn) {
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
        document.documentElement.scrollTop = 0;
      }
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.$nextTick(() => {
        if (this.scroll > 200) {
          this.$refs.go_top_btn.style.display = 'block';
        } else {
          this.$refs.go_top_btn.style.display = 'none';
        }
      });
    }

  },
  mounted() {
    window.addEventListener('scroll', this.menu);
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 客服遮罩层代码 */

.fade-enter-active,
.fade-leave-active {
  transition: all .3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.course-fade-con-enter-active,
.course-fade-con-leave-active {
  transition: all .2s
}

.course-fade-con-enter,
.course-fade-con-leave-to {
  opacity: 0;
}

.service_shade {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, .77);
}

.service_shade_con {
  width: 600px;
  height: 456px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #fff;
}

.service_shade_con .top {
  height: 68px;
  line-height: 68px;
  border-bottom: 2px solid #e5e5e5;
  padding: 0 30px;
  text-align: left;
  font-size: 16px;
}

.service_shade_con .top .title_3 {
  color: #000;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.service_shade_con .top .close_btn {
  position: relative;
  float: right;
  width: 40px;
  height: 40px;
  margin-top: 14px;
  opacity: .6;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.service_shade_con .top .close_btn:hover {
  opacity: 1;
}

.service_shade_con .top .close_btn:after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 2px;
  height: 28px;
  background: #656565;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.service_shade_con .top .close_btn:before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 2px;
  height: 28px;
  background: #656565;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

div.service_shade_con .btn_wrap {
  background: #fff;
  padding: 0 60px;
  text-align: center;
}

.service_shade_con .service_font {
  line-height: 76px;
}

.service_shade_con .service_font a {
  font-size: 22px;
  color: #000;
  display: block;
  height: 100%;
}

.service_shade_con .service_link {
  padding: 44px 0 27px;
}

.service_shade_con .service_link a {
  display: block;
  height: 100%;
  height: 40px;
}

.service_shade_con .service_link .line_ser {
  // background: url("./../../assets/img/12_line_ser_1@2x.png") no-repeat center center;
}

.service_shade_con .service_link .we_char {
  background: url("./../../assets/img/16_servers_weCha@2x.png") no-repeat center center;
}

.service_shade_con .service_link .phone {
  background: url("./../../assets/img/17_phone_number@2x.png") no-repeat center center;
}

.side_fixed_wrapper {
  position: fixed;
  right: 50px;
  bottom: 222px;
  z-index: 10;
}

.side_fixed_wrapper a:nth-child(1) {
  background: url("./../../assets/img/6_apply@2x.png") no-repeat center;
  background-size: 50px 50px;
}

.side_fixed_wrapper a:nth-child(2) {
  background: url("./../../assets/img/7_servers@2x.png") no-repeat center;
  background-size: 50px 50px;
}

.side_fixed_wrapper a:nth-child(3) {
  background: url("./../../assets/img/8_go_top@2x.png") no-repeat center;
  background-size: 50px 50px;
}

.side_fixed_wrapper .item {
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
}

.side_fixed_wrapper .item#side_fixed_go_top_btn {
  display: none;
}

.side_fixed_wrapper .item.active#side_fixed_go_top_btn {
  display: block;
}

</style>
