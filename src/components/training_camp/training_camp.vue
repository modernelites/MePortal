<template>
  <div class="training_camp_p">
    <my-header></my-header>
    <div class="container_wrap">
      <div class="w_1000">
        <nav class="tab_nav" id="training_camp_p_tab_nav">
          <dl @click="select(item)" class="nav_item" :class="{active:selectType===item.CourseTypeID}"
              v-for="(item,index) in CourseType_List" v-if="item.CourseTypeID<5">
            <dt>
              <a href="javascript:;"> {{item.CourseTypeName}}</a>
            </dt>
            <dd>
              <ul class="item_list">
                <li class="sub_item" v-for="item in CourseListFillter(Course_List ,item.CourseTypeID)">
                  <router-link :to="{name:'trainingCamp',params:{ctid:item.CourseTypeID,cid:item.CourseID}}">
                    {{item.CourseName}}
                  </router-link>
                </li>
              </ul>
            </dd>
          </dl>
        </nav>
        <div class="tab_con" id="training_camp_p_tab_con">
          <dl class="tab_con_item active">
            <div class="img_wrap">
              <img v-if="!Course_Con.FilePath" src="./../../assets/img/sec_con_bg_1.png" width="100%" height="auto">
              <img :src="Course_Con.FilePath" width="100%" height="auto" v-if="Course_Con.FilePath">
              <a href="javascript:;" class="img_wrap_btn">{{Course_Con.CourseName}}</a>
            </div>
            <div class="course_wrap">
              <h3 class="title_3"> 课程介绍</h3>
              <p class="text" v-html="Course_Con.Brief">
              </p>
            </div>
            <!--  <div class="img_small_wrap">
              <div class="m_row clearfix">
                <div class="m_col-lg-6">
                  <img src="./../../assets/img/smail_2.png">
                </div>
                <div class="m_col-lg-6">
                  <img src="./../../assets/img/smail_2.png">
                </div>
              </div>
            </div>
            <div class="course_wrap">
              <p class="text">
                课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
              </p>
            </div>
            <div class="img_xmall_wrap">
              <div class="m_row clearfix">
                <div class="m_col-lg-4">
                  <img src="./../../assets/img/xamll_1.png">
                </div>
                <div class="m_col-lg-4">
                  <img src="./../../assets/img/xamll_1.png">
                </div>
                <div class="m_col-lg-4">
                  <img src="./../../assets/img/xamll_1.png">
                </div>
              </div>
            </div> -->

            <!-- 讲师介绍 -->
            <div class="lecturer_wrap" v-show="Teacher_Con.length>0">
              <h3 class="title_3"> 讲师介绍</h3>
              <ul class="con_list">
                <li class="item_wrap" v-for="item in Teacher_Con">
                  <div class="content_left">
                    <h5 class="title_5">{{item.TeacherName}}</h5>
                    <span class="mark"></span>
                  </div>
                  <div class="content_right clearfix">
                    <div class="brief" v-html="item.Brief">
                    </div>
                    <div class="portrait">
                      <img :src="item.FilePath">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 点击报名 -->
            <div class="btn_wrap">
              <router-link :to="{name:'register'+CourseTypeItemID,params:{id:CourseItemID}}" class="btn">
                立即报名
              </router-link>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '@/components/header/header';
  import myFooter from '@/components/footer/footer';
  //import { globalPath } from './../../common/js/path';
  export default {
    name: 'training_camp',
    data() {
      return {
        selectType: 0,
        CourseType_List: {},
        Course_List: {},
        CourseTypeItemID: this.$route.params.ctid,
        CourseItemID: this.$route.params.cid,
        Course_Con: {},
        Teacher_Con: {}
      };
    },
    created() {
    },
    methods: {
      CourseTypeList() {
        this.$nextTick(function () {
          this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
            response = response.body;
            this.CourseType_List = response.Data;
          }, function () {
            console.log('请求发送失败');
          });

        });
      },
      CourseList() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_List = response.Data;
          this.CourseItemCon();
        }, function () {
          console.log('请求发送失败');
        });
      },
      CourseItemCon() {
        // 过滤课程
        for (var i =0;i<this.Course_List.length;i++){
          if (this.Course_List[i].CourseID==this.$route.params.cid){
            this.Course_Con = this.Course_List[i];
          }
        }
      },
      TeacherCon(tids) {
        this.$http.get(this.ApiUrl + 'me/Teacher/Teacher_Get?Teachers=' + tids).then((response) => {
          //debugger
          response = response.body;
          this.Teacher_Con = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      },
      select(item) {
        this.selectType = item.CourseTypeID;
      },
      CourseListFillter(m, p) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
          if (m[i].CourseTypeID == p) {
            arr.push(m[i]);
          }
        }
        return arr;
      },
      getUrl() {
        this.CourseTypeItemID = this.$route.params.ctid;
        this.CourseItemID = this.$route.params.cid;
        this.selectType = this.CourseTypeItemID;
        this.CourseItemCon();
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "getUrl"

    },
    mounted() {
      this.CourseTypeList();
      this.CourseList();
    },
    components: {
      myHeader: myHeader,
      myFooter: myFooter
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url("../../assets/css/media.css");

  .training_camp_p {
    background: #f7f7f7;
  }

  .training_camp_p .tab_nav {
    background: #fff;
  }

  .training_camp_p .tab_nav {
    box-sizing: border-box;
    padding: 0 30px;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .training_camp_p .nav_item {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 20%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    display: block;
    position: relative;
  }

  .training_camp_p .nav_item a {
    color: #656565;
  }

  .training_camp_p .nav_item dt a {
    font-size: 20px;
    height: 82px;
    line-height: 82px;
    display: block;
    height: 100%;
    position: relative;
  }

  .training_camp_p .nav_item.active dt a {
    color: #000;
  }

  .training_camp_p .nav_item dt a:before {
    content: " ";
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background: #f24d4d;
    display: none;
  }

  .training_camp_p .nav_item.active dt a:before {
    display: block;
  }

  .training_camp_p .nav_item:hover dt a:before {
    display: block;
  }

  .training_camp_p .nav_item:hover dd {
    display: block;
  }

  .training_camp_p .tab_nav dd {
    display: none;
    position: absolute;
    top: 82px;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 3;
  }

  .training_camp_p .item_list {
    box-sizing: border-box;
    width: 100%;
    padding: 16px 15px;
    text-align: center;
    position: relative;
    box-shadow: 0 0 12px rgba(242, 77, 77, 0.15);
  }

  .training_camp_p .item_list:before {
    content: ' ';
    z-index: 3;
    position: absolute;
    top: -21px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 16px;
    background: url("./../../assets/img/slide_arrow3.png") no-repeat center center;
    background-size: 32px 16px;
  }

  .training_camp_p .sub_item {
    line-height: 36px;
    font-size: 16px;
    color: #656565;
  }

  .training_camp_p .sub_item a:hover {
    font-weight: 600;
    color: #000;
  }

  .training_camp_p .sub_item a {
    display: block;
    height: 100%;
  }

  .training_camp_p .tab_con {
    min-height: 600px;
    background: #fff;
  }

  .training_camp_p .tab_con_item .img_wrap {
    padding: 0 30px;
    position: relative;
    background: #fffbfb;
  }

  .training_camp_p .tab_con_item .img_wrap_btn {
    display: block;
    width: 330px;
    height: 108px;
    line-height: 108px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: -54px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #f25252, #f28080);
  }

  .training_camp_p .course_wrap .title_3 {
    padding: 82px 20px 0;
    font-size: 16px;
    color: #000;
    font-weight: 600;
    position: relative;
  }

  .training_camp_p .course_wrap .title_3:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 10px;
    top: 82px;
    height: 18px;
    width: 2px;
    background: #f24d4d
  }

  .training_camp_p .course_wrap .text {
    padding: 20px;
    font-size: 12px;
    color: #656565;
    line-height: 22px;
  }

  .training_camp_p .img_small_wrap {
    padding: 0 15px;
  }

  .training_camp_p .img_small_wrap img {
    max-width: 100%;
  }

  .training_camp_p .img_small_wrap .m_row {
    margin-left: -6px;
    margin-right: -6px
  }

  .training_camp_p .img_small_wrap .m_col-lg-6 {
    padding-left: 6px;
    padding-right: 6px;
  }

  .training_camp_p .img_xmall_wrap {
    padding: 0 15px;
  }

  .training_camp_p .img_xmall_wrap img {
    max-width: 100%;
  }

  .training_camp_p .img_xmall_wrap .m_row {
    margin-left: -3px;
    margin-right: -3px
  }

  .training_camp_p .img_xmall_wrap .m_col-lg-4 {
    padding-left: 3px;
    padding-right: 3px;
  }

  .training_camp_p .lecturer_wrap .title_3 {
    padding: 42px 20px 66px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #dedede;
  }

  .training_camp_p .lecturer_wrap .title_3:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 10px;
    top: 42px;
    height: 18px;
    width: 2px;
    background: #f24d4d;
  }

  .training_camp_p .lecturer_wrap li {
    font-size: 0;
  }

  .training_camp_p .lecturer_wrap .con_list {
    padding-bottom: 60px;
  }

  .training_camp_p .lecturer_wrap .content_left {
    width: 250px;
    height: 390px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    text-align: center;
  }

  .training_camp_p .lecturer_wrap .content_left .title_5 {
    padding-top: 126px;
    color: #000;
    font-size: 30px;
    font-weight: 500;
  }

  .training_camp_p .lecturer_wrap .content_left .mark {
    display: block;
    padding-top: 45px;
    font-size: 18px;
    color: #656565;
  }

  .training_camp_p .lecturer_wrap .content_right {
    width: 750px;
    height: 390px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    background: #f4f4f4;
  }

  .training_camp_p .lecturer_wrap .content_right .brief {
    width: 430px;
    padding: 120px 25px 0 80px;
    float: left;
    font-size: 14px;
    color: #000;
    line-height: 22px;
  }

  .training_camp_p .lecturer_wrap .content_right .portrait {
    float: left;
    padding: 30px 30px 0 30px;
    width: 320px;
    height: 300px;
    overflow: hidden;
  }

  .training_camp_p .lecturer_wrap .portrait img {
    max-width: 100%;
  }

  .training_camp_p .lecturer_wrap li:nth-child(even) {
  }

  .training_camp_p .lecturer_wrap li:nth-child(even) .content_left {
    float: right;
  }

  .training_camp_p .lecturer_wrap li:nth-child(even) .brief P {
    float: right;
  }

  .training_camp_p .btn_wrap {
    background: #f7f7f7;
    padding: 60px 0;
  }

  .training_camp_p .btn_wrap .btn {
    display: block;
    margin: 0 auto;
    width: 340px;
    height: 110px;
    line-height: 110px;
    text-align: center;
    background: #f24d4d;
    font-size: 30px;
    color: #fff;
    border-radius: 100px;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .training_camp_p .btn_wrap .btn:hover {
    background: #cc2828;
    text-decoration: none;
  }

</style>
