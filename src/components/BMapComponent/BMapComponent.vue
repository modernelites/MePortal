<template>
  <!--地图容器-->
  <div class="amap-wrapper">
    <el-amap class="amap-box" :center="center" :zoom="zoom">
      <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender"></el-amap-marker>
      <el-amap-marker></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
  const exampleComponents = {
    props: ['text'],
    template: `<div style='font-size:16px'>{{text}}</div>`
  }
  export default {
    data() {
      return {
        zoom: 16,
        center: [121.593278, 31.246605],
        componentMarker: {
          position: [121.593949, 31.246564],
          contentRender: (h, instance) => h(exampleComponents, {
            style: {
              backgroundColor: '#eee'
            },
            props: {
              text: '摩英教育'
            }
          }, ['xxxxxxx'])
        },
        count: 1,
        slotStyle: {
          padding: '2px 8px',
          background: '#eee',
          color: '#333',
          border: '1px solid #aaa'
        },
      }
    }


  };

</script>
<style scoped>
  html,
  body,
  .amap-wrapper {
    width: 700px;
    height: 700px;
  }

  @media screen and (max-width: 1020px) {
    .amap-wrapper {
      height: 400px;
    }


  }

</style>
