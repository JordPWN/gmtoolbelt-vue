<template>
  <div class="notes-tray">
    <div class="header">Notes</div>
    <div class="tab-control">
      Pseudo-tab
    </div>
    <div class="note-container">
      <note />
    </div>
  </div>
</template>
<script>
  import Note from './Note'
  export default {
    name: 'notes',
    components: {
      'note': Note
    }
  }
</script>
<style>
  .notes-tray {
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: row wrap;
    justify-content: flex-start;
    /*justify-content: center;*/
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid magenta;
    height: 2em;
    align-content: center;
  }
  .tab-control {
    display: flex;
    width: 100%;
    height: 2em;
  }
  .note-container {
    /*height: 100%;*/
    width: 100%;
  }
</style>
