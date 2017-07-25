<template>
  <div class="character-card">
    <input class="character-name" :value='charactername' />
    <input class="initiative" :value='initiative' />
  </div>
</template>

<script>
  export default {
    name: 'charactercard',
    props: ['initiative', 'charactername'],
    watch: {
      charactername: function (update) {
        this.updateCharacter(update)
      },
      initiative: function (update) {

      }
    },
    methods: {
      updateCharacter: function (character) {
        console.log('testing debounce')
        this.$store.commit('updateCharacter', character)
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
