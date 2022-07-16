<script context="module">
  import { writable } from "svelte/store";
  export const isNoteOpen = writable(false);
</script>

<script>
  import NotesList from "./notes-list.svelte";
  import Editor from "./editor.svelte";
</script>

<main
  class={`notes-wrapper ${$isNoteOpen ? "note-opened" : "note-not-opened"}`}
>
  <NotesList />
  <Editor />
</main>

<style>
  .notes-wrapper {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
</style>
