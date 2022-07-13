<script context="module">
  import { writable } from "svelte/store";

  export const userData = writable([]);

  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import { doc, onSnapshot, updateDoc } from "firebase/firestore";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { db, getUser } from "../firebase/db";

  import Loader from "./loader.svelte";
  import Modal from "./modal.svelte";

  // User param
  const user = $page.params.user;

  // Textarea value state
  let value = "";

  // Snapshot user data
  let data = {};

  // Loading state
  let loading = true;

  // Textarea change action
  const handleChange = async () => {
    const userDocRef = doc(db, "users", $userData[0].id);
    await updateDoc(userDocRef, { note: value });
  };

  // Getting data on first load
  onMount(async () => {
    $userData = await getUser(user);

    setTimeout(() => {
      loading = false;
    }, 100);

    if ($userData.length) value = $userData[0].note;
  });
</script>

{#if loading}
  <Loader />
{:else}
  <textarea bind:value on:change={handleChange} />
  <Modal />
{/if}
