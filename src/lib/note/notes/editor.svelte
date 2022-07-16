<script>
  import PlusIcon from "../../assets/plus.svelte";
</script>

<div class="editor-wrapper">
  <header>
    <div class="left-wrapper">
      <PlusIcon />
      <PlusIcon />
    </div>
    <div class="right-wrapper">
      <PlusIcon />
      <PlusIcon />
      <PlusIcon />
    </div>
  </header>
  <div class="textarea-wrapper">
    <textarea spellcheck="false" placeholder="Your text goes here ..." />
  </div>
</div>

<style lang="scss">
  .editor-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  header {
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    flex-shrink: 0;

    .left-wrapper,
    .right-wrapper {
      display: flex;
      column-gap: 15px;
    }
  }

  .textarea-wrapper {
    height: 100%;
    textarea {
      padding: 20px 70px;
      font-size: 15px;
      resize: none;
      border: none;
      width: 100%;
      scrollbar-width: 0;
      height: 100%;
      line-height: 25px;
      font-weight: 400;
      color: rgb(44, 51, 56);

      &:focus {
        outline: none;
      }
    }
  }

  @media (max-width: 1000px) {
    .textarea-wrapper {
      textarea {
        padding: 20px 45px;
      }
    }
  }

  @media (max-width: 780px) {
    .textarea-wrapper {
      textarea {
        padding: 20px 30px;
      }
    }
  }
</style>
