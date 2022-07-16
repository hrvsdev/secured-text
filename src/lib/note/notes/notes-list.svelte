<script>
  import PlusIcon from "../../assets/plus.svelte";
</script>

<aside>
  <header>
    <h2>Secured Text</h2>
    <PlusIcon class="icon" />
  </header>
  <div class="notes-grid-wrapper">
    <div class="note-wrapper">
      <h3>Note Title</h3>
      <p>
        Note-taking is a important skill for every student. Every person should
        have a habit of notes.
      </p>
    </div>
    <div class="note-wrapper">
      <h3>Note Title</h3>
      <p>
        Note-taking is a important skill for every student. Every person should
        have a habit of notes.
      </p>
    </div>
    <div class="note-wrapper">
      <h3>Note Title</h3>
      <p>
        Note-taking is a important skill for every student. Every person should
        have a habit of notes.
      </p>
    </div>
  </div>
</aside>

<style lang="scss">
  aside {
    width: 380px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
  }

  header {
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    flex-shrink: 0;

    h2 {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .notes-grid-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
    padding: 20px;
  }

  .note-wrapper {
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 12px 15px;
    cursor: pointer;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 3px;
    font-size: 16px;
  }

  p {
    color: rgb(104, 112, 118);
    font-size: 15px;
    height: 38px;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    aside {
      width: 300px;
    }
  }

  @media (max-width: 700px) {
    aside {
      width: 100%;
      border: 0;
    }
  }
</style>
