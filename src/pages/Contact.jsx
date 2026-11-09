
import { useState } from 'react';

function Contact() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const contactData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage
    };

    console.log('Contact Form Submission:', contactData);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
    setSubmitted(true);
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <p className="welcome-text">LET'S CONNECT</p>
        <h1>Contact Me</h1>
        <p>
          Have a question or want to connect?
          Enter your information below!!
        </p>
      </div>

      <form className="contact-form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={(event) => {
              setEnteredName(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            value={enteredEmail}
            onChange={(event) => {
              setEnteredEmail(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={enteredMessage}
            onChange={(event) => {
              setEnteredMessage(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Write your message here..."
            rows="6"
            required
          />
        </div>

        <button type="submit" className="contact-button">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted successfully!
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;