<footer>
  <div class="footer-wrapper">
    <div class="author-wrapper">
      <p>
        Created by
        <a target="_blank" href="https://github.com/hrvsdev"> Harsh Vyas </a>
      </p>
    </div>
    <div class="inspired-wrapper">
      <!-- <a href="https://protectdtext.com" target="_blank">
        Inspired by Protected Text
      </a> -->
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 80px 35px 50px;
  }

  .footer-wrapper {
    max-width: 985px;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .author-wrapper {
    font-size: 17px;
    color: #656565;
    a {
      text-decoration: none;
      color: black;
      border-bottom: 1px solid #ababab;
      transition: border-color 300ms;
      font-weight: 500;

      &:hover {
        border-bottom-color: black;
      }
    }
  }
</style>
