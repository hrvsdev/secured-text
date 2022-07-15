<script>
  import { goto } from "$app/navigation";

  let value = "";

  const handleSubmit = () => {
    goto(value);
  };
</script>

<div id="start" class="start-wrapper">
  <h1>Get Started</h1>
  <p>
    Enter some words to start. It will automatically make your words url
    friendly.
  </p>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-wrapper">
      <input bind:value type="text" placeholder="Enter something to start" />
    </div>
    <button>Continue</button>
  </form>
</div>

<style lang="scss">
  .start-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
    padding: 0 35px;
  }

  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: rgb(105, 111, 117);
    margin-bottom: 20px;
    text-align: center;
  }

  form {
    display: flex;
    column-gap: 20px;
    input {
      all: unset;
      height: 48px;
      box-shadow: inset 0px 0px 0px 1px #ccc;
      padding: 0 15px;
      border-radius: 10px;

      &:focus {
        box-shadow: inset 0px 0px 0px 1px rgb(0, 114, 245);
      }
    }
    button {
      all: unset;
      background-color: rgb(0, 114, 245);
      color: white;
      border-radius: 10px;
      padding: 0 15px;
      cursor: pointer;
      box-shadow: rgb(94, 162, 239) 0px 4px 14px 0px;
      will-change: transform;
      transition: all 100ms;

      &:active {
        transform: scale(0.96);
      }
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 25px;
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

    form {
      flex-direction: column;
      width: 100%;
      row-gap: 15px;

      input {
        box-sizing: border-box;
        width: 100%;
      }

      button {
        height: 48px;
        text-align: center;
      }
    }
  }
</style>
