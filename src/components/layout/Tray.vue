<template>
  <div class="tray" :class="{ active: isActive, 'text-danger': hasError}">
    Placeholder
    <div class="tray-toggle" v-on:click="toggleActive">
      Open/Close
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tray',
    methods: {
      emitToggle: function (event) {
        this.$emit('active')
        console.log('Emit!')
      },
      toggleActive: function (event) {
        this.isActive = !this.isActive
        console.log('Received!')
      }
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
    /*color: pink;*/
  }
  .tray {
    position: fixed;
    top: 3.25em;
    background-color: grey;
    width: 3.25em;
    height: calc(100vh - 3.25em);
  }
  .tray.active {
    width: 50vw;
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
