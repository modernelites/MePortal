<template>
  <div class="wrapper">
    <div class="banner">
      <div class="mobile_icon">
        <img src="./../../assets/img/白副本@2x.png" alt="">
      </div>
      <h2>摩英教育线上课程</h2>
    </div>
    <div class="contentImg">
      <img src="./../../assets/img/背景@2x.png" alt="">
      <span class="imgTitle">随时随地学习，充分利用时间</span>
    </div>
    <div class="course">
      <ul>
        <li>
          <div class="img">
            <img src="./../../assets/img/优质课程@2x.png" alt="优质课程">
          </div>
          <span>海量优质课程</span>
          <div class="detail">
            摩英教育，青少年领袖梦工厂——致力于青少年英语口语及综合素质训练，包括潜能开发、时间管理、目标设定、团队建设、感恩教育、情绪掌控、领导力、公众演说等，不仅是对青少年健康成长的一份保障，更是对青少年思想境界、心理格局的一次引领； 我们培养的不仅仅是好学生、好子女，更是21世纪中国必需的未来的青少年领袖！

          </div>
        </li>
        <li>
          <div class="img">
            <img src="./../../assets/img/师资力量@2x.png" alt="师资力量">
          </div>

          <span>丰富的师资力量</span>
          <div class="detail">
            我们拥有顶尖的讲师团队,每位讲师均具备丰富口语教学经验 并对青少年潜能开发、团队训练、感恩教育、领导力、公众演说等领域有深入研究

          </div>
        </li>
        <li>
          <div class="img">
            <img src="./../../assets/img/随时听课@2x.png" alt="线上听课">
          </div>

          <span>线上随时听课</span>
          <div class="detail">
            摩英线上课程充分做到学习时间自主化，充分利用碎片化时间，7x24小时在线的学习系统使您在有网络的情况下随时随地的自由学习，教学进度可控化。摩英线上课程——致力于做您的移动线上教师
          </div>
        </li>
      </ul>
    </div>
    <div class="qrCode">
      <ul>
        <li>
          <div class="qrImg">
            <img src="./../../assets/img/公众号@2x.png" alt="">
          </div>

          <span>摩英公众号二维码</span>
        </li>
        <li>
          <div class="qrImg">
            <img src="./../../assets/img/哇咔咔@2x.png" alt="">
          </div>

          <span>哇咔咔二维码</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Regular, "Microsoft YaHei", sans-serif;
  }

  li {
    list-style: none;
  }

  .wrapper {
    max-width: 750px;
    min-width: 320px;
    /* max-height: 100%; */
    overflow: hidden;
    margin: 0 auto;
  }

  .wrapper .banner {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5a623;
  }

  .wrapper .banner .mobile_icon {
    height: 28px;
    width: 28px;
    float: left;
    margin-left: 20px;
    /* margin-top: 10px; */
  }

  .wrapper .banner .mobile_icon img {
    height: 100%;
  }

  .wrapper .banner h2 {
    float: right;
    margin-right: 20px;
    font-size: 18px;
    color: #fff;
        font-weight: bolder;
  }

  .wrapper .contentImg {
    position: relative;
    text-align: center;
  }

  .wrapper .contentImg img {
    width: 100%;
  }

  .wrapper .contentImg .imgTitle {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 24px;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-weight: bolder;
  }
.wrapper .course{
    padding-top: 18px;
    background-color: #fff;
}
  .wrapper .course ul {
    margin-top: -6px;
  }

  .wrapper .course li {
    text-align: center;
    width: 86%;
    margin: 0px auto 30px;

  }

  .wrapper .course li span {
    display: block;
    margin-top: 14px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bolder;
    color: #333;
  }

  .wrapper .course li .detail {
    font-size: 14px;
    line-height: 1.2;
    font-size: 12px;
    color: #666;
  }

  .wrapper .course li .img {
    width: 120px;
    margin: 0 auto;
  }

  .wrapper .course li .img img {
    width: 100%;
  }

  .wrapper .qrCode {
    width: 100%;
    height:160px;
    overflow: hidden;
    background-color: #f1f1f1;
  }

  .wrapper .qrCode ul {
    width: 72%;
    margin: 20px auto;
    text-align: center;
  }

  .wrapper .qrCode li {
    float: left;
    text-align: center;
    width: 124px;
    height: 124px;
    padding: 4px;
  }

  .wrapper .qrCode li .qrImg {
    width: 90px !important;
    height: 90px;
    margin: 0 auto;
  }

  .wrapper .qrCode li img {
    width: 100%;
  }

  .wrapper .qrCode li span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }

  .wrapper .qrCode li+li {
    margin-left: 14%;
  }

  .wrapper .qrCode li img {
    width: 100%;
  }

  @media screen and (max-width:410px) {
    .wrapper .qrCode ul {
      width: 84%;
    }
  }
  @media screen and (max-width:400px) {
    .wrapper .qrCode ul {
      width: 80%;
    }
  }
  @media screen and (max-width: 374px) {
    .wrapper .course li:nth-child(2) img {
      margin-left: 2.6%;
    }
    .wrapper .course li:nth-child(2) span {
      margin-right: 4.8%;
    }
    .wrapper .qrCode li+li {
      margin-left: 12%;
    }
  }

  @media screen and (max-width: 368px) {
    .wrapper .qrCode li+li {
      margin-left: 10%;
    }
    .wrapper .qrCode ul {
      width: 83%;
    }
  }

  @media screen and (max-width: 354px) {
    .wrapper .qrCode ul {
      width: 86%;
    }
  }

  @media screen and (max-width: 344px) {
    .wrapper .qrCode li+li {
      margin-left: 0;
    }
    .wrapper .qrCode ul {
      width: 78%;
    }
  }

</style>
