<script>
  import { fade, scale } from "svelte/transition";
  import { page } from "$app/stores";

  import {
    showModal,
    showAddSiteModal,
    showAddPassModal,
    showEnterPassModal,
  } from "./store";

  import CreateSite from "./create-new-site/create-site.svelte";
  import AddPassword from "./create-new-site/add-password.svelte";
  import EnterPassword from "./enter-password/enter-password.svelte";

  const user = $page.params.user;

  const modalWrapAnim = {
    duration: 200,
  };

  const modalAnim = {
    duration: 250,
    start: 0.6,
  };
</script>

{#if $showModal}
  <div transition:fade={modalWrapAnim} class="modal-wrapper">
    <div transition:scale={modalAnim} class="modal">
      {#if user === "hrvs"}
        <EnterPassword />
      {:else if $showAddSiteModal}
        <CreateSite />
      {:else if $showAddPassModal}
        <AddPassword />
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
