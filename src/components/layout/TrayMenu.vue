<template>
  <div class="tray-menu">
    <ul>
      <li>
        <a v-on:click="emitTray('dice')">Dice</a>
      </li>
      <li>
        <a v-on:click="emitTray('dice')">Character Tracker</a>
      </li>
      <li>
        <a v-on:click="emitTray('dice')">Spellbook</a>
      </li>
      <li>
        <a v-on:click="emitTray('dice')">Notes</a>
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
        this.$store.commit('activeTray', 'dice')
      }
    }
  }
</script>

<style>
  .tray-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    width: 25%;
    background-color: steelblue;
  }
  li a {
    color: white;
  }
</style>
