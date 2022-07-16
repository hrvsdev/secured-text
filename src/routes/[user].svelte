<script context="module">
  import { writable } from "svelte/store";

  // User data store
  export const user = writable({});

  // Running server-side function
  export async function load({ fetch, params }) {
    const res = await fetch(`/user/${params.user}`);
    const data = await res.json();
    return {
      props: { data },
    };
  }
</script>

<script>
  import Note from "$lib/note/index.svelte";

  // Data that will return from server-side
  export let data = {};

  // User store will always in synced with server-side data
  $: $user = data;

</script>

<Note />