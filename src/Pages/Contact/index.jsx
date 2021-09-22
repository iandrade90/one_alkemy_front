import React from "react";
import { ContactForm, ContactText, Footer } from "../../components";
import "./style.css";

const ContactPage = () => {
  return (
    /* Cuando este disponible aplicar Header y Footer */
    <div className="text-center contactContainer">
      <div className="col-12 mt-5">
        <h4 className="text-uppercase">Contactate con nosotros.</h4>
      </div>
      <div className="row mt-4 mb-4 m-auto pe-3 ps-3 mt-md-5">
        <ContactText />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
