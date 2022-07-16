<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import {
    showModal,
    showAddSiteModal,
    showAddPassModal,
  } from "./index.svelte";

  // Getting url host and param
  const host = $page.url.host;
  const userParam = $page.params.user;

  // Cancel button action
  const handleCancel = () => {
    goto("/");
  };

  // Create button action
  const handleCreate = () => {
    $showAddSiteModal = false;
    $showAddPassModal = true;
  };
</script>

<div class="add-site-modal">
  <h3 class="title">Create a new site?</h3>
  <div class="seperator" />
  <p class="info">Great! This site doesn't exist, you can make it yours.</p>
  <div class="user-info-wrapper">
    <div class="user-info">
      <span class="host-name">securedtext.com/</span>{userParam}
    </div>
  </div>
  <div class="button-wrapper">
    <button on:click={handleCancel} class="secondary">Cancel</button>
    <button on:click={handleCreate} class="primary">Create</button>
  </div>
</div>

<style>
  .add-site-modal {
    width: inherit;
    padding: 15px 25px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-weight: 500;
    width: 100%;
    margin-bottom: 11px;
  }

  .seperator {
    height: 1px;
    width: inherit;
    background-color: rgb(223, 227, 230);
  }

  .info {
    margin: 15px 0 20px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.9;
  }

  .user-info-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .user-info {
    background-color: rgb(248, 248, 248);
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 500;
    word-break: break-all;
    text-align: center;
    letter-spacing: 1px;
  }

  .host-name {
    opacity: 0.6;
    font-weight: 400;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 5px;
  }

  button {
    height: 35px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 15px;
    transition: all 200ms ease-in-out;
    will-change: transform;
  }

  button:active {
    transform: scale(0.95);
  }

  .primary {
    background-color: rgb(206, 228, 254);
    color: rgb(0, 114, 245);
  }

  .secondary {
    background-color: transparent;
  }

  .secondary:hover {
    background-color: rgb(239, 239, 239);
  }
</style>
