<script>
  import GithubIcon from "../assets/github.svelte";
</script>

<nav>
  <div class="nav-wrapper">
    <div class="left-side">
      <div class="logo-wrapper">Secured Text</div>
    </div>
    <div class="right-side">
      <div class="icon-wrapper">
        <a href="/" class="icon"><GithubIcon /></a>
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
    box-shadow: rgb(2 1 1 / 10%) 0px 0px 20px -5px;
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

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.icon) {
    width: 26px;
    height: 26px;
    opacity: 0.8;
    transition: all 100ms;
    will-change: opacity, transform;
  }

  :global(.icon):hover {
    opacity: 1;
  }

  :global(.icon):active {
    transform: scale(1.05);
  }
</style>
