<template>
  <dl class="content_item">
    <table class="content_item_table" v-show="CourseReg_Items.length>0">
      <!-- <caption>table title and/or explanatory text</caption> -->
      <thead>
        <tr class="table_h">
          <th>工作职位</th>
          <th>工作课程</th>
          <th>开始时间</th>
          <th>结束时间</th>
          <th>报名进度</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in CourseReg_Items" class="table_content">
          <td>
            <div v-show="m.CourseTypeID==5">助教</div>
            <div v-show="m.CourseTypeID==6">义工
            </div>
          </td>
          <td v-text="m.CourseName"></td>
          <td>{{m.StartDate | datefmt}}</td>
          <td>{{m.EndDate | datefmt}}</td>
          <td>
            <div v-show="m.Reg_Status==1">待电话面试</div>
            <div v-show="m.Reg_Status==0">已取消</div>
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
        this.$http.get(this.ApiUrl + 'me/Course/Course_Reg_List_NotPeriod?UserID=' + user.UserID).then((response) => {
          response = response.body;
          this.CourseReg_Items = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      },
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
      this.CourseReg_List();
    }
  }

</script>
<style>
  @media screen and (max-width: 1020px) {

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
      display: block;
      flex: 1;
      line-height: 52px;
      text-align: center;
      width: 120%;
    }
  }

</style>
