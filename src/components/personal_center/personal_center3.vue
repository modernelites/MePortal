<template>
  <dl class="content_item">
    <table class="content_item_table" v-show="CourseReg_Items.length>0">
      <!-- <caption>table title and/or explanatory text</caption> -->
      <thead>
      <tr class="table_h">
        <th>课程名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>课程价格</th>
        <th>报名进度</th>
        <th>支付状态</th>
        <th></th>
      </tr>
      </thead>
      <tbody >

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
     

      </tbody>
            <!-- <div class="swiper-button-next swiper-button-next-1"></div>
      <div class="swiper-button-prev swiper-button-prev-1"></div> -->
    </table>
    <div class="no_data_wrapper" v-show="CourseReg_Items.length==0">
      <div class="no_data_content clearfix">
        <img class="pic_img" src="./../../assets/img/not_course@2x.png">
        <h3 class="title_3"> 你还没有报名任何课程~ </h3>
      </div>
    </div>




    <!-- 移动端 -->


<div >
    <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-item swiper-slide" v-for="m in CourseReg_Items">
          <ul class="list ">
            <li class="item" v-text="m.CourseName"></li>
            <li class="item">{{m.StartDate | datefmt}}</li>
            <li class="item">{{m.EndDate | datefmt}}</li>
            <li class="item" v-text="m.Price"></li>
            <li class="item">
              <div v-show="m.Reg_Status==1">报名成功</div>
              <div v-show="m.Reg_Status==0">已取消</div>
            </li>
            <li class="item pay">
              <div v-show="m.Pay_Status==1" style="color: #1e2022;">完成</div>
              <div v-show="m.Pay_Status==0">去支付</div>
            </li>
          </ul>
        </div>
     </div>
      <!-- Add Pagination -->
      <div class="swiper-button-next swiper-button-next-01"></div>
      <div class="swiper-button-prev swiper-button-prev-01"></div>
    
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
          nextButton: '.swiper-button-next-01',
          prevButton: '.swiper-button-prev-01'
        })
      })
    },
    methods: {
      CourseReg_List: function () {
        let user = JSON.parse(window.localStorage.getItem("user"));
        this.$http.get(this.ApiUrl + 'me/Course/Course_Reg_List?UserID=' + user.UserID+'&CourseTypeID=3').then((response) => {
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
  
.content_item .swiper-container{
    display: block;
  }
    .content_item .swiper-slide {
      width: 100% !important;
      position: relative;
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

        background-size: 40px;
        position: absolute;
    }


    .content_item .content_item_table{
      display: none;
    }


    .content_item  {
  width: 211px;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  width: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

 .content_item  .section {
  background: #fff;
}

 .content_item  .section.active {
  display: block;
}

 .content_item  .list {
  padding: 20px 0;
  text-align: center;
}

 .content_item  .list .not_course_pic {
  margin-top: 40px;
}

 .content_item  .list .not_course_title {
  padding-top: 40px;
  font-size: 12px;
  color: #9b9b9b;
}

 .content_item  .list .item {
  font-size: 14px;
  color: #000;
  height: 16px;
  line-height: 16px;
  margin-bottom: 36px;
}

 .content_item  .list .item.pay {
  color: #72c11d;
}

 .content_item .list .item:last-child {
  margin-bottom: 0;
}
.no_data_wrapper{
  padding: 0;
}
.no_data_wrapper .no_data_content{
  text-align: center
}
.no_data_wrapper .no_data_content .title_3{
  padding: 0;
  font-size: 12px;
  text-align: center
}
.no_data_wrapper .no_data_content .pic_img{
  /* width: 156px */
  margin-top: 40px;
  width: 100%;

}
.no_data_wrapper{
  padding: 0;
  height: 100%;
}
.no_data_wrapper .no_data_content{
  text-align: center
}
.no_data_wrapper .no_data_content .title_3{
  padding: 0;
  font-size: 12px;
  text-align: center
}
.no_data_wrapper .no_data_content .pic_img{
  /* width: 156px */
  margin-top: 40px;
  width: 100%;

}
  }

</style>

