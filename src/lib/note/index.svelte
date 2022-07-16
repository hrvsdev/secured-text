<script context="module">
  import { writable } from "svelte/store";

  export const note = writable("");
  export const showModal = writable(true);
  export const showAddSiteModal = writable(true);
  export const showAddPassModal = writable(false);
  export const showEnterPassModal = writable(false);
</script>

<script>
  import axios from "axios";
  import { user } from "../../routes/[user].svelte";

  import Navbar from "./navbar.svelte";
  import Modal from "./modal.svelte";

  // Textarea value change action
  const handleChange = async () => {
    try {
      await axios.patch(`/user/${$user.user?._id}`, { note: $note });
    } catch (err) {
      console.log(err.response.data);
    }
  };
</script>

<Navbar />
<!-- <Modal /> -->