<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="right-main">
      <router-view/>
      <router-view name="view1" style="width:50%;height:100px;background-color:#123456;float:left"></router-view>
      <router-view name="view2" style="width:50%;height:100px;background-color:#654321;float:left"></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/public/LeftNav'
import pos from '@/components/pages/Pos'
export default {
  name: 'App',
  components:{leftNav,pos}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.right-main{
  width : 95%;
  height : 100vh;
  float : right;
  background-color : #EFF2F7;
  overflow : hidden;
}
</style>
