<template>
  <dl class="item basic_data_single active">
    <form action="" method="" @submit.prevent="submit">
      <div class="item_top_con clearfix">
        <!-- 下面是头像内容 -->
        <div class="portrait_box">
          <div data-toggle="modal" data-target="#avatar-modal" class="up-img-cover" id="up-img-touch">
            <img class="am-circle" alt="" :src="user.FilePath">
            <!-- 引入框架头像 start -->
            <div class="user_pic">
              <img src="" />
            </div>
            <!-- 引入框架头像 end -->
          </div>
          </center>
          <div>
            <a style="text-align: center; display: block;" id="pic"></a>
          </div>
        </div>
        <div class="info_box">
          <label>
            <span>姓名：
              <u class="star">*</u>
            </span>
            <input type="text" name="username" class="username" required="" v-model="user.UserName">
          </label>
          <label class="sex_label">
            <span>性别：
              <u class="star">*</u>
            </span>
            <input type="radio" name="radio_sex" class="sex_man sex" checked="checked" value="true" v-model="user.Gender">男
            <input type="radio" name="radio_sex" class="sex_girl sex" value="false" v-model="user.Gender">女
          </label>
          <label class="grade_label">
            <div class="school">
              <span>就读学校： </span>
              <i>学校：</i>
              <input type="text" name="school_input" class="school_input" v-model="user.School">
            </div>

            <div class="grade_area">
              <i class="grade_i"> 年级：</i>
              <select class="grade_select" id="grade_select" v-model="user.Grade">
                <option value="1">一年级</option>
                <option value="2">二年级</option>
                <option value="3">三年级</option>
                <option value="4">四年级</option>
                <option value="5">五年级</option>
                <option value="6">六年级</option>
                <option value="7">初一</option>
                <option value="8">初二</option>
                <option value="9">初三</option>
                <option value="10">高一</option>
                <option value="11">高二</option>
                <option value="12">高三</option>
                <option value="13">大一</option>
                <option value="14">大二</option>
                <option value="15">大三</option>
                <option value="16">大四</option>
              </select>
            </div>
          </label>
          <label class="b_date">
            <span>出生日期：
              <u class="star">*</u>
            </span>
            <input type="date" name="date" class="birth_date" v-model="user.Birthday">
          </label>
          <label class="phone">
            <span>学员手机：</span>
            <input type="number" name="student_phone" class="student_phone" v-model="user.Phone">
          </label>
          <label class="mail">
            <span>电子邮件：</span>
            <input type="email" name="email" class="student_email" v-model="user.Email">
          </label>
        </div>
      </div>
      <!-- 下面是个人父母信息 -->
      <div class="item_bottom_con">
        <div class="parent_box">
          <label>
            <div class="f_name">
              <span>父亲：</span>
              <i class="name_i"> 姓名：</i>
              <input type="text" name="father_name" class="father_name" v-model="user.FName">
            </div>
            <div class="phone_area">
              <i class="phone_info">手机：</i>
              <input type="number" name="father_phone" class="father_phone" v-model="user.FPhone">
            </div>
            <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
          </label>
          <label>
            <div class="m_name">
              <span>母亲：</span>
              <i class="name_i"> 姓名：</i>
              <input type="text" name="mom_name" class="mom_name" v-model="user.MName">
            </div>

            <div class="phone_area">
              <i class="phone_info">手机：</i>
              <input type="number" name="mom_phone" class="mom_phone" v-model="user.MPhone">
            </div>
            <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
          </label>
          <label class="address_label">
            <span class="ex_address_info">快递地址：</span>
            <input type="text" name="expressage_address" class="expressage_address" v-model="user.Address">
          </label>
        </div>
      </div>
      <!-- submit_btn -->
      <div class="submit_box">
        <input type="submit" name="submit_fill_btn" class="submit_fill_btn" value="保存">
      </div>
    </form>
  </dl>
</template>
<script>
  export default {

    data() {
      return {
        user: {
          UserID: JSON.parse(window.localStorage.getItem("user")).UserID,
          LoginName: JSON.parse(window.localStorage.getItem("user")).LoginName,
          Pwd: JSON.parse(window.localStorage.getItem("user")).Pwd,
          UserName: JSON.parse(window.localStorage.getItem("user")).UserName,
          Gender: JSON.parse(window.localStorage.getItem("user")).Gender,
          School: JSON.parse(window.localStorage.getItem("user")).School,
          Grade: JSON.parse(window.localStorage.getItem("user")).Grade,
          Birthday: JSON.parse(window.localStorage.getItem("user")).Birthday.slice(0, 10),
          Phone: JSON.parse(window.localStorage.getItem("user")).Phone,
          Email: JSON.parse(window.localStorage.getItem("user")).Email,
          FName: JSON.parse(window.localStorage.getItem("user")).FName,
          FPhone: JSON.parse(window.localStorage.getItem("user")).FPhone,
          MName: JSON.parse(window.localStorage.getItem("user")).MName,
          MPhone: JSON.parse(window.localStorage.getItem("user")).MPhone,
          Address: JSON.parse(window.localStorage.getItem("user")).Address,
          FilePath: JSON.parse(window.localStorage.getItem("user")).FilePath
        }
      }
    },
    methods: {
      submit: function () {
        console.log(this.user)
        if (JSON.parse(window.localStorage.getItem("user")).FilePath) {
          this.user.FilePath = JSON.parse(window.localStorage.getItem("user")).FilePath;
        } else {
          this.user.FilePath = 'default';
        }
        if (!this.user.MPhone && !this.user.FPhone) {
          this.$layer.alert("父母手机号至少填写一项!");
        } else {
          this.$http.post(this.ApiUrl + 'me/User/UserInfo_Edit', this.user).then((response) => {
            response = response.body;
            if (response.Status == 200) {
              this.$layer.alert("修改成功!");
              window.localStorage.setItem('user', JSON.stringify(this.user));
            }
            if (response.Msg == "not login") {
              this.$layer.alert("登录已失效 请重新登录");
            }
          }, function () {

            console.log('failure');
          })
        }


      }
    },
    mounted() {}

  }

</script>
<style>
  img.am-circle {
    position: relative;
  }

  img.am-circle:after {
    content: '';
    background: url('./../../assets/img/header_logo.png') no-repeat;
    position: absolute;
    background-size: 190px;
    position: absolute;
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 1020px) {

    img.am-circle {
      position: relative;

    }
    img.am-circle:after {
      content: '';
      background: url('./../../assets/img/header_logo.png') no-repeat;
      background-size: 90px;
      position: absolute;
      width: 100px;
      height: 100px;
    }
  }

</style>
