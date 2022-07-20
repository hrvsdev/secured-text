<script>
  import AccordionItem from "./accordion-item.svelte";
</script>

<section class="accordion-box-wrapper">
  <div class="accordion-box-text">
    <h1>FAQs and details</h1>
    <p>Some questions and details you should know about its working.</p>
  </div>
  <div class="accordion-wrapper">
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
        tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto
        totam consectetur odio sint accusantium minima vitae sapiente soluta
        deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
        tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto
        totam consectetur odio sint accusantium minima vitae sapiente soluta
        deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
        tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto
        totam consectetur odio sint accusantium minima vitae sapiente soluta
        deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Accordion 1</svelte:fragment>
      <svelte:fragment slot="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
        tenetur ea suscipit dicta cupiditate recusandae eveniet, architecto
        totam consectetur odio sint accusantium minima vitae sapiente soluta
        deserunt officiis pariatur similique quisquam?
      </svelte:fragment>
    </AccordionItem>
  </div>
</section>

<style lang="scss">
  .accordion-box-wrapper {
    padding: 0 35px;
  }

  .accordion-wrapper {
    max-width: 985px;
    margin: 0 auto;
  }

  .accordion-box-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    h1 {
      margin-bottom: 10px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 18px;
      color: rgb(105, 111, 117);
    }
  }

  @media (max-width: 700px) {
    .accordion-box-text {
      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 500px) {
    .accordion-box-text {
      h1 {
        font-size: 25px;
        width: 100%;
        text-align: left;
      }

      p {
        width: 100%;
        text-align: left;
      }
    }
  }
</style>
