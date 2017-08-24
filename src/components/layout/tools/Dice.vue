<template>
  <div class="dice-tray">
    <div class="dice-container">
      <div class="dice-size">
        <ul class="dice-list">
          <li id="d20" v-on:click="rollDice(20)" :class="{ active: this.active === 20 }">
            D20
          </li>
          <li id="d12" v-on:click="rollDice(12)" :class="{ active: this.active === 12 }">
            D12
          </li>
          <li id="d10" v-on:click="rollDice(10)" :class="{ active: this.active === 10 }">
            D10
          </li>
          <li id="d8" v-on:click="rollDice(8)" :class="{ active: this.active === 8 }">
            D8
          </li>
          <li id="d6" v-on:click="rollDice(6)" :class="{ active: this.active === 6 }">
            D6
          </li>
          <li id="d4" v-on:click="rollDice(4)" :class="{ active: this.active === 4 }">
            D4
          </li>
        </ul>
      </div>
    <div class="dice-results">
      {{ roll }}
    </div>
  </div>
    <div class="roll-log">
      <ul>
        <li v-for="roll in this.$store.state.tray[this.side].rollLog.reverse()">
          You rolled a <strong>{{ roll.myRoll }}</strong> on a <strong>{{ roll.size }}</strong>-sided die!
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dice',
    data () {
      return {
        roll: 0,
        active: 0
      }
    },
    props: ['side'],
    methods: {
      rollDice: function (size) {
        this.active = size
        this.roll = Math.floor(Math.random() * (size) + 1)
        var myRoll = this.roll
        this.emitRoll({myRoll, size})
      },
      emitRoll: function (roll) {
        this.$store.commit('addRoll', [this.side, roll])
      }
    }
  }
</script>
<style>
  .dice-tray {
    display: flex;
    flex-flow: row wrap;
    width: calc(100% - 3.25em);
    float: left;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .dice-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
  }
  .active {
    background-color: black;
    color: white;
  }
  .active:hover {
    background-color: #540054 !important;
    color: white;
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
  .dice-list li:hover {
    background-color: rgba(255,0,255,0.2);
  }
  .dice-results {
    display: flex;
    font-size: 5em;
    width: 100%;
    justify-content: center;
  }
  .roll-log {
    justify-content: center;
    width: 100%;
    max-height: 50vh;
    height: 40%;
    display: flex;
    overflow: scroll;
  }
</style>
