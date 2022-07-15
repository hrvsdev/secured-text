<script>
  import UserOffIcon from "../assets/user-off.svelte";
</script>

<div class="features-wrapper">
  <div class="features-text">
    <h1>Why it is better and safer?</h1>
    <p>Beacuse Secured Text has features that no one is willing to offer!</p>
  </div>
  <div class="cards-wrapper">
    <div class="card">
      <div class="icon-wrapper">
        <UserOffIcon />
      </div>
      <h3>No User Info</h3>
      <p>
        We don't ask or store any personal information of users. All it needs a
        word and a password for security.
      </p>
    </div>
    <div class="card">Two</div>
    <div class="card">Three</div>
    <div class="card">Four</div>
    <div class="card">Five</div>
    <div class="card">Six</div>
  </div>
</div>

<style lang="scss">
  .features-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 35px;

    h1 {
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      color: rgb(105, 111, 117);
    }
  }

  .cards-wrapper {
    max-width: 985px;
    margin: 0 auto;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin-bottom: 50px;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(104, 112, 118, 0.07) 0px 2px 8px 2px,
      rgba(104, 112, 118, 0.04) 0px 2px 4px -1px;
  }
  
</style>
