<template>
  <div class="register_p">
    <my-header></my-header>
    <div class="content_wrapper " @click="slidShow=false">
      <div class="content_main" id="register_p_content_main">
        <router-view></router-view>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '@/components/header/header';
  import myFooter from '@/components/footer/footer';

  export default {
    name: 'register',
    data() {
      return {
        slidShow: false,
        SelectCourseType: {},
        CourseType_Items: []
      };
    },
    methods: {
      selectOption(m) {
        this.slidShow = false;
        this.SelectCourseType = m;
        //this.Course_Items_Fillter = this.Course_List_Fillter(m.CourseTypeID);
      },
      CourseType_List() {
        this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_Items = response.Data;
          this.SelectCourseType = response.Data[0];
        }, function () {
          console.log('请求发送失败');
        });
      }
    },
    mounted() {},
    components: {
      myHeader: myHeader,
      myFooter: myFooter
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .course-fade-enter-active,
  .course-fade-leave-active {
    transition: all .3s
  }

  .course-fade-enter,
  .course-fade-leave-to {
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

  .register_p {
    background: #f7f7f7;
  }

  .register_p .content_wrapper {
    background: #fff;
    min-height: 600px;
    margin-bottom: 60px;
    padding: 30px 56px;
  }

  .register_p .content_header .title_3 {
    font-size: 26px;
    color: #656565;
    font-weight: 700;
    position: relative;
    display: inline-block;
    margin-right: 32px;
    position: relative;
  }

  .register_p .content_header .title_3:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: -12px;
    display: block;
    width: 4px;
    height: 26px;
    background: #f8e71c;
  }

  .register_p .select_wrapper {
    width: 300px;
    display: inline-block;
    position: relative;
  }

  .register_p .select_wrapper .show_wrapper .show_info {
    width: 300px;
    height: 60px;
    line-height: 60px;
    background: center;
    color: #000;
    border-radius: 23px;
    font-size: 22px;
    font-weight: 700;
    background: #f8e71c;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .register_p .select_wrapper .show_wrapper .show_info a {
    color: #000;
  }

  .register_p .select_wrapper .show_wrapper .show_info:before {
    content: ' ';
    position: absolute;
    right: 39px;
    top: 20px;
    display: block;
    width: 12px;
    height: 12px;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transform: rotate(-45deg);
  }

  .register_p .select_wrapper .option_wrapper {
    border-bottom-left-radius: 23px;
    border-bottom-right-radius: 23px;
    background: #f8e71c;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 42px;
    padding-top: 12px;
    width: 100%;
    z-index: 3;
  }

  .register_p .select_wrapper .option_wrapper .option {
    line-height: 60px;
    height: 60px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .register_p .select_wrapper .option_wrapper .option a {
    color: #000;
    display: block;
    width: 100%;
    height: 100%;
  }

  .register_p .select_wrapper .option_wrapper .option:hover {
    background: #cebf15;
  }

  .register_p .content_header {
    padding-bottom: 36px;
  }

  .register_p .content_header .course_wrapper {
    padding-top: 46px;
  }

  .register_p .content_header .course_wrapper .info {
    display: inline-block;
    font-size: 16px;
    color: #656565;
    width: 90px;
    position: relative;
    text-align: right;
    margin-right: 16px;
  }

  .register_p .content_header .course_wrapper .info .star {
    text-decoration: none;
    position: absolute;
    top: -18px;
    right: -8px;
    color: #ff0b0b;
    font-weight: bold;
  }

  .register_p .content_header .course_wrapper .select_btn {
    display: inline-block;
    width: 110px;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    border: 1px solid #656565;
    text-align: center;
    font-size: 18px;
    color: #656565;
    border-radius: 8px;
  }

  .register_p .content_header .course_wrapper .show_info {
    display: inline-block;
    border: 1px solid #f8e81c;
    background: #fffdd8;
    padding: 0 25px;
    height: 52px;
    line-height: 52px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 8px;
    font-size: 18px;
    color: #000;
    font-weight: bold;
  }

  .register_p .content_header .course_wrapper .tips {
    padding-left: 226px;
    box-sizing: border-box;
    font-size: 12px;
    padding-top: 8px;
    color: #656565;
  }

  .register_p .content_header .course_wrapper .tips .text {
    color: #f24d4d;
  }

  .register_p .content_header .course_wrapper .tips .date {
    display: inline-block;
    padding-left: 40px;
  }

  .register_p .info_box {
    width: 686 px;
  }

  .register_p .info_box label {
    display: block;
    margin-bottom: 38px;
    font-size: 16px;
    color: #656565;
  }

  .register_p .info_box .common_label {
    display: block;
    margin-bottom: 38px;
    font-size: 16px;
    color: #656565;
  }

  .register_p .info_box label .common_span {
    display: inline-block;
    width: 90px;
    text-align: right;
    position: relative;
    margin-right: 16px;
  }

  .register_p .info_box input {
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

  .register_p .info_box .common_input {
    box-sizing: border-box;
    display: inline-block;
    background: #eee;
    outline: none;
    border: none;
    padding-left: 10px;
    border-radius: 8px;
    height: 52px;
    line-height: 52px;
    width: 356px;
  }

  .register_p .info_box input.username {
    width: 356px;
  }

  .register_p .info_box label i {
    font-size: 12px;
    font-style: normal;
    display: inline-block;
    margin-right: 10px;
  }

  .register_p .info_box .school_input {
    width: 268px;
  }

  .register_p .info_box .grade_i {
    margin-left: 28px;
  }

  .register_p .info_box label span:first-child {
    display: inline-block;
    width: 90px;
    text-align: right;
    position: relative;
    margin-right: 16px;
  }
  /* 美化select */

  .register_p .info_box .grade_label .grade_area {
    display: inline-block;
  }

  .register_p .info_box .common_area {
    display: inline-block;
  }

  .register_p .info_box .common_i {
    margin-left: 28px;
  }

  .register_p .info_box .common_select {
    box-sizing: border-box;
    display: inline-block;
    background: #eee;
    outline: none;
    border: none;
    padding-left: 20px;
    border-radius: 8px;
    height: 52px;
    line-height: 52px;
    min-width: 120px;
    background-image: url("./../../assets/img/pull-down_2.png");
    background-position: 90% center;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    color: #656565;
    padding-right: 42px;
    /*for chrome*/
  }

  .register_p .info_box .grade_label .grade_select {
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
    /*for chrome*/
  }

  .register_p .info_box label span .star {
    text-decoration: none;
    position: absolute;
    top: -18px;
    right: -8px;
    color: #ff0b0b;
    font-weight: bold;
  }

  .register_p .info_box .sex {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url("./../../assets/img/dot_2.png") no-repeat center center;
  }

  .register_p .info_box .sex_man {
    margin: 0 16px;
  }

  .register_p .info_box .sex_girl {
    margin: 0 16px 0 62px;
  }

  .register_p .info_box .sex:checked {
    background: url("./../../assets/img/dot_active_2.png") no-repeat center center;
  }

  .register_p .info_box .sex {
    appearance: button;
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    /* Safari 和 Chrome */
  }

  .register_p .birth_date {
    padding-right: 10px;
  }

  .register_p .birth_date::-webkit-inner-spin-button {
    visibility: hidden;
  }

  .register_p .birth_date::-webkit-calendar-picker-indicator {
    color: transparent;
    background: url(./../../assets/img/pull-down_2.png) no-repeat;
    background-position: center;
  }

  .register_p .birth_date::-webkit-inner-spin-button {
    visibility: hidden;
  }

  .register_p .student_phone::-webkit-inner-spin-button {
    visibility: hidden;
  }

  .register_p .info_box .student_phone {
    width: 356px;
  }

  .register_p .info_box .student_email {
    width: 356px;
  }

  .register_p .portrait_box {
    float: right;
    padding-top: 24px;
  }

  .register_p .item_bottom_con input::-webkit-inner-spin-button {
    visibility: hidden;
  }

  .register_p .item_bottom_con .parent_box label {
    display: block;
    margin-bottom: 38px;
    font-size: 16px;
    color: #656565;
  }

  .register_p .item_bottom_con .phone_area {
    display: inline-block;
  }

  .register_p .item_bottom_con i {
    display: inline-block;
    font-style: normal;
    font-size: 12px;
    margin-right: 8px;
  }

  .register_p .item_bottom_con .name_i {
    margin-left: 20px;
  }

  .register_p .item_bottom_con .father_name,
  .register_p .item_bottom_con .mom_name {
    width: 120px;
  }

  .register_p .item_bottom_con .father_phone,
  .register_p .item_bottom_con .mom_phone,
  .register_p .item_bottom_con .expressage_address {
    width: 356px;
  }

  .register_p .item_bottom_con i.phone_info {
    margin-left: 12px;
  }

  .register_p .item_bottom_con div.tip {
    display: block;
    font-size: 12px;
    text-decoration: none;
    color: #f24d4d;
    margin-left: 22px;
  }

  .register_p .item_bottom_con .parent_box input {
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

  .register_p .item_bottom_con .parent_box input.expressage_address {
    margin-left: 14px;
  }

  .register_p .item_bottom_con .parent_box label span:first-child {
    display: inline-block;
    width: 90px;
    text-align: right;
  }

  .register_p .item_bottom_con .parent_box label span.ex_address_info {
    width: auto;
    /*margin-left: -54px; */
  }

  .register_p .add_wrapper label {
    display: block;
    margin-bottom: 38px;
    font-size: 16px;
    color: #656565;
  }

  .register_p .add_wrapper label span:first-child {
    display: inline-block;
    width: 90px;
    text-align: right;
    position: relative;
    margin-right: 16px;
  }

  .register_p .add_wrapper .origin:checked {
    background: url(./../../assets/img/dot_active_2.png) no-repeat center center;
  }

  .register_p .add_wrapper .origin {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    webkit-appearance: none;
    outline: none;
  }

  .register_p .add_wrapper .origin {
    margin: 0 16px;
  }

  .register_p .add_wrapper .origin {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url(./../../assets/img/dot_2.png) no-repeat center center;
  }

  .register_p .add_wrapper .know_label .know_select {
    box-sizing: border-box;
    display: inline-block;
    background: #eee;
    outline: none;
    border: none;
    padding-left: 20px;
    border-radius: 8px;
    height: 52px;
    line-height: 52px;
    width: 356px;
    background-image: url(./../../assets/img/pull-down_2.png);
    background-position: 90% center;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    color: #656565;
  }

  .register_p .add_wrapper .remark_area {
    display: table;
  }

  .register_p .add_wrapper .remark_area .textarea {
    display: table-cell;
    vertical-align: middle;
    width: 672px;
    height: 200px;
    background: #eee;
    resize: none;
    font-size: 16px;
    padding: 15px;
    line-height: 25px;
    color: #656565;
    border-radius: 16px;
    outline: none;
  }

  .register_p .add_wrapper .tips_area {
    text-align: center;
    font-size: 14px;
    color: #656565;
    padding-top: 10px;
    min-height: 36px;
    width: 500px;
    margin: 0 auto;
    background: url("./../../assets/img/25_special_remind@2x.png") no-repeat top left;
  }
  /* 
  .register_p .volunteer_wrapper .add_wrapper div.tips_area {
    background: url("./../../assets/img/25_special_remind@2x.png") no-repeat 45px 0;
  } */

  .register_p .add_wrapper .tips_item {
    display: block;
  }

  .register_p .add_wrapper .tips_item_2 {
    padding-top: 5px;
    padding-left: 70px;
  }

  .register_p .add_wrapper .btn_wrapper {
    padding: 60px 0 30px;
    text-align: center;
  }

  .register_p .add_wrapper .btn_wrapper .submit_btn {
    border: none;
    outline: none;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #f8e81c;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    font-family: PingFangSC-Regular, "Microsoft YaHei", sans-serif;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }

  .register_p .add_wrapper .btn_wrapper .submit_btn:hover {
    background: #ead900;
  }

  .register_p .add_wrapper .student_wrapper .file,
  .register_p .add_wrapper .reg_file_wrapper .file {
    font-size: 12px;
    color: #f6a623;
    text-indent: -66px;
    margin-left: -66px;
    outline: none;
  }

  .register_p .add_wrapper .student_wrapper .student_file_btn,
  .register_p .add_wrapper .reg_file_wrapper .reg_file_btn {
    display: inline-block;
    width: 240px;
    overflow: hidden;
    font-size: 12px;
    color: #f6a623;
    outline: none;
  }

  .register_p .overseas_single .tips_area {
    width: 412 px;
  }

  .register_p .overseas_single .tips_area .tips_item_1 {
    padding-right: 168px;
  }

  .register_p .info_box .radio {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url("./../../assets/img/dot_2.png") no-repeat center center;
  }

  .register_p .info_box .radio_1 {
    margin: 0 16px;
  }

  .register_p .info_box .radio_2 {
    margin: 0 16px 0 62px;
  }

  .register_p .info_box .radio:checked {
    background: url("./../../assets/img/dot_active_2.png") no-repeat center center;
  }

  .register_p .info_box .radio {
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .register_p .course_shade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .77);
    z-index: 50;
  }

  .register_p .course_modal_box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background: #fff;
    z-index: 100;
  }

  .register_p .modal_box_top {
    height: 68px;
    line-height: 68px;
    border-bottom: 2px solid #e5e5e5;
    padding: 0 30px;
    text-align: left;
    font-size: 16px;
  }

  .register_p .modal_box_top .title_3 {
    color: #000;
    font-weight: 500;
    position: relative;
    display: inline-block;
  }

  .register_p .modal_box_top .close_btn {
    position: relative;
    float: right;
    width: 40px;
    height: 40px;
    margin-top: 14px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .register_p .modal_box_top .close_btn:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 2px;
    height: 28px;
    background: #afafaf;
    transform: rotate(45deg);
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .register_p .modal_box_top .close_btn:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 2px;
    height: 28px;
    background: #afafaf;
    transform: rotate(-45deg);
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .register_p .modal_box_top .close_btn:hover:after,
  .register_p .modal_box_top .close_btn:hover:before {
    background: #656565;
  }

  .register_p .modal_box_middle {
    padding: 20px 0;
    border-bottom: 2px solid #e5e5e5;
  }

  .register_p .modal_box_middle label {
    display: block;
    text-align: left;
    padding-left: 150px;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    color: #000;
    font-weight: 500;
  }

  .register_p .modal_box_middle label span {
    display: inline-block;
    margin-left: 30px;
  }

  .register_p .modal_box_middle .radio {
    appearance: button;
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    outline: none;
    /* Safari 和 Chrome */
  }

  .register_p .modal_box_middle .radio {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url("./../../assets/img/dot_2.png") no-repeat center center;
  }

  .register_p .modal_box_middle .radio:checked {
    background: url("./../../assets/img/dot_active_2.png") no-repeat center center;
  }

  .register_p .modal_box_bottom {
    padding: 22px 0 26px;
    text-align: center;
    font-size: 0;
  }

  .register_p .modal_box_bottom .btn {
    border: none;
    outline: none;
    box-sizing: border-box;
    width: 130px;
    height: 60px;
    text-align: center;
    border-radius: 30px;
    border: 2px solid #979797;
    color: #979797;
    font-size: 16px;
    margin: 0 20px;
    background: none;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
  }

  .register_p .modal_box_bottom .btn:hover {
    background: #f24d4d;
    color: #fff;
    border-color: #f24d4d;
  }

  .register_p .add_wrapper .radio {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background: url("./../../assets/img/dot_2.png") no-repeat center center;
  }

  .register_p .add_wrapper .radio_1 {
    margin: 0 16px;
  }

  .register_p .add_wrapper .radio_2 {
    margin: 0 16px 0 62px;
  }

  .register_p .add_wrapper .radio:checked {
    background: url("./../../assets/img/dot_active_2.png") no-repeat center center;
  }

  .register_p .add_wrapper .radio {
    appearance: button;
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    /* Safari 和 Chrome */
    outline: none;
  }

  .register_p .add_wrapper label span .star {
    text-decoration: none;
    position: absolute;
    top: -18px;
    right: -8px;
    color: #ff0b0b;
    font-weight: bold;
  }

  .content_wrapper .content_item .add_wrapper .origin_1,
  .content_wrapper .content_item .add_wrapper .origin_2 {
    display: inline;
  }
  /* 移动端适配 */

  @media screen and (max-width: 1120px) {

    /* 报名页整体 */
    /* .content_main {} */
    .register_p {
      padding-bottom: 30px;
    }

    .register_p .content_wrapper {
      padding: 20px 15px;
      max-width: 750px;
      min-width: 350px;
      margin: 0 auto
    }
    .register_p .content_header .course_wrapper {
      padding-top: 10px;
    }
    .register_p .content_header {
      padding-bottom: 10px;
    }
    .register_p .info_box label,
    .register_p .info_box .common_label,
    .register_p .item_bottom_con .parent_box label,
    .register_p .add_wrapper label {
      margin-bottom: 10px;
    }
    .register_p .content_header .course_wrapper .select_btn {
      width: 100px;
      height: 46px;
    }
    /* 报名 */
    .content_wrapper .content_header .title_3 {
      font-size: 12px;
    }
    .register_p .info_box .school_input,
    .register_p .info_box .grade_label .grade_select {
      width: 56%;
    }
    .register_p .info_box .grade_label .gs_1 {
      width: 70%;
    }
    .register_p .info_box .grade_label .grade_area {
      display: block;
    }
    .register_p .info_box .common_area,
    .register_p .info_box .grade_label .grade_area {
      padding-left: 83px;
      padding-top: 10px;
    }
    .register_p .info_box .common_area .common_i {
      margin-left: 10px;
    }
     .register_p .info_box .common_area{
       width:100%;
     }
    .register_p .info_box .grade_label  .class_select {
      width: 70%;
    }
    .register_p .info_box .grade_label .school {
      padding-left: 0px;
    }
    .register_p .info_box label i {
      margin-right: 3px;
    }
    .register_p .info_box .grade_i {
      margin-left: 10px;
    }

    .register_p .info_box input.username,
    .register_p .info_box .student_phone,
    .register_p .info_box .common_input,
    .register_p .add_wrapper .know_label .know_select {
      width: 70%;
    }
    .register_p .info_box label span:first-child {
      width: 70px;
      /* margin-right: 15px; */
    }
    .register_p .info_box input.birth_date {
      width: 70%;
    }






    /* 课程下拉框 */
    .content_wrapper .content_header .select_wrapper .show_info {
      font-size: 18px;
      width: 200px;
      height: 46px;
    }

    .content_wrapper .content_header .course_wrapper .info {
      font-size: 12px;
    }
    /* 父母信息 */
    .content_wrapper .content_item .info_box span,
    .content_wrapper .content_item .item_bottom_con span {
      font-size: 12px;
      font-weight: normal;
    }

    .content_wrapper .content_item .info_box select,
    .content_wrapper .content_item .info_box region,
    .content_wrapper .content_item .info_box .grade_label i {
      font-weight: normal；
    }
    .content_wrapper .content_item .item_bottom_con i,
    .content_wrapper .content_item .item_bottom_con u {
      font-size: 10px;
      font-weight: normal
    }
    .content_wrapper .content_item .item_bottom_con .tip1 {
      display: none;
    }
    .content_wrapper .content_item .item_bottom_con input {
      width: 54%;
    }
    .content_wrapper .content_item .item_bottom_con .mom_phone,
    .content_wrapper .content_item .item_bottom_con .father_phone {
      margin-top: 10px;
      width: 72%;
    }
    .content_wrapper .content_item .item_bottom_con .phone_area {
      padding-left: 95px;
      width: 100%;
    }
    .content_wrapper .content_item .item_bottom_con label.address_label {
      margin-left: -10px;
    }
    .register_p .item_bottom_con .parent_box input.expressage_address {
      width: 300px;
    }
    .register_p .item_bottom_con .parent_box label span:first-child{
      width:70px;
    }
    .content_wrapper .content_item .item_bottom_con i.name_i{
      margin-left: 20px;
      margin-right: 8px;
    }
        .content_wrapper .content_item .item_bottom_con i.phone_info{
          margin-left: 0;
        }
    /* 报名新添加内容 */
    .content_wrapper .content_item .add_wrapper span {
      font-size: 12px;
      font-weight: normal;
    }
    .content_wrapper .content_item .add_wrapper .know_area span {
      width: 70px;
    }
    .content_wrapper .content_item .add_wrapper input {
      font-size: 14px;
    }
    .content_wrapper .content_item .add_wrapper .textarea {
      width: 258px;
      height: 200px;
      /* margin-left: 50px; */
    }
    .content_wrapper .content_item .add_wrapper .origin_1,
    .content_wrapper .content_item .add_wrapper .origin_2 {
      display: inline-block;
      width: 50%;
      margin-left: 110px;
    }
    .content_wrapper .content_item .add_wrapper .origin_1 {
      margin-left: -1px;
    }
    .content_wrapper .content_item .add_wrapper .origin_1 .origin_girl {
      margin-left: 47px;
    }
    .register_p .add_wrapper .tips_area {
      margin-left: 36px;
    }
    .register_p .add_wrapper .btn_wrapper .submit_btn {
      margin: 0 auto;
    }
  }

</style>
