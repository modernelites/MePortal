<template>
  <dl class="content_item">
    <table class="content_item_table" v-show="CourseReg_Items.length>0">
      <!-- <caption>table title and/or explanatory text</caption> -->
      <thead>
      <tr class='table_h'>
        <th>课程名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>课程价格</th>
        <th>报名进度</th>
        <th>支付状态</th>
        <th></th>
      </tr>
      </thead>
      <tbody class="swiper-container">
        <div class="swiper-wrapper">
                <tr v-for="m in CourseReg_Items" class="table_content swiper-item swiper-slide">
        <td v-text="m.CourseName"></td>
        <td>{{m.StartDate | datefmt}}</td>
        <td>{{m.EndDate | datefmt}}</td>
        <td v-text="m.Price"></td>
        <td>
          <div v-show="m.Reg_Status==1">报名成功</div>
          <div v-show="m.Reg_Status==0">已取消</div>
        </td>
        <td class="pay">
          <div v-show="m.Pay_Status==1" style="color: #1e2022;">完成</div>
          <div v-show="m.Pay_Status==0">去支付</div>
        </td>
        <td class="cancel" v-show="m.Reg_Status==1">
          <div style="cursor: pointer;" @click="Course_Reg_Status_Upd(m)">取消报名</div>
        </td>
      </tr>
        </div>

      </tbody>
            <div class="swiper-button-next swiper-button-next-1"></div>
      <div class="swiper-button-prev swiper-button-prev-1"></div>
    </table>
    <div class="no_data_wrapper" v-show="CourseReg_Items.length==0">
      <div class="no_data_content clearfix">
        <img class="pic_img" src="./../../assets/img/not_course@2x.png">
        <h3 class="title_3"> 你还没有报名任何课程~ </h3>
      </div>
    </div>
  </dl>
</template>
<script>
  import Swiper from '@/../static/js/swiper.min.js';
  import MScript from '@/../static/js/script.js';
  export default {
    data() {
      return {
        CourseReg_Items: []
      }
    },
        beforeUpdate() {
      this.$nextTick(function () {
        var mySwiper = new Swiper('.content_item .swiper-container', {
          direction: 'horizontal',
          loop: true,
          nextButton: '.swiper-button-next-1',
          prevButton: '.swiper-button-prev-1'
        })
      })
    },
    methods: {
      CourseReg_List: function () {
        let user = JSON.parse(window.localStorage.getItem("user"));
        this.$http.get(this.ApiUrl + 'me/Course/Course_Reg_List?UserID=' + user.UserID+'&CourseTypeID=4').then((response) => {
          response = response.body;
          this.CourseReg_Items = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      },
      Course_Reg_Status_Upd: function (m) {
        let obj = this;
        let id = obj.$layer.confirm("确定取消报名吗?", {title: '取消报名'}, function () {
          obj.$http.get(obj.ApiUrl + 'me/Course/Course_Reg_Status_Upd?CourseRegID=' + m.CourseRegID).then((response) => {
            response = response.body;
            obj.$layer.close(id);
            obj.CourseReg_List();
            console.log(response);
          }, function () {
            console.log('请求发送失败');
          });
        });

      }
    },
    mounted() {
      this.CourseReg_List();
    }
  }

</script>
<style>
  @import url("../../assets/css/swiper-3.4.2.min.css");
  @import url("../../assets/css/media.css");


  @media screen and (max-width: 1020px) {
  
.content_item .content_item_table tr.table_h th{
    display: none;
  }
  
  .content_item .content_item_table tr.table_content{
    display: flex;
    flex-direction:column;
    height: 316px;
    width: 100%;
  }
   .content_item .content_item_table tr.table_content td{
     display: block;
     flex: 1;
     line-height: 52px;
     text-align: center;
     /* padding-left: 10%; */
     width: 120%;
   }
      .content_item .swiper-slide {
      width: 100% !important;
    }
    .content_item .swiper-container {
      z-index: 0;
    }
    .content_item .swiper-button-next{
          background-image: url("./../../assets/img/rec_right_next@2x.png");
          background-size: 40px;
    }
    .content_item .swiper-button-prev{
      background-image: url("./../../assets/img/rec_left_pre@2x.png");
      left: 106px;
        background-size: 40px;
    }
  }
</style>

