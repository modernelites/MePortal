<template>
  <div>
    <div class="content_wrapper" @click="slidShow=false">
      <div class="content_header">
        <h3 class="title_3"> 报名</h3>
        <div class="select_wrapper" id="select_wrapper">
          <div class="show_wrapper">
            <div class="show_info toggle_select" ref="option_show_info" @click.stop.prevent="slidShow = !slidShow">
              {{SelectCourseType.CourseTypeName}}
            </div>
          </div>
          <transition name="fade">
            <div class="option_wrapper" id="option_wrapper" ref="option_wrapper" v-show="slidShow">
              <div v-for="(m,index) in CourseType_Items" data-value="0" class="option">
                <a @click="selectOption(m)" :href="'#/register/register'+m.CourseTypeID">{{m.CourseTypeName}}</a>
              </div>
            </div>
          </transition>
        </div>
        <div class="course_wrapper">
          <span class="info">选择课程 : <u class="star">*</u></span>
          <a href="javascript:;" title="选择课程" class="select_btn" @click="courseMaskShow=true"> 选择课程</a>
          <span class="show_info course_show_info" v-show="SelectCourse.CourseName"
                ref="course_result_info">{{SelectCourse.CourseName}}</span>
        </div>
        <div class="course_wrapper">
          <span class="info">选择期数 : <u class="star">*</u></span>
          <a href="javascript:;" title="选择期数" class="select_btn" @click="periodMaskShow=true"> 选择期数</a>
          <span class="show_info course_show_info" v-show="SelectPeriod.PeriodID"
                ref="course_result_info" v-text="'第'+SelectPeriod.PeriodNum+'期'+(SelectPeriod.PeriodName?SelectPeriod.PeriodName:'')"></span>
          <!--<div class="tips">说明：三阶课程（ <span class="text">仅限参加一二期的老学员</span> ）<span-->
          <!--class="date">时间：2017.7.1~2017.7.12</span></div>-->
        </div>
      </div>
      <dl class="content_item">
        <div class="info_box">
          <label>
            <span>姓名：<u class="star">*</u></span>
            <input type="text" name="username" class="username" required="" v-model="CourseReg.StuName">
          </label>
          <label class="sex_label">
            <span>性别：<u class="star">*</u></span>
            <input type="radio" name="radio_sex" class="sex_man sex" value="true" v-model="CourseReg.Gender">男
            <input type="radio" name="radio_sex" class="sex_girl sex" value="false" v-model="CourseReg.Gender">女
          </label>
          <label class="grade_label">
            <span>就读学校： </span>
            <i>学校：</i>
            <input type="text" name="school_input" class="school_input" v-model="CourseReg.School"
                   style="width: 200px;">
            <div class="grade_area">
              <i class="grade_i"> 年级：</i>
              <select class="grade_select" v-model="CourseReg.Grade">
                <option value="" selected>年级</option>
                <option value="一年级">一年级</option>
                <option value="二年级">二年级</option>
                <option value="三年级">三年级</option>
                <option value="四年级">四年级</option>
                <option value="五年级">五年级</option>
                <option value="六年级">六年级</option>
                <option value="初一">初一</option>
                <option value="初二">初二</option>
                <option value="初三">初三</option>
                <option value="高一">高一</option>
                <option value="高二">高二</option>
                <option value="高三">高三</option>
                <option value="大一">大一</option>
                <option value="大二">大二</option>
                <option value="大三">大三</option>
                <option value="大四">大四</option>
              </select>
            </div>
            <div class="common_area">
              <i class="common_i"> 班级：</i>
              <select class="common grade_select" v-model="CourseReg.ClassName">
                <option value="" selected="selected">班级</option>
                <option value="一班">一班</option>
                <option value="二班">二班</option>
                <option value="三班">三班</option>
                <option value="四班">四班</option>
                <option value="五班">五班</option>
                <option value="六班">六班</option>
                <option value="七班">七班</option>
                <option value="八班">八班</option>
                <option value="九班">九班</option>
                <option value="十班">十班</option>
                <option value="十一班">十一班</option>
                <option value="十二班">十二班</option>
                <option value="十三班">十三班</option>
                <option value="十四班">十四班</option>
                <option value="十五班">十五班</option>
                <option value="十六班">十六班</option>
                <option value="十七班">十七班</option>
                <option value="十八班">十八班</option>
                <option value="十九班">十九班</option>
                <option value="二十班">二十班</option>
              </select>
            </div>
          </label>
          <label>
            <span>出生日期：<u class="star">*</u></span>
            <input type="date" name="date" class="birth_date" v-model="CourseReg.Birthday">
          </label>
          <label>
            <span>学员手机：</span>
            <input type="number" name="student_phone" class="student_phone" v-model="CourseReg.StuPhone">
          </label>
          <label class="grade_label common_label">
            <span class="common_span">地区 ：</span>
            <region v-on:getRegion="showRegion"></region>
          </label>
          <label>
            <span>学员身份证账号:</span>
            <input type="text" name="student_phone" class="common_input" v-model="CourseReg.StuIDCardNum">
          </label>
          <label class="sex_label common_label">
            <span>是否是老学员：<u class="star">*</u></span>
            <input type="radio" name="radio_OldStu" class="radio radio_1" value="true" v-model="CourseReg.Is_OldStu">是
            <input type="radio" name="radio_OldStu" class="radio radio_2" value="false" v-model="CourseReg.Is_OldStu">否
          </label>
        </div>
        <!-- 下面是个人父母信息 -->
        <div class="item_bottom_con">
          <div class="parent_box">
            <label>
              <span>父亲：</span>
              <i class="name_i"> 姓名：</i>
              <input type="text" name="father_name" class="father_name" v-model="CourseReg.FName">
              <div class="phone_area">
                <i class="phone_info">手机：</i>
                <input type="number" name="father_phone" class="father_phone" v-model="CourseReg.FPhone"
                       style="width: 200px">
              </div>
              <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
            </label>
            <label>
              <span>母亲：</span>
              <i class="name_i"> 姓名：</i>
              <input type="text" name="mom_name" class="mom_name" v-model="CourseReg.MName">
              <div class="phone_area">
                <i class="phone_info">手机：</i>
                <input type="number" name="mom_phone" class="mom_phone" v-model="CourseReg.MPhone" style="width:200px">
              </div>
              <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
            </label>
            <label class="address_label">
              <span class="ex_address_info">快递地址（详细）：</span>
              <input type="text" name="expressage_address" class="expressage_address" v-model="CourseReg.Address">
            </label>
          </div>
        </div>
        <!-- 集训营课程报名 新添加内容 -->
        <div class="add_wrapper">
          <label class="origin_label">
            <span>填表人 ：</span>
            <input type="radio" name="radio_origin" class="origin_man origin" value="父亲" v-model="CourseReg.RegName"
                   @click="showRegName=false;">父亲
            <input type="radio" name="radio_origin" class="origin_girl origin" value="母亲" v-model="CourseReg.RegName"
                   @click="showRegName=false;">母亲
            <input type="radio" name="radio_origin" class="origi_self origin" value="学生本人" v-model="CourseReg.RegName"
                   @click="showRegName=false;">学生本人
            <input type="radio" name="radio_origin" class="originx_other origin" value="其他"
                   @click="showRegName=true;CourseReg.RegName=''">其他
            <label style="line-height: 60px; margin-bottom: 0px" v-show="showRegName">
              <span></span>
              <span class="name_i">请输入填表人姓名：</span>
              <span><input type="text" v-model="CourseReg.RegName" class="regname"/></span>
            </label>
          </label>
          <label class="know_label">
            <div class="know_area">
              <span>如何了解到</span>
              <select class="know_select" v-model="CourseReg.Channel">
                <option value="">请选择</option>
                <option value="来源1">来源1</option>
                <option value="来源2">来源2</option>
              </select>
            </div>
          </label>
          <label class="remark_area">
            <span>备注 ：</span>
            <textarea name="textarea" class="textarea" v-model="CourseReg.Remarks" style="width: 660px"></textarea>
          </label>
          <div class="tips_area">
            <span class="tips_item tips_item_1">特别提醒：1：老学员报名，请提前六个月全额汇款，确保名额；</span>
            <span class="tips_item tips_item_2">2：老学员确定参加哪一期，以食宿费汇款到账为准。</span>
          </div>
          <div class="btn_wrapper">
            <input type="submit" name="submit" class="submit_btn" value="确认报名" @click="CourseReg_Add()">
          </div>
        </div>
      </dl>
    </div>
    <transition name="fade">
      <div v-show="courseMaskShow" class="course_shade" @click="courseMaskShow=false">这是遮罩层</div>
    </transition>
    <transition name="fade">
      <div v-show="periodMaskShow" class="course_shade" @click="periodMaskShow=false">这是遮罩层</div>
    </transition>
    <transition name="course-fade-con">
      <div v-show="courseMaskShow" class="course_modal_box">
        <div class="modal_box_top">
          <h3 class="title_3">选择课程</h3>
          <a href="javascript:;" class="close_btn" @click="courseMaskShow=false"></a>
        </div>
        <div class="modal_box_middle">
          <label v-for="m in Course_Items_Fillter" @click="Period_Fillter_List(m)">
            <input type="radio" name="course" class="radio radio_1">
            <span class="text" v-text="m.CourseName"></span>
          </label>
        </div>
        <div class="modal_box_bottom">
          <input type="submit" name="submit" class="submit_btn btn" value="确认" @click="courseMaskShow=false">
          <input type="reset" name="reset" class="reset_btn btn" value="取消" @click="courseMaskShow=false">
        </div>
      </div>
    </transition>
    <transition name="course-fade-con">
      <div v-show="periodMaskShow" class="course_modal_box">
        <div class="modal_box_top">
          <h3 class="title_3">选择期数</h3>
          <a href="javascript:;" class="close_btn" @click="periodMaskShow=false"></a>
        </div>
        <div class="modal_box_middle">
          <label v-for="m in Period_Items_Fillter" @click="Period_Select(m)" style="height: auto;line-height: 30px">
            <input type="radio" name="period" class="radio radio_1">
            <span class="text" v-text="'第'+m.PeriodNum+'期'+(m.PeriodName?m.PeriodName:'')"
                  style="margin-left: 5px"></span>
            <div style="font-size: 14px;margin-left: 25px;">
              开始时间:
              <span class="text">{{m.StartDate | datefmt}}</span>
            </div>
            <div style="font-size: 14px;margin-left: 25px;">
              结束时间:
              <span class="text">{{m.EndDate | datefmt }}</span>
            </div>
          </label>
        </div>
        <div class="modal_box_bottom">
          <input type="submit" name="submit" class="submit_btn btn" value="确认" @click="periodMaskShow=false">
          <input type="reset" name="reset" class="reset_btn btn" value="取消" @click="periodMaskShow=false">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import region from '@/components/region/region';

  export default {
    data() {
      return {
        showRegName: false,
        CourseReg: {
          CourseID: 0, UserID: 0, StuName: '', Gender: true, School: '', Grade: '', ClassName: '', Birthday: '',
          StuPhone: '', Email: '', FName: '', FPhone: '', MName: '', MPhone: '', Address: '', Remarks: '', Area: '',
          Is_Fine: false, Is_Envoy: false, Honor: '', Self_Des: '', Is_OldStu: false, StuIDCardNum: '', RegName: '母亲',
          Channel: '',CourseTypeID:1
        },
        slidShow: false,
        courseMaskShow: false,
        periodMaskShow: false,
        CourseTypeID: 1,
        Course_Items: [],
        Course_Items_Fillter: [],
        Period_Items: [],
        Period_Items_Fillter: [],
        SelectCourse: {CourseName: "", CourseID: 0},
        SelectPeriod: {PeriodName: "", PeriodID: 0},
        SelectCourseType: {},
        CourseType_Items: []
      }
    },
    methods: {
      showRegion(data) {
        let dataString = data.Province + data.City + data.County;
        this.CourseReg.Area = dataString;
        console.log(this.CourseReg.Area)
      },
      selectOption(m) {
        this.slidShow = false;
        this.SelectCourseType = m;
        this.SelectCourse = {CourseName: "", CourseID: 0};
        this.SelectPeriod = {PeriodName: "", PeriodID: 0};
        this.Course_Items_Fillter = this.Course_List_Fillter(m.CourseTypeID);
      },
      CourseType_List() {
        this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_Items = response.Data;
          this.SelectCourseType = response.Data[0];
        }, function () {
          console.log('请求发送失败');
        });
      },
      // 获取课程列表
      Course_List() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_Items = response.Data;
          this.Course_Items_Fillter = this.Course_List_Fillter(1);
        }, function () {
          console.log('请求发送失败');
        });
      },
      //过滤课程
      Course_List_Fillter(p) {
        var arr = [];
        for (var i = 0; i < this.Course_Items.length; i++) {
          if (this.Course_Items[i].CourseTypeID == p) {
            arr.push(this.Course_Items[i]);
          }
        }
        return arr;
      },
      // 获取期数列表
      Period_List() {
        this.$http.get(this.ApiUrl + 'me/Period/Period_List?CourseID=0').then((response) => {
          response = response.body;
          this.Period_Items = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      },
      Period_Fillter_List(m) {
        this.SelectCourse = {CourseName: "", CourseID: 0};
        this.SelectPeriod = {PeriodName: "", PeriodID: 0};
        this.SelectCourse = m;
        var arr = [];
        for (var i = 0; i < this.Period_Items.length; i++) {
          if (this.Period_Items[i].CourseID == m.CourseID) {
            arr.push(this.Period_Items[i]);
          }
        }
        this.Period_Items_Fillter = arr;
      },
      Period_Select(m) {
        //this.SelectCourse = {CourseName: "",CourseID:0};
        this.SelectPeriod = {PeriodName: "", PeriodID: 0};
        this.SelectPeriod = m;
      },
      /** 课程报名*/
      CourseReg_Add() {
        let user = JSON.parse(window.localStorage.getItem("user"));
        this.CourseReg.CourseID = this.SelectCourse.CourseID;
        this.CourseReg.PeriodID = this.SelectPeriod.PeriodID;
        this.CourseReg.UserID = user.UserID;
        if (this.CourseReg.CourseID == 0) {
          this.$layer.alert("请选择课程!");
          return;
        }
        if (this.CourseReg.PeriodID == 0) {
          this.$layer.alert("请选择期数!");
          return;
        }
        if (!this.CourseReg.StuName) {
          this.$layer.alert("请输入学员姓名!");
          return;
        }
        if (!this.CourseReg.Birthday) {
          this.$layer.alert("请选择出生日期!");
          return;
        }
        if (!this.CourseReg.FPhone && !!this.CourseReg.MPhone) {
          this.$layer.alert("父母手机号请至少填写一个!");
          return;
        }
        this.$http.post(this.ApiUrl + 'me/Course/CourseReg_Add', this.CourseReg).then((response) => {
          response = response.body;
          this.$layer.alert("报名成功!");
        }, function () {
          console.log('请求发送失败');
        });
      }
    },
    mounted() {
      this.Course_List();
      this.Period_List();
      this.CourseType_List();
    },
    components: {
      region: region
    }
  }

</script>
<style>
  .regname {
    box-sizing: border-box;
    display: inline-block;
    background: #eee;
    outline: none;
    border: none;
    padding-left: 10px;
    border-radius: 8px;
    height: 40px;
    line-height: 40px;
  }
</style>
