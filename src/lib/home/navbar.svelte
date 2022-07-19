<script>
  import GithubIcon from "../assets/github.svelte";
</script>

<nav>
  <div class="nav-wrapper">
    <div class="left-side">
      <h1 class="logo-wrapper">Secured <span>text</span></h1>
    </div>
    <div class="right-side">
      <div class="icon-wrapper">
        <a href="/" class="icon"><GithubIcon /></a>
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
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
    font-family: "Merienda";
    font-size: 25px;
    letter-spacing: -1px;
    span{
      font-family: inherit;
      letter-spacing: -1px;
      background-color: black;
      border-radius: 6px;
      padding: 0 6px;
      color: white;
    }
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 26px;
    height: 26px;
    opacity: 0.8;
    transition: all 100ms;
    will-change: opacity, transform;
  }

  .icon:hover {
    opacity: 1;
  }
  
  .icon:active {
    transform: scale(1.05);
  }
</style>
