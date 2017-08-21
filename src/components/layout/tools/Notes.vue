<template>
  <div class="notes-tray">
    <div class="header">Notes</div>
    <div class="tab-container">
      <div class="note-tabs">
        <div class="tab active">
          Pseudo-tab
        </div>
        <div class="tab">
          Pseudo-tab
        </div>
        <div class="new-note-tab">
          +
        </div>
      </div>
    </div>
    <div class="note-container">
      <note />
      <div class="new-note">
        Add Note
      </div>
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
    align-items: center;
  }
  .tab-container {
    display: flex;
    width: 100%;
    height: 2em;
    justify-content: space-around;
  }
  .note-tabs {
    display: flex;
    width: 100%;
  }
  .tab {
    display: flex;
    width: 100%;
    justify-content: center;
    border: 1px solid magenta;
  }
  .tab.active {
    background-color: rgba(255,255,255,0.5);
  }
  .note-container {
    height: 100%;
    width: 100%;
    padding: .5em;
  }
  .new-note-tab {
    display: flex;
    width: 4rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    background-color: crimson;
  }
  .new-note {
    background-color: none;
    border-radius: 1em;
    padding: .5em;
    margin: .5em;
    border: 1px solid rgb(192,128,192);
  }
  .new-note:hover {
    background-color: rgb(192,128,192);
  }
</style>
