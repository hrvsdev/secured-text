<script>
  import genPass from "../../utils/genPassAndHash.util";
  import genHash from "../../utils/genHash.util";
  import { encObj } from "../../utils/encrypt.util";

  let value = "";
  let { pass, passHash } = genPass();
  let content = [{ value }];

  let hashedContent = genHash(String(JSON.stringify(content) + passHash));
  let encContent = encObj(content, passHash);

  const onInput = (e) => {
    value = e.target.value;
    content = [{ value }];
    hashedContent = genHash(String(JSON.stringify(content) + passHash));
    encContent = encObj(content, passHash);
  };
</script>

<section class="try-box-wrapper">
  <div class="try-box-content-wrapper">
    <div class="try-box-text">
      <h1>See it in action</h1>
      <p>We are using <span>{pass}</span> as a temporary password.</p>
    </div>
    <div class="try-section">
      <div class="textarea-wrapper">
        <textarea on:input={onInput} placeholder="Your text goes here ..." />
      </div>
      <div class="output-wrapper">
        <div class="hashed-content">
          <h3>Hashed Content</h3>
          <p>{hashedContent}</p>
        </div>
        <div class="encrypted-content">
          <h3>Encrypted Content</h3>
          <p>{encContent}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .try-box-wrapper {
    padding: 40px 35px 50px;
    background: linear-gradient(
      135deg,
      rgba(191, 219, 254, 1) 0%,
      rgba(184, 231, 253, 1) 66%
    );
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
      color: rgb(80, 80, 80);
      span {
        background-color: white;
        border-radius: 5px;
        padding: 2px 5px;
        font-family: "Fira Code";
        font-size: 15px;
      }
    }
  }

  .try-section {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    background-color: white;
    display: grid;
    height: 300px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    border-radius: 10px;
  }

  .textarea-wrapper {
    border-right: 1px solid #ccc;
    textarea {
      padding: 20px;
      border-radius: 10px;
      font-size: 16px;
      min-height: 200px;
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
    row-gap: 20px;

    h3 {
      font-weight: 600;
      margin-bottom: 5px;
    }

    p {
      font-family: "Fira Code";
      color: rgb(104, 112, 118);
      word-break: break-all;
    }

    .encrypted-content {
      p {
        max-height: 104px;
        overflow-y: scroll;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .try-section {
      height: auto;
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(min-content, max-content);
      border-radius: 10px;
    }

    .textarea-wrapper {
      border-right: 0;
      border-bottom: 1px solid #ccc;
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
        span{
          font-size: 13px;
          padding: 1px 5px;
        }
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
