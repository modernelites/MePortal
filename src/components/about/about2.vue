<template>
  <dl class="content_item join_us_single active">
    <!-- 加入我们 -->
    <nav>
      <ul class="join_us_nav clearfix" id="join_us_nav">
        <li :class="{'active':selectType===0}" class="join_us_nav_item" @click="select(0)"><a href="#/about/about2/about20">助教 </a></li>
        <li :class="{'active':selectType===1}" class="join_us_nav_item" @click="select(1)"><a href="#/about/about2/about21">义工</a></li>
        <li :class="{'active':selectType===2}" class="join_us_nav_item" @click="select(2)"><a href="#/about/about2/about22">其他 </a></li>
      </ul>
    </nav>
    <!-- 加入我们 内容主题 -->
    <div class="join_us_con" id="join_us_con">
      <router-view></router-view>
    </div>
  </dl>
</template>
<script>
export default {
  data() {
    return {
      selectType: 0
    };
  },
  methods: {
    select(type) {
      this.selectType = type;
    },
    selectUrl() {
      let url = window.location.href;
      console.log(url);
      if (url.indexOf('about20') > 0) {
        this.selectType = 0;
      }
      if (url.indexOf('about21') > 0) {
        this.selectType = 1;
      }
      if (url.indexOf('about22') > 0) {
        this.selectType = 2;
      }
    }
  },
  mounted() {
    this.selectUrl();
  }
};

</script>
