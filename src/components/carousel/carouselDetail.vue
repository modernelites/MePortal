<template>
  <div class="detail_wrapper">
    <div class=" swiper-container2">
      <div class="swiper-wrapper">
        <div class="detail_display  swiper-slide" v-for="item in imglist" v-bind:key="item.index">
          <img :src='item.FilePath' alt="" id="img" onError="this.src='./../../assets/img/加载失败@2x.png'">
        </div>
      </div>
    </div>
    <div class="detail_controller">
      <ul>
        <li>
          <!-- <a :href=this.imgPath download="1.jpg">保存图片</a> -->
          <button @click="downloadpic(this)">保存图片</button>
        </li>
        <li>
          <button>存储图像拷贝</button>
        </li>
        <li>
          <button @click="closeDetail">取消</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import fileSaver from "file-saver";
export default {
  data() {
    return {
      imgFile: "",
      carouselDisplay: true,
      imageTypeID: "1",
      imglist: [],
      carouselList: [],
      img_index: "",
      imgPath: "",
      imgName: ""
    };
  },
  methods: {
    closeDetail: function() {
      eventBus.$emit("carouselDisplay", false);
    },
    downloadpic: function(path) {
      // console.log(this.imgPath);
      // window.open(this.imgPath);
      fetch(this.imgPath).then(res =>
        res.blob().then(blob => {
          var a = document.createElement("a");
          var url = window.URL.createObjectURL(blob);
          var filename = this.imgName;
          a.href = url;
          a.download = filename;
          a.click();
          window.URL.revokeObjectURL(url);
        })
      );
    }
  },
  mounted() {
    let _this = this;
    eventBus.$on("imgTypeID", function(val) {
      _this.imageTypeID = val;
      console.log(val);
      for (let i = 0; i < _this.carouselList.length; i++) {
        if (_this.carouselList[i].ImgTypeID == _this.imageTypeID) {
          _this.imglist = _this.carouselList[i].Img_List;
          console.log(_this.imglist);
        }
      }
    });
    this.$http.get(this.ApiUrl + "me/file/Images_List").then(response => {
      response = response.body;
      this.carouselList = response.Data;
    });
  },
  updated() {
    this.$nextTick(function() {
      let _this = this;
      var mySwiperDetail = new Swiper(".detail_wrapper .swiper-container2", {
        direction: "horizontal",
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        onSlideChangeEnd: function(swiper) {
          _this.img_index = swiper.realIndex;
          console.log(_this.img_index);
          _this.imgPath = _this.imglist[_this.img_index].FilePath;
          console.log(_this.imgPath);
        }
        // ,autoplay: 1000
      });
    });
  },
  beforeDestroy() {
    eventBus.$off("imgTypeID");
  }
};
</script>

<style scoped>
.detail_wrapper .swiper-container2 {
  background-color: #232121;
  z-index: 20;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.detail_wrapper .swiper-container2 .detail_display {
  text-align: center;
}

.detail_wrapper .swiper-container2 .detail_display img {
  max-width: 100%;
  max-height: 46%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
/* .detail_wrapper .detail_display .detail_controller {
  height: 171px;
  background-color: #4f4d4d;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.detail_wrapper .detail_display .detail_controller ul {
  margin-top: 15px;
}

.detail_wrapper .detail_display .detail_controller ul li {
  margin-bottom: 30px;
}

.detail_wrapper .detail_display .detail_controller ul li a {
  color: #f4f7f9;
}

.detail_wrapper .detail_display .detail_controller button {
  font-size: 16px;
  color: #f4f7f9;
} */

.detail_wrapper .detail_controller {
  display: block;
  height: 171px;
  width: 100%;
  background-color: #4f4d4d;
  position: absolute;
  bottom: 0;
  z-index: 21;
}

.detail_wrapper .detail_controller ul {
  text-align: center;
  margin-top: 15px;
}

.detail_wrapper .detail_controller ul li {
  margin-bottom: 30px;
}

.detail_wrapper .detail_controller ul li a {
  color: #f4f7f9;
}

.detail_wrapper .detail_controller li button {
  font-size: 16px;
  color: #f4f7f9;
}
</style>
