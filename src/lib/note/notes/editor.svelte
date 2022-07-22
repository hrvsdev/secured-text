<script>
  import axios from "axios";

  import BackIcon from "../../assets/back.svelte";
  import DeleteIcon from "../../assets/delete.svelte";
  import SaveIcon from "../../assets/check.svelte";

  import { user } from "../../../routes/[user].svelte";
  import { contentHash, passHash } from "../index.svelte";
  import { showModal, currentNote, notes } from "../index.svelte";
  import { isNoteOpen } from "./note.svelte";

  import genHash from "../../../utils/genHash.util";
  import { encObj } from "../../../utils/encrypt.util";

  // Title state
  let input = "";

  // Textarea element
  let textarea;

  // Back Click for small devices
  const onBackClick = () => {
    $isNoteOpen = false;
  };


  // Save action
  const handleSave = async () => {

    // Previous content hash
    const tempContentHash = genHash(String(JSON.stringify($notes) + $passHash));

    // Data that will sent to server
    const data = {
      encContent: encObj($notes, $passHash),
      prevContentHash: $contentHash,
      contentHash: tempContentHash,
    };

    try {
      const res = await axios.patch(`/u/${$user.user.user}`, data);
      $contentHash = tempContentHash;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // Save button action
  const onSaveClick = () => {
    // If note is empty delete the note
    if (!(input.value.trim() || textarea.value.trim())) return onDeleteClick();

    // If a note is selected, update the note array with new data
    if ($currentNote.id) {
      $notes[$notes.indexOf($currentNote)] = {
        ...$currentNote,
        note: textarea.value,
        title: input.value,
      };

      // Also, update the current selected note
      $currentNote = $notes[$currentNote.id];
    } else {

      // If no note is selected, add the new note
      $notes = [
        ...$notes,
        { id: `${$notes.length}`, note: textarea.value, title: input.value },
      ];

      // Change current note to recent note
      $currentNote = $notes[$notes.length - 1];
    }

    // Run save function
    handleSave();

    // Close editor on small devices
    $isNoteOpen = false;
  };

  // Delete button action
  const onDeleteClick = () => {
    // If there is no note selected, do nothing
    if (!$currentNote.id) return;

    // Remove the current selected note from array
    $notes = $notes.filter((e, i) => i !== $notes.indexOf($currentNote));

    // Remove current selected note
    $currentNote = { id: "", note: "", title: "" };

    // Run  save function
    handleSave();

    // Close editor
    $isNoteOpen = false;
  };

  // Shortcut keys function
  const onShortcutKey = (e) => {
    if ($showModal) return;
    if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
      onSaveClick();
    } else if (e.key === "Delete") {
      e.preventDefault();
      onDeleteClick();
    }
  };
</script>

<svelte:window on:keydown={onShortcutKey} />
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
    <input
      type="text"
      value={$currentNote.title}
      bind:this={input}
      placeholder="Title"
    />
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
        will-change: transform;
        transition: all 100ms;
        &:active {
          transform: scale(1.1);
        }
      }
    }
  }

  .textarea-wrapper {
    height: 100%;
    padding: 20px 0;
    padding-left: 70px;

    input {
      all: unset;
      padding-right: 70px;
      box-sizing: border-box;
      width: 100%;
      font-size: 25px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    textarea {
      font-size: 16px;
      padding-right: 70px;
      height: calc(100vh - 140px);
      resize: none;
      border: none;
      width: 100%;
      min-height: 300px;
      line-height: 25px;
      font-weight: 400;
      color: rgb(36, 41, 45);

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
      padding-left: 45px;
      input,
      textarea {
        padding-right: 45px;
      }
    }
  }

  @media (max-width: 780px) {
    .textarea-wrapper {
      padding-left: 30px;
      input,
      textarea {
        padding-right: 30px;
      }
    }
  }

  @media (max-width: 700px) {
    .back-button {
      display: flex;
    }
  }
</style>
