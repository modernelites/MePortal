<template>
  <div class="contact_us_p">
    <my-header></my-header>
    <div class="content_wrapper w_1000">
      <div class="conent_left">
        <ul class="nav_list" id="contact_us_p_nav_list">
          <li @click="select(0)"><a href="#/contact/contact1" :class="{'active':selectType===0}" class="nav_item">地址</a></li>
          <li @click="select(1)"><a href="#/contact/contact2" :class="{'active':selectType===1}" class="nav_item">邮箱</a></li>
          <li @click="select(2)"><a href="#/contact/contact3" :class="{'active':selectType===2}" class="nav_item">电话</a></li>
          <li @click="select(3)"><a href="#/contact/contact4" :class="{'active':selectType===3}" class="nav_item">意见与建议</a></li>
        </ul>
      </div>
      <div class="content_right">
        <div class="content_main_wrapper" id="contact_us_p_content_main_wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <my-footer @contactSelect="contactSelect"></my-footer>
  </div>
</template>
<script>
import myHeader from '@/components/header/header';
import myFooter from '@/components/footer/footer';
export default {
  name: 'contact',
  data() {
    return {
      selectType: 0
    };
  },
  components: {
    myHeader,
    myFooter
  },
  methods: {
    select(type) {
      this.selectType = type;
    },
    // 接受footer传递过来的参数进行 对当前模板class 进行控制
    contactSelect(str) {
      this.selectType = str;
    },
    // 刷新页面保证 保证当前tab 指针指示正确
    selectUrl() {
      let url = window.location.href;
      console.log(url);
      if (url.indexOf('contact1') > 0) {
        this.selectType = 0;
      }
      if (url.indexOf('contact2') > 0) {
        this.selectType = 1;
      }
      if (url.indexOf('contact3') > 0) {
        this.selectType = 2;
      }
      if (url.indexOf('contact4') > 0) {
        this.selectType = 3;
      }
    }
  },
  mounted() {
    this.selectUrl();
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contact_us_p {
  background: #f7f7f7;
}

.contact_us_p .content_wrapper {
  display: box;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  width: 1000px;
}

.contact_us_p .content_wrapper .conent_left {
  -webkit-box-flex: 112px;
  -moz-box-flex: 112px;
  width: 112px;
  -webkit-flex: 112px;
  -ms-flex: 112px;
  flex: 112px;
  text-align: left;
}

.contact_us_p .content_wrapper .conent_left .nav_list {
  padding-top: 10px;
}

.contact_us_p .content_wrapper .conent_left a {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #656565;
  position: relative;
  padding-left: 12px;
}

.contact_us_p .content_wrapper .conent_left a.active {
  color: #000;
  font-weight: 700;
}

.contact_us_p .content_wrapper .conent_left a.active:before {
  content: ' ';
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  height: 18px;
  width: 2px;
  background: #f24d4d;
}

.contact_us_p .content_right {
  -webkit-box-flex: 886px;
  -moz-box-flex: 886px;
  width: 886px;
  -webkit-flex: 886px;
  -ms-flex: 886px;
  flex: 886px;
  background: #fff;
  margin-bottom: 60px;
}

.contact_us_p .content_right .content_main_single {
  display: none;
}

.contact_us_p .content_right .content_main_single.active {
  display: block;
}

.contact_us_p .content_right .map_single {
  padding: 30px 20px 60px;
}

.contact_us_p .content_right .map_wrapper {}

.contact_us_p .content_right .map_single .address {
  font-size: 16px;
  color: #000;
  font-weight: bold;
  padding-top: 46px;
}

.contact_us_p .content_right .phone_single {
  padding: 60px 120px;
  font-size: 14px;
  color: #000;
}

.contact_us_p .content_right .phone_single .district {
  display: block;
  margin-bottom: 26px;
}

.contact_us_p .content_right .phone_single a {
  color: #000;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
  padding-left: 62px;
}

.contact_us_p .content_right .mail_single {
  padding: 60px 120px;
  font-size: 14px;
  color: #000;
}

.contact_us_p .content_right .mail_single .district {
  display: block;
  margin-bottom: 26px;
}

.contact_us_p .content_right .mail_single a {
  color: #000;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
  padding-left: 62px;
}

.contact_us_p .content_right .feedback_single {
  padding: 40px;
  color: #656565;
}

.contact_us_p .content_right .feedback_single .info {
  font-size: 14px;
  color: #656565;
  line-height: 22px;
  padding-bottom: 46px;
}

.contact_us_p .content_right .feedback_box {
  background: #f0f0f0;
  border-radius: 16px;
}

.contact_us_p .content_right .feedback_box .top_area {
  display: block;
  height: 100px;
  line-height: 100px;
  padding-left: 76px;
  border-bottom: 2px solid #e0e0e0;
}

.contact_us_p .content_right .feedback_object {
  font-size: 14px;
  margin-right: 80px;
}

.contact_us_p .content_right .top_area .select_object {
  font-family: PingFangSC-Regular, "Microsoft YaHei", sans-serif;
  box-sizing: border-box;
  display: inline-block;
  background: #fff;
  outline: none;
  border: none;
  padding-left: 20px;
  border-radius: 8px;
  height: 52px;
  line-height: 52px;
  width: 320px;
  background-image: url(./../../assets/img/pull-down_2.png);
  background-position: 90% center;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  color: #656565;
}

.contact_us_p .content_right .middile_area .tips {
  display: block;
}

.contact_us_p .content_right .middile_area {
  display: table;
  padding-top: 20px;
}

.contact_us_p .content_right .middile_area .versions {
  font-size: 14px;
  padding-left: 30px;
  padding-right: 80px;
  display: table-cell;
  vertical-align: middle;
}

.contact_us_p .content_right .middile_area .textarea {
  font-family: PingFangSC-Regular, "Microsoft YaHei", sans-serif;
  width: 516px;
  height: 268px;
  box-sizing: border-box;
  padding: 15px;
  font-size: 14px;
  color: #656565;
  line-height: 25px;
  margin-right: 60px;
  border: none;
  background: #fff;
  border-radius: 8px;
  resize: none;
  outline: none;
}

.contact_us_p .content_right .tips {
  padding: 16px 0;
  font-size: 12px;
  color: #656565;
  display: block;
}

.contact_us_p .content_right .btn_wrapper {
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
}

.contact_us_p .content_right .btn_wrapper .btn {
  display: inline-block;
  border: none;
  outline: none;
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 16px;
  background: #f24d4d;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
  margin: 0 32px;
}

.contact_us_p .content_right .btn_wrapper .btn:hover {
  background: #fb3030;
}

</style>
