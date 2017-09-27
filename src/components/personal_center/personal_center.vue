<template>
  <div class="personal_center_p">
    <my-header></my-header>
    <div class="content_wrapper">
      <!-- 头像内容信息 -->
      <div class="portrai_wrapper">
        <div class="pic_wrappper">
          <img src="./../../assets/img/header_logo.png">
        </div>
        <a href="#/modification_data/modification_data1" class="mod_btn">修改资料</a>
        <h3 class="name">{{!user.UserName?user.LoginName:user.UserName}}</h3>
        <div class="info">
          <span class="grade">{{!user.Grade?'年级:未填写':user.Grade}}</span> |
          <span class="age">{{user.Birthday|datediff}}岁</span>
        </div>
      </div>
      <!-- 主题内容信息 -->
      <div class="content_main_wrapper">
        <nav>
          <ul class="nav_list" id="personal_center_p_nav_list">
            <li class="nav_item" :class="{active:selectType===0}" @click="select(0)">
              <a href="#/personal_center/personal_center1" title=""> 集训营课程</a>
            </li>
            <li class="nav_item" :class="{active:selectType===1}" @click="select(1)">
              <a href="#/personal_center/personal_center2" title="">大学生课程</a>
            </li>
            <li class="nav_item" :class="{active:selectType===2}" @click="select(2)">
              <a href="#/personal_center/personal_center3" title="">海外游学课程</a>
            </li>
            <li class="nav_item" :class="{active:selectType===3}" @click="select(3)">
              <a href="#/personal_center/personal_center4" title="">摩英网校</a>
            </li>
            <li class="nav_item" :class="{active:selectType===4}" @click="select(4)">
              <a href="#/personal_center/personal_center5" title="">助教`义工</a>
            </li>
          </ul>
        </nav>
        <div class="content_list" id="personal_center_p_content_list">
          <router-view></router-view>
        </div>
      </div>
      <!-- 移动端适配内容 -->
      <div class="m_content">
        <div class="content_top">
          <div class="pic_wrapper">
            <img src="./../../assets/img/header_logo.png">
          </div>
          <div class="right_wrapper">
            <div class="info_wrapper clearfix">
              <span class="name">Yvonne</span>
              <div class="info">
                <span class="grade">初二 | </span>
                <span class="age">12 岁</span>
              </div>
              <a href="#/modification_data/modification_data1" class="mod_btn">修改资料</a>
              <!-- 模拟下拉列表 -->
            </div>
            <div class="per_slide_tab_wrapper" :class="{active:optionShow}">
              <p ref="per_show_info" class="per_show_info" v-on:click="optionShow=!optionShow">集训营课程</p>
              <ul class="per_list" id="per_sub_nav">
                <li>
                  <a v-on:click="selectOption(0),optionShow=false" class="item" href="#/personal_center/personal_center1"> 集训营课程</a>
                </li>
                <li>
                  <a v-on:click="selectOption(1),optionShow=false" class="item" href="#/personal_center/personal_center2"> 大学生课程</a>
                </li>
                <li>
                  <a v-on:click="selectOption(2),optionShow=false" class="item" href="#/personal_center/personal_center3"> 海外游学课程</a>
                </li>
                <li>
                  <a v-on:click="selectOption(3),optionShow=false" class="item" href="#/personal_center/personal_center4"> 摩英网校</a>
                </li>
                <li>
                  <a v-on:click="selectOption(4),optionShow=false" class="item" href="#5/personal_center/personal_center5"> 助教·义工</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="content_bottom">
          <div class="left_area">
            <ul class="list">
              <li class="item">课程名称</li>
              <li class="item">上课时间</li>
              <li class="item">课程类型</li>
              <li class="item">课程价格</li>
              <li class="item">报名进度</li>
              <li class="item">支付状态</li>
            </ul>
          </div>
          <div class="right_area" id="per_con">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
        <div class="content_footer">
          <div class="left_area">
          </div>
          <div class="right_area">
            <a href="javascript:;" class="cancel_btn">取消报名</a>
          </div>
        </div>
      </div>
      <!-- 移动端适配end -->
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '@/components/header/header';
  import myFooter from '@/components/footer/footer';

  export default {
    name: 'personalCenter',
    data() {
      return {
        selectType: 0,
        user: JSON.parse(window.localStorage.getItem("user")),
        optionShow: false
      };
    },
    methods: {
      select(type) {
        this.selectType = type;
      },
      selectOption(num) {
        this.$refs.per_show_info.innerHTML = this.optionMap[num];
      }
    },
    created() {
      if (window.localStorage.getItem('user') === null) {
        window.location.href = "#/login/login1";
      }
      console.log(JSON.parse(window.localStorage.getItem("user")));
    },
    mounted() {
      let url = window.location.href;
      if (url.indexOf('personal_center1') > 0) {
        this.selectType = 0;
      }
      if (url.indexOf('personal_center2') > 0) {
        this.selectType = 1;
      }
      if (url.indexOf('personal_center3') > 0) {
        this.selectType = 2;
      }
      if (url.indexOf('personal_center4') > 0) {
        this.selectType = 3;
      }
      if (url.indexOf('personal_center5') > 0) {
        this.selectType = 4;
      }
    },
    components: {
      myHeader: myHeader,
      myFooter: myFooter
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../../assets/css/swiper-3.4.2.min.css");
  .personal_center_p {
    background: #f7f7f7;
  }

  .personal_center_p .content_wrapper {
    background: #fff;
    position: relative;
    margin-bottom: 60px;
  }

  .personal_center_p .portrai_wrapper {
    position: relative;
    margin-top: 112px;
  }

  .personal_center_p .pic_wrappper {
    width: 196px;
    height: 196px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    top: -98px;
    margin-left: -98px;
  }

  .personal_center_p .mod_btn {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 16px;
    color: #f28080;
    cursor: pointer;
  }

  .personal_center_p .mod_btn:before {
    content: ' ';
    display: inline-block;
    width: 16px;
    height: 20px;
    background: url("./../../assets/img/mod_icon.png") no-repeat center center;
    vertical-align: middle;
    margin-right: 8px;
  }

  .personal_center_p .portrai_wrapper .name {
    padding: 130px 0 20px;
    text-align: center;
    font-size: 24px;
    color: #000;
    font-weight: 500;
  }

  .personal_center_p .portrai_wrapper .info {
    text-align: center;
    font-size: 16px;
    color: #656565;
  }

  .personal_center_p .content_main_wrapper {
    padding: 40px 0 80px;
  }

  .personal_center_p .nav_list {
    display: box;
    /* OLD - Android 4.4- */
    display: -webkit-box;
    /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;
    /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;
    /* TWEENER - IE 10 */
    display: -webkit-flex;
    /* NEW - Chrome */
    display: flex;
    /* NEW, Spec - Opera 12.1, Firefox 20+ */
    border-bottom: 2px solid #e0e0e0;
  }

  .personal_center_p .nav_item {
    -webkit-box-flex: 1;
    /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;
    /* OLD - Firefox 19- */
    width: 20%;
    /* For old syntax, otherwise collapses. */
    -webkit-flex: 1;
    /* Chrome */
    -ms-flex: 1;
    /* IE 10 */
    flex: 1;
    /* NEW, Spec - Opera 12.1, Firefox 20+ */
    text-align: center;
  }

  .personal_center_p .nav_item a {
    padding: 15px 0;
    display: block;
    font-size: 20px;
    color: #656565;
    position: relative;
  }

  .personal_center_p .nav_item a:hover {
    color: #000;
  }

  .personal_center_p .nav_item.active a {
    color: #000;
  }

  .personal_center_p .content_list {
    padding: 56px 20px 0;
  }

  .personal_center_p .nav_item a:after {
    position: absolute;
    content: " ";
    display: block;
    width: 100%;
    left: 0;
    bottom: -2px;
    height: 4px;
    background: #f24d4d;
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .personal_center_p .nav_item.active a:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .personal_center_p .nav_item:hover a:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .personal_center_p .content_item_table {
    width: 100%;
  }

  .personal_center_p .content_item_table tr {
    border-bottom: 2px solid #e0e0e0;
  }

  .personal_center_p .content_item_table tr th {
    font-size: 20px;
    color: #000;
    padding: 26px 0;
  }

  .personal_center_p .content_item_table tr td {
    padding: 22px 0;
    font-size: 14px;
    color: #000;
  }

  .personal_center_p .content_item_table tr th,
  .personal_center_p .content_item_table tr td {
    text-align: center;
  }

  .personal_center_p .content_item_table tr td.pay {
    color: #72c11d;
  }

  .personal_center_p .content_item_table tr td.cancel {
    color: #ff0000;
  }

  .personal_center_p .no_data_wrapper {
    padding: 10px 0 0 180px;
  }

  .personal_center_p .pic_img {
    float: left;
  }

  .personal_center_p .pic_img {
    float: left;
  }

  .personal_center_p .title_3 {
    float: left;
    font-size: 24px;
    color: #9b9b9b;
    padding-top: 130px;
    padding-left: 30px;
  }

  @media screen and (max-width: 1205px) {
    .personal_center_p {
      max-width: 750px;
      min-width: 320px;
      margin: 0 auto;
    }
    .personal_center_p .content_wrapper {
      width: 96%;
      margin: 0 auto;
    }
    /* .personal_center_p .pic_wrappper{
      width:96px;
      height: 96px;
      left: 98px;
      top:-48px;
      z-index: 1;
      float: left;
    }
    img{
      width: 96px;
    }
  .personal_center_p .content_wrapper{
    width: 96%;
    margin: 0 auto;
  }
  .personal_center_p .portrai_wrapper .name{
    font-size: 16px;
    padding-top: 16px;
    margin-left: 106px;
    text-align: left;
  }
  .personal_center_p .mod_btn{
    font-size: 10px;
    }
    .personal_center_p .mod_btn:before{
      width: 7px;
      height: 10px;
      background-size: contain;
      margin-right: 4px;
    }
  .personal_center_p .portrai_wrapper .info{
    position: absolute;
    top: 16px;
    left: 50%;
    font-size: 10px;
  }*/
    .personal_center_p .m_content {
      margin-top: 66px;
    }
    .personal_center_p .content_main_wrapper {
      display: none;
    }
    .personal_center_p .portrai_wrapper {
      display: none;
    }






    .personal_center_p .content {
      width: 96%;
      margin: 0 auto;
    }

    .personal_center_p .container {
      padding-top: 116px;
    }

    .personal_center_p .content_top {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      height: 106px;
      background: #fff;
    }

    .personal_center_p .content_top .pic_wrapper {
      -webkit-box-flex: 0 0 96px;
      -moz-box-flex: 0 0 96px;
      -webkit-flex: 0 0 96px;
      -ms-flex: 0 0 96px;
      flex: 0 0 96px;
    }

    .personal_center_p .content_top .info_wrapper {
      position: relative;
      text-align: center;
      padding-top: 16px;
    }

    .personal_center_p .content_top .info_wrapper .name {
      float: left;
      /*margin-left: 16px;*/
      margin-left: 10px;
      font-size: 16px;
      color: #000;
    }

    .personal_center_p .content_top .info_wrapper .info {
      display: inline-block;
      font-size: 10px;
      color: #656565;
    }

    .personal_center_p .content_top .info_wrapper .mod_btn {
      float: right;
      font-size: 10px;
      color: #f28080;
      margin-right: 4px;
    }

    .personal_center_p .content_top .info_wrapper .mod_btn::before {
      content: ' ';
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
      width: 7px;
      height: 10px;
      background: url("./../../assets/img/mod_btn@2x.png") no-repeat center;
      background-size: 7px 10px;
    }

    .personal_center_p .content_top .pic_wrapper img {
      position: relative;
      top: -48px;
      width: 96px;
      height: 96px;
      border-radius: 50%;
    }


    .per_slide_tab_wrapper {
      width: 186px;
      margin: 28px auto 0;
      background: #fff;
      text-align: center;
    }

    .per_slide_tab_wrapper.active {
      box-shadow: 0 0 12px rgba(242, 77, 77, 0.15);
      position: relative;
      z-index: 3;
    }

    .per_slide_tab_wrapper .per_list {
      display: none;
    }

    .per_slide_tab_wrapper.active .per_list {
      display: block;
      z-index: 3;
      background: #fff;
      position: relative;
    }

    .per_show_info {
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      color: #f24d4d;
      position: relative;
      cursor: pointer;
    }

    .per_show_info:after {
      content: ' ';
      display: inline-block;
      width: 10px;
      height: 10px;
      background: url(./../../assets/img/person_down@2x.png) no-repeat;
      background-size: 10px 6px;
      position: absolute;
      top: 20px;
      right: 16px;
      cursor: pointer;
    }

    .per_slide_tab_wrapper.active .per_show_info:after {
      top: 16px;
      transform: rotate(-180deg);
    }

    .per_slide_tab_wrapper .per_list .item {
      display: block;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      color: #656565;
    }

    .personal_center_p .content_top .right_wrapper {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .personal_center_p .content_bottom {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }

    .personal_center_p .content_bottom .left_area {
      width: 96px;
      -webkit-box-flex: 0 0 96px;
      -moz-box-flex: 0 0 96px;
      -webkit-flex: 0 0 96px;
      -ms-flex: 0 0 96px;
      flex: 0 0 96px;
      background: #ebebeb;
    }

    .personal_center_p .content_bottom .left_area .list {
      padding: 20px 0;
      text-align: center;
    }

    .personal_center_p .content_bottom .left_area .item {
      font-size: 16px;
      color: #000;
      display: block;
      font-weight: bold;
      margin-bottom: 36px;
    }

    .personal_center_p .content_bottom .left_area .item:last-child {
      margin-bottom: 0;
    }

    .personal_center_p .content_bottom .right_area {
      width: 211px;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      width: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .personal_center_p .content_bottom .right_area:before,
    .personal_center_p .content_bottom .right_area:after {
      content: ' ';
      display: block;
      height: 1px;
      background: #ebebeb;
    }

    .personal_center_p .content_bottom .right_area .section {
      background: #fff;
    }

    .personal_center_p .content_bottom .right_area .section.active {
      display: block;
    }

    .personal_center_p .content_bottom .right_area .list {
      padding: 20px 0;
      text-align: center;
    }

    .personal_center_p .content_bottom .right_area .list .not_course_pic {
      margin-top: 40px;
    }

    .personal_center_p .content_bottom .right_area .list .not_course_title {
      padding-top: 40px;
      font-size: 12px;
      color: #9b9b9b;
    }

    .personal_center_p .content_bottom .right_area .list .item {
      font-size: 14px;
      color: #000;
      height: 16px;
      line-height: 16px;
      margin-bottom: 36px;
    }

    .personal_center_p .content_bottom .right_area .list .item.pay {
      color: #72c11d;
    }

    .personal_center_p .content_bottom .right_area .list .item:last-child {
      margin-bottom: 0;
    }

    .personal_center_p .section .swiper-button-prev {
      background-image: url(./../../assets/img/rec_left_pre@2x.png);
      background-size: 40px;
      height: 40px;
    }

    .personal_center_p .section .swiper-button-next {
      background-image: url(./../../assets/img/rec_right_next@2x.png);
      background-size: 40px;
      height: 40px;
    }

    .personal_center_p .content_footer {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      height: 60px;
      background: #fff;
    }

    .personal_center_p .content_footer .left_area {
      -webkit-box-flex: 0 0 96px;
      -moz-box-flex: 0 0 96px;
      -webkit-flex: 0 0 96px;
      -ms-flex: 0 0 96px;
      flex: 0 0 96px;
      width: 96px;
    }

    .personal_center_p .content_footer .right_area {
      width: 211px;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      width: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
    }

    .personal_center_p .content_footer .right_area .cancel_btn {
      display: block;
      height: 60px;
      line-height: 60px;
      color: #ff0000;
    }
    .personal_center_p .no_data_wrapper {
      padding: 0;
    }
    .personal_center_p .no_data_wrapper .no_data_content {
      text-align: center;
    }
    .personal_center_p .no_data_wrapper .no_data_content img {
      width: 156px;
      height: 150px;
      margin-top: 40px;
    }
    .personal_center_p .title_3 {
      font-size: 12px;
    }
  }

</style>
