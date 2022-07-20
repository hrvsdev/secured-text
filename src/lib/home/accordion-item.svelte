<script>
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let open = false;

  const openAccordion = () => (open = !open);

  const anim = {
    duration: 200,
    easing: cubicOut,
  };
</script>

<div class="accordion-item">
  <div class="accordion-heading-wrapper" on:click={openAccordion} class:open>
    <h2><slot name="heading" /></h2>
    <span class="arrow-wrapper">&#8249;</span>
  </div>
  {#if open}
    <p class="accordion-details" transition:slide={anim}>
      <slot name="details" />
    </p>
  {/if}
</div>

<style lang="scss">
  .accordion-item {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    padding-right: 10px;
  }

  .accordion-heading-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    padding: 15px 0;
    font-weight: 600;
    font-size: 22px;
  }

  .arrow-wrapper {
    transition: all 200ms ease-out;
    font-size: 30px;
    color: #aaaaaa;
  }

  .accordion-details {
    padding-bottom: 20px;
    font-size: 17px;
    color: rgb(104, 112, 118);
    line-height: 24px;
  }

  .open {
    .arrow-wrapper {
      transform: rotate(-90deg);
    }
  }
</style>
