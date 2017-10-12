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
        <tr v-for="m in CourseReg_Items" class="table_content">
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
    </table>
      <!-- <div class="swiper-button-next swiper-button-next-01"></div>
      <div class="swiper-button-prev swiper-button-prev-01"></div> -->
    <div class="no_data_wrapper" v-show="CourseReg_Items.length==0">
      <div class="no_data_content clearfix">
        <img class="pic_img" src="./../../assets/img/not_course@2x.png">
        <h3 class="title_3"> 你还没有报名任何课程~ </h3>
      </div>
    </div>
  </dl>
</template>

<script>
  export default {
    data() {
      return {
        CourseReg_Items: []
      }
    },
    beforeUpdate() {
      this.$nextTick(function () {
        if (JSON.parse(window.localStorage.getItem("user"))) {
          let user = JSON.parse(window.localStorage.getItem("user"));
          this.$http.get(this.ApiUrl + 'me/Course/CourseReg_List?UserID=' + user.UserID).then((response) => {
            response = response.body;
            this.CourseReg_Items = response.Data;
          }, function () {
            console.log('请求发送失败');
          });
        } else {
          // return;
          console.log('empty');
        }

      })
    },
    methods: {
      // CourseReg_List: function () {
      // if (JSON.parse(window.localStorage.getItem("user"))) {
      //   let user = JSON.parse(window.localStorage.getItem("user"));
      //           this.$http.get(this.ApiUrl + 'me/Course/CourseReg_List?UserID=' + user.UserID).then((response) => {
      //   response = response.body;
      //   this.CourseReg_Items = response.Data;
      // }, function () {
      //   console.log('请求发送失败');
      // });
      // } else {
      // return;
      //   console.log('empty');
      // }
      // },
      // _initSwiper() {
      //   let mSwiper01 = new Swiper('.content_item .swiper-container', {
      //     slidesPerView: 1,
      //     paginationClickable: true,
      //     loop: true,
      //     nextButton: '.swiper-button-next-01',
      //     prevButton: '.swiper-button-prev-01'
      //   });
      //   console.log(mSwiper01);
      // },
      Course_Reg_Status_Upd: function (m) {
        let obj = this;
        let id = obj.$layer.confirm("确定取消报名吗?", {
          title: '取消报名'
        }, function () {
          obj.$http.get(obj.ApiUrl + 'me/Course/Course_Reg_Status_Upd?CourseRegID=' + m.CourseRegID).then((
            response) => {
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
      // this.CourseReg_List();
    }
  }

</script>
<style>
  .content_item .content_item_table {
    width: 100%;
  }

  .content_item_table tr {
    border-bottom: 2px solid #e0e0e0;
  }

  .content_item_table tr th {
    font-size: 20px;
    color: #000;
    padding: 26px 0;
  }

  .content_item_table tr td {
    padding: 22px 0;
    font-size: 14px;
    color: #000;
  }

  .content_item_table tr th,
  .content_item_table tr td {
    text-align: center;
  }

  .content_item_table tr td.pay {
    color: #72c11d;
  }

  .content_item_table tr td.cancel {
    color: #ff0000;
  }

  .no_data_wrapper {
    padding: 10px 0 0 180px;
  }
  /* .no_data_wrapper .pic_img {
    float: left;
  } */

  .no_data_wrapper .no_data_content .pic_img {
    float: left;
  }

  .no_data_wrapper .no_data_content .title_3 {
    float: left;
    font-size: 24px;
    color: #9b9b9b;
    padding-top: 130px;
    padding-left: 30px;
  }

  @media screen and (max-width: 1020px) {

    .content_item .content_item_table {
      overflow: hidden;
    }

    .content_item_table tr {
      border-bottom: 2px solid #e0e0e0;
    }

    .content_item_table tr th {
      font-size: 20px;
      color: #000;
      padding: 0;
    }

    .content_item_table tr td {
      padding: 0;
      font-size: 14px;
      color: #000;
    }

    .no_data_wrapper {
      padding: 0;
    }
    .no_data_wrapper .no_data_content {
      height: auto;
    }
    .no_data_wrapper .no_data_content .pic_img {
      float: none;
      width: 150px;
      height: 150px;
      vertical-align: middle;
      margin-top: 20%;
    }

    .no_data_wrapper .no_data_content .title_3 {
      float: none;
      font-size: 12px;
      color: #9b9b9b;
      padding: 47px 0;
      /* padding-left: 0; */
    }











    .content_item .content_item_table tr.table_h th {
      display: none;
    }

    .content_item .content_item_table tr.table_content {
      display: flex;
      flex-direction: column;
      height: 316px;
      width: 100%;
    }
    .content_item .content_item_table tr.table_content td {
      display: inline-block;
      flex: 1;
      line-height: 52px;
      text-align: center;
      width: 120%;
    }
    .content_item .no_data_wrapper {
      /* position: relative; */
    }
    .content_item .no_data_wrapper .pic_img {
      /* width: 100%; */
    }
  }

</style>
