<template>
  <div>
    <!-- footer -->
    <footer class="footer">
      <ul class="w_1000 footer_list clearfix">
        <li @click="contactSelect(0)" class="item contact">  <a href="#/contact/contact1" title="联系我们">联系我们</a></li>
        <li @click="contactSelect(0)" class="item item_info"><a href="#/contact/contact1">地址</a></li>
        <li @click="contactSelect(1)" class="item item_info"><a href="#/contact/contact2">邮箱</a></li>
        <li @click="contactSelect(2)" class="item item_info"><a href="#/contact/contact3">电话</a></li>
        <li @click="contactSelect(3)" class="item item_info"><a href="#/contact/contact4">意见与建议</a></li>
      </ul>
      <div class="company_name">上海摩英商务咨询有限公司</div>
      <address>
        经营许可证：京ICP备 05067667
        <a href="javascript:;">京网问2016231313</a>
        <a href="javascript:;">京网问2016231313</a>
        <a href="javascript:;">京网问2016231313</a>
        <h6 class="title_6"> copy ying 2012-2016 Newwordcenfal ceroaclicn all Pights Pceves </h6>
      </address>
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

.footer {
  background: #ebecee;
}

.footer {
  background: #bdbdbd;
  text-align: center;
}

.footer .footer_list {
  padding-top: 40px;
}

.footer .footer_list li {
  color: #656565;
}

.footer .footer_list li.contact {
  margin-right: 70px;
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

</style>
