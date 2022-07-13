<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { addUser } from "../../firebase/db";

  const bcrypt = dcodeIO.bcrypt

  // User param
  const user = $page.params.user;

  // Error states
  let passErr = false;
  let confirmPassErr = false;

  // Password states
  let password = "";
  let confirmPass = "";

  // Cancel button action
  const handleCancel = () => {
    goto("/");
  };

  // Confirm button action
  const handleConfirm = async () => {
    passErr = false;
    confirmPassErr = false;

    if (password.trim().length < 6) return (passErr = true);
    if (password.trim() != confirmPass.trim()) return (confirmPassErr = true);

    const hashedPass = await bcrypt.hash(password, 10)
    addUser({ user, hashedPass, note: "" });
  };
</script>

<div class="add-site-modal">
  <h3 class="title">Create a strong password</h3>
  <div class="seperator" />
  <p class="info">
    Make sure to remember the password as there is no way to recover it.
  </p>
  <div class="input-wrapper">
    <label class:passErr for="pass">Password</label>
    <input id="pass" type="password" class:passErr bind:value={password} />
    <p class="pass-error" class:passErr>Atleast 6 characters</p>

    <label class:confirmPassErr for="conf-pass">Confirm password </label>
    <input
      class:confirmPassErr
      type="password"
      id="conf-pass"
      bind:value={confirmPass}
    />
    <p class="confirm-pass-error" class:confirmPassErr>
      Password aren't matching
    </p>
  </div>
  <div class="button-wrapper">
    <button on:click={handleCancel} class="secondary">Cancel</button>
    <button on:click={handleConfirm} class="primary">Confirm</button>
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

  .pass-error,
  .confirm-pass-error {
    font-size: 12px;
    padding-left: 4px;
    color: #f33;
    visibility: hidden;
    margin-bottom: 4px;
  }

  label.passErr,
  label.confirmPassErr,
  p.passErr,
  p.confirmPassErr {
    visibility: visible;
    color: #f33;
  }

  input.passErr,
  input.confirmPassErr {
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
