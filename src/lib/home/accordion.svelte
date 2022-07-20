<script>
  import AccordionItem from "./accordion-item.svelte";
</script>

<div class="accordion-box-wrapper">
  <div class="accordion-wrapper">
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto totam consectetur odio sint accusantium minima vitae sapiente soluta deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto totam consectetur odio sint accusantium minima vitae sapiente soluta deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto totam consectetur odio sint accusantium minima vitae sapiente soluta deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto totam consectetur odio sint accusantium minima vitae sapiente soluta deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
  </div>
</div>

<style lang="scss">
  .accordion-box-wrapper {
    padding: 0 35px;
    min-height: 500px;
  }

  .accordion-wrapper {
    max-width: 985px;
    margin: 0 auto;
  }
</style>
