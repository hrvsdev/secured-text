<script>
  import FeatureCard from "./feature-card.svelte";
  import ShieldIcon from "../assets/shield.svelte";
</script>

<div class="features-wrapper">
  <div class="features-text">
    <h1>Why it is better and safer?</h1>
    <p>Beacuse Secured Text has features that no one is willing to offer!</p>
  </div>
  <div class="cards-wrapper">
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">No User Info</svelte:fragment>
      <svelte:fragment slot="para">
        We never ask or store any personal information of users. All it needs a
        word and a password for security.
      </svelte:fragment>
    </FeatureCard>
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">No Login</svelte:fragment>
      <svelte:fragment slot="para">
        We never ask you to log in by your name, email, phone or by any other
        provider. Only a word is required.
      </svelte:fragment>
    </FeatureCard>
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">No Ads</svelte:fragment>
      <svelte:fragment slot="para">
        We hate ads and you too. Ads requires a lot of user data and it is
        against our policy. There are no ads and never will be.
      </svelte:fragment>
    </FeatureCard>
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">Encrypted Text</svelte:fragment>
      <svelte:fragment slot="para">
        The text is highly encrypted and can only be decrypted by the real
        password which is stored only in your brain and not in our data.
      </svelte:fragment>
    </FeatureCard>
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">Free Forever</svelte:fragment>
      <svelte:fragment slot="para">
        It is a open-source project and will be 100% free to all of our users
        for forever of our lives. We will never ask you a single penny.
      </svelte:fragment>
    </FeatureCard>
    <FeatureCard>
      <svelte:fragment slot="icon"><ShieldIcon /></svelte:fragment>
      <svelte:fragment slot="heading">Lightning Fast</svelte:fragment>
      <svelte:fragment slot="para">
        The whole app is well optimized and is very fast. You will never face
        delay or any latency while working.
      </svelte:fragment>
    </FeatureCard>
  </div>
</div>

<style lang="scss">
  .features-wrapper {
    padding: 0 25px;
  }

  .features-text {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 35px;

    h1 {
      margin-bottom: 10px;
      text-align: center;
    }
    
    p {
      text-align: center;
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

  @media (max-width: 700px) {
    .features-text {
      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 500px) {
    .features-text {
      h1 {
        font-size: 25px;
        width: 100%;
        text-align: left;
      }

      p {
        width: 100%;
        text-align: left;
      }
    }
  }
</style>
