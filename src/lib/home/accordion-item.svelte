<script>
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  import ArrowIcon from "$lib/assets/arrow.svelte";

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
    <span class="arrow-wrapper"><ArrowIcon /></span>
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
    padding: 0 2px;
  }

  .accordion-heading-wrapper {
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 22px;
  }

  .arrow-wrapper {
    transition: all 200ms ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .accordion-details {
    cursor: text;
    transform: translateY(-6px);
    margin-bottom: 18px;
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
