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
      </div>
      <dl class="content_item">
        <div class="assistant_wrapper" ref="assistant_wrapper">
          <div class="info_box">
            <label>
              <span>姓名：<u class="star">*</u></span>
              <input type="text" name="username" class="username" required="" v-model="CourseReg.StuName">
            </label>
            <label class="grade_label">
              <span>就读学校： </span>
              <i>学校：</i>
              <input type="text" name="school_input" class="school_input" v-model="CourseReg.School"
                     style="width:200px">
              <div class="grade_area">
                <i class="grade_i"> 年级：</i>
                <select class="grade_select" v-model="CourseReg.Grade">
                  <option value="">年级</option>
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
                  <option value="">班级</option>
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
            <label>
              <span>电子邮件：</span>
              <input type="email" name="email" class="student_email" v-model="CourseReg.Email">
            </label>
            <label class="radio_label">
              <span>当过助教：<u class="star">*</u></span>
              <input type="radio" name="Is_OldAssistant" class="radio radio_1" value="true" v-model="CourseReg.Is_OldAssistant" @click="CourseReg.Is_OldAssistant=true">是
              <input type="radio" name="Is_OldAssistant" class="radio radio_2" value="false" v-model="CourseReg.Is_OldAssistant" @click="CourseReg.Is_OldAssistant=false">否
            </label>
          </div>
          <!-- 集训营课程报名 新添加内容 -->
          <div class="add_wrapper">
            <label class="know_label">
              <div class="know_area">
                <span>助教期数</span>
                <select class="know_select" v-model="CourseReg.Join_Period" v-bind:disabled="!CourseReg.Is_OldAssistant" >
                  <option value="0">请选择</option>
                  <option v-for="m in Period_Items_All" v-text="m.PeriodNum+'期'" :value="m.PeriodID"></option>
                </select>
              </div>
            </label>
            <label class="student_wrapper">
              <span>生活照</span>
              <a href="javascript:;" title="生活照" class="student_file_btn">
                上传照片
                <input type="file" name="photooflife" class="file student_file">
              </a>
            </label>
            <label class="reg_file_wrapper">
              <span>中英文简历</span>
              <a href="javascript:;" title="中英文简历" class="reg_file_btn">
                上传文件
                <input type="file" name="resume" class="file reg_file">
              </a>
            </label>
            <label class="remark_area">
              <span>备注 ：</span>
              <textarea name="textarea" class="textarea" v-model="CourseReg.Remarks" style="width:660px"></textarea>
            </label>
            <div class="btn_wrapper">
              <input type="submit" name="submit" class="submit_btn" value="确认报名" @click="submit()">
            </div>
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
  export default {
    data() {
      return {
        showRegName: false,
        CourseReg: {
          CourseID: 0, UserID: 0, StuName: '', Gender: true, School: '', Grade: '', ClassName: '', Birthday: '',
          StuPhone: '', Email: '', FName: '', FPhone: '', MName: '', MPhone: '', Address: '', Remarks: '', Area: '',
          Is_Fine: false, Is_Envoy: false, Honor: '', Self_Des: '', Is_OldStu: false, StuIDCardNum: '', RegName: '',
          Channel: '', CourseTypeID: 5, PhotosOfLife_FileID: 0, Resume_FileID: 0, Is_OldAssistant: false,Join_Period:0
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
        CourseType_Items: [],
        Period_Items_All:[]
      }
    },
    methods: {
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
          this.SelectCourseType = response.Data[4];
        }, function () {
          console.log('请求发送失败');
        });
      },
      // 获取课程列表
      Course_List() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_Items = response.Data;
          this.Course_Items_Fillter = this.Course_List_Fillter(5);
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
      PhotosOfLife_Upload(callback) {
        var formData = new FormData();
        formData.append('file', $('input[name=photooflife]')[0].files[0]);    // 'file'表示提交时的键名
        this.$http.post(this.ApiUrl + 'me/File/File_Upload', formData).then((response) => {
          response = response.body;
          this.CourseReg.PhotosOfLife_FileID = response.Data[0];
          console.log(response)
          console.log(this.CourseReg.PhotosOfLife_FileID)
          if (callback) {
            callback();
          }
        }, function () {
          console.log('请求发送失败');
        });
      },
      Resume_Upload(callback) {
        var formData = new FormData();
        formData.append('file', $('input[name=resume]')[0].files[0]);    // 'file'表示提交时的键名
        this.$http.post(this.ApiUrl + 'me/File/File_Upload', formData).then((response) => {
          response = response.body;
          this.CourseReg.Resume_FileID = response.Data[0];
          if (callback) {
            callback(response);
          }
        }, function () {
          console.log('请求发送失败');
        });
      },
      submit() {
        this.CourseReg.PhotosOfLife_FileID = 0;
        this.CourseReg.Resume_FileID = 0;
        let student_card = $('input[name=photooflife]')[0];
        let reg_file = $('input[name=resume]')[0];
        if (student_card.files.length && reg_file.files.length) {
          this.PhotosOfLife_Upload(this.Resume_Upload(this.CourseReg_Add));
        } else if (student_card.files.length && !reg_file.files.length) {
          this.PhotosOfLife_Upload(this.CourseReg_Add);
        } else if (!student_card.files.length && reg_file.files.length) {
          this.Resume_Upload(this.CourseReg_Add);
        } else {
          this.CourseReg_Add();
        }
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
//        if (this.CourseReg.PeriodID == 0) {
//          this.$layer.alert("请选择期数!");
//          return;
//        }
        if (!this.CourseReg.StuName) {
          this.$layer.alert("请输入学员姓名!");
          return;
        }
//        if (!this.CourseReg.Birthday) {
//          this.$layer.alert("请选择出生日期!");
//          return;
//        }
//        if (!this.CourseReg.FPhone && !!this.CourseReg.MPhone) {
//          this.$layer.alert("父母手机号请至少填写一个!");
//          return;
//        }
        console.log(this.CourseReg);
//        if (true) {
//          return;
//        }
        this.$http.post(this.ApiUrl + 'me/Course/CourseReg_Add', this.CourseReg).then((response) => {
          response = response.body;
          this.$layer.alert("报名成功!");
        }, function () {
          console.log('请求发送失败');
        });
      },
      Period_List_All(){
        this.$http.get(this.ApiUrl + 'me/Period/Period_List_All?Type=2').then((response) => {
          response = response.body;
          this.Period_Items_All = response.Data;
        }, function () {
          console.log('请求发送失败');
        });
      }
    },
    mounted() {
      this.Course_List();
      this.Period_List();
      this.CourseType_List();
      this.Period_List_All();
    }
  }
</script>
