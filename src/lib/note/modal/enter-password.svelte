<script>
  import axios from "axios";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { user } from "../../../routes/[user].svelte";
  import { contentHash, passHash, notes, showModal } from "../index.svelte";

  import genHash from "../../../utils/genHash.util";
  import { encObj, decObj } from "../../../utils/encrypt.util";

  // Password states
  let passErr = false;
  let password = "";

  // Cancel button action
  const handleCancel = () => {
    goto("/");
  };

  // Confirm button action
  const handleConfirm = async () => {
    passErr = false;

    const tempPassHash = genHash(password);

    const content = decObj($user.user.encContent, tempPassHash);
    if (content) {
      $notes = content;
      $showModal = false;
      $contentHash = genHash(String(JSON.stringify(content) + $passHash));
      console.log($contentHash)
      $passHash = tempPassHash;
    } else {
      passErr = true;
    }
  };
</script>

<div class="add-site-modal">
  <h3 class="title">Enter password</h3>
  <div class="seperator" />
  <p class="info">
    This site is already occupied. If this belongs to you, enter the password,
    or you can try using different site. <br />
  </p>
  <form form on:submit|preventDefault={handleConfirm}>
    <div class="input-wrapper">
      <label class:passErr for="pass">Password</label>
      <input id="pass" type="password" class:passErr bind:value={password} />
      <p class="pass-error" class:passErr>Wrong password</p>
    </div>
    <div class="button-wrapper">
      <button type="button" on:click={handleCancel} class="secondary">
        Cancel
      </button>
      <button type="submit" class="primary">Confirm</button>
    </div>
  </form>
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

  .input-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    font-size: 14px;
    display: inline-block;
    padding-left: 4px;
    margin-bottom: 4px;
  }

  input {
    all: unset;
    height: 35px;
    width: 80%;
    box-sizing: border-box;
    padding: 0 10px;
    margin-bottom: 3px;
    box-shadow: inset #d8d8da 0 0 0 1px, inset #fff 0 0 0 100px;
    border-radius: 12px;
    font-size: 14px;
    cursor: revert;
  }

  input:focus {
    box-shadow: inset rgb(0, 114, 245) 0 0 0 1px, inset #fff 0 0 0 100px;
  }

  .pass-error {
    font-size: 12px;
    padding-left: 4px;
    color: #f33;
    visibility: hidden;
    margin-bottom: 4px;
  }

  label.passErr,
  p.passErr {
    visibility: visible;
    color: #f33;
  }

  input.passErr {
    box-shadow: inset #f33 0 0 0 1px, inset #fff 0 0 0 100px;
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
