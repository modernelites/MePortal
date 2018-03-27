<template>
  <div>
    <footer class="footer">
      <ul class=" footer_list clearfix">
        <li @click="contactSelect(0)" class="item contact">
          <a href="#/contact/contact1" title="联系我们">联系我们</a>
        </li>
        <li @click="contactSelect(0)" class="item item_info">
          <a href="#/contact/contact1">地址</a>
        </li>
        <li @click="contactSelect(1)" class="item item_info">
          <a href="#/contact/contact2">邮箱</a>
        </li>
        <li @click="contactSelect(2)" class="item item_info">
          <a href="#/contact/contact3">电话</a>
        </li>
        <li @click="contactSelect(3)" class="item item_info">
          <a href="#/contact/contact4">意见与建议</a>
        </li>
      </ul>
      <address class="d_footer">
        <div class="company_name">上海摩英商务咨询有限公司</div>

        经营许可证编号：
        <a href="javascript:;">京ICP备 05067667</a>
        <a href="javascript:;">京ICP证060601</a>
        <a href="javascript:;">京网文（2016）5762-750号</a>
        <a href="javascript:;"> 京公安备110108021790 </a>
        <h6 class="title_6"> copy ying 2012-2016 Newwordcenfal ceroaclicn all Pights Pceves </h6>
      </address>
      <div class="m_footer">
        <h3 class="name">上海摩英商务咨询有限公司</h3>
        <h4 class="serial_number">经营许可证编号</h4>
        <p class="bei"> 京ICP备05067667
          <span>/</span> 京ICP证060601</p>
        <p class="bei"> 京网文（2016）5762-750号
          <span>/</span> 京公安备110108021790 </p>
        <address class="address"> Copyright 2011-2016 Neworiental Corporation,AllRights Reserved</address>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'footer',
    data() {
      return {};
    },
    methods: {
      contactSelect(str) {
        this.$emit('contactSelect', str);
      }
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* footer */

  /* .footer {
    background: #ebecee;
  } */

  .footer {
    background: #bdbdbd;
    text-align: center;
    width: 100%;
    /* max-width: 1440px;
    margin: 0 auto; */
  }

  .footer .footer_list {
    padding-top: 40px;
  }

  .footer .footer_list li {
    color: #656565;
  }

  .footer .footer_list li.contact {
    margin-right: 20px;
  }

  .footer .footer_list li.contact a {
    color: #656565;
  }

  .footer .footer_list li.item_info a {
    border-right: 1px solid #000;
    padding: 0 20px;
  }

  .footer .footer_list li.item_info a {
    font-size: 10px;
    color: #000;
  }

  .footer .footer_list .item { 
    display: inline-block;
  }

  .footer .company_name {
    font-size: 10px;
    color: #656565;
  }

  .footer .company_name {
    padding: 26px 0 10px;
    box-sizing: border-box;
  }

  address {
    font-size: 8px;
    color: #656565;
    margin-bottom: 0 !important;
  }

  address a {
    font-size: 8px;
    color: #656565;
    padding: 0 20px;
    border-right: 1px solid #656565;
  }

  address .title_6 {
    padding-top: 10px;
    font-weight: 100;
    padding-bottom: 18px;
  }

  footer .m_footer {
    display: none;
  }

  /* 移动端适配 */

  @media screen and (max-width: 1020px) {
    .footer {
      font-size: 12px;
    }
    .footer .footer_list .contact {
      width: 100%;
    }
    .footer .d_footer {
      display: none;
    }
    .footer .m_footer {
      display: block;
      color: #656565;
    }
    .footer .serial_number,
    .footer .bei,
    .footer span {
      margin-bottom: 5px;
    }
    .footer .address {
      padding-bottom: 20px;
    }
    .footer .item_info {
      margin: 0 auto;
      text-align: center;
    }
    .footer .name {
      padding: 32px 0 10px;
    }
    .footer .footer_list {
      padding-top: 0;
      margin: 0;
      font-size: 14px;
    }
    .footer .footer_list .contact {
      padding: 22px 0 15px;
    }
    .footer .footer_list li.contact {
      margin: 0 auto;
    }
    address {
      margin-bottom: 0;
    }
  }

</style>
