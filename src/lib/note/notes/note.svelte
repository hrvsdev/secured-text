<script>
  import NotesList from "./notes-list.svelte";
  import Editor from "./editor.svelte";
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
