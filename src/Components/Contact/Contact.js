import React from "react";

const Contact = () => {
  return (
    <form>
      <fieldset>
        <input placeholder="Name" type="text" tabIndex="1" required></input>
      </fieldset>
      <fieldset>
        <input placeholder="Email" type="email" tabIndex="2" required></input>
      </fieldset>
      <fieldset>
        <input placeholder="Number (optional)" type="tel" tabIndex="3"></input>
      </fieldset>
      <fieldset>
        <textarea placeholder="Message" tabIndex="4" rows="8" cols="32" required></textarea>
      </fieldset>
      <button name="submit" type="submit" data-submit="...Sending">Submit</button>
    </form>
  )
}

export default Contact;
