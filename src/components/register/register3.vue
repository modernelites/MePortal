<template>
  <div>
    <div  @click="slidShow=false">
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
          <span class="info">选择课程 :
            <u class="star">*</u>
          </span>
          <a href="javascript:;" title="选择课程" class="select_btn" @click="courseMaskShow=true"> 选择课程</a>
          <span class="show_info course_show_info" v-show="SelectCourse.CourseName" ref="course_result_info">{{SelectCourse.CourseName}}</span>
        </div>
        <div class="course_wrapper">
          <span class="info">选择期数 :
            <u class="star">*</u>
          </span>
          <a href="javascript:;" title="选择期数" class="select_btn" @click="periodMaskShow=true"> 选择期数</a>
          <span class="show_info course_show_info" v-show="SelectPeriod.PeriodID" ref="course_result_info" v-text="'第'+SelectPeriod.PeriodNum+'期'+(SelectPeriod.PeriodName?SelectPeriod.PeriodName:'')"></span>
          <!--<div class="tips">说明：三阶课程（ <span class="text">仅限参加一二期的老学员</span> ）<span-->
          <!--class="date">时间：2017.7.1~2017.7.12</span></div>-->
        </div>
      </div>
      <dl class="content_item overseas_single">
        <div class="info_box">
          <label>
            <span>姓名：
              <u class="star">*</u>
            </span>
            <input type="text" name="username" class="username" required="" v-model="CourseReg.StuName">
          </label>
          <label class="sex_label">
            <span>性别：
              <u class="star">*</u>
            </span>
            <div class="s_select">
              <input type="radio" name="radio_sex" class="sex_man sex" value="true" v-model="CourseReg.Gender">男
              <input type="radio" name="radio_sex" class="sex_girl sex" value="false" v-model="CourseReg.Gender">女
            </div>

          </label>
          <label class="grade_label">
            <div class="sc">
                          <span>就读学校： </span>
            <i>学校：</i>
            <input type="text" name="school_input" class="school_input" v-model="CourseReg.School">
            </div>

            <div class="grade_area">
              <i class="grade_i"> 年级：</i>
              <select class="grade_select" v-model="CourseReg.Grade">
                <option value="">年级</option>
                <option value="一年纪">一年级</option>
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
            <span>出生日期：
              <u class="star">*</u>
            </span>
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
        </div>
        <!-- 下面是个人父母信息 -->
        <div class="item_bottom_con">
          <div class="parent_box">
            <label>
              <div class="f_name">
                <span>父亲：</span>
                <i class="name_i"> 姓名：</i>
                <input type="text" name="father_name" class="father_name" v-model="CourseReg.FName">
              </div>

              <div class="phone_area">
                <i class="phone_info">手机：</i>
                <input type="number" name="father_phone" class="father_phone" v-model="CourseReg.FPhone" style="width: 200px;">
              </div>
              <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
            </label>
            <label>
              <div class="m_name">
                <span>母亲：</span>
                <i class="name_i"> 姓名：</i>
                <input type="text" name="mom_name" class="mom_name" v-model="CourseReg.MName">
              </div>

              <div class="phone_area">
                <i class="phone_info">手机：</i>
                <input type="number" name="mom_phone" class="mom_phone" v-model="CourseReg.MPhone" style="width: 200px;">
              </div>
              <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
            </label>
            <label class="address_label">
              <span class="ex_address_info">快递地址：</span>
              <input type="text" name="expressage_address" class="expressage_address" v-model="CourseReg.Address">
            </label>
          </div>
        </div>

        <div class="info_box">
          <label>
            <div class="e_s">
              <span>优先条件：</span>
              <i class="name_i"> 摩英优秀学员：</i>
              <input type="radio" style="margin-left: 10px;" name="Is_Fine" class=" sex" value="true" v-model="CourseReg.Is_Fine">是
              <input type="radio" style="margin-left: 10px;" name="Is_Fine" class=" sex" value="false" v-model="CourseReg.Is_Fine">否
            </div>
            <div class="am">
              <i class="phone_info" style="margin-left: 20px">摩英星级形象大使：</i>
              <input type="radio" style="margin-left: 10px;" name="Is_Envoy" class=" sex" value="true" v-model="CourseReg.Is_Envoy">是
              <input type="radio" style="margin-left: 10px;" name="Is_Envoy" class=" sex" value="false" v-model="CourseReg.Is_Envoy">否
            </div>

          </label>
          <!-- <label class="honor">
            <i class="name_i" style="width: 65px"> 荣誉：</i>
            <textarea style="width: 550px;" name="textarea" class="textarea" v-model="CourseReg.Honor"></textarea>
          </label>
          <label class="desc">
            <i class="name_i" style="width: 65px"> 自我描述：</i>
            <textarea style="width: 550px;" name="textarea" class="textarea" v-model="CourseReg.Self_Des"></textarea>
          </label>
        </div>
        <div class="info_box">
          <label>
            <span>面试时间：</span>
            <select class="grade_select" v-model="CourseReg.InterviewWeek">
              <option value="星期一">星期一</option>
            </select>
            <select class="common grade_select" v-model="CourseReg.InterviewTime">
              <option value="9:00~10:00">9:00~10:00</option>
            </select>
          </label> -->
        </div>
        <!-- 集训营课程报名 新添加内容 -->
        <div class="add_wrapper">
          <label class="remark_area">
            <span>备注 ：</span>
            <textarea name="textarea" class="textarea" v-model="CourseReg.Remark" style="width: 660px;"></textarea>
          </label>
          <div class="tips_area">
            <span class="tips_item tips_item_1">
              特别提醒：1：报名年龄必须满14周岁
            </span>
            <span class="tips_item tips_item_2">
              2：如果是摩英优秀学员或者星级形象大使优先录取。
            </span>
          </div>
          <div class="btn_wrapper">
            <input type="submit" name="submit" class="submit_btn" @click="CourseReg_Add()" value="确认报名">
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
            <span class="text" v-text="'第'+m.PeriodNum+'期'+(m.PeriodName?m.PeriodName:'')" style="margin-left: 5px"></span>
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
          CourseID: 0,
          UserID: 0,
          StuName: '',
          Gender: true,
          School: '',
          Grade: '',
          ClassName: '',
          Birthday: '',
          StuPhone: '',
          Email: '',
          FName: '',
          FPhone: '',
          MName: '',
          MPhone: '',
          Address: '',
          Remarks: '',
          Area: '',
          Is_Fine: false,
          Is_Envoy: false,
          Honor: '',
          Self_Des: '',
          Is_OldStu: false,
          StuIDCardNum: '',
          RegName: '',
          Channel: '',
          InterviewWeek: '星期一',
          InterviewTime: '9:00~10:00',
          CourseTypeID: 3
        },
        slidShow: false,
        courseMaskShow: false,
        periodMaskShow: false,
        CourseTypeID: 1,
        Course_Items: [],
        Course_Items_Fillter: [],
        Period_Items: [],
        Period_Items_Fillter: [],
        SelectCourse: {
          CourseName: "",
          CourseID: 0
        },
        SelectPeriod: {
          PeriodName: "",
          PeriodID: 0
        },
        SelectCourseType: {},
        CourseType_Items: []
      }
    },
    methods: {
      selectOption(m) {
        this.slidShow = false;
        this.SelectCourseType = m;
        this.SelectCourse = {
          CourseName: "",
          CourseID: 0
        };
        this.SelectPeriod = {
          PeriodName: "",
          PeriodID: 0
        };
        this.Course_Items_Fillter = this.Course_List_Fillter(m.CourseTypeID);
      },
      CourseType_List() {
        this.$http.get(this.ApiUrl + 'me/CourseType/CourseType_List').then((response) => {
          response = response.body;
          this.CourseType_Items = response.Data;
          this.SelectCourseType = response.Data[2];
        }, function () {
          console.log('请求发送失败');
        });
      },
      // 获取课程列表
      Course_List() {
        this.$http.get(this.ApiUrl + 'me/Course/Course_List?CourseTypeID=0').then((response) => {
          response = response.body;
          this.Course_Items = response.Data;
          this.Course_Items_Fillter = this.Course_List_Fillter(3);
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

        this.SelectCourse = {
          CourseName: "",
          CourseID: 0
        };
        this.SelectPeriod = {
          PeriodName: "",
          PeriodID: 0
        };
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
        this.SelectPeriod = {
          PeriodName: "",
          PeriodID: 0
        };
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
      }
    },
    mounted() {
      this.Course_List();
      this.Period_List();
      this.CourseType_List();
    }
  }

</script>
<style>
  .textarea {
    display: table-cell;
    vertical-align: middle;
    width: 672px;
    height: 200px;
    background: #eee;
    resize: none;
    font-size: 16px;
    padding: 15px;
    line-height: 25px;
    color: #656565;
    border-radius: 16px;
    outline: none;
  }

  .grade_select {
    box-sizing: border-box;
    display: inline-block;
    background: #eee;
    outline: none;
    border: none;
    padding-left: 20px;
    border-radius: 8px;
    height: 52px;
    line-height: 52px;
    width: 120px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAJxJREFUGBmNkEEOgyAQRRlWLuAQrA2cpD2LPYZeR70IId3KIdi4dD4ppiVqneSHj/M+g5D3fhRCPFl3apJE9GKt/2gwYKVzbmHT3wj0YCVApdTAoeUshB4Y9HPAGINx3UWgA7MHYKy1My9QXfOnl7/nCYXAFNb+APD15J9A/QAM5x8tB2Kl7w18jLFJKb3htdZtuTv2pxVCeEBHwAafNSnWOo2XlwAAAABJRU5ErkJggg==);
    background-position: 90% center;
    background-repeat: no-repeat;
    -webkit-appearance: none;
    color: #656565;
  }

</style>
