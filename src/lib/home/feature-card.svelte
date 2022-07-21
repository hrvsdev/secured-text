<div class="card">
  <div class="top-section">
    <div class="icon-wrapper">
      <slot name="icon" />
    </div>
    <h3><slot name="heading" /></h3>
  </div>
  <p>
    <slot name="para" />
  </p>
</div>

<style lang="scss">
  .card {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(104, 112, 118, 0.07) 0px 2px 8px 2px,
      rgba(104, 112, 118, 0.04) 0px 2px 4px -1px;

    .top-section {
      display: flex;
      align-items: center;
      column-gap: 10px;
      margin-bottom: 8px;

      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #CEE4FE;
        border-radius: 50%;
      }

      h3 {
        font-weight: 600;
        letter-spacing: -0.5px;
      }
    }

    p {
      color: rgb(104, 112, 118);
      line-height: 24px;
      padding: 0 4px;
    }
  }
</style>
