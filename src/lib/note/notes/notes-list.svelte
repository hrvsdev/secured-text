<script>
  import PlusIcon from "../../assets/plus.svelte";
  import { isNoteOpen } from "./note.svelte";
  import { notes, currentNote } from "../index.svelte";

  const onNoteClick = (note) => {
    $isNoteOpen = true;
    $currentNote = note;
  };

  const onAddClick = () => {
    $currentNote = { id: "", note: "", title: "" };
    $isNoteOpen = true;
  };
</script>

<aside>
  <header>
    <h2>Secured Text</h2>
    <div class="icon" on:click={onAddClick}><PlusIcon /></div>
  </header>
  {#if $notes.length}
    <div class="notes-grid-wrapper">
      {#each $notes as note}
        <div class="note-wrapper" on:click={() => onNoteClick(note)}>
          <h3>{note.title}</h3>
          <p>{note.note}</p>
        </div>
      {/each}
    </div>
  {:else}
    <div class="no-notes-msg">
      <h3>Why so empty?</h3>
      <p>Add a note by writing on right side or by clicking the plus + icon.</p>
    </div>
  {/if}
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

    .icon {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(100, 105, 112);
    }
  }

  .no-notes-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    text-align: center;

    h3{
      margin-bottom: 6px;
      font-size: 18px;
      font-weight: 600;
    }

    p{
      font-size: 16px;
      color: rgb(104, 112, 118);
      line-height: 22px;
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
    width: 100%;
    cursor: pointer;

    h3 {
      font-weight: 600;
      margin-bottom: 3px;
      font-size: 16px;
      max-height: 20px;
      overflow: hidden;
    }
  
    p {
      color: rgb(104, 112, 118);
      font-size: 15px;
      max-height: 38px;
      overflow: hidden;
    }
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
