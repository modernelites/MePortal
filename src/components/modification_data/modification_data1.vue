<template>
  <dl class="item basic_data_single active">
    <form action="" method="">
      <div class="item_top_con clearfix">
        <!-- 下面是头像内容 -->
        <div class="portrait_box">
          <div data-toggle="modal" data-target="#avatar-modal" class="up-img-cover" id="up-img-touch">
            <img class="am-circle" alt="点击图片上传" src="./../../assets/img/header_logo.png">
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
            <span>姓名：<u class="star">*</u></span>
            <input type="text" name="username" class="username" required="">
          </label>
          <label class="sex_label">
            <span>性别：<u class="star">*</u></span>
            <input type="radio" name="radio_sex" class="sex_man sex" checked="checked">男
            <input type="radio" name="radio_sex" class="sex_girl sex">女
          </label>
          <label class="grade_label">
            <span>就读学校： </span>
            <i>学校：</i>
            <input type="text" name="school_input" class="school_input">
            <div class="grade_area">
              <i class="grade_i"> 年级：</i>
              <select class="grade_select" id="grade_select">
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
          <label>
            <span>出生日期：<u class="star">*</u></span>
            <input type="date" name="date" class="birth_date">
          </label>
          <label>
            <span>学员手机：</span>
            <input type="number" name="student_phone" class="student_phone">
          </label>
          <label>
            <span>电子邮件：</span>
            <input type="email" name="email" class="student_email">
          </label>
        </div>
      </div>
      <!-- 下面是个人父母信息 -->
      <div class="item_bottom_con">
        <div class="parent_box">
          <label>
            <span>父亲：</span>
            <i class="name_i"> 姓名：</i>
            <input type="text" name="father_name" class="father_name">
            <div class="phone_area">
              <i class="phone_info">手机：</i>
              <input type="number" name="father_phone" class="father_phone">
            </div>
            <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
          </label>
          <label>
            <span>母亲：</span>
            <i class="name_i"> 姓名：</i>
            <input type="text" name="mom_name" class="mom_name">
            <div class="phone_area">
              <i class="phone_info">手机：</i>
              <input type="number" name="mom_phone" class="mom_phone">
            </div>
            <u class="tip">父亲 &nbsp; 母亲 至少填写一项 </u>
          </label>
          <label class="address_label">
            <span class="ex_address_info">快递地址（详细）：</span>
            <input type="text" name="expressage_address" class="expressage_address">
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
