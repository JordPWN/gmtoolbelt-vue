<template>
  <div id="app">
    <navbar />
    <tray class="left" />
    <tray class="right" />
    <router-view class="mainpage"></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Tray from './components/layout/Tray'
export default {
  name: 'app',
  components: {
    Navbar,
    Tray
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .mainpage {
    background-color: pink;
    height: calc(100vh - 3.25em) !important;
    width: 100% !important;
    padding-left: 3.25em;
  }
</style>
