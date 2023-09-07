import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <form class="contact-form">
        <h2>Contact Us</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
