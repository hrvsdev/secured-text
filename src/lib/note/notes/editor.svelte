<script>
  import axios from "axios";

  import BackIcon from "../../assets/back.svelte";
  import DeleteIcon from "../../assets/delete.svelte";
  import SaveIcon from "../../assets/check.svelte";

  import { user } from "../../../routes/[user].svelte";
  import { contentHash, passHash, currentNote, notes } from "../index.svelte";
  import { isNoteOpen } from "./note.svelte";

  import genHash from "../../../utils/genHash.util";
  import { encObj } from "../../../utils/encrypt.util";

  let input;
  let textarea;

  const onBackClick = () => {
    $isNoteOpen = false;
  };

  const handleSave = async () => {
    const tempContentHash = genHash(String(JSON.stringify($notes) + $passHash));

    const data = {
      encContent: encObj($notes, $passHash),
      prevContentHash: $contentHash,
      contentHash: tempContentHash,
    };

    try {
      const res = await axios.patch(`/u/${$user.user._id}`, data);
      $contentHash = tempContentHash;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const onSaveClick = () => {
    if ($currentNote.id) {
      $notes[$notes.indexOf($currentNote)] = {
        ...$currentNote,
        note: textarea.value,
        title: input.value,
      };
      $currentNote = $notes[$currentNote.id];
    } else {
      $notes = [
        ...$notes,
        { id: `${$notes.length}`, note: textarea.value, title: input.value },
      ];
      $currentNote = $notes[$notes.length - 1];
    }
    handleSave();
    $isNoteOpen = false;
  };

  const onDeleteClick = () => {
    $notes = $notes.filter((e, i) => i !== $notes.indexOf($currentNote));
    $currentNote = { id: "", note: "", title: "" };
    handleSave();
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
      }
    }
  }

  .textarea-wrapper {
    height: 100%;
    padding: 20px 70px;

    input {
      all: unset;
      width: 100%;
      font-size: 25px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    textarea {
      font-size: 16px;
      resize: none;
      border: none;
      width: 100%;
      scrollbar-width: 0;
      height: 100%;
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
      padding: 20px 45px;
    }
  }

  @media (max-width: 780px) {
    .textarea-wrapper {
      padding: 20px 30px;
    }
  }

  @media (max-width: 700px) {
    .back-button {
      display: flex;
    }
  }
</style>
