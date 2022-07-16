<script>
  import { writable } from "svelte.store";
  import NotesList from "./notes-list.svelte";
  import Editor from "./editor.svelte";

  export const isNoteOpen = writable(false);
</script>

<main class="notes-wrapper">
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
