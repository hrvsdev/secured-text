<script>
  import genPass from "../../utils/genPassAndHash.util";
  import genHash from "../../utils/genHash.util";
  import { encObj } from "../../utils/encrypt.util";

  let value = ""
  let { pass, passHash } = genPass();
  $: content = [{ value }];

  let hashedContent = genHash(String(JSON.stringify(content) + passHash));
  let encContent = encObj(content, passHash);
</script>

<section class="try-box-wrapper">
  <div class="try-box-content-wrapper">
    <div class="try-box-text">
      <h1>See it in action</h1>
      <p>We are using <span>{pass}</span> as a temporary password.</p>
    </div>
    <div class="try-section">
      <div class="textarea-wrapper">
        <textarea bind:value placeholder="Your text goes here ..." />
      </div>
      <div class="output-wrapper">
        <div class="hashed-content">
          <h3>Hashed Content</h3>
          <p>{hashedContent}</p>
        </div>
        <div class="encrypted-content">
          <h3>Encrypted Content</h3>
          <!-- <p>{encContent}</p> -->
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .try-box-wrapper {
    padding: 0 35px;
    margin-bottom: 80px;
  }

  .try-box-content-wrapper {
    max-width: 985px;
    margin: 0 auto;
  }

  .try-box-text {
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

  .try-section {
    display: grid;
    height: 300px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    border-radius: 10px;
    box-shadow: rgb(104 112 118 / 7%) 0px 2px 8px 2px,
      rgb(104 112 118 / 4%) 0px 2px 4px -1px;
  }

  .textarea-wrapper {
    border-right: 1px solid #ccc;
    textarea {
      border-radius: 10px;
      padding: 20px;
      font-size: 16px;
      resize: none;
      border: none;
      width: 100%;
      height: 100%;
      scrollbar-width: 0;
      line-height: 25px;
      font-weight: 400;
      color: rgb(36, 41, 45);

      &:focus {
        outline: none;
      }
    }
  }

  .output-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    h3 {
      font-weight: 600;
      margin-bottom: 5px;
    }

    p {
      color: rgb(104, 112, 118);
      word-break: break-all;
      /* overflow: ; */
    }
  }

  @media (max-width: 700px) {
    .try-box-wrapper {
      margin-bottom: 60px;
    }

    .try-box-text {
      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 500px) {
    .try-box-wrapper {
      margin-bottom: 50px;
    }

    .try-box-text {
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
