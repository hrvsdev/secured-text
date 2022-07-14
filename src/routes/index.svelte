<script>
  import { goto } from "$app/navigation";
  let value;
  const handleSubmit = () => {
    goto(value);
  };
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value type="text" placeholder="Enter a value" />
  </form>
  <br />
  <a href={value}>Continue</a>
</div>
