<script>
  import { page } from "$app/stores";
  let user = $page.params.user;
</script>

<div class="modal-wrapper">
  <div class="modal">
    <h2>Create a new site?</h2>
    <p>
      Great! This site doesn't exist, it can be yours! Would you like to create:
    </p>
    <h2>{user}</h2>
    <div class="button-wrapper">
      <button class="secondary">Cancel</button>
      <button class="primary">Create Site</button>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");
  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }

  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.159);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    padding: 25px;
    background-color: white;
    border-radius: 20px;
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 12px;
  }

  button {
    height: 40px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 20px;
    transition: all 200ms ease-in-out;
    will-change: transform;
  }

  button:active {
    transform: scale(0.95);
  }

  .primary {
    background-color: rgb(0, 114, 245);
    color: white;
  }

  .secondary {
    background-color: rgb(252, 197, 216);
    color: rgb(243, 18, 96);
  }
</style>
