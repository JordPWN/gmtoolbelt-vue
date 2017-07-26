<template>
  <div class="tray-menu">
    <ul>
      <li>
        <a v-on:click="emitTray('dice')" :class="{ active: this.$store.state.activeTray === 'dice' }" >Dice</a>
      </li>
      <li>
        <a v-on:click="emitTray('tracker')" :class="{ active: this.$store.state.activeTray === 'tracker' }" >Character Tracker</a>
      </li>
      <li>
        <a v-on:click="emitTray('spellbook')" :class="{ active: this.$store.state.activeTray === 'spellbook' }" >Spellbook</a>
      </li>
      <li>
        <a v-on:click="emitTray('notes')" :class="{ active: this.$store.state.activeTray === 'notes' }" >Notes</a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'traymenu',
    methods: {
      emitTray: function (tray) {
        console.log('Emmiting from menu!')
        console.log(this.$store.state.activeTray)
        this.$store.commit('activeTray', tray)
      }
    }
  }
</script>

<style>
  .tray-menu li a.active {
    background-color: purple;
  }
  .tray-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    width: 25%;
    background-color: steelblue;
  }
  ul {
    width: 100%
  }
  li a {
    color: white;
    display: block;
  }
</style>
