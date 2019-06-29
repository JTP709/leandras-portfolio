import React from 'react';

const Contact = () => (
  <section id="Contact Me" className="main special">
    <header className="major">
      <h2>Contact Me</h2>
      <p>
        Are you as ready as I am to get started? Contact me using the form below!<br />
        Or please feel free to contact me on social media.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        action="/success"
      >
        <label class="bot-field">Title:
          <input name="bot-field"  type="text" />
        </label>
        <label>Name:
          <input type="text" name="name" />
        </label>
        <label>E-Mail:
          <input type="email" name="email" />
        </label>
        <label>Message:
          <textarea name="message" />
        </label>
        <div data-netlify-recaptcha="true"></div>
        <button className="button" type="submit">Submit</button>
      </form>
    </header>
  </section>
)

export default Contact;