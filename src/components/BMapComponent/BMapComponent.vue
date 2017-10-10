<template>
  <!--地图容器-->
  <div id="allmap" class="allmap"></div>
</template>
<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  mounted() {
    // 百度地图API功能
    // var map = new BMap.Map("allmap"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的

    function initMap() {
      createMap(); //创建地图
      setMapEvent(); //设置地图事件
      addMapControl(); //向地图添加控件
    }

    //创建地图函数：
    function createMap() {
      var map = new BMap.Map("allmap"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(121.598002, 31.251129); //定义一个中心点坐标
      map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      map.addControl(ctrl_sca);
    }


    initMap(); //创建和初始化地图
  }
}

</script>
<style scoped>
html,
body,
.allmap {
  height: 600px;
}
  @media screen and (max-width: 1205px) {

  
  
  }
</style>
