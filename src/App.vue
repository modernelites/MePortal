<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app'
};

</script>
<style>
#app {
  min-height: 100%;
  background: #f7f7f7;
  height: 100px;
}

</style>
