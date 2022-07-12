<script>
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  import { checkUser } from "../firebase/db";

  import { showModal, showAddSiteModal, showAddPassModal } from "./store";

  import CreateSite from "./create-new-site/create-site.svelte";
  import AddPassword from "./create-new-site/add-password.svelte";
  import EnterPassword from "./enter-password/enter-password.svelte";
  import Loader from "./loader.svelte";

  let userState = false;
  let loading = true;
  const user = $page.params.user;

  const modalWrapAnim = {
    duration: 200,
  };

  const modalAnim = {
    duration: 250,
    start: 0.6,
  };

  onMount(async () => {
    userState = await checkUser(user);
    setTimeout(() => {
      loading = false;
    }, 300);
  });
</script>

{#if $showModal}
  {#if loading}
    <Loader />
  {:else}
    <div transition:fade={modalWrapAnim} class="modal-wrapper">
      <div transition:scale={modalAnim} class="modal">
        {#if userState}
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
