<script context="module">
  import { writable } from "svelte/store";

  export const userData = writable([]);

  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import { getUser } from "../firebase/db";

  import CreateSite from "./create-new-site/create-site.svelte";
  import AddPassword from "./create-new-site/add-password.svelte";
  import EnterPassword from "./enter-password/enter-password.svelte";
  import Loader from "./loader.svelte";

  // Loading state for data fetching
  let loading = true;

  // Getting user param
  const user = $page.params.user;

  // Modal Animations
  const modalWrapAnim = {
    duration: 200,
  };

  const modalAnim = {
    duration: 250,
    start: 0.6,
  };

  // Getting data on first load
  onMount(async () => {
    $userData = await getUser(user);
    setTimeout(() => {
      loading = false;
    }, 100);
  });
</script>

{#if $showModal}
  {#if loading}
    <Loader />
  {:else}
    <div transition:fade={modalWrapAnim} class="modal-wrapper">
      <div transition:scale={modalAnim} class="modal">
        {#if $userData.length}
          <EnterPassword />
        {:else if $showAddSiteModal}
          <CreateSite />
        {:else if $showAddPassModal}
          <AddPassword />
        {/if}
      </div>
    </div>
  {/if}
{/if}

<style>
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 300px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
  }
</style>
