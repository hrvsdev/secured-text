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
      <svelte:fragment slot="heading">
        What if I forgot my password?
      </svelte:fragment>
      <svelte:fragment slot="details">
        We don't store your password, email or any other user info, not even
        hashed or encrypted. So, there is no way to recover it once forgot. All
        you can do it just try to remember it.
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">Should I trust you?</svelte:fragment>
      <svelte:fragment slot="details">
        The answer is 'No'. Don't trust us and check the app and code yourself.
        If you are a developer, it will be very easy for you and even if you are
        not, you can check the data sent to servers by opening 'Dev Tools' (F12)
        and check the 'Network' tab. <br>
        Read below to know about its working cycle.
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">
        Why my URL changed automatically?
      </svelte:fragment>
      <svelte:fragment slot="details">
        Because URL don't support many characters and symbols. It is advised to
        use only alphabets, numbers, hyphens and dashes.
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">
        How this encryption and security works?
      </svelte:fragment>
      <svelte:fragment slot="details">
        <ul>
          <li>
            When a user opens a site (securedtext.vecel.app/abcd), the server
            checks if the site exists or not.
          </li>
          <li>
            If it doesn't exists, it will prompt you to create it. When you
            enter password, it will create hash of it which is stored only in
            your browser and used to encrypt and hash content.
          </li>
          <li>
            When you create password, the browser will hash and encrypt content
            with the hashed password and send only these to server. Note that
            content is empty at first, but still it will hash and encrypt it and
            will take you to actual app.
          </li>
          <br />
          <li>
            If the site exists, the server will send encrypted and hashed
            content and prompt you to enter password. After you entered
            password, it will check if its hash is able to decrypt the content.
          </li>
          <li>
            If it is able to decrypt content, you will be shown app and if
            password is wrong, it will throw an error of wrong password.
          </li>
          <br />
          <li>
            When you are on actual app and clicks on 'save' or 'delete' button,
            it will generate a hash of previous and current content, encrypt
            content and send it to server.
          </li>
          <li>
            If the previous content hash matches the current content hash on the
            server, it will save data otherwise reject it because you were not
            able to provide hash of previous content and the data was
            manipulated in between or the request doesn't seems to be came from
            a browser.
          </li>
          <li>
            This cycle will happen everytime you click on 'save' or 'button' and
            prevents illegal activity. Don't worry, you don't need to think
            about it as it will happen automatically in the browser.
          </li>
          <br />
          <li>
            In this whole process, the only data is recived from the server is
            when user opens a site and after that data is only send. The data
            that is sent and recidved is previous and current content hash,
            encrypted data and the site name.
          </li>
          <li>
            No other data is sent or recieved, not even cookie or session.
          </li>
        </ul>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">
        How much notes can I keep?
      </svelte:fragment>
      <svelte:fragment slot="details">
        You can store any number of notes you want for forever.
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">
        Which encryption algorithms are used?
      </svelte:fragment>
      <svelte:fragment slot="details">
        Secured Text uses AES for encryption and decryption and SHA512 for
        hashing. The data is always secure and can never be visible without the
        password.
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
      <svelte:fragment slot="heading">
        What will happen after I deleted my site?
      </svelte:fragment>
      <svelte:fragment slot="details">
        The site and all data will be deleted for forever and will be treated as
        a new site after that.
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
