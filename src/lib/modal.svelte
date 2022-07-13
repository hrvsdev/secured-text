<script>
  import { fade, scale } from "svelte/transition";
  import { page } from "$app/stores";

  import CreateSite from "./create-new-site/create-site.svelte";
  import AddPassword from "./create-new-site/add-password.svelte";
  import EnterPassword from "./enter-password/enter-password.svelte";

  import { userData, showModal } from "./note.svelte";
  import { showAddSiteModal, showAddPassModal } from "./note.svelte";

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
</script>

{#if $showModal}
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
