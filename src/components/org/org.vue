<template>
  <div class="sub_mechanism_p">
    <my-header @select="select"></my-header>
    <div class="w_1000">
      <div class="content_wrapper">
        <div class="content_left" id="sub_mechanism_p_content_left">
          <ul>
            <li v-for="(item, index) in menuFillter(menuList,2)" class="nav_item" @click='subSelect(index)' :class="{'active':selectType===index}">
              <h3 class="title_3"> <a :href="'#/org/'+ index">{{item.MenuName}}</a></h3>
              <img src="./../../assets/img/bear.png" width="90" height="120" title="无敌熊" alt="无敌熊">
            </li>
          </ul>
        </div>
        <div class="content_right" id="sub_mechanism_p_content_right">
          <dl class="content_item ">
            <h3 class="title_3"> 简介 </h3>
            <p class="text">
              课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
            </p>
            <div class="m_row tow_img_wrapper clearfix">
              <div class="m_col-lg-6">
                <img src="./../../assets/img/smail_2.png" title="活动" alt="精彩瞬间照片">
              </div>
              <div class="m_col-lg-6">
                <img src="./../../assets/img/smail_2.png" title="活动" alt="精彩瞬间照片">
              </div>
            </div>
            <p class="text">
              课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
            </p>
            <div class="m_row three_img_wrapper clearfix">
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
            </div>
            <h3 class="title_3 other_title_3"> 其他 </h3>
            <p class="text">
              课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
            </p>
            <div class="m_row tow_img_wrapper clearfix">
              <div class="m_col-lg-6">
                <img src="./../../assets/img/smail_2.png" title="活动" alt="精彩瞬间照片">
              </div>
              <div class="m_col-lg-6">
                <img src="./../../assets/img/smail_2.png" title="活动" alt="精彩瞬间照片">
              </div>
            </div>
            <p class="text">
              课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍 课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
            </p>
            <div class="m_row three_img_wrapper clearfix">
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
              <div class="m_col-lg-4">
                <img src="./../../assets/img/xamll_1.png" title="活动2" alt="活动2 照片">
              </div>
            </div>
          </dl>
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

  name: 'subMechanism',
  data() {
    return {
      selectType: 0,
      menuList: {}
    };
  },
  methods: {
    subSelect(index) {
      this.selectType = index;
    },
    select(str) {
      this.selectType = str;
    },
    selectUrl() {
      let url = window.location.href;
      if (url.indexOf('org/0') > 0) {
        this.selectType = 0;
      }
      if (url.indexOf('org/1') > 0) {
        this.selectType = 1;
      }
      if (url.indexOf('org/2') > 0) {
        this.selectType = 2;
      }
      if (url.indexOf('org/3') > 0) {
        this.selectType = 3;
      }
    },
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
    '$route':'selectUrl'
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../../assets/css/media.css");
.sub_mechanism_p {
  background: #f7f7f7;
}

.sub_mechanism_p .content_wrapper {
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
}

.sub_mechanism_p .content_left {
  flex: 160px;
  width: 160px;
  -webkit-box-flex: 160px;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 160px;
  /* OLD - Firefox 19- */
  width: 160px;
  /* For old syntax, otherwise collapses. */
  -webkit-flex: 160px;
  /* Chrome */
  -ms-flex: 160px;
  /* IE 10 */
  flex: 160px;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.sub_mechanism_p .content_right {
  flex: 840px;
  width: 840px;
  -webkit-box-flex: 840px;
  /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 840px;
  /* OLD - Firefox 19- */
  width: 840px;
  /* For old syntax, otherwise collapses. */
  -webkit-flex: 840px;
  /* Chrome */
  -ms-flex: 840px;
  /* IE 10 */
  flex: 840px;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.sub_mechanism_p .content_left li {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-bottom: 12px;
  background: #fff;
  text-align: center;
  cursor: pointer;
}

.sub_mechanism_p .content_left .title_3 a {
  padding: 25px 0 20px;
  font-size: 14px;
}

.sub_mechanism_p .content_left .title_3 a {
  color: #656565;
  display: block;
}

.sub_mechanism_p .content_left li img {
  margin-bottom: 20px;
  display: none;
  width: 90px;
  margin: 0 auto;
}

.sub_mechanism_p .content_left li.active img {
  display: block;
}

.sub_mechanism_p .content_left li.active img {}

.sub_mechanism_p .content_left li.active .title_3 a {
  color: #000;
  font-weight: 700
}

.sub_mechanism_p .content_right {
  background: #fff;
  padding: 30px;
  min-height: 600px;
  margin-bottom: 60px;
}


.sub_mechanism_p .content_right .title_3 {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  position: relative;
  padding-left: 10px;
  padding-bottom: 20px;
}

.sub_mechanism_p .content_right .other_title_3 {
  margin-top: 30px;
}

.sub_mechanism_p .content_right .title_3:before {
  content: ' ';
  display: block;
  position: absolute;
  top: -1px;
  left: 0;
  height: 18px;
  width: 2px;
  background: #f24d4d;
}

.sub_mechanism_p .content_right .text {
  font-size: 12px;
  color: #656565;
  line-height: 16px;
  padding: 8px 0;
}

.sub_mechanism_p .content_right .tow_img_wrapper img,
.sub_mechanism_p .content_right .three_img_wrapper img {
  max-width: 100%;
  height: auto;
}

.sub_mechanism_p .content_right .m_row {
  margin-left: -10px;
  margin-right: -10px;
}

.sub_mechanism_p .content_right .m_row .m_col-lg-6,
.sub_mechanism_p .content_right .m_row .m_col-lg-4 {
  padding-left: 10px;
  padding-right: 10px;
}

</style>
