<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <!-- <Message></Message> -->
    <Toggle></Toggle>
  </div>
</template>

<script>
import Message from '@/components/Message'
import Toggle from '@/components/Toggle'
export default {
  name: 'App',
  components: {Message,Toggle}
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
