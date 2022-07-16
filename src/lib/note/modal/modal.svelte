<script>
  import { fade, scale } from "svelte/transition";

  import CreateSite from "./create-site.svelte";
  import AddPassword from "./add-password.svelte";
  import EnterPassword from "./enter-password.svelte";

  import { user } from "../../../routes/[user].svelte";
  import { showModal } from "../index.svelte";
  import { showAddSiteModal, showAddPassModal } from "../index.svelte";

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
  <div transition:fade|local={modalWrapAnim} class="modal-wrapper">
    <div transition:scale|local={modalAnim} class="modal">
      {#if $user.success}
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
