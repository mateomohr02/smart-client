import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import AlertMessage from "./AlertMessage";

import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import AOS from "aos";

const Contact = () => {
  const globalLang = useSelector((state) => state.languageReducer.language);

  const [lang, setLang] = useState(globalLang);

  const calendlyRef = useRef(null);

  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);

  const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad del mensaje

  useEffect(() => {
    AOS.init();
  }, []);

  useLayoutEffect(() => {
    // Calendly script initialization
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
  
    let currentRef = calendlyRef.current; // Guardar una copia del ref
  
    script.onload = () => {
      // Widget initialization
      if (currentRef) {
        // Remove existing content from the container
        currentRef.innerHTML = "";
        // Initialize new Calendly widget in the same container
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/smart-agenda/reunion15minutos",
          parentElement: currentRef,
        });
      }
    };
  
    document.body.appendChild(script);
  
    // Clean up
    return () => {
      if (currentRef) {
        // Remove existing content from the container when the component unmounts
        currentRef.innerHTML = "";
      }
    };
  }, []); 

  const showAndHideAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <>
      {lang === "Es" ? (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-none lg:pl-0 lg:pr-0"
          data-aos="fade-down"
        >
          <h3 className="text-left text-2xl custom-font-bold lg:text-4xl lg:mx-auto lg:text-center my-10">
            ¿Listo para dar el siguiente paso?{" "}
          </h3>

          <div
            data-aos="fade-down"
            id="calendly"
            className="calendly-inline-widget h-720 mt-calendly"
            ref={calendlyRef}
            data-url="https://calendly.com/smart-agenda/reunion15minutos"
          ></div>

          <h3 className="text-left text-2xl custom-font-bold lg:text-4xl lg:mx-auto lg:text-center my-10">
            {" "}
            Ponete en contacto con nosotros{" "}
          </h3>

          <div
            id="contact"
            className="flex flex-col lg:flex-row items-center justify-between mb-32"
          >
            <div className="w-full lg:w-2/3 flex items-center justify-center">
              <Form showAndHideAlert={showAndHideAlert} />
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=+543751613750&text=Hola%21%20Estaba%20viendo%20el%20Sitio%20Web%20de%20SMART%20y%20tenía%20una%20consulta%2E%2E%2E"
                target="blank"
                className=" flex items-center text-left m-3"
              >
                <BsWhatsapp style={{ fontSize: "2rem" }} className="mr-2" />
                <p>+54 3751 613750</p>
              </a>
              <a
                href="mailto:smart.business.arg@gmail.com"
                className=" flex items-center text-left m-3"
                target="blank"
              >
                <AiOutlineMail style={{ fontSize: "2rem" }} className="mr-2" />
                <p>smart.business.arg@gmail.com</p>
              </a>
              <a
                href="https://www.instagram.com/smartbusiness.arg/?hl=es-la"
                target="blank"
                className=" flex items-center text-left m-3"
              >
                <BsInstagram style={{ fontSize: "2rem" }} className="mr-2" />
                <p>smarbusiness.arg</p>
              </a>
              <p className="custom-font-medium mt-10 ml-3">
                {" "}
                Founder:{" "}
                <span className="custom-font-regular ml-1">
                  {" "}
                  Mateo Mohr{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          {showAlert && <AlertMessage />}
        </div>
      ) : (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-none lg:pl-0 lg:pr-0"
          data-aos="fade-down"
        >
          <h3 className="text-left text-2xl custom-font-bold lg:text-4xl lg:mx-auto lg:text-center my-10">
            Ready to take the next step? Contact us.{" "}
          </h3>
          
          <div
            data-aos="fade-down"
            id="calendly"
            className="calendly-inline-widget h-720 mt-calendly"
            ref={calendlyRef}
            data-url="https://calendly.com/smart-agenda/reunion15minutos"
          ></div>

          <div
            id="contact"
            className="flex flex-col lg:flex-row items-center justify-between mb-32"
          >
            <div className="w-full lg:w-2/3 flex items-center justify-center">
              <Form showAndHideAlert={showAndHideAlert} />
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=+543751613750&text=Hello%21%20I%20was%20browsing%20the%20SMART%20Website%20and%20had%20a%20question%2E%2E%2E"
                target="blank"
                className=" flex items-center text-left m-3"
              >
                <BsWhatsapp style={{ fontSize: "2rem" }} className="mr-2" />
                <p>+54 3751 613750</p>
              </a>
              <a
                href="mailto:smart.business.arg@gmail.com"
                className=" flex items-center text-left m-3"
                target="blank"
              >
                <AiOutlineMail style={{ fontSize: "2rem" }} className="mr-2" />
                <p>smart.business.arg@gmail.com</p>
              </a>
              <a
                href="https://www.instagram.com/smartbusiness.arg/?hl=en"
                target="blank"
                className=" flex items-center text-left m-3"
              >
                <BsInstagram style={{ fontSize: "2rem" }} className="mr-2" />
                <p>smartbusiness.arg</p>
              </a>
              <p className="custom-font-medium mt-10 ml-3">
                {" "}
                Founder:{" "}
                <span className="custom-font-regular ml-1">
                  {" "}
                  Mateo Mohr{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          {showAlert && <AlertMessage />}
        </div>
      )}

    </>
  );
};

export default Contact;
