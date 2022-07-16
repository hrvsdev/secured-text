<script>
  import BackIcon from "../../assets/back.svelte";
  import DeleteIcon from "../../assets/delete.svelte";
  import SaveIcon from "../../assets/check.svelte";
  import { currentNote, notes } from "../index.svelte";
  import { isNoteOpen } from "./note.svelte";

  // let value = $currentNote.note
  let textarea;

  const onBackClick = () => {
    $isNoteOpen = false;
  };

  const onSaveClick = () => {
    if ($currentNote.id) {
      $notes[$notes.indexOf($currentNote)] = {
        ...$currentNote,
        note: textarea.value,
      };
      $currentNote = $notes[$currentNote.id - 1];
    } else {
      $notes = [...$notes, { id: $notes.length + 1, note: textarea.value }];
      $currentNote = $notes[$notes.length - 1];
    }
    $isNoteOpen = false;
  };

  const onDeleteClick = () => {
    $notes = $notes.filter((e, i) => i !== $notes.indexOf($currentNote));
    $currentNote = { id: "", note: "" };
    $isNoteOpen = false;
  };
</script>

<div class="editor-wrapper">
  <header>
    <div class="left-wrapper">
      <div class="back-button" on:click={onBackClick}><BackIcon /></div>
    </div>
    <div class="right-wrapper">
      <div class="icon" on:click={onSaveClick}><SaveIcon /></div>
      <div class="icon" on:click={onDeleteClick}><DeleteIcon /></div>
    </div>
  </header>
  <div class="textarea-wrapper">
    <textarea
      value={$currentNote.note}
      spellcheck="false"
      bind:this={textarea}
      placeholder="Your text goes here ..."
    />
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
      column-gap: 20px;
      .icon {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100, 105, 112);
      }
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

  .back-button {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: rgb(100, 105, 112);
    display: none;
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

  @media (max-width: 700px) {
    .back-button {
      display: flex;
    }
  }
</style>
