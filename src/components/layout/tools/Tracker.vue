<template>
  <div class="tracker-tray">
    <ul class="tracker-list" v-model="this.$store.state.characters" :options="{group:'people'}" @start="drag=true" @end="drag=false">
      <li is="charactercard"
          v-for="(character, index) in this.$store.state.characters"
          v-on:remove="characters.splice(index, 1)"
          :initiative= character.initiative
          :charactername= character.name
          :index= index
      ></li>
    </ul>
    <div class="tracker-tool-container">
      <div class="previous-turn">
        Previous
      </div>
      <div class="add-character" v-on:click="addCharacter">
        Add
      </div>
      <div class="sort-initiative" v-on:click="sortInitiative">
        Sort
      </div>
      <div class="next-turn">
        Next
      </div>
    </div>
  </div>
</template>

<script>
  import CharacterCard from './CharacterCard'
  export default {
    name: 'tracker',
    components: {
      'charactercard': CharacterCard
    },
    computed: {
      orderedCharacters: function () {
        return this._.sortBy(this.$store.state.characters, 'initiative')
      }
    },
    methods: {
      addCharacter: function () {
        this.$store.commit('addCharacter')
        console.log('Adding character')
        console.log(this.$store.state.characters)
      },
      sortInitiative: function () {
        this.$store.commit('sortCharacters')
      }
    }
  }
</script>

<style>
  .character-card.active {
    background-color: aquamarine;
  }
  .tracker-tool-container {
    display: flex;
    justify-content: space-around;
    width: 80%;
  }
  .tracker-list {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tracker-tray {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
    overflow: auto;
  }
</style>
