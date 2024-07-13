import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [value ,setValue] = useState({
    firstName : "",
    lastName : "",
    email: "",
    subject: "",
    message : "",
  })
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setValue((prevValue) => ({...prevValue, [name] : value}))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({firstName : "", lastName : "", email: "", subject: "", message : ""});
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108860.28072766462!2d74.32110079999998!3d31.4998784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681106544286!5m2!1sen!2s"
            width="100%"
            height="550px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{
              borderRadius: "7.5px",
              border: "none",
            }}
            title="map"
          ></iframe>
        </div>
      </div>
      <div className="form-card-2 ">
        <div className="contact-form-text2">
          <h1>
            DON'T BE HESITATED
            <br />
            <em>
              SEND A MESSAGE <br /> NOW
            </em>
            !
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="small-card">
              <input
                value={value.firstName}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name*"
                onChange={handleChange}
              />
              <input
                value={value.lastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name*"
                onChange={handleChange}
              />
              <input
                value={value.email}
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
              <input
                value={value.subject}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
                onChange={handleChange}
              />
            </div>
            <textarea
              value={value.message}
              name="message"
              id="message"
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <button className="all-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="right-col">
          <div className="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              fill="var(--primary-color)"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            <h6>Mailing Address</h6>
            <span>Lahore, Punjab, Pakistan</span>
          </div>
          <div className="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="44"
              viewBox="0 0 24 24"
              width="44"
              fill="var(--primary-color)"
            >
              <g>
                <rect fill="none" height="24" width="24"></rect>
                <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"></path>
              </g>
            </svg>
            <h6>Email Address</h6>
            <span>Ghazanfarmahmood14@gmail.com</span>
          </div>
          <div className="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              fill="var(--primary-color)"
            >
              <g>
                <rect fill="none" height="24" width="24"></rect>
              </g>
              <g>
                <g>
                  <path
                    class="icon"
                    d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"
                  ></path>
                  <circle class="icon" cx="9" cy="13" r="1"></circle>
                  <circle class="icon" cx="15" cy="13" r="1"></circle>
                  <path
                    class="icon"
                    d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"
                  ></path>
                </g>
              </g>
            </svg>
            <h6>Chat With Us</h6>
            <span>Ghazanfarmahmood14@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
