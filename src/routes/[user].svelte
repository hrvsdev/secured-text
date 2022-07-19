<script context="module">
  import dashify from "dashify";
  import { writable } from "svelte/store";

  // User data store
  export const user = writable({});

  // Running server-side function
  export async function load({ fetch, params }) {
    const dashUser = dashify(params.user);
    if (dashUser === params.user) {
      console.log("matched")
      const res = await fetch(`/u/${params.user}`);
      const data = await res.json();
      return {
        props: { data },
      };
    } else {
      console.log("redirecting")
      return {
        status: 302,
        redirect: dashUser,
      };
    }
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
