<template>
  <div class="dice-tray">
    <div class="dice-size">
      <ul class="dice-list">
        <li id="d20" v-on:click="rollDice(20)">
          D20
        </li>
        <li id="d12" v-on:click="rollDice(12)">
          D12
        </li>
        <li id="d10" v-on:click="rollDice(10)">
          D10
        </li>
        <li id="d8" v-on:click="rollDice(8)">
          D8
        </li>
        <li id="d6" v-on:click="rollDice(6)">
          D6
        </li>
        <li id="d4" v-on:click="rollDice(4)">
          D4
        </li>
      </ul>
    </div>
    <div class="dice-results">
      {{ roll }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dice',
    data () {
      return {
        roll: 0
      }
    },
    methods: {
      rollDice: function (size) {
        this.roll = Math.floor(Math.random() * (size - 1) + 1)
      }
    }
  }
</script>
<style>
  .dice-tray {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .dice-size {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
  .dice-list {
    display: flex;
    flex-flow: column wrap;
    width: 50%;
  }
  .dice-results {
    display: flex;
    width: 50%;
  }
</style>
