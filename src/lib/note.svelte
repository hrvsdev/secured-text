<script context="module">
  import { writable } from "svelte/store";

  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import axios from "axios";
  import { user } from "../routes/[user].svelte";
  import Modal from "./modal.svelte";

  // Textarea value
  let value

  value = $user.user?.note

  // Textarea value change action
  const handleChange = async () => {
    try {
      await axios.put(`/user/${$user.user?.user}`, { note: value });
    } catch (err) {
      console.log(err);
    }
  };
</script>

{#if $user.user?.note}
  <textarea bind:value on:change={handleChange} />
{/if}
<Modal />
