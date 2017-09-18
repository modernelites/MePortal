<template>
  <dl class="content_item">
    <table class="content_item_table" v-show="CourseReg_Items.length>0">
      <!-- <caption>table title and/or explanatory text</caption> -->
      <thead>
      <tr>
        <th>课程名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>课程价格</th>
        <th>报名进度</th>
        <th>支付状态</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="m in CourseReg_Items">
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
    methods: {
      CourseReg_List: function () {
        let user = JSON.parse(window.localStorage.getItem("user"));
        this.$http.get(this.ApiUrl + 'me/Course/CourseReg_List?UserID=' + user.UserID).then((response) => {
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
