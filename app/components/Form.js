import React from 'react';


function Form() {
    return (
        <div className="contact-form">
              <form action="contact.php" method="post">
                
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
    );
}

export default Form;