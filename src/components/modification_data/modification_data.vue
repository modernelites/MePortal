<template>
  <div class="modification_data_p">
    <my-header></my-header>
    <div class="main mod_data_box">
      <nav class="mod_data_nav" id="mod_data_nav">
        <a v-on:click="select(0)" class="item" :class="{active:selectType===0}" href="#/modification_data/modification_data1"> 基本资料</a>
        <a v-on:click="select(1)" class="item" :class="{active:selectType===1}" href="#/modification_data/modification_data2"> 修改密码</a>
        <a v-on:click="select(2)" class="item" :class="{active:selectType===2}" href="#/modification_data/modification_data3"> 修改手机号码</a>
      </nav>
      <div class="mod_data_con" id="mod_data_con">
        <router-view></router-view>
      </div>
    </div>
    <my-footer></my-footer>
    <my-portrait></my-portrait>
  </div>
</template>
<script>
import myHeader from "@/components/header/header";
import myFooter from "@/components/footer/footer";
import myPortrait from "@/components/portrait/portrait";

export default {
  name: "modification_data",
  data() {
    return {
      selectType: 0
    };
  },
  methods: {
    // 控制tab 指针的切换
    select(type) {
      this.selectType = type;
    },
    selectUrl() {
      let url = window.location.href;
      if (url.indexOf("modification_data1") > 0) {
        this.selectType = 0;
      }
      if (url.indexOf("modification_data2") > 0) {
        this.selectType = 1;
      }
      if (url.indexOf("modification_data3") > 0) {
        this.selectType = 2;
      }
    }
  },
  mounted() {
    this.selectUrl();
  },
  components: {
    myHeader: myHeader,
    myFooter: myFooter,
    myPortrait: myPortrait
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modification_data_p {
  background: #f7f7f7;
}

.modification_data_p .main {
  background: #fff;
  min-height: 600px;
  margin-bottom: 60px;
  width: 1000px;
  margin: 0 auto;
}

.modification_data_p .mod_data_nav {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  padding: 0 44px 0 70px;
  border-bottom: 2px solid #eee;
}

.modification_data_p label {
  font-weight: initial;
}

.modification_data_p .mod_data_nav a {
  display: inline-block;
  margin-right: 40px;
  color: #656565;
  position: relative;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-decoration: none;
}

.modification_data_p .mod_data_nav a:visited {
  text-decoration: none;
}

a:link,
a:visited,
a:active,
a:hover {
  text-decoration: none;
}

.modification_data_p .mod_data_nav a:hover {
  text-decoration: none;
  color: #000;
}

.modification_data_p .mod_data_nav a.active {
  color: #000;
}

.modification_data_p .mod_data_nav a:after,
.modification_data_p .mod_data_nav a:after {
  content: " ";
  display: block;
  width: 100%;
  height: 4px;
  background: #f24d4d;
  position: absolute;
  left: 0;
  bottom: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

.modification_data_p .mod_data_nav a.active:after,
.modification_data_p .mod_data_nav a:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.modification_data_p .mod_data_con .item.basic_data_single {
  padding: 0 44px 60px 70px;
}

.modification_data_p .mod_data_con .item_top_con .info_box {
  width: 686px;
  padding-top: 72px;
}

.modification_data_p .mod_data_con .item_top_con .info_box label {
  display: block;
  margin-bottom: 38px;
  font-size: 16px;
  color: #656565;
}

.modification_data_p .mod_data_con .item_top_con .info_box input {
  box-sizing: border-box;
  display: inline-block;
  background: #eee;
  outline: none;
  border: none;
  padding-left: 10px;
  border-radius: 8px;
  height: 52px;
  line-height: 52px;
}

.modification_data_p .mod_data_con .item_top_con .info_box input.username {
  width: 352px;
}

.modification_data_p .mod_data_con .item_top_con .info_box label i {
  font-size: 12px;
  font-style: normal;
  display: inline-block;
  margin-right: 10px;
}

.modification_data_p .mod_data_con .item_top_con .info_box .school_input {
  width: 300px;
}

.modification_data_p .mod_data_con .item_top_con .info_box .grade_i {
  margin-left: 28px;
}

.modification_data_p
  .mod_data_con
  .item_top_con
  .info_box
  label
  span:first-child {
  display: inline-block;
  width: 90px;
  text-align: right;
  position: relative;
  margin-right: 16px;
}

/* 美化select */

.modification_data_p
  .mod_data_con
  .item_top_con
  .info_box
  .grade_label
  .grade_area {
  display: inline-block;
}

.modification_data_p
  .mod_data_con
  .item_top_con
  .info_box
  .grade_label
  .grade_select {
  box-sizing: border-box;
  display: inline-block;
  background: #eee;
  outline: none;
  border: none;
  padding-left: 20px;
  border-radius: 8px;
  height: 52px;
  line-height: 52px;
  width: 120px;
  background-image: url("./../../assets/img/pull-down_2.png");
  background-position: 90% center;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  color: #656565;
}

.modification_data_p .mod_data_con .item_top_con .info_box label span .star {
  text-decoration: none;
  position: absolute;
  top: -18px;
  right: -8px;
  color: #ff0b0b;
  font-weight: bold;
}

.modification_data_p .mod_data_con .item_top_con .info_box .sex {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  background: url("./../../assets/img/dot_2.png") no-repeat center center;
}

.modification_data_p .mod_data_con .item_top_con .info_box .sex_man {
  margin: 0 16px;
}

.modification_data_p .mod_data_con .item_top_con .info_box .sex_girl {
  margin: 0 16px 0 62px;
}

.modification_data_p .mod_data_con .item_top_con .info_box .sex:checked {
  background: url("./../../assets/img/dot_active_2.png") no-repeat center center;
}

.modification_data_p .mod_data_con .item_top_con .info_box .sex {
  -moz-appearance: button;
  -webkit-appearance: button;
}

.modification_data_p .birth_date {
  padding-right: 10px;
  width: 352px;
}

.modification_data_p .birth_date::-webkit-inner-spin-button {
  visibility: hidden;
}

.modification_data_p .birth_date::-webkit-calendar-picker-indicator {
  color: transparent;
  background: url(./../../assets/img/pull-down_2.png) no-repeat;
  background-position: center;
}

.modification_data_p .birth_date::-webkit-inner-spin-button,
.modification_data_p .student_phone::-webkit-inner-spin-button {
  visibility: hidden;
}

.modification_data_p .mod_data_con .item_top_con .info_box .grade_label {
  width: 100%;
}

.modification_data_p
  .mod_data_con
  .item_top_con
  .info_box
  .grade_label
  .school {
  display: inline-block;
}

.modification_data_p .mod_data_con .item_top_con .info_box .student_phone {
  width: 352px;
}

.modification_data_p .mod_data_con .item_top_con .info_box .student_email {
  width: 352px;
}

.modification_data_p .mod_data_con .item_top_con .portrait_box {
  float: right;
  padding-top: 24px;
}

/* 去除date内容部分 */

.modification_data_p
  .mod_data_con
  .item_bottom_con
  input::-webkit-inner-spin-button {
  visibility: hidden;
}

.modification_data_p .mod_data_con .item_bottom_con .parent_box label {
  display: block;
  font-size: 16px;
  color: #656565;
}

.modification_data_p .mod_data_con .item_bottom_con .phone_area {
  display: inline-block;
}

.modification_data_p .mod_data_con .item_bottom_con i {
  display: inline-block;
  font-style: normal;
  font-size: 12px;
  margin-right: 8px;
}

.modification_data_p .mod_data_con .item_bottom_con .name_i {
  margin-left: 20px;
}

.modification_data_p .mod_data_con .item_bottom_con .father_name,
.modification_data_p .mod_data_con .item_bottom_con .mom_name {
  width: 140px;
}

.modification_data_p
  .mod_data_con
  .item_bottom_con
  .parent_box
  .phone_area
  input {
  width: 228px;
}

.modification_data_p .mod_data_con .item_bottom_con .expressage_address {
  width: 352px;
}

.modification_data_p .mod_data_con .item_bottom_con i.phone_info {
  margin-left: 12px;
}

.modification_data_p .mod_data_con .item_bottom_con u.tip {
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #f24d4d;
  margin-left: 22px;
}

.modification_data_p .mod_data_con .item_bottom_con .parent_box input {
  box-sizing: border-box;
  display: inline-block;
  background: #eee;
  outline: none;
  border: none;
  padding-left: 10px;
  border-radius: 8px;
  height: 52px;
  line-height: 52px;
}

.modification_data_p
  .mod_data_con
  .item_bottom_con
  .parent_box
  input.expressage_address {
  margin-left: 12px;
}

.modification_data_p
  .mod_data_con
  .item_bottom_con
  .parent_box
  label
  span:first-child {
  display: inline-block;
  width: 90px;
  text-align: right;
}

.modification_data_p
  .mod_data_con
  .item_bottom_con
  .parent_box
  label
  span.ex_address_info {
  width: auto;
}

.modification_data_p .mod_data_con .item_bottom_con .parent_box .address_label {
  margin-bottom: 60px;
  margin-left: 12px;
}

.modification_data_p .mod_data_con .submit_fill_btn {
  display: inline-block;
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  background: #f24d4d;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-left: 96px;
}

/* 关于头像的css样式部分内容 */

.up-img-cover {
  position: relative;
  width: 196px;
  height: 196px;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}

.up-img-cover img {
  width: 196px;
  height: auto;
}

.up-img-cover:after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  content: " 修改头像";
  color: #fff;
  z-index: 3;
  text-align: center;
  cursor: pointer;
  opacity: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.up-img-cover:before {
  position: absolute;
  content: " ";
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.up-img-cover:hover:after {
  opacity: 1;
}

.up-img-cover:hover:before {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.cropper-view-box {
  outline: 1px solid #f8e71c;
  outline-color: #f8e71c;
  outline-style: dashed;
  border-radius: 50%;
  border: 1px solid #f8e71c;
}

.up-pre-after_title_3 {
  float: right;
  font-size: 16px;
  color: #656565;
  font-weight: 400;
  margin-right: 76px;
  margin-top: 24px;
}

.phone_up-pre-after_title_3 {
  font-size: 16px;
  color: #656565;
  font-weight: 400;
  display: none;
}

.up-frame-parent .up-control-btns {
  width: 100%;
  height: auto;
  background: transparent;
}

.modal_succeed_btn {
  display: inline-block;
  font-size: 16px;
  color: #656565;
  width: 130px !important;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 2px solid #979797;
  border-radius: 30px;
  opacity: 1;
  font-weight: 100;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.modal_succeed_btn:hover {
  background: #f24d4d;
  color: #fff !important;
  border-color: #f24d4d;
  font-weight: 100 !important;
  text-shadow: none;
}

.am-close-spin.modal_succeed_btn:hover {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  opacity: 1;
}

.modal_succeed_btn:before {
  content: " ";
}

/* 响应式修改基本资料内容部分 */

.father_phone::-webkit-input-placeholder,
.mom_phone::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 12px;
}

.father_phone:-moz-placeholder,
.mom_phone:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 12px;
}

.father_phone::-moz-placeholder,
.mom_phone::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 12px;
}

.father_phone:-ms-input-placeholder,
.mom_phone:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 12px;
}

.mod_data_con .submit_fill_btn:hover {
  background: #c53737;
}

/* 关于头像部分的样式 */

.user_pic {
  display: none;
}

label {
  font-weight: initial;
}

.preview-lg {
  border-radius: 50%;
}

.cropper-point.point-se:before {
  background-color: #f8e81c;
}

.cropper-point {
  background-color: #f8e81c;
}

#avatar-name {
  color: transparent;
}

.preview_head {
  padding: 15px 0;
  text-align: center;
}

.modal-title {
  color: #000;
}

.uploading_btn {
  border: none;
  outline: none;
  background: transparent;
  padding-top: 20px;
  color: #f6a623;
  font-size: 20px;
}

.avatar-btns {
  text-align: center;
  margin-top: 15px;
}

.avatar-btns button {
  outline: none;
  background-color: transparent;
  color: #656565;
  margin: 0 18px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.preview_head_2 {
  display: none;
}

.avatar-btns button {
  width: 130px;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  border-radius: 50px;
  border: 2px solid #979797;
}

.avatar-btns button:hover {
  color: #fff;
  background: #f24d4d;
  border-color: #f24d4d;
}

.modification_data_p .mod_paw_single {
  text-align: center;
}

.modification_data_p .mod_paw_single label {
  display: block;
  margin-bottom: 36px;
}

.modification_data_p .mod_paw_single .old_password {
  display: block !important;
  padding-top: 72px;
}

.modification_data_p .mod_paw_single .password {
  box-sizing: border-box;
  padding-left: 15px;
  width: 356px;
  height: 52px;
  border-radius: 8px;
  background: #ededed;
  border: none;
  outline: none;
}

.modification_data_p .mod_paw_single .dec {
  font-size: 16px;
  color: #656565;
  display: inline-block;
  margin-right: 16px;
  width: 90px;
  text-align: right;
}

.modification_data_p .mod_paw_single .tips {
  display: block;
  font-size: 12px;
  color: #f24d4d;
  margin-top: 20px;
  padding-left: 36px;
}

.modification_data_p .mod_paw_single .save_btn {
  display: block;
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #f24d4d;
  border-radius: 8px;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 60px;
  margin-bottom: 60px;
}

.modification_data_p .mod_paw_single .save_btn:hover {
  background: #ef2d2d;
  text-decoration: none;
}

.modification_data_p .mod_number_single {
  text-align: center;
}

.modification_data_p .mod_number_single label {
  display: block;
  margin-bottom: 36px;
}

.modification_data_p .mod_number_single .old_number {
  padding-top: 72px;
}

.modification_data_p .mod_number_single .number {
  box-sizing: border-box;
  padding-left: 15px;
  width: 356px;
  height: 52px;
  border-radius: 8px;
  background: #ededed;
  border: none;
  outline: none;
}

.modification_data_p .mod_number_single .dec {
  font-size: 16px;
  color: #656565;
  display: inline-block;
  margin-right: 16px;
  width: 90px;
  text-align: right;
}

.modification_data_p .mod_number_single .var_wrapper {
  display: inline-block;
  height: 52px;
}

.modification_data_p .mod_number_single .var_wrapper input {
  width: 262px;
}

.modification_data_p .mod_number_single .tips {
  display: inline-block;
  font-size: 12px;
  width: 92px;
  margin-left: 2px;
  height: 52px;
  line-height: 52px;
  border-radius: 8px;
  color: #fff;
  background: #f24d4d;
}
.modification_data_p .mod_number_single .tips_left {
  width: 104px;
}
.modification_data_p .mod_number_single .save_btn {
  display: block;
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #f24d4d;
  border-radius: 8px;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 60px;
  margin-bottom: 60px;
}

.modification_data_p .mod_number_single .save_btn:hover {
  background: #ef2d2d;
  text-decoration: none;
}

.modification_data_p .mod_data_con .item_bottom_con .parent_box .f_name,
.modification_data_p .mod_data_con .item_bottom_con .parent_box .m_name {
  margin-bottom: 36px;
  display: inline-block;
}

@media screen and (max-width: 1020px) {
  .modification_data_p {
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    /* height: 930px; */
  }
  .modification_data_p .main {
    margin-bottom: 0;
    margin: auto;
    width: auto;
  }
  .modification_data_p .mod_data_con .item.basic_data_single {
    padding: 0 20px 20px;
  }
  .modification_data_p .mod_data_con .item_top_con .portrait_box {
    float: left;
    width: 96px;
    height: 96px;
  }

  .up-img-cover img,
  .up-img-cover {
    width: 96px;
    height: 96px;
  }

  .modification_data_p .mod_data_con .item_top_con .info_box {
    margin-top: 80px;
    width: 100%;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box label {
    font-size: 12px;
    display: flex;
    line-height: 46px;
    height: 46px;
    margin-bottom: 18px;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box input {
    height: 46px;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box input.username {
    flex: 1;
    width: auto;
  }

  .modification_data_p .mod_data_con .item_top_con .info_box .school_input {
    width: auto;
    flex: 1;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box .grade_label {
    display: inline-block;
    width: 100%;
  }
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    .grade_label
    .school {
    display: flex;
  }

  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    .grade_label
    .grade_area {
    display: flex;
    margin-top: 18px;
    margin-bottom: 18px;
    /* width: 100%; */
  }
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    .grade_label
    .grade_select {
    flex: 1;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box .sex_man,
  .modification_data_p .mod_data_con .item_top_con .info_box .sex_girl,
  .register_p .info_box input.sex {
    margin-top: 14px;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box .b_date {
    display: flex;
    margin-bottom: 18px;
    margin-top: 40px;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box .birth_date {
    flex: 1;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box label.phone,
  .modification_data_p .mod_data_con .item_top_con .info_box label.mail {
    display: flex;
  }
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    label.phone
    .student_phone,
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    label.mail
    .student_email {
    flex: 1;
  }
  .modification_data_p .mod_data_con .item_bottom_con .parent_box label {
    font-size: 12px;
  }
  .modification_data_p .mod_data_nav {
    display: flex;
    font-size: 14px;
    padding: 0;
  }
  .modification_data_p .mod_data_nav a.item {
    text-align: center;
    margin: 0;
    flex: 1;
  }
  .modification_data_p .mod_data_nav a:after,
  .modification_data_p .mod_data_nav a:after {
    height: 1px;
  }
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    label
    span:first-child,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    label
    span:first-child {
    width: 60px;
  }
  .modification_data_p .mod_data_con .item_bottom_con .parent_box .f_name,
  .modification_data_p .mod_data_con .item_bottom_con .parent_box .m_name,
  .modification_data_p .mod_data_con .item_bottom_con .parent_box .phone_area,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    .address_label {
    display: flex;
    line-height: 52px;
    margin-bottom: 18px;
  }
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    .f_name
    .father_name,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    .m_name
    .mom_name,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    .phone_area
    .father_phone,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    .phone_area
    .mom_phone,
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    input.expressage_address {
    flex: 1;
  }
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    input.expressage_address {
    margin-left: 0;
  }
  .modification_data_p .mod_data_con .item_bottom_con .parent_box label {
    margin-bottom: 18px;
  }
  .modification_data_p
    .mod_data_con
    .item_bottom_con
    .parent_box
    label
    span.ex_address_info {
    height: 52px;
    width: 70px;
    flex: 0 0 70px;

    font-size: 12px;
  }
  .modification_data_p .mod_data_con .submit_fill_btn {
    width: 168px;
    height: 50px;
    line-height: 50px;
    margin-left: 0;
  }
  .modification_data_p .mod_data_con .submit_box {
    text-align: center;
  }

  .modification_data_p .mod_data_con {
    width: 100%;
    padding: 0 20px 20px;
  }
  .modification_data_p .mod_paw_single .dec {
    font-size: 12px;
    width: 60px;
    line-height: 52px;
  }

  .modification_data_p .mod_paw_single .old_password,
  .modification_data_p .mod_paw_single .new_password,
  .modification_data_p .mod_paw_single .affirm_password .a_pwd {
    display: flex;
    height: 46px;
    line-height: 46px;
  }

  .modification_data_p .mod_paw_single .password {
    flex: 1;
    height: 46px;
    line-height: 46px;
  }

  .modification_data_p .mod_paw_single {
    padding: 0 20px 20px;
  }
  .modification_data_p .mod_paw_single .save_btn {
    width: 168px;
    height: 50px;
    line-height: 50px;
  }

  .modification_data_p .mod_number_single .old_number,
  .modification_data_p .mod_number_single .new_number {
    display: flex;
    height: 46px;
    line-height: 46px;
  }
  .modification_data_p .mod_number_single .number {
    flex: 1;
    height: 46px;
    line-height: 46px;
  }
  .modification_data_p .mod_number_single .dec {
    font-size: 12px;
    line-height: 52px;
    display: inline;
  }
  .modification_data_p .mod_number_single .affirm_number {
    display: flex;
    width: 100%;
    height: 46px;
    line-height: 46px;
  }
  .modification_data_p .mod_number_single .affirm_number .dec {
    width: 60px;
  }
  .modification_data_p .mod_number_single .var_wrapper {
    display: flex;
    flex: 1;
    height: 52px;
    width: 0;
  }
  .modification_data_p .mod_number_single .var_wrapper input {
    flex: 1;
    width: auto;
    min-width: 0 !important;
  }
  .modification_data_p .mod_number_single .tips {
    margin-top: 0;
    width: 75px;
    height: 46px;
  }
  .modification_data_p .mod_number_single .save_btn {
    width: 168px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    margin-bottom: 0;
  }
  .modification_data_p .mod_data_con {
    padding: 0;
  }
  .modification_data_p .mod_data_con .item_bottom_con i.phone_info {
    margin-left: 0;
  }
  .modification_data_p .mod_data_con .item_bottom_con .parent_box .phone_area {
    margin-left: 80px;
  }
  .modification_data_p .mod_number_single {
    padding: 0 20px;
  }
  .modification_data_p .mod_data_con .item_top_con .info_box .grade_i {
    margin-left: 0;
  }
  .modification_data_p
    .mod_data_con
    .item_top_con
    .info_box
    .grade_label
    .grade_area {
    margin-left: 75px;
  }
  .modal.in .modal-dialog {
    width: 100%;
    margin: 30px 0;
  }
  .modal-content {
    width: 300px;
    height: 500px;
    margin: 0 auto;
  }
  .avatar-wrapper {
    height: 150px !important;
    width: 150px !important;
    margin: 0 auto;
  }
  .avatar-upload {
    height: 46px;
    width: 100%;
    font-size: 14px !important;
  }
  .avatar-upload .uploading_btn {
    font-size: 14px !important;
  }
  .row.avatar-btns {
    display: flex;
  }
  .modal-content .avatar-form .modal-body .row .col-md-8 {
    text-align: center;
  }
  .preview_head {
    font-size: 12px;
  }
  .row.avatar-btns .left_btn_area,
  .row.avatar-btns .right_btn_area {
    flex: 1;
    text-align: center !important;
    padding: 0;
  }
  .modal-content .preview-lg {
    width: 80px;
    height: 80px;
    margin-left: 10%;
  }
  .row .col-md-4 {
    text-align: center;
  }
  .row.avatar-btns .avatar_btn {
    width: 65px !important;
    height: 30px !important;
    font-size: 14px !important;
    line-height: 30px !important;
  }
  .modification_data_p .mod_paw_single .new_password {
    margin-top: 36px;
  }
  .modification_data_p .mod_paw_single .old_password {
    padding-top: 36px;
  }
  .modification_data_p .mod_data_nav {
    margin-bottom: 36px;
  }
  .login_p .tips {
    background: #353535;
    text-align: center;
    color: #d0d0d0;
    font-size: 12px;
    margin-top: -1px;
  }
  div.school {
    margin-bottom: 18px;
  }
}
</style>
