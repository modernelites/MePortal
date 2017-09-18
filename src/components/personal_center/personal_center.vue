<template>
  <div class="personal_center_p">
    <my-header></my-header>
    <div class="content_wrapper w_1000">
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
        user:JSON.parse(window.localStorage.getItem("user"))
      };
    },
    methods: {
      select(type) {
        this.selectType = type;
      }
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

</style>
