<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="right-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/public/LeftNav'
export default {
  name: 'App',
  components:{leftNav}
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
