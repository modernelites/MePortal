<template>
  <!-- header -->
  <div>
    <header class="inner_header">
      <div class="inner_header_con" v-bind:class="{ search_active: showSearch }">
        <div class="inner_header_con_top">
          <a href="#/" class="logo_link">
            <img src="./../../assets/img/logo_2.png" alt="logo" class="logo">
          </a>
          <!-- 下面是inner_header 的导航部分 -->
          <nav class="inner_nav">
            <ul class="inner_nav_list clearfix">
              <li class="inner_nav_item" v-for="(m,index) in menuFillter(menuList,0)">
                <a :href="m.Link">{{m.MenuName}}</a>
                <ul class="sub_list">
                  <li v-for="(m2,index) in menuFillter(menuList,m.MenuID)" class="item" @click="select(index)">
                    <a :href="m2.Link+index">{{m2.MenuName}}</a>
                  </li>
                </ul>
              </li>
              <li class="inner_nav_item person_center_item" v-show="userName">
                <router-link :to="{path:'/personal_center/personal_center1'}" style="padding: 0" class="person_center">
                  个人中心&nbsp;
                </router-link>
              </li>
              <li class="inner_nav_item person_center_item" v-show="userName">
                <a href="#" style="padding: 0" @click="logout()">|&nbsp; 退出登录</a>
              </li>
              <li class="inner_nav_item person_center_item" v-show="!userName">
                <router-link :to="{path:'/login/login1'}" style="padding: 0" class="person_center">登录&nbsp;</router-link>
              </li>
              <li class="inner_nav_item person_center_item" v-show="!userName">
                <router-link :to="{path:'/login/login3'}" style="padding: 0" class="person_center">|&nbsp;注册</router-link>
              </li>
            </ul>
          </nav>
          <a href="javascript:;" class="toggle_search_btn" @click="show"></a>
          <!-- toggle_btn -->
          <a href="javascript:;" class="navbar-toggle">
            <span class="icon-bar icon-bar_1"></span>
            <span class="icon-bar icon-bar_2"></span>
            <span class="icon-bar icon-bar_3"></span>
          </a>
        </div>
        <div class="header_search_box">
          <form method="" action="">
            <a href="javascript:;" class="header_search_close_btn" @click="hide"></a>
            <input type="text" name="header_search" class="header_search_input" autocomplete="off" @focus="show_search_input" @blur="hide_search_input">
            <input type="submit" name="search_submit" class="header_search_submit header_search_btn" value="">
            <!-- 搜索提示 -->
            <ul class="list header_search_box_list" ref='searchBoxList'>
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div class="m_header">
        <img src="./../../assets/img/logo_2.png" alt="logo" class="m_logo">
        <div class="toogle_btn" @click="searchWrapShow=true,navWrapperShow=true">
          <span class="line0 line"></span>
          <span class="line1 line"></span>
          <span class="line2 line"></span>
        </div>

      </div>

      <!-- 独立弹出框搜索框区域 -->
      <div v-show="searchWrapShow" class="search_wrap">
        <transition name="fade">
          <div class="search_head" :class="{bgActive:searchListShow}">
            <span class="search_btn"></span>
            <input type="text" name="text" class="search_input" v-on:focus="navWrapperShow=false,searchListShow=true" v-on:blur="searchListShow=false,searchWrapShow=false">
            <span class="close_btn" v-on:click="searchWrapShow=false,navWrapperShow=false"></span>
          </div>
        </transition>
        <!-- nav 导航区域 -->
        <transition name="name">
          <nav v-show="navWrapperShow" class="nav_wrapper">
            <ul class="nav_list">
              <li v-on:click="searchWrapShow=false" class="nav_item" v-for="(m,index) in menuFillter(menuList,0)">
                <a :href="m.Link">{{m.MenuName}}</a>
              </li>
              <li v-on:click="searchWrapShow=false" class="nav_item">
                <a href="#/personal_center/personal_center1" title="首页">个人中心</a>
              </li>
              <li class="nav_item more_course" v-on:click="navSubListShow=!navSubListShow" :class="{active:navSubListShow}">
                <a href="javascript:;" title="课程">课程
                  <i class="icon">
                    <img src="./../../assets/img/menu_down@3x.png" width="14px" height="auto">
                  </i>
                </a>
                <ul class="nav_sub_list" v-show="navSubListShow">
                  <li v-on:click="searchWrapShow=false" v-for="item in CourseType_List">
                    <a :href="'#/training_camp/'+item.CourseTypeID +'/' +getCourseID(item.CourseTypeID) "> {{item.CourseTypeName}}</a>
                  </li>
                </ul>
              </li>

              <li class="nav_item">
                <a href="javsscript:;" @click="m_logout(),searchWrapShow=false,navWrapperShow=false">退出登录</a>
              </li>
            </ul>
          </nav>
        </transition>
        <!-- 下拉列表 -->
        <transition name="fade">
          <div v-show="searchListShow" class="search_list">
            <ul class="list">
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
              <li class="item">
                <div class="info_box">
                  <p class="text">96期青少年领袖特训营</p>
                  <p class="date">2017.07.06</p>
                </div>
                <a href="javascript:;" class="apply_btn">报名</a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <!-- 弹出框 end -->

    </header>
  </div>

</template>
<script>
  import {
    globalPath
  } from './../../common/js/path';
  export default {
    name: 'hello',
    data() {
      return {
        showSearch: false,
        showSearchList: false,
        subSelect: 0,
        menuList: {},
        userID: {},
        userName: null,
        searchWrapShow: false,
        searchHeadeShow: false,
        navWrapperShow: false,
        searchListShow: false,
        navSubListShow: true,
        CourseType_List: {},
        Course_List: [],
        CourseID_List: []
      };
    },
    filter:{
      login:function(){
        if (condition) {
          
        }
      }
    },
    methods: {
      CourseListFillter(m, p) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
          if (m[i].CourseTypeID == p) {
            arr.push(m[i]);
          }
        }
        return arr;
      },
      getCourseID(CourseTypeID) {
        return this.CourseID_List[CourseTypeID - 1];
      },
      hide() {
        this.showSearch = false;
      },
      show() {
        this.showSearch = true;
      },
      show_search_input() {
        this.$refs.searchBoxList.style.display = 'block';
      },
      hide_search_input() {
        this.$refs.searchBoxList.style.display = 'none';
      },
      select(str) {
        this.$emit('select', str);
      },
      aboutSelect(str) {
        this.$emit('aboutSelect', str);
      },
      menuFillter(m, p) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
          if (m[i].ParentID == p) {
            arr.push(m[i]);
          }
        }
        return arr;
      },
      getUser() {
        var obj = window.localStorage.getItem("user");
        if (obj) {
          var jsonObj = JSON.parse(obj);
          this.userName = jsonObj.LoginName;
        } else {
          this.userName = '';
        }
      },
      logout() {
        window.localStorage.setItem("user", '');
        window.location.reload(true);
        this.getUser();
      },
      m_logout(){
        if (window.localStorage.hasOwnProperty('user')) {
                  this.getUser();
        window.localStorage.removeItem("user");
        window.location.reload(true);
        console.log('logout');
        window.location.href = "#/index";
        } else {
          window.location.href = "#/login/login1";
        }

      }
    },
    created() {
      var path = globalPath();
      // 获取导航菜单列表
      this.$nextTick(function () {
        this.$http.get(this.ApiUrl + 'me/Menu/Menu_List').then((response) => {
          response = response.body;
          this.menuList = response.Data;
        }, function () {
          console.log('请求发送失败');
        });

        this.$http.get(path + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_List = response.Data;
          this.CourseType_List.splice(4, 5);
        }, function () {
          console.log('请求发送失败');
        });

        function sortNumber(a, b) {
          return a - b;
        }
        for (var i = 1; i < 5; i++) {
          this.$http.get(path + 'me/Course/Course_List?CourseTypeID=' + i).then((response) => {
            response = response.body;
            this.Course_List = response.Data;
            this.CourseID_List.push(this.Course_List[0].CourseID);
            this.CourseID_List = this.CourseID_List.sort(sortNumber);
          }, function () {
            console.log('请求发送失败');
          });
        }
      });
    },
    mounted() {
      this.getUser();
    },
    watch: {
      '$route': 'getUser'
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- background: url(./../../assets/img/11_logo@2x.png) no-repeat; -->
<style scoped>
  .inner_header {
    position: relative;
    height: 152px;
    background: url("./../../assets/img/top_bg_3.png") no-repeat center 0;
    margin: 0 auto;
  }

  .search_box {
    display: inline-block;
    position: absolute;
    top: 32px;
    right: 0;
  }

  .toggle_search_btn {
    position: absolute;
    top: 36px;
    right: 0;
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url("./../../assets/img/search_2.png") no-repeat center center;
    vertical-align: middle;
    opacity: .6;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 101;
  }

  .toggle_search_btn:hover {
    opacity: 1;
  }
  /* 头部搜索区域的样式 */

  .header_search_box {
    background: transparent;
    position: relative;
    z-index: 100;
    text-align: center;
    opacity: 0;
    padding-top: 30px;
  }

  .header_search_box .list {
    width: 388px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 24px 28px 0;
    background: #fff;
    display: none;
  }

  .header_search_box .list .item {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    border-bottom: 2px solid #e6e6e6;
    padding: 24px 0;
    text-align: left;
    cursor: pointer;
  }

  .header_search_box .list li:last-child {
    border-bottom: none;
  }

  .header_search_box .list .item .info_box {
    -webkit-box-flex: 252px;
    -moz-box-flex: 252px;
    width: 252px;
    -webkit-flex: 252px;
    -ms-flex: 252px;
    flex: 252px;
  }

  .header_search_box .list .item .info_box .text {
    font-size: 16px;
    color: #000
  }

  .header_search_box .list .item .info_box .date {
    font-size: 10px;
    color: #656565;
  }

  .header_search_box .list .item .apply_btn {
    -webkit-box-flex: 82px;
    -moz-box-flex: 82px;
    width: 82px;
    -webkit-flex: 82px;
    -ms-flex: 82px;
    flex: 82px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    color: #000;
    border-radius: 20px;
    background: #f8ef1c;
    font-weight: bold;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .header_search_box .list .item .apply_btn:hover {
    background: #fff500;
  }

  .header_search_box .header_search_close_btn {
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
    background: url("./../../assets/img/searchh_close.png") no-repeat center center;
    opacity: .6;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .header_search_box .header_search_close_btn:hover {
    opacity: 1;
  }

  .header_search_box .header_search_btn {
    outline: none;
    border: none;
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
    background: url("./../../assets/img/inner_search_3x.png") no-repeat center center;
    opacity: .6;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .header_search_box .header_search_btn:hover {
    opacity: 1;
  }

  .header_search_box .header_search_input {
    box-sizing: border-box;
    padding-left: 10px;
    color: #fff;
    outline: none;
    border: none;
    width: 420px;
    height: 36px;
    line-height: 36px;
    border: 2px solid #fff;
    border-radius: 50px;
    background: transparent;
  }

  .inner_header .logo_link {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 16px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  /* header animation */

  .inner_header_con .inner_header_con_top {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .inner_header_con .header_search_box {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .inner_header_con.search_active .inner_header_con_top {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }

  .inner_header_con.search_active .header_search_box {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    --transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transform: translateY(-90px);
    -moz-transform: translateY(-90px);
    -ms-transform: translateY(-90px);
    -o-transform: translateY(-90px);
    transform: translateY(-90px);
    opacity: 1;
  }

  .inner_nav {
    height: 90px;
    width: 650px;
    margin: 0 auto;
  }

  .inner_nav_list {
    height: 90px;
  }

  .inner_nav_item {
    float: left;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .inner_nav_item>a {
    display: inline-block;
    padding: 0 40px;
    font-size: 16px;
    color: #d4d4d4;
    line-height: 90px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    position: relative;
  }

  .inner_nav_item>a:hover {
    color: #fff;
  }

  .inner_nav_item.active>a {
    color: #fff;
  }

  .inner_nav .inner_nav_list>li:nth-child(1) a:after,
  .inner_nav .inner_nav_list>li:nth-child(4) a:after,
  .inner_nav .inner_nav_list>li:nth-child(5) a:after,
  .inner_nav .inner_nav_list>li:nth-child(6) a:after,
  .inner_nav .inner_nav_list>li:nth-child(7) a:after {
    margin-top: -30px;
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    left: 0;
    bottom: 30px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 0;
    -webit-transform: scale(0);
    -moz-transform: scale(0);
    -o-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .inner_nav .inner_nav_list>li:nth-child(1):hover a:after,
  .inner_nav .inner_nav_list>li:nth-child(4):hover a:after,
  .inner_nav .inner_nav_list>li:nth-child(5):hover a:after,
  .inner_nav .inner_nav_list>li:nth-child(6):hover a:after,
  .inner_nav .inner_nav_list>li:nth-child(7):hover a:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .inner_nav .inner_nav_list>li:nth-child(1).active a:after,
  .inner_nav .inner_nav_list>li:nth-child(4).active a:after,
  .inner_nav .inner_nav_list>li:nth-child(5).active a:after,
  .inner_nav .inner_nav_list>li:nth-child(6).active a:after,
  .inner_nav .inner_nav_list>li:nth-child(7).active a:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .inner_nav .inner_nav_list>li:nth-child(2)>a:after,
  .inner_nav .inner_nav_list>li:nth-child(3)>a:after {
    content: ' ';
    display: block;
    width: 48px;
    margin: 0 auto;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 50%;
    margin-left: -24px;
    bottom: 30px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }

  .inner_nav .inner_nav_list>li:nth-child(3)>a:after {
    bottom: 27px;
  }

  .inner_nav .inner_nav_list>li:nth-child(2).active>a:after,
  .inner_nav .inner_nav_list>li:nth-child(3).active>a:after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .inner_nav .inner_nav_list>li:nth-child(2) {
    margin-left: 10px;
    position: relative;
  }

  .inner_nav .inner_nav_list>li:nth-child(2):hover .sub_list {
    /*height: 182px;*/
    height: auto;
    opacity: 1;
    /* 这里的高度正常情况下是auto 当初为何下182px 是不是个别页面有显示层级问题需要插件 */
  }

  .inner_nav .sub_list {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 88px;
    background: #fff;
    width: 100%;
    text-align: center;
    border-top: 2px solid #ebebeb;
    padding: 15px 0;
    transition: all .3s ease;
    z-index: 200;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .inner_nav .sub_list li {
    -o-transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
  }

  .inner_nav .sub_list li:hover {
    background: #f1f1f1;
  }

  .inner_nav .sub_list a {
    padding: 0 6px;
    display: block;
    font-size: 12px;
    color: #656565;
    line-height: 50px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
  }

  .inner_nav .inner_nav_list>li:nth-child(3) {
    margin-left: 100px;
    position: relative;
  }

  .inner_nav .inner_nav_list>li:nth-child(3):hover .sub_list {
    height: 182px;
    opacity: 1;
  }

  .inner_nav .inner_nav_list>li:hover:nth-child(2)>a,
  .inner_nav .inner_nav_list>li:hover:nth-child(3)>a {
    background: #fff;
    color: #000;
  }

  .inner_nav .inner_nav_list>li:nth-child(3)>a {
    padding-right: 40px;
  }

  .inner_nav .inner_nav_list>li:nth-child(4) a,
  .inner_nav .inner_nav_list>li:nth-child(5) a,
  .inner_nav .inner_nav_list>li:nth-child(6) a,
  .inner_nav .inner_nav_list>li:nth-child(7) a {
    padding-left: 18px;
    max-width: 122px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .person_center_item {
    max-width: 122px;
    /*overflow: hidden;*/
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .person_center_item a {
    max-width: 122px;
    /*overflow: hidden;*/
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .inner_header .m_header .m_logo {
    display: none;
  }
  /* 移动端适配 */

  @media screen and (max-width: 1105px) {
    .inner_header {
      height: 90%;
      background: url("./../../assets/img/header@2x.png") no-repeat;
      background-size: 100% 100%;
      width: 100%;
    z-index: 999;
    }
    .inner_nav,
    .toggle_search_btn,
    .logo {
      display: none;
    }

    .inner_header .m_header .toogle_btn {
      width: 22px;
      height: 18px;
      position: absolute;
      top: 22px;
      right: 22px;
      z-index: 300;
      cursor: pointer;
    }
    .inner_header .m_header .toogle_btn .line {
      display: block;
      background-color: #fff;
      width: 22px;
      height: 2px;
      margin: 0 auto 4px;
      border-radius: 1px;
    }

    .inner_header .search_wrap {
      position: fixed;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
    }
    .inner_header .search_head {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      padding-top: 11px;
      min-width: 320px;
    }
    .inner_header .search_head .search_input {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      flex-grow: 1;
      margin-right: 20px;
      margin-left: 22px;
      border: none;
    }
    .inner_header .search_head .search_btn {
      width: 24px;
      height: 40px;
      margin-left: 22px;
      background: url("./../../assets/img/search@2x.png") no-repeat center;
      background-size: 20px;
      cursor: pointer;
    }
    .inner_header .nav_wrapper {
      padding: 18px 20px 0;
    }
    .header_search_box .header_search_input {
      width: 0;
    }
    .inner_header .nav_wrapper .nav_item {
      border-bottom: 1px solid #5a5a5a;
    }

    .inner_header .nav_wrapper .nav_item a {
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      display: block;
      padding: 15px;
      position: relative;
    }
    .inner_header .search_head .close_btn {
      width: 20px;
      height: auto;
      margin-right: 22px;
      background: url("./../../assets/img/search_close@2x.png") no-repeat center;
      background-size: 20px;
      cursor: pointer;
    }

    .inner_header .nav_wrapper .nav_item.active .icon {
      transform: rotate(-180deg);
    }

    .inner_header .nav_wrapper .nav_item .icon {
      float: right;
      display: inline-block;
    }

    .inner_header .nav_wrapper .nav_sub_list a {
      font-weight: 200;
      padding-left: 56px
    }


    .inner_header .search_list .list {
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 24px 28px 0;
      background: #313131;
      padding: 18 28px 0;
    }

    .inner_header .search_list .list .item {
      display: box;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      border-bottom: 1px solid #434343;
      padding: 20px 0;
      text-align: left;
      cursor: pointer;
    }

    .inner_header .search_list .list li:last-child {
      border-bottom: none;
    }

    .inner_header .search_list .list .item .info_box {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      width: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .inner_header .search_list .list .item .info_box .text {
      font-size: 16px;
      color: #fff;
      margin-bottom: 4px;
    }

    .inner_header .search_list .list .item .info_box .date {
      font-size: 10px;
      color: #656565;
    }

    .inner_header .search_list .list .item .apply_btn {
      width: 82px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 12px;
      color: #000;
      border-radius: 20px;
      background: #f8ef1c;
      font-weight: bold;
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
    }

    .inner_header .search_list .list .item .apply_btn:hover {
      background: #fff500;
    }
  }

</style>
