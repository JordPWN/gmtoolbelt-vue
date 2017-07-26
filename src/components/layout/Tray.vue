<template>
  <div class="tray" :class="{ 'active-tray': isActive, 'text-danger': hasError}">
    <TrayMenu />
    <TrayTarget />
    <div class="tray-toggle" v-on:click="toggleActive" />
  </div>
</template>

<script>
  import TrayMenu from './TrayMenu'
  import TrayTarget from './TrayTarget'
  export default {
    name: 'tray',
    props: ['side'],
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
        isActive: false,
        hasError: false,
        traySide: this.side
      }
    }
  }
</script>

<style>
  .active-tray {
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
  .tray.active-tray {
    width: 50vw;
  }
  .right {
    right: 0;
    flex-direction: row-reverse;
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
  .tray-toggle:after {
    content: '>';
  }
  .active-tray .tray-toggle:after {
    content: '<';
  }
  .right .tray-toggle:after {
    content: '<';
  }
  .right.active-tray .tray-toggle:after {
    content: '>';
  }
  .right .tray-toggle {
    left: 0;
  }
</style>
