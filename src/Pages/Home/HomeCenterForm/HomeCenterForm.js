import React, { useState } from "react";
import "./HomeCenterForm.css";

const HomeCenterForm = () => {
  const [form, setForm] = useState({
    FirstName : "",
    LastName : "",
    email: "",
    subject: "",
    message : "",
  })

  const onHandleChange = (e) =>{
    const {name, value}  = e.target;
    setForm((prevState) => ({...prevState, [name] : value}));
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setForm({FirstName : "", LastName : "", email: "", subject: "", message : ""})
  };
  return (
    <>
      <div className="home-center-form">
        <div className="form-card-1">
            <div className="contact-form-text">
              <h1>
                DON'T BE HESITATED
                <br /> <em> TALK TO US</em> NOW!
              </h1>
              <form onSubmit={onHandleSubmit}>
                <div className="small-card">
                  <input
                    value={form.FirstName}
                    type="text"
                    name="FirstName"
                    id="firstName"
                    placeholder="First Name*"
                    onChange={onHandleChange}
                  />
                  <input
                    value={form.LastName}
                    type="text"
                    name="LastName"
                    id="lastName"
                    placeholder="Last Name*"
                    onChange={onHandleChange}
                  />
                  <input
                    value={form.email}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={onHandleChange}
                  />
                  <input
                    value={form.subject}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject*"
                    onChange={onHandleChange}
                  />
                </div>
                <textarea
                  value={form.message}
                  name="message"
                  id="message"
                  onChange={onHandleChange}
                  placeholder="Message"
                ></textarea>
                <button className="all-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-img">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108860.28072766462!2d74.32110079999998!3d31.4998784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681106544286!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  borderTopRightRadius: "7.5px",
                  borderBottomRightRadius: "7.5px",
                  border: "none",
                }}
                title="map"
              ></iframe>
            </div>
          </div>
      </div>
    </>
  );
};

export default HomeCenterForm;
