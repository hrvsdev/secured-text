<script context="module">
  import { writable } from "svelte/store";

  // User notes store
  export const notes = writable([
    {
      id: "1",
      note: "A note - 1 ",
    },
    {
      id: "2",
      note: "A note - 2 ",
    },
    {
      id: "3",
      note: "A note - 3 ",
    },
    {
      id: "4",
      note: "A note - 4 ",
    },
    {
      id: "5",
      note: "A note - 5 ",
    },
  ]);

  // Current selected note
  export const currentNote = writable({ id: "", note: "" });

  // Modal states store
  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import Modal from "./modal/modal.svelte";
  import Note from "./notes/note.svelte";

  $: console.log($currentNote);
</script>

<Note />
<Modal />
