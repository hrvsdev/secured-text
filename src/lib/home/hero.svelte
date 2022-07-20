<section class="hero-wrapper">
  <div class="hero-heading-wrapper">
    <h1>
      The <span class="highlighted-word">safest</span> place on Internet to store
      text
    </h1>
  </div>
  <div class="hero-para-wrapper">
    <p>
      Secured Text is an free online notepad with password, where you can
      securely save your notes on the web. It's a secure notepad with password,
      for all your notes, ideas, to-do lists, scripts, etc.
    </p>
  </div>
</section>

<style>
  .hero-wrapper {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 80px;
    padding: 0 35px;
  }

  .hero-heading-wrapper {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 72px;
    text-align: center;
    max-width: 985px;
    margin-bottom: 30px;
  }

  .highlighted-word {
    background: linear-gradient(
      180deg,
      rgba(0, 114, 245, 1) 40%,
      rgba(217, 70, 239, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-para-wrapper {
    display: flex;
    justify-content: center;
  }

  p {
    color: rgb(90, 96, 100);
    font-weight: 400;
    font-size: 20px;
    max-width: 985px;
    text-align: center;
  }

  @media (max-width: 700px) {
    .hero-wrapper {
      margin-top: 40px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 35px;
      margin-bottom: 25px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
      h1 {
        width: 100%;
        text-align: left;
      }

      p {
        width: 100%;
        text-align: left;
      }
  }
</style>
