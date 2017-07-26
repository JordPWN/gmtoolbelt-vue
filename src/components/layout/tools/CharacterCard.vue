<template>
  <div class="character-card">
    <input class="character-name" :v-model='characterName' :value='this.character.name' />
    <input class="initiative" :v-model='characterInit' :value='this.character.initiative' />
  </div>
</template>

<script>
  export default {
    name: 'charactercard',
    props: ['character'],
    // watch: {
    //   characterName: function () {
    //     console.log('charactername updated')
    //     console.log(this.character)
    //     this.updateCharacter()
    //   },
    //   characterInit: function () {
    //     console.log('init updated')
    //     this.updateCharacter()
    //   }
    // },
    data () {
      return {
        // character.name: this.charactername,
        // charInit: this.initiative
      }
    },
    computed: {
      mapGetters(['charactername'])
    },
    methods: {
      updateCharacter: function (refs) {
        console.log('this.$refs.input.value: ', refs)
        this.$store.commit('updateCharacter', refs)
      },
      updateValue: function () {
        console.log('updating value')
        this.updateCharacter()
      }
    }
  }
</script>

<style>
  .character-card {
    display: flex;
    justify-content: space-between;
    background-color: maroon;
    width: 80%;
  }
</style>
