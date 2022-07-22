<footer>
  <div class="footer-wrapper">
    <div class="email-wrapper section">
      <p>
        Email us:
        <a target="_blank" href="mailto:securedtext@gmail.com">
          securedtext@gmail.com
        </a>
      </p>
    </div>
    <div class="author-wrapper section">
      <p>
        Created by
        <a target="_blank" href="https://github.com/hrvsdev"> Harsh Vyas </a>
      </p>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    margin-top: 80px;
    padding: 25px 35px;
    border-top: 1px solid rgb(239 239 239);
  }

  .footer-wrapper {
    max-width: 985px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .section {
    color: #656565;
    a {
      text-decoration: none;
      color: black;
      border-bottom: 1px solid #ababab;
      transition: border-color 300ms;

      &:hover {
        border-bottom-color: black;
      }
    }
  }
</style>
