<template>
  <div class="tray" :class="{ active: isActive, 'text-danger': hasError}">
    Placeholder
    <div class="tray-toggle">
      Open/Close
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tray',
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
    /*color: pink;*/
  }
  .tray {
    position: fixed;
    top: 3.25em;
    background-color: grey;
    width: 50vw;
    height: calc(100vh - 3.25em);
  }
  .tray-toggle {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 3.25em;
    height: 100%;
    background-color: tomato;
  }
</style>
