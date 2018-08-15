<template>
  <div class="sub_mechanism_p">
    <my-header @select="select"></my-header>
    <div class="content">
      <div class="content_wrapper">
        <div class="content_left" id="sub_mechanism_p_content_left">
          <ul>
            <li v-for="(item, index) in menuFillter(menuList,2)" class="nav_item" @click='subSelect(index)' :class="{'active':selectType===index}">
              <h3 class="title_3">
                <a :href="'#/org/'+ index">{{item.MenuName}}</a>
              </h3>
              <img src="./../../assets/img/bear.png" width="90" height="120" title="无敌熊" alt="无敌熊">
            </li>
          </ul>
        </div>
        <div class="content_right" id="sub_mechanism_p_content_right">
          <dl class="content_item ">
            <h3 class="title_3"> 简介 </h3>
            <p class="text">
              无敌熊少儿英语（麦克米伦出版社合作品牌） 
            </p>
            <p class="text">
              专注于3~12岁幼儿及少儿英语培训；具备独立研发，培训系统的少儿英语品牌 </p>
            <p class="text">2017年初上海唐镇校区成立，500坪米精致学习空间，包含6间主题教室，周边停车及配套设施齐全。</p>
            <p class="text"> 电话：021-58597391</p>
            <p class="text"> 地址：浦东新区唐镇唐安路618号（近高科东路）</p>
            <p class="text">以正面管教为优先，结合故事情景教学，创造快乐的学习成效。</p>
            <p class="text">Let kids be kids!</p>
            <p class="text">我们不只在乎成绩，更让孩子爱上学习；我们不只追求第一，更让孩子共享荣耀；</p>
            <p class="text">我们不只重视现在，更让孩子看见未来</p>
            <h3 class="title_3 other_title_3"> 四大特色</h3>
            <p class="text">1.原版进口教材，同步美国课标：</p>
            <p class="text">2.全英文主题式互动教学环境；</p>
            <p class="text">3.完整的学习生态：线下课堂学习，线上客户端巩固</p>
            <p class="text">4.每月的多元主题活动：</p>

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
        this.$nextTick(function () {

          this.$http.get(this.ApiUrl + 'me/Menu/Menu_List').then((response) => {
            response = response.body;
            this.menuList = response.Data[0];
          }, function () {
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
      '$route': 'selectUrl'
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url("../../assets/css/media.css");
  .sub_mechanism_p {
    background: #f7f7f7;
    /* width: 1000px; */
    /* margin: 0 auto; */
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
    width: 1000px;
    margin: 0 auto;
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

  /* .sub_mechanism_p .content_left li.active img {} */

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

  @media screen and (max-width: 1020px) {
    .sub_mechanism_p {
      max-width: 750px;
      min-width: 320px;
      margin: 0 auto;
      width: auto;
    }
    .sub_mechanism_p .content {
      margin: 5px;
      position: relative;
      padding-top: 5px;
      /* display: flex; */
     }
    .sub_mechanism_p .content_wrapper {
      width: auto;
    }
    .sub_mechanism_p .content_right {
      flex: auto;
      width: auto;
    }
    .sub_mechanism_p .content_right .text {
      font-size: 9px;
    }
    .sub_mechanism_p .content_right .title_3 {
      font-size: 9px;
      color: #000;
      padding: 12px 0 8px;
      font-weight: bold;
    }
    .sub_mechanism_p .content_right .title_3:before {
      display: none;
    }
    .sub_mechanism_p .content_left li.active .title_3 a {
      font-size: 12px;
      font-weight: normal;
      display: block;
      color: #656565;
      font-size: 12px;
      padding: 9px 0;
    }
    .sub_mechanism_p .content_left li {
      background: #fff;
      padding: 0 10px 6px;
      margin-bottom: 10px;
      width: 92px;
      height: 108px;
    }
    .sub_mechanism_p .content_left li.active img {
      width: 45px;
      height: 60px;
    }
    .sub_org_p .content_right .content_item {
      padding: 0 5px;
    }
    .sub_mechanism_p .content_right {
      padding: 0 5px;
    }
  }

</style>
