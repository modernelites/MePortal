<template>
  <div class="training_camp_p">
    <my-header></my-header>
    <div class="container_wrap shadow-wrapper">
      <nav class="tab_nav" id="training_camp_p_tab_nav">
        <dl @click="select(item)" class="nav_item" :class="{active:selectType===item.CourseTypeID}" v-for="(item,index) in CourseType_List"
          v-if="item.CourseTypeID<5">
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
            <div class="camp_nav" :class="{active:show}">
              <h3 class="title" v-on:click="show=!show">{{Course_Con.CourseName}}
                <i class="icon"></i>
              </h3>
              <ul class="camp_list">
                <li class="item" v-for="item in Course_List">
                  <a href="javascript:;" @click="CourseItemCon(item),show=false"> {{item.CourseName}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="course_wrap">

            <h3 class="title_3" style="margin-left:20px">
              <p>课程介绍</p>
              <p>Course introduction</p>
            </h3>

            <p class="text" v-html="Course_Con.Brief" style="line-height:1.6;font-size:14px;with:90%;overflow:hidden">
            </p>

            <div class="text" style="line-height:1.6;font-size:14px;with:0%;overflow:hidden;">
              <!-- <p style="text-indent:20px;">
                留给孩子亿万家产不如培养他驾驭和创造财富！
              </p>
              <p style="text-indent:20px;">一个有作为的孩子背后，需要一对有智慧的父母。家庭是孩子的第一学校，父母是孩子的第一导师！心理学研究发现，很多成年人在生活中遇到的问题，都不是成年后的生存环境造成的，而是来源于童年时期，在家庭中所受的负面影响和限制。
              </p>
              <p style="text-indent:20px;">
                孩子的人生不可重来，您教育孩子的方式直接影响孩子的未来命运！
              </p>
              <p style="text-indent:20px;">
                有智慧，“害”他也是爱他。
              </p>
              <p style="text-indent:20px;">
                没智慧，“爱”他就是害他。
              </p>
              <p style="text-indent:20px;">
                如何做智慧家长？不要针对问题解决问题，问题是线索，问题是症状，不是病因。缓解症状和治疗病根，是两条不同的方案 。孩子出现任何问题，不要用任何方式压制他、指责他，要去引导他。你怎么做，他就会怎么做，可能现在不会体现出来，但在未来一定会显现出来。不要认为怎样对孩子好，就要孩子怎样。让孩子选择自己喜欢的方式，喜欢的东西，家长要做的是引导、影响孩子，而不是逼迫、命令孩子该怎样做。知道不如体验，不要把自己体验的人生经验灌输给孩子，孩子成长经验的累积只能靠自己体验。
              </p>
              <p style="text-indent:20px;">智慧等同于简单、喜悦、平和，给孩子头脑灌输知识，不如让孩子内心生发智慧。</p>
              <p style="text-indent:20px;">您想有智慧地教育孩子吗？</p>
              <p style="text-indent:20px;">你想正确有效地与孩子沟通吗？</p>
              <p style="text-indent:20px;">你想让家庭更加和谐幸福吗？</p>
              <p style="text-indent:20px;">做智慧父母，从走进《父母智慧》开始！</p>




              <h3 class="title_3" style="line-height:1;margin-bottom:20px">
                <p>课程五大收获</p>
                <p>Course introduction</p>
              </h3>
              <div class="gallery">
                <div class="img" style="width:90%;margin:0 auto">
                  <img src="http://172.16.0.222:8081/upload/20171120/五大收获@2x.png" alt="" style="width:100%">
                </div>

              </div>
              <h3 class="title_3" style="line-height:1;">
                <p>精彩图片</p>
                <p>Pictures and videos</p>
              </h3>
              <div class="swiper-container img-swiper" style="width:96%;margin:40px auto 0;overflow:hidden">
                <ul class="img-video swiper-wrapper" style="width:70%">
                  <li style="width:80%;text-align:center;float:left;margin-right:60px;" class="swiper-slide">
                    <div class="img" style="border-radius:10px;overflow:hidden;">
                      <img width="70%;" style="" src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="">
                    </div>
                  </li>
                  <li style="width:80%;text-align:center;float:left;margin-right:0px;" class="swiper-slide">
                    <div class="img" style="border-radius:10px;overflow:hidden;">
                      <img width="70%;" style="" src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="">
                    </div>
                  </li>
                  <li style="width:80%;text-align:center;float:left;margin-right:0px;" class="swiper-slide">
                    <div class="img" style="border-radius:10px;overflow:hidden;">
                      <img width="70%;" style="" src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="">
                    </div>
                  </li>
                  <li style="width:80%;text-align:center;float:left;margin-right:0px;" class="swiper-slide">
                    <div class="img" style="border-radius:10px;overflow:hidden;">
                      <img width="70%;" style="" src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="">
                    </div>
                  </li>
                </ul>
              </div>
              <h3 class="title_3" style="line-height:1;margin-bottom:20px">
                <p>更多推荐课程</p>
                <p>Course recommend</p>
              </h3>
              <div class="recommend" style="width:96%;margin:0 auto;">
                <ul style="width:90%;margin:0 auto">
                  <li style="width:378px;height:428px;float:left;margin-right:60px" class="shadow">
                    <div class="recom-img">
                      <img src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="" style="width:100%">
                    </div>
                    <div class="recom-title" style="margin:10px;font-size:20px">
                      <h3>摩英青少年领袖特训营</h3>
                    </div>
                    <div class="recom-detail" style="overflow:hidden;height:50px;padding:0 20px;word-wrap:break-word;">
                      <span>12312312312312312332132132132132132132132132132132132131</span>
                    </div>
                    <div class="detail-bottom" style="">

                      <div class="price" style="float:left;margin:20px">
                        <span style="color:#f24d4d;font-size:18px">3213321yuan</span>
                      </div>
                      <div class="entoll" style="float:right;margin:20px">
                        <span style="font-size:18px">xxx人已报名</span>
                      </div>
                    </div>
                  </li>
                  <li style="width:378px;height:428px;float:left;" class="shadow">
                    <div class="recom-img">
                      <img src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="" style="width:100%">
                    </div>
                    <div class="recom-title" style="margin:10px;font-size:20px">
                      <h3>摩英青少年领袖特训营</h3>
                    </div>
                    <div class="recom-detail" style="overflow:hidden;height:50px;padding:0 20px;word-wrap:break-word;">
                      <span>12312312312312312332132132132132132132132132132132132131</span>
                    </div>
                    <div class="detail-bottom" style="">

                      <div class="price" style="float:left;margin:20px">
                        <span style="color:#f24d4d;font-size:18px">3213321yuan</span>
                      </div>
                      <div class="entoll" style="float:right;margin:20px">
                        <span style="font-size:18px">xxx人已报名</span>
                      </div>
                    </div>
                  </li>
                  <li style="width:378px;height:428px;float:left;margin-top:60px;margin-right:60px" class="shadow">
                    <div class="recom-img">
                      <img src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="" style="width:100%">
                    </div>
                    <div class="recom-title" style="margin:10px;font-size:20px">
                      <h3>摩英青少年领袖特训营</h3>
                    </div>
                    <div class="recom-detail" style="overflow:hidden;height:50px;padding:0 20px;word-wrap:break-word;">
                      <span>12312312312312312332132132132132132132132132132132132131</span>
                    </div>
                    <div class="detail-bottom" style="">

                      <div class="price" style="float:left;margin:20px">
                        <span style="color:#f24d4d;font-size:18px">3213321yuan</span>
                      </div>
                      <div class="entoll" style="float:right;margin:20px">
                        <span style="font-size:18px">xxx人已报名</span>
                      </div>
                    </div>
                  </li>
                  <li style="width:378px;height:428px;float:left;margin-top:60px" class="shadow">
                    <div class="recom-img">
                      <img src="http://172.16.0.222:8081/upload/20171120/6364679403808539461858098.jpg" alt="" style="width:100%">
                    </div>
                    <div class="recom-title" style="margin:10px;font-size:20px">
                      <h3>摩英青少年领袖特训营</h3>
                    </div>
                    <div class="recom-detail" style="overflow:hidden;height:50px;padding:0 20px;word-wrap:break-word;">
                      <span>12312312312312312332132132132132132132132132132132132131</span>
                    </div>
                    <div class="detail-bottom" style="">

                      <div class="price" style="float:left;margin:20px">
                        <span style="color:#f24d4d;font-size:18px">3213321yuan</span>
                      </div>
                      <div class="entoll" style="float:right;margin:20px">
                        <span style="font-size:18px">xxx人已报名</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>-->
            </div>
            <!--  </p> -->
          </div>

          <!-- 讲师介绍 v-show="Teacher_Con.length>0"-->
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
                    <span>
                      <img :src="item.FilePath">
                    </span>

                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 点击报名 -->
          <div class="btn_wrap">
            <a class="btn" @click="register()">立即报名</a>
          </div>
        </dl>
      </div>
    </div>
    <myServerMask></myServerMask>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '@/components/header/header';
  import myFooter from '@/components/footer/footer';
  import myServerMask from '@/components/server_mask/server_mask';
  import Swiper from 'swiper';
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
        Teacher_Con: [],
        show: false,
        acIndex: 0
      };
    },
    beforeUpdate() { //接口获取数据中的swiper 生效
      // mounted() {
      this.$nextTick(function () {

        var mySwiper = new Swiper('.main-swiper', {
          loop: true,
          // loopedSlides: 1,
          preloadImages: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChangeTransitionEnd: function () {
              function nth(parent, ele, num) {
                var _ele = Array.prototype.slice.call(parent.childNodes),
                  eleArray = [];
                //将父节点的子节点转换成数组_ele;eleArray为只储存元素节点的数组
                for (var i = 0, len = _ele.length; i < len; i++) {
                  if (_ele[i].nodeType == 1) {
                    eleArray.push(_ele[i]); //过滤掉非元素节点
                  }
                }
                if (arguments.length === 2) {
                  //如果只传入2个参数，则如果第二个参数是数字，则选取父节点下的第几个元素
                  //如果第二个参数是字符串，则选取父节点下的所有参数代表的节点
                  if (typeof arguments[1] === "string") {
                    _ele = Array.prototype.slice.call(parent.getElementsByTagName(arguments[1]));
                    return _ele;
                  } else if (typeof arguments[1] === "number") {
                    return eleArray[arguments[1]];
                  }
                } else {
                  //如果参数齐全，则返回第几个某节点,索引从0开始
                  _ele = Array.prototype.slice.call(parent.getElementsByTagName(ele));
                  return _ele[num];
                }
              }

              let index;
              if (this.activeIndex == 1 || this.activeIndex == 5) {
                index = 0;
              } else {
                index = this.activeIndex - 1;
              }
              let nav = document.getElementsByClassName('nav')[0];

              for (let i = 0; i < 4; i++) {
                nth(nth(nav, "li", i), "span", 0).className = ' '
              }
              nth(nth(nav, "li", index), "span", 0).className = 'hight_light'
            },
          }
        })
        let mySwiper1 = new Swiper('.img-swiper', {
          loop: true,
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 2,
            stretch: 50,
            depth: 80,
            modifier: 3,
          },
          slideToClickedSlide: true,
          centeredSlides: true,
          // navigation: {
          //   nextEl: '.Swiper-button-next1',
          //   prevEl: '.Swiper-button-prev1',
          // },
          slidesPerView: 2,
          // on:{
          //  slideChangeTransitionEnd: function (mySwiper1) {

          //             console.log(this.realIndex); 
          // }
          // },
        });
        mySwiper1.on('slideChangeTransitionEnd', function () {
          console.log(mySwiper1.realIndex);
        })
      });
    },
    methods: {
      CourseTypeList() {
        this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_List = response.Data.recordset;
        }, function () {
          console.log('请求发送失败');
        });
      },
      CourseList() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_List = response.Data.recordset;
          this.CourseItemCon();
        }, function () {
          console.log('请求发送失败');
        });
      },

      CourseItemCon(item) {
        if (item) {
          this.CourseItemID = item.CourseID || this.CourseItemID;
        }
        if (this.CourseItemID !== null) {
          this.$http.get(this.ApiUrl + 'me/Course/Course_Get?CourseID=' + this.CourseItemID).then((response) => {
            response = response.body;
            this.Course_Con = response.Data.recordset[0];
            this.Course_Name = this.Course_Con.CourseName;
            if (this.Course_Con.Teachers === '') {
              console.log('1');
              return;
            } else {
              this.TeacherCon(this.Course_Con.Teachers);
            }
          }, function () {
            console.log('请求发送失败');
          });
        } else {
          console.log('this.CourseItemId:null');
        }

      },
      TeacherCon(tids) {
        this.$http.get(this.ApiUrl + 'me/Teacher/Teacher_Get?Teachers=' + tids).then((response) => {
          response = response.body;
          this.Teacher_Con = response.Data.recordset;
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
        window.location.reload(true);
      },
      index(index) {
        //  this.mySwiper.activeIndex 
        //  console.log(this.mySwiper)

      },
      register() {
        if (window.localStorage.getItem("user") === null) {
          this.$layer.alert('请先登录/注册，再进行报名')
        } else {
          this.$router.push({
            path: "/register/register" + this.$route.params.ctid + "/0"
          });
        }
      }

    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "getUrl"

    },
    activated() {
      this.CourseTypeList();
      this.CourseList();
      // this.getUrl();
    },
    components: {
      myHeader: myHeader,
      myFooter: myFooter,
      myServerMask
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url("../../assets/css/media.css");
  .shadow {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .4)
  }

  .shadow-wrapper {
    box-shadow: 0px 0px 60px rgba(0, 0, 0, .2)
  }

  .training_camp_p {
    background: #f7f7f7;
  }

  .training_camp_p .tab_nav {
    background: #fff;
  }

  .training_camp_p .container_wrap {
    width: 1000px;
    margin: 0 auto;
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
    height: 30px;
    width: 2px;
    background: #f24d4d
  }

  .training_camp_p .course_wrap .text {
    padding: 20px;
    font-size: 12px;
    color: #656565;
    line-height: 22px;
    width: 100%;
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
    outline: none;
  }

  .training_camp_p .btn_wrap .btn:hover {
    background: #cc2828;
    text-decoration: none;
  }

  .training_camp_p .camp_nav {
    display: none !important;
  }

  p.text {
    width: 70%;
    margin: 0 auto;
  }

  p.text video {
    width: 100%;
  }

  div.course_wrap iframe {
    width: 100% !important;
  }

  div.course_wrap video {
    width: 100% !important;
  }

  div.course_wrap img {
    width: 100% !important;
  }

  div.course_wrap section {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .hight_light {
    color: #f00;
    border-bottom: 2px solid #f00;
  }

  @media screen and (max-width: 1020px) {
    .training_camp_p {
      max-width: 750px;
      min-width: 320px;
      overflow: hidden;
      margin: 0 auto;
      height: 60px;
    }
    .training_camp_p .container_wrap {
      width: auto;
      margin: auto;
    }
    .training_camp_p .tab_nav {
      display: none;
    }
    .training_camp_p .nav_item {
      width: auto;
      text-align: left;
    }
    .training_camp_p .tab_con_item .img_wrap {
      width: 100%;
      padding: 0;
      position: relative;
    }
    .training_camp_p .tab_con_item .img_wrap_btn {
      width: 210px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      position: absolute;
      bottom: -25px;
      display: none;
    }
    .training_camp_p .tab_con {
      position: absolute;
      top: 43px;
      width: 100%;
      max-width: 750px;
      min-width: 320px;
    }
    .training_camp_p .inner_header {
      z-index: 1;
    }
    /* .training_camp_p .container_wrap { */
    /* height: 1302px; */
    /* height: 1224px; */
    /* position: absolute; */
    /* overflow: hidden; */
    /* } */
    .training_camp_p .course_wrap .title_3 {
      font-size: 12px;
      padding-bottom: 5px;
      padding-top: 0;
      margin-top: 30px;
      z-index: 0;
    }
    .training_camp_p .course_wrap .title_3:before {
      display: none;
    }
    .training_camp_p .course_wrap .text {
      padding-top: 0;
    }
    .training_camp_p .btn_wrap .btn {
      width: 150px;
      height: 55px;
      line-height: 55px;
      font-size: 16px;
    }
    /* .inner_header .nav_wrapper .nav_item a{
      float: left;
    } */
    .training_camp_p .btn_wrap {
      padding-bottom: 0;
      padding-top: 0;
      /* margin-bottom: 20px; */
    }





    .training_camp_p .img_wrap .camp_nav {
      position: absolute;
      /* width: 200px; */
      position: absolute;
      left: 50%;
      /* width: 200px; */
      transform: translateX(-50%);
      /* z-index: 1; */
      display: block !important;
    }

    .training_camp_p .camp_nav .title {
      width: 210px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: linear-gradient(90deg, #f24f4f, #f28585);
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      margin-top: -25px;
      position: relative;
      cursor: pointer;
      z-index: 1;
      overflow: hidden;
    }

    .training_camp_p .camp_nav .title .icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url("./../../assets/img/camp_menu_down@2x.png") no-repeat;
      background-size: 14px 9px;
      position: absolute;
      top: 16px;
      right: 10px;
      transform: rotate(-180deg);
    }

    .training_camp_p .camp_list {
      padding: 5px;
      width: 210px;
      background: #fff;
      display: none;
    }

    .training_camp_p .camp_nav.active .camp_list {
      display: block;
    }

    .training_camp_p .camp_nav.active .icon {
      top: 22px;
      transform: rotate(0deg);
    }

    .training_camp_p .camp_list .item {
      text-align: center;
    }

    .training_camp_p .camp_list .item a {
      display: block;
      padding: 10px;
      font-size: 14px;
      color: #656565;
      transition: all .3s ease;
    }

    .training_camp_p .camp_list .item a:hover {
      color: #000;
    }

    .training_camp_p .lecturer_wrap div.content_right {
      width: 100%;
      padding: 10px;
      background: none;
      height: auto;
    }
    .training_camp_p .lecturer_wrap .content_left {
      width: 100%;
      margin: 0 auto;
    }
    .training_camp_p .lecturer_wrap .content_right .portrait {
      margin: 0 auto;
    }
    .training_camp_p .lecturer_wrap .content_right .brief {
      padding: 0;
      width: 100%;
      margin: 0 auto;
    }
    .training_camp_p .lecturer_wrap .content_right .brief p {
      float: left !important;
    }
    .training_camp_p .lecturer_wrap .title_3 {
      padding-top: 0;
      padding-bottom: 10px;
      border-bottom: 0;
    }
    .training_camp_p .lecturer_wrap .title_3:before {
      top: 0;
    }
    .training_camp_p .lecturer_wrap .content_left .title_5 {
      padding-top: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .training_camp_p .lecturer_wrap .content_left {
      width: 35%;
      height: 193px;
      line-height: 193px;
      float: left !important;
      /* text-align: center; */
    }
    .training_camp_p .lecturer_wrap .con_list .item_wrap {
      position: relative;
      height: auto;
    }
    .training_camp_p .lecturer_wrap .portrait {
      position: absolute;
      height: 193px !important;
      width: 193px !important;
      top: 0;
      padding: 0 !important;
      /* overflow: hidden; */
      right: 40px !important;
      vertical-align: middle;
      display: table;
    }
    .training_camp_p .lecturer_wrap .portrait span {
      display: table-cell;
      vertical-align: middle;
      width: 193px !important;
      height: 193px !important;
      text-align: center;
      /* margin-left: 20px; */
    }
    .training_camp_p .lecturer_wrap .portrait span img {
      max-width: 170px;
      max-height: 170px;
    }
    p.text {
      width: 100%;
      margin: 0 auto;
    }
    @media screen and (max-width: 740px) {
      .img-video {
        width: 320px !important;
        padding: 0 !important;
        margin: 0 auto !important;
      }
      .img-video li {
        width: 88% !important;
      }
    }

  }

</style>
