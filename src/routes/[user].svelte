<script>
  import { page } from "$app/stores";
  let user = $page.params.user;
</script>

<div class="modal-wrapper">
  <div class="modal">
    <h3 class="title">Create a new site?</h3>
    <div class="seperator" />
    <p class="info">
      Great! This site doesn't exist, it can be yours! Would you like to create:
    </p>
    <div class="user-info-wrapper"><h3 class="user-info">{user}</h3></div>
    <div class="button-wrapper">
      <button class="secondary">Cancel</button>
      <button class="primary">Create Site</button>
    </div>
  </div>
</div>

<style>
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
    padding: 15px;
    width: 300px;
    background-color: white;
    border-radius: 20px;
  }

  .title {
    font-weight: 500;
    margin-bottom: 10px;
  }

  .info {
    margin-bottom: 5px;
    font-size: 15px;
    opacity: 0.9;
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
