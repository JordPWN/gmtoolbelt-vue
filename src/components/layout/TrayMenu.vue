<template>
  <div class="tray-menu">
    <ul>
      <li>
        <a v-on:click="$emit('loadTray', 'target')">Dice</a>
      </li>
      <li>
        <a v-on:click="$emit('loadTray', 'target')">Character Tracker</a>
      </li>
      <li>
        <a v-on:click="$emit('loadTray', 'target')">Spellbook</a>
      </li>
      <li>
        <a v-on:click="$emit('loadTray', 'target')">Notes</a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'traymenu'
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
