import React, { Component } from "react";
import { ContactStyle } from "./ContactStyle";

import contact1 from "../../assets/contact1.png";

class Contact extends Component {
  render() {
    return (
      <ContactStyle>
        <div className="container">
          <div className="contact-title">
            <h2>Don’t Hasitate to Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sollicitudin lobortis turpis, sit amet aliquet metus.
            </p>
          </div>

          <div className="form-flex">
            <img src={contact1} alt="contact image  " />

            <form className="contact-form">
              <div className="row">
                <div className="form-group">
                  <input
                    placeholder="First Name"
                    id="fname"
                    className="form-control"
                    name="fname"
                    type="text"
                    required
                    data-error="Please enter your first name"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Last Name"
                    id="lname"
                    className="form-control"
                    name="lname"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  placeholder="Email Address"
                  id="email"
                  className="form-control"
                  name="email"
                  type="email"
                  required
                  data-error="Please enter your valid email address"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Comments"
                  id="message"
                  cols={20}
                  rows={5}
                  className="form-control"
                  required
                />
              </div>
              <div className="buttons_container contact-btn">
                <a href="/#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </form>
          </div>
        </div>
      </ContactStyle>
    );
  }
}

export default Contact;
