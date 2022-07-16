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

  
</style>
