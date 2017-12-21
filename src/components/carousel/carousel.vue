<template>
  <div class="wrapper">
    <div class="nav">
      <ul>
        <li v-for="item in carouselList" v-bind:key="item.ImgTypeID" @click="shiftPic(item.ImgTypeID)">{{item.ImgTypeName}}</li>
      </ul>
    </div>
    <div class="carousel">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper ">
          <div class="swiper-slide" v-for="item in Img_Lists" v-bind:key="item.index">
            <span>
              <img :src='item.FilePath' onError="this.src='./../../assets/img/加载失败@2x.png'" @click="imgDetailPath = item.FilePath ,imgDetailShow=true">
            </span>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in Img_Lists" v-bind:key="item.index">
            <span>
              <img :src='item.FilePath' onError="this.src='./../../assets/img/加载失败@2x.png'">
            </span>
          </div>
        </div>
      </div>
      <div class="share">
        <span>分享到： </span>
        <div class="bdsharebuttonbox" data-tag="share_1">
          <ul>
            <li>
              <a class="bds_tsina button" data-cmd="tsina"></a>
            </li>
            <li>
              <a class="bds_renren button" data-cmd="renren"></a>
            </li>
            <li>
              <a class="bds_sqq button" data-cmd="sqq"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="msk img_detail" v-show="imgDetailShow">
        <button @click="imgDetailShow=false">x</button>
     
           <img v-bind:src="imgDetailPath" alt="" >

       
      </div>
    </div>
    <div class="mobile">
      <my-header></my-header>
      <div class="m_content swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item in carouselList" v-bind:key="item.ImgTypeID">
            <nav class="m_nav" @click="carousel_display(item.ImgTypeID)">{{item.ImgTypeName}}
              <i></i>
            </nav>
            <div class="img">
              <div class="line1">
                <div class="line1_left">
                  <img :src="item.Img_List[0].FilePath" onError="this.src='./../../assets/img/加载失败@2x.png'">
                </div>
                <div class="line1_right">
                  <img :src='item.Img_List[1].FilePath' onError="this.src='./../../assets/img/加载失败@2x.png'">
                </div>
              </div>
              <div class="line2">
                <div>
                  <img :src="item.Img_List[2].FilePath" onError="this.src='./../../assets/img/加载失败@2x.png'">
                </div>
                <div>
                  <img :src="item.Img_List[3].FilePath" onError="this.src='./../../assets/img/加载失败@2x.png'">
                </div>
                <div>
                  <img :src="item.Img_List[4].FilePath" onError="this.src='./../../assets/img/加载失败@2x.png'">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <detail v-show="carouselDisplay"></detail>
    </div>
  </div>
</template>

<script>
  // import highlight from "../../assets/js/highlight.min.js";
  // import baguetteBox from "../../assets/js/baguetteBox.min.js";
  import Swiper from "@/../static/js/swiper.min.js";
  import myHeader from "@/components/header/header";
  import detail from "./carouselDetail.vue";
  import MScript from "@/../static/js/script.js";
  export default {
    name: "",
    data() {
      return {
        img_index: 1,
        carouselDisplay: false,
        carouselList: [],
        Img_Lists: [],
        ImgPath: "",
        imgDetailShow: false,
        imgDetailPath:''
      };
    },
    updated() {
      this.$nextTick(function () {
        let _this = this;
        eventBus.$on("carouselDisplay", function (val) {
          _this.carouselDisplay = val;
        });
        var galleryTop = new Swiper(" .carousel .gallery-top", {
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          spaceBetween: 10,
          // autoplay: 5000,
          onSlideChangeEnd: function (swiper) {
            this.img_index = swiper.realIndex;
            console.log(this.img_index);
          },
          loop: true,
          loopedSlides: 20 //looped slides should be the same
        });
        var galleryThumbs = new Swiper(" .carousel .gallery-thumbs", {
          spaceBetween: 10,
          slidesPerView: 6,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 20, //looped slides should be the same
          slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
        var mySwiper = new Swiper(".mobile  .swiper-container", {
          direction: "vertical",
          slidesPerView: 1,
          paginationClickable: true,
          loop: true
          // ,autoplay: 1000
        });
      });

      
    },
    mounted() {
      this.$http.get(this.ApiUrl + "me/file/Images_List").then(response => {
        this.carouselList = response.body.Data;
        this.Img_Lists = this.carouselList[0].Img_List;
        this.ImgLength = this.Img_Lists.length;
      });

      window._bd_share_config = {
        common: {
          bdText: "摩英教育精彩图集，查看高清大图，猛击：",
          // bdDesc: "自定义分享摘要",
          bdUrl: "http://172.16.0.111:2017/index.html#/Carousel",
          bdPic: this.FilePath
        },
        share: [{
          bdSize: 18
        }]
        // slide : [{
        // 	bdImg : 0,
        // 	bdPos : "right",
        // 	bdTop : 100
        // }],
        // image: [
        //   {
        //     // viewType: "list",
        //     viewPos: "bottom",
        //     viewColor: "black",
        //     viewSize: "16",
        //     viewList: ["tsina", "renren", "sqq"]
        //   }
        // ]
        // selectShare : [{
        // 	"bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
        // }]
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=" +
        ~(-new Date() / 36e5);
      document.body.appendChild(s);
    },
    beforeDestroy() {
      eventBus.$off("carouselDisplay");
    },
    methods: {
      shiftPic: function (index) {
        // console.log(index);
        for (let i = 0; i < this.carouselList.length; i++) {
          if (this.carouselList[i].ImgTypeID == index) {
            this.Img_Lists = this.carouselList[i].Img_List;
          }
        }
      },
      logmsg: function (str) {
        console.log(str);
      },
      carousel_display: function (num) {
        this.carouselDisplay = true;
        eventBus.$emit("imgTypeID", num);
      }
    },
    components: {
      myHeader: myHeader,
      detail
    }
  };

</script>

<style scoped>
  /* @import url("../../assets/css/baguetteBox.css"); */

  @import url("../../assets/css/swiper-3.4.2.min.css");
  .wrapper {
    background-color: #232121;
    height: 100%;
    width: 100%;
    min-width: 1180px;
    overflow: hidden;
  }

  .wrapper .mobile {
    display: none;
  }

  .wrapper .nav {
    height: 90px;
    width: 100%;
    background-color: #4f4d4d;
    color: #a1a1a1;
    position: absolute;
  }
  /* nav animate */

  .wrapper .nav {
    animation: disappear 2s 3s ease;
    animation-fill-mode: forwards;
  }

  @keyframes disappear {
    100% {
      margin-top: -80px;
    }
    0% {
      margin-top: 0;
    }
  }

  @keyframes appear {
    0% {
      margin-top: -80px;
    }
    100% {
      margin-top: 0;
    }
  }

  .wrapper .nav:hover {
    animation: appear;
  }

  .wrapper .nav ul {
    display: flex;
  }

  .wrapper .nav li {
    font-size: 16px;
    float: left;
    line-height: 90px;
    text-align: center;
    flex: 1;
    cursor: pointer;
  }

  .wrapper .nav li:hover {
    color: #fff;
  }

  .wrapper .carousel {
    position: relative;
    width: 80%;
    height: 86%;
    margin: 0 auto;
    margin-top: 130px;
  }

  .wrapper .carousel .gallery-top {
    height: 74%;
  }

  .wrapper .carousel .gallery-top .swiper-slide span img {
    display: block;
    max-width: 86%;
    height: 86%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .wrapper .carousel .gallery-thumbs {
    width: 80%;
    height: 12%;
    margin-top: 30px;
  }

  .wrapper .carousel .gallery-thumbs .swiper-slide span {
    text-align: center;
  }

  .wrapper .carousel .gallery-thumbs .swiper-slide span img {
    display: block;
    max-width: 86%;
    height: 90%;
    margin: 0 auto;
    margin-top: 4px;
  }

  .wrapper .carousel .share span {
    display: block;
    color: #fff;
    position: absolute;
    bottom: 40px;
    right: 250px;
  }

  .wrapper .carousel .share .bdsharebuttonbox {
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin: 0;
    position: absolute;
    bottom: 30px;
    right: 150px;
  }

  .wrapper .carousel .share .bdsharebuttonbox ul li {
    float: left;
    width: 26px;
    height: 26px;
    background-color: #a4947b;
    border-radius: 50%;
    text-align: center;
    margin-right: 4px;
  }

  .wrapper .carousel .share ul li .button {
    width: 18px;
    height: 18px;
    background-size: contain;
    padding: 0;
    margin-left: 4px;
    margin-top: 4px;
  }

  .wrapper .carousel .share .bds_tsina {
    background: url("./../../assets/img/微博@2x.png") no-repeat;
  }

  .wrapper .carousel .share .bds_renren {
    background: url("./../../assets/img/人人@2x.png") no-repeat;
  }

  .wrapper .carousel .share .bds_sqq {
    background: url("./../../assets/img/qq@2x.png") no-repeat;
  }

  .wrapper .carousel .img_detail {
    background-color: #232121;
    z-index: 20;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }

  .wrapper .carousel .img_detail button {
    color: #fff;
    background-color:transparent;
    border: none;
    outline: none;
    font-size: 28px;
    position: absolute;
    top: 10px;
    right: 30px;
    z-index: 20;
  }

.wrapper .carousel .img_detail  img{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-height:100%;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
} 
@media screen and (max-width: 1020px) {
    .wrapper {
      max-width: 750px;
      min-width: 320px;
      overflow: hidden;
      margin: 0 auto;
      height: 100%;
    }
    .wrapper .mobile {
      display: block;
    }
    .wrapper .mobile .inner_header {
      z-index: 1;
    }
    .wrapper .nav {
      display: none;
    }
    .wrapper .carousel {
      display: none;
    }
    .wrapper .mobile .m_content {
      height: 80%;
      background-color: #232121;
      color: #fff;
      text-align: center;
      width: 100%;
      max-width: 750px;
      margin: 0 auto;
      position: absolute;
      top: 20%;
    }
    .wrapper .mobile .m_content .swiper-wrapper li nav {
      font-size: 18px;
      margin-bottom: 50px;
    }
    .wrapper .mobile .m_content .swiper-wrapper li nav i {
      background: url("./../../assets/img/下一张@2x.png") no-repeat;
      display: inline-block;
      background-size: 100% 100%;
      width: 18px;
      height: 18px;
      position: absolute;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line1 {
      height: 175px;
      /* width: 100%; */
      max-width: 375px;
      overflow: hidden;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line1 .line1_left {
      flex: 2;
      /* max-width: 250px; */
    }

    .wrapper .mobile .m_content .swiper-wrapper .line1 .line1_left img {
      max-width: 250px;
      display: block;
      height: 175px;
      background-color: #eee;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line1 .line1_right {
      flex: 1;
      max-width: 125px;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line1 .line1_right img {
      height: 175px;
    }

    .wrapper .mobile .m_content .swiper-wrapper .line2 {
      display: flex;
      justify-content: center;
      max-width: 375px;
      overflow: hidden;
      margin: 0 auto;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line2 div {
      flex: 1;
      max-width: 125px;
      height: 125px;
    }
    .wrapper .mobile .m_content .swiper-wrapper .line2 div img {
      height: 125px;
    }

    .wrapper .mobile .swiper-container img {
      max-width: none;
    }
  }

</style>
