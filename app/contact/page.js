"use client"

import React from "react";
import Form from "../../components/Form";

function ContactPage() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Contact Us</h1>

            {/* Contact Form */}
                <Form />
            {/* end of contact form */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
