import React from 'react';
import "../assets/css/App.css"

function ContactSection() {
  // Define a function to handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form input values
    const name = document.querySelector('[name="name"]').value.trim();
    const number = document.querySelector('[name="number"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    // Validate the form fields
    if (name === '') {
      alert('Name is required');
      return;
    }

    if (number === '') {
      alert('Phone number is required');
      return;
    }

    if (!/^09\d{9}$/.test(number)) {
      alert('Phone number must start with 09 and have 11 digits');
      return;
    }

    if (email === '') {
      alert('Email is required');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Invalid email format');
      return;
    }

    if (message === '') {
      alert('Message is required');
      return;
    }

    // If all validation checks pass, submit the form
    e.target.submit();
  };

  return (
    <div className="contact-sec pt-5 pb-2" id="contact">
      <div className="get-in-touch message-container">
        <div className="contact-form">
            <form
              className="form-message"
              action="https://formsubmit.co/rjpalang@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h3>Get in touch with us</h3>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="number" name="number" placeholder="Phone no." required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here"
                required
              ></textarea>
              <button type="submit" value="value-1" className="contact-btn">Send</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
