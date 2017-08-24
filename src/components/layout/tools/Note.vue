<template>
  <div class="note">
    <div class="note-content" contenteditable="true">
      Noteeeeee
      <div class="delete-note" v-on:click="deleteNote()">
        X
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'note',
    methods: {
      deleteNote: function () {
        console.log('Deleted note.')
      }
    }
  }
</script>

<style>
  .note {
    background-color: rgb(192,128,192);
    border-radius: 1em;
    padding: .5em;
    margin: .5em;
  }
  .delete-note {
    display: none;
  }
  .note:hover .delete-note {
    display: flex;
    position: relative;
    float: right;
    clear: none;
  }
</style>
