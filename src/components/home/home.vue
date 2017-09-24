<template>
  <div class="home_p">
    <div class="home_header">
      <my-header></my-header>
    </div>
    <!-- Swiper -->
    <div class="home_banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="imgload" :src="banner1" alt="首页banner图片01">
          </div>
          <div class="swiper-slide">
            <img class="imgload" :src="banner2" alt="首页banner图片02">
          </div>
          <div class="swiper-slide">
            <img class="imgload" :src="banner3" alt="首页banner图片02">
          </div>
        </div>
      </div>
    </div>
    <!-- Swiper end  -->
    <div class="section_course_type ">
      <ul class="m_row clearfix list">
        <li class="m_col-lg-3" v-for="(CourseTypeItem,index) in CourseType_List" v-if="CourseTypeItem.CourseTypeID<5">
          <div class="item_box">
            <div class="course_img ">
              <img :src="CourseTypeItem.FilePath">
            </div>
            <div class="nav">
              <a href="#/register/register1" class="title_3">{{CourseTypeItem.CourseTypeName}}</a>
              <ul class="nav_list">
                <li class="item" v-for="CourseItem in CourseListFillter(Course_List ,CourseTypeItem.CourseTypeID)">
                  <!--<a :href="'#/training_camp/' +CourseTypeItem.CourseTypeID +','+ CourseItem.CourseID">{{CourseItem.CourseName}}</a>-->
                  <router-link :to="{name:'trainingCamp',params:{ctid:CourseTypeItem.CourseTypeID,cid:CourseItem.CourseID}}">{{CourseItem.CourseName}}</router-link>
                </li>
              </ul>
            </div>
            <p class="brief">
              {{CourseTypeItem.Brief}}
            </p>
          </div>
        </li>
      </ul>
    </div>ß
    <!-- section_2 -->
    <div class="section_2">
      <h1 class="title_1">推荐课程</h1>
      <div class="course_swiper_wrap">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="title_3 title_3_i_1">
                <img src="./../../assets/img/t1.jpg">
              </div>
              <a href="javascript:;" class="btn details_btn_i_3"></a>
            </div>
            <div class="swiper-slide">
              <div class="title_3 title_3_i_2">
                <img src="./../../assets/img/t2.jpg">
              </div>
              <a href="javascript:;" class="btn details_btn_i_2"></a>
            </div>
            <div class="swiper-slide">
              <div class="title_3 title_3_i_3">
                <img src="./../../assets/img/t3.jpg">
              </div>
              <a href="javascript:;" class="btn details_btn_i_3"></a>
            </div>
            <div class="swiper-slide">
              <div class="title_3 title_3_i_3">
                <img src="./../../assets/img/t4.jpg">
              </div>
              <a href="javascript:;" class="btn details_btn_i_1"></a>
            </div>
            <div class="swiper-slide">
              <div class="title_3 title_3_i_3">
                <img src="./../../assets/img/t5.jpg">
              </div>
              <a href="javascript:;" class="btn details_btn_i_1"></a>
            </div>
          </div>
          <!-- Add Arrows -->
        </div>
        <div class="swiper-button-next swiper-button-next-01"></div>
        <div class="swiper-button-prev swiper-button-prev-01"></div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="utting_line"></div>
    <my-footer></my-footer>
    <my-server-mask></my-server-mask>
  </div>
</template>
<script>
  import Swiper from '@/../static/js/swiper.min.js';
  import MScript from '@/../static/js/script.js';
  import myHeader from '@/components/header/header';
  import myFooter from '@/components/footer/footer';
  import myServerMask from '@/components/server_mask/server_mask';
  import {
    globalPath
  } from './../../common/js/path';
  export default {
    name: 'home',
    data() {
      return {
        banner1: '../static/images/1_banner@3x.png',
        banner2: '../static/images/1_banner@3x.png',
        banner3: '../static/images/1_banner@3x.png',
        CourseType_List: {},
        Course_List: [],
        showNum: 4

      };
    },
    created() {
      // 获取课程类型列表
      this.$nextTick(function () {
        this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_List = response.Data;
        }, function () {
          console.log('请求发送失败');
        });

      })
    },
    methods: {
      // 获取课程列表
      CourseList() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_List = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      },
      CourseListFillter(m, p) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
          if (m[i].CourseTypeID == p) {
            arr.push(m[i]);
          }
        }
        return arr;
      }
    },
    mounted() {
      this.CourseList();
      var mySwiper = new Swiper('.home_banner .swiper-container', {
        direction: 'horizontal',
        loop: true
      });
      // Swiper 推荐课程
      var swiper2 = new Swiper('.course_swiper_wrap .swiper-container', {
        slidesPerView: 3,
        paginationClickable: true,
        nextButton: '.swiper-button-next-01',
        prevButton: '.swiper-button-prev-01',
        spaceBetween: 30,
        freeMode: true,
        loop: true
      });
    },
    components: {
      myHeader: myHeader,
      myFooter: myFooter,
      myServerMask
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../../assets/css/swiper-3.4.2.min.css");
  @import url("../../assets/css/media.css");
  .home_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .home_header .inner_header {
    background: none;
  }

  .swiper-container {
    width: 100%;
    height: auto;
  }

  .swiper-container img {
    max-width: 100%;
    height: auto;
  }

  .home_p {
    background: #f7f7f7;
  }

  .home_p .home_header {
    position: absolute;
    z-index: 2;
    width: 100%;
  }

  .home_p .home_header .inner_header {
    background: none;
  }

  .home_p .swiper-container {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .home_p .swiper-slide {}

  .home_p .section_course_type {
    padding-top: 108px;
    padding-bottom: 64px;
  }

  .home_p .section_course_type .list {}

  .home_p .section_course_type .list .item_box {
    text-align: center;
  }

  .home_p .section_course_type .list .item_box .title_3 {
    display: block;
    font-size: 24px;
    color: #000;
    padding: 14px 0 22px;
    font-weight: 700;
    cursor: pointer;
  }

  .home_p .section_course_type .list .item_box .brief {
    font-size: 14px;
    color: #656565;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 22px;
  }

  .home_p .section_course_type .list .item_box .nav {
    position: relative;
  }

  .home_p .section_course_type .list .item_box:hover .nav {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }

  .home_p .section_course_type .list .item_box:hover .nav .nav_list {
    display: block;
  }

  .home_p .section_course_type .list .item_box:hover .nav .title_3 {
    background: #fff;
  }
  /* hover显示下拉菜单 */

  .home_p .section_course_type .list .item_box .nav .nav_list {
    position: absolute;
    z-index: 3;
    top: 60px;
    left: 0;
    width: 100%;
    display: none;
  }

  .home_p .section_course_type .list .item_box .nav .item a {
    display: block;
    height: 48px;
    line-height: 48px;
    background: #fff;
    font-size: 14px;
    color: #656565;
    border-top: 2px solid #efefef;
    -webkit-transition: all .1s ease;
    -moz-transition: all .1s ease;
    -ms-transition: all .1s ease;
    -o-transition: all .1s ease;
    transition: all .1s ease;
  }

  .home_p .section_course_type .list .item_box .nav .item a:hover {
    background: #f1f1f1;
  }

  .home_p .section_course_type .list .item_box .nav .item:last-child a {
    border-bottom: 2px solid #efefef;
  }

  .home_p .section_2 {
    height: 612px;
    background: #1e2022;
  }

  .home_p .section_2 {
    color: #fff;
  }

  .home_p .section_2 .title_1 {
    font-size: 24px;
    color: #fff;
    text-align: center;
    padding: 36px 0 0;
  }

  .home_p .section_2 .title_3 {
    text-align: center;
  }

  .home_p .section_2 .title_3 img {
    max-width: 100%;
  }

  .home_p .section_2 .info {
    padding: 0 10%;
    font-size: 16px;
    color: #1e5fbd;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .home_p .section_2 .btn {
    display: block;
    width: 160px;
    height: 50px;
    margin: 0 auto 0;
    padding-top: 15px;
    border-radius: 30px;
    position: relative;
    z-index: 10000
  }

  .home_p .section_2 .details_btn_i_1 {
    background: url("./../../assets/img/m_details_1.png") no-repeat center;
  }

  .home_p .section_2 .details_btn_i_2 {
    background: url("./../../assets/img/m_details_2.png") no-repeat center;
  }

  .home_p .section_2 .details_btn_i_3 {
    background: url("./../../assets/img/m_details_3.png") no-repeat center;
  }

  .home_p .section_2 .details_btn_i_1:hover {
    background: url("./../../assets/img/m_details_11.png") no-repeat center;
  }

  .home_p .section_2 .details_btn_i_2:hover {
    background: url("./../../assets/img/m_details_22.png") no-repeat center;
  }

  .home_p .section_2 .details_btn_i_3:hover {
    background: url("./../../assets/img/m_details_33.png") no-repeat center;
  }

  .home_p .section_2 .title_3 span {
    display: inline-block;
    height: 200px;
    width: 40px;
    font-size: 40px;
  }

  .home_p .section_2 .title_3 span:last-child {
    margin-top: -100px;
    margin-left: 16px;
    vertical-align: middle;
  }

  .home_p .utting_line {
    height: 60px;
    background: #fff;
  }

  .home_p .section_2 .course_swiper_wrap {
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  .course_swiper_wrap .btn {
    border: 0;
  }

  .home_p .section_2 .course_swiper_wrap .swiper-container {
    width: 100%;
    padding-bottom: 40px;
  }

  .home_p .section_2 .course_swiper_wrap .swiper-slide {}

  .home_p .section_2 .swiper-container-free-mode>.swiper-wrapper>div:nth-child(3n+2) .info {
    color: #a26ee3;
  }

  .home_p .section_2 .swiper-container-free-mode>.swiper-wrapper>div:nth-child(3n+3) .info {
    color: #df87c8;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .home_p .course_swiper_wrap .swiper-button-next {
    top: 45%;
    right: -80px;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    background-color: #36373a;
    background-image: url("./../../assets/img/right_arrow.png");
    background-position: -5px 0px;
    background-repeat: no-repeat;
    background-size: 80px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .home_p .course_swiper_wrap .swiper-button-next:hover {
    background-color: #525354;
  }

  .home_p .course_swiper_wrap .swiper-button-prev {
    top: 45%;
    left: -80px;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    background-color: #36373a;
    background-image: url("./../../assets/img/left_arrow.png");
    background-position: 3px 0px;
    background-repeat: no-repeat;
    background-size: 80px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .home_p .course_swiper_wrap .swiper-button-prev:hover {
    background-color: #525354;
  }
  /* 移动端适配 */

  @media screen and (max-width: 1205px) {
.home_header {
  max-width: 100%;
}
    .home_p .item_box .course_img img {

      max-height: 100%;
    }

    .home_p .section_course_type .list .item_box .title_3,
    .home_p .section_course_type .list .item_box .brief {
      display: none;
    }
    .home_p .section_course_type {
      width: 100%;
      padding-top: 22px;
      padding-bottom: 0;
    }
    .home_p .section_course_type .m_row {
      width: 90%;
      height: auto;
    }

    .home_p .section_course_type .list .item_box .nav .nav_list {
      display: block;
      width: 400%;
    }
    .home_p .section_course_type .list .item_box .nav .nav_list .item {
      width: 100%;
      display: inline-block
    }
    .home_p .section_2 {
      margin-top: 1000px;
    }
  }

</style>
