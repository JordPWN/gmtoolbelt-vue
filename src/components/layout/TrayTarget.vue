<template>
  <div class='tray-target'>
    <{{this.$store.activeTray}} />
  </div>
</template>

<script>
export default {
  name: 'traytarget'
}
</script>

<style>
  .tray-target {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    height: 100%;
    width: 75%;
    background-color: purple;
  }
</style>
