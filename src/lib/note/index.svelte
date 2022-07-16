<script context="module">
  import { writable } from "svelte/store";

  // User notes store
  export const notes = writable([]);

  // Modal states store
  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import Modal from "./modal/modal.svelte";
  import Note from "./notes/note.svelte";
</script>

<Note/>
<!-- <Modal /> -->