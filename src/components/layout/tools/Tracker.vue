<template>
  <div class="tracker-tray">
    Tracker
    <charactercard />
  </div>
</template>

<script>
  import CharacterCard from './CharacterCard'
  export default {
    name: 'tracker',
    components: {
      'charactercard': CharacterCard
    }
  }
</script>

<style>
</style>
