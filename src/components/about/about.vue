<template>
  <div class="about_p">
    <my-header @aboutSelect="aboutSelect"></my-header>
    <div class="w_1000">
      <div class="content_wrapper">
        <div class="content_left">
          <ul class="nav_list" id="about_p_nav_list">
            <li @click="select(index)" class="nav_item" :class="{'active':selectType===index}" v-for="(item, index) in menuFillter(menuList,3)">
              <a :href="'#/about/about'+ index">{{item.MenuName}}</a>
            </li>            
          </ul>
        </div>
        <div class="content_right" id="about_p_contnet">
          <router-view> </router-view>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from '@/components/header/header';
import myFooter from '@/components/footer/footer';
export default {
  name: 'about',
  data() {
    return {
      selectType: 0,
      menuList: {}
    };
  },
  methods: {
    select(type) {
      this.selectType = type;
    },
    aboutSelect(str) {
      this.selectType = str;
    },
    selectUrl() {
      let url = window.location.href;
      if (url.indexOf('about0') > 0) {
        this.selectType = 0;
      }
      if (url.indexOf('about1') > 0) {
        this.selectType = 1;
      }
      if (url.indexOf('about2') > 0) {
        this.selectType = 2;
      }
    },
    // 获取菜单列表
    getMenuList() {
      this.$nextTick(function() {
        this.$http.get(this.ApiUrl + 'me/Menu/Menu_List').then((response) => {
          response = response.body;
          this.menuList = response.Data;
        }, function() {
          console.log('请求发送失败');
        });
      });
    },
    // 过滤菜单
    menuFillter(m, p) {
      var arr = [];
      for (var i = 0; i < m.length; i++) {
        if (m[i].ParentID == p) {
          arr.push(m[i]);
        }
      }
      return arr;
    }
  },
  components: {
    myHeader: myHeader,
    myFooter: myFooter
  },
  mounted() {
    this.selectUrl();
    this.getMenuList();
  },
  watch: {
    '$route': 'selectUrl'
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../../assets/css/media.css");
.about_p {
  background: #f7f7f7;
}

.about_p .content_wrapper {
  display: box;
  /* OLD - Android 4.4- */
  display: -webkit-box;
  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;
  /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;
  /* TWEENER - IE 10 */
  display: -webkit-flex;
  /* NEW - Chrome */
  display: flex;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.about_p .content_left {
  -webkit-box-flex: 112px;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 112px;
  /* OLD - Firefox 19- */
  width: 112px;
  /* For old syntax, otherwise collapses. */
  -webkit-flex: 112px;
  /* Chrome */
  -ms-flex: 112px;
  /* IE 10 */
  flex: 112px;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
  padding-top: 12px;
}

.about_p .content_left .nav_item {
  font-size: 16px;
  color: #656565;
  line-height: 56px;
  line-height: 56px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.about_p .content_left .nav_item a {
  display: block;
  color: #656565;
}

.about_p .content_left .nav_item.active a {
  color: #000;
  font-weight: bold;
}

.about_p .content_left .nav_item.active:before {
  content: ' ';
  display: block;
  position: absolute;
  top: 19px;
  left: 6px;
  height: 18px;
  width: 2px;
  background: #f24d4d;
}

.about_p .content_right {
  -webkit-box-flex: 888px;
  -moz-box-flex: 888px;
  width: 888px;
  -webkit-flex: 888px;
  -ms-flex: 888px;
  flex: 888px;
  background: #fff;
  padding: 30px 15px;
  margin-bottom: 60px;
}

.about_p .content_right .m_row {
  margin-left: -8px;
  margin-right: -8px;
}

.about_p .content_right .m_row .m_col-lg-6 {
  padding-left: 8px;
  padding-right: 8px;
}

.about_p .content_right .content_item {
  min-height: 600px;
}

.about_p .content_right .content_item.active {
  display: block;
}

.about_p .content_right .title_3 {
  font-size: 24px;
  color: #000;
  font-weight: bold;
}

.about_p .content_right .other_title_3 {
  padding-top: 30px;
}

.about_p .content_right .text {
  font-size: 12px;
  color: #656565;
  line-height: 16px;
  padding: 22px 8px 22px 0;
}

.about_p .content_right .m_row img {
  max-width: 100%;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.about_p .content_right .m_row img:hover {

  box-shadow: 0 0 5px rgba(0, 0, 0, .6);

}

.about_p .content_right .we_char_single {
  padding: 0 85px;
}

.about_p .content_right .we_char_single .m_row {
  margin-left: -22px;
  margin-right: -22px;
}

.about_p .content_right .we_char_single .m_row .m_col-lg-6 {
  padding-left: 22px;
  padding-right: 22px;
}

.about_p .content_right .we_char_single .info {
  font-size: 28px;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 30px 0 100px;
}

.about_p .content_right .we_char_single .audio_title_6 {
  padding-bottom: 30px;
}

.about_p .content_right .join_us_nav {
  margin-left: 15px;
  margin-bottom: 10px;
}

.about_p .content_right .join_us_nav_item {
  float: left;
  margin-right: 30px;
  cursor: pointer;
  font-size: 16px;
}

.about_p .content_right .join_us_nav_item a {
  display: block;
  width: 100%;
  height: 100%;
  color: #f24d4d;
  width: 140px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50px;
  border: 1px solid #f24d4d;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.about_p .content_right .join_us_nav_item a:hover {
  background: #f24d4d;
  color: #fff;
}

.about_p .content_right .join_us_nav_item.active a {
  background: #f24d4d;
  color: #fff;
}

.about_p .content_right .join_us_nav li:last-child {
  margin-right: 0
}

.about_p .content_right .join_us_con_item.active {
  display: block;
}

</style>
