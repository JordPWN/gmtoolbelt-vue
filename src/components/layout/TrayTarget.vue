<template>
  <div class='tray-target'>
    <dice v-if="this.$store.state.activeTray == 'dice'" />
    <notes v-if="this.$store.state.activeTray == 'notes'"/>
    <tracker v-if="this.$store.state.activeTray == 'tracker'" />
  </div>
</template>

<script>
  import Dice from './tools/Dice'
  import Notes from './tools/Notes'
  import Tracker from './tools/Tracker'
  export default {
    name: 'traytarget',
    components: {
      Dice, Notes, Tracker
    }
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
