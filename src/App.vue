<template>
  <div id="app">
    <img src="./assets/img/wei.jpg" style="border-radius:50%;">
    <p style="font-size:110%; font-weight:bold">CS Master student at New York University</p>
    <p style="font-weight:bold">Email: ww1306@nyu.edu</p>
    <p>Phone (CN):+86 15650750057 | (US)+1 9294548495</p>
    <hr align=center width=50%>
    <div class="link">
    <router-link class="col-sm-4" to="/Essay">随笔</router-link>
    <router-link class="col-sm-4" to="/Exercise">练习题</router-link>
    <router-link class="col-sm-4" to="/Contact Me">联系我</router-link>
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
