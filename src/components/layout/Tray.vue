<template>
  <div class="tray" :class="{ active: isActive, 'text-danger': hasError}">
    <TrayMenu />
    <TrayTarget />
    <div class="tray-toggle" v-on:click="toggleActive">
      >
    </div>
  </div>
</template>

<script>
  import TrayMenu from './TrayMenu'
  import TrayTarget from './TrayTarget'
  export default {
    name: 'tray',
    methods: {
      toggleActive: function (event) {
        this.isActive = !this.isActive
      }
    },
    components: {
      TrayMenu,
      TrayTarget
    },
    data () {
      return {
        isActive: true,
        hasError: false
      }
    }
  }
</script>

<style>
  .active {
    color: white;
  }
  .tray {
    display: flex;
    position: fixed;
    top: 3.25em;
    background-color: skyblue;
    overflow: auto;
    transition: all 1s;
    width: 3.25em;
    height: calc(100vh - 3.25em);
  }
  .tray.active {
    width: 50vw;
  }
  .tray-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 3.25em;
    height: 100%;
    background-color: tomato;
  }
</style>
