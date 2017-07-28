<template>
  <div class='tray-target'>
    <dice v-if="this.$store.state.tray[side].activeTray == 'dice'" :side=side />
    <notes v-if="this.$store.state.tray[side].activeTray == 'notes'"/>
    <tracker v-if="this.$store.state.tray[side].activeTray == 'tracker'" />
  </div>
</template>

<script>
  import Dice from './tools/Dice'
  import Notes from './tools/Notes'
  import Tracker from './tools/Tracker'
  export default {
    name: 'traytarget',
    props: ['side'],
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
    width: calc(75% - 3.25em);
    background-color: purple;
  }
</style>
