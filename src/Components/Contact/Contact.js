import React from "react";

const Contact = () => {
  return (
    <form name="contact" method="POST" netlify="true">
      <fieldset>
        <input name="name" placeholder="Name" type="text" tabIndex="1" required></input>
      </fieldset>
      <fieldset>
        <input name="email" placeholder="Email" type="email" tabIndex="2" required></input>
      </fieldset>
      <fieldset>
        <input name="number" placeholder="Number (optional)" type="tel" tabIndex="3"></input>
      </fieldset>
      <fieldset>
        <textarea name="message" placeholder="Message" tabIndex="4" rows="8" cols="24" required></textarea>
      </fieldset>
      <button name="submit" type="submit" data-submit="...Sending">Submit</button>
    </form>
  )
}

export default Contact;
