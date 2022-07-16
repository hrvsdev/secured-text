<nav>
  <div class="nav-wrapper">
    <div class="left-side">
      <div class="logo-wrapper">Secured Text</div>
    </div>
    <div class="right-side">
      <div class="button-wrapper">
        <button class="primary">Save</button>
        <button class="primary">Change Password</button>
        <button class="primary">Delete</button>
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 76px;
    padding: 0 35px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 985px;
  }

  .logo-wrapper {
    font-size: 25px;
    font-weight: 700;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 35px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 0 15px;
    transition: all 200ms ease-in-out;
    will-change: transform;
  }

  button:active {
    transform: scale(0.97);
  }

  .primary {
    background-color: rgb(206, 228, 254);
    color: rgb(0, 114, 245);
  }

  button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 600px) {
    nav {
      height: 110px;
    }

    .nav-wrapper {
      flex-direction: column;
    }

    .logo-wrapper{
        margin-bottom: 10px;
    }
  }
</style>
