import React, { useEffect, useState } from "react";
import hero from "../assets/hero.jpg";
import AOS from "aos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroHeader = () => {
  const navigate = useNavigate();
  const globalLang = useSelector((state) => state.languageReducer.language);

  const [lang, setLang] = useState(globalLang);

  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {lang === "Es" ? (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-row lg:pl-0 lg:pr-0"
          data-aos="fade-down"
        >
          <div className="lg:w-1/2 z-0 flex flex-col items-center justify-center relative lg:bottom-16">
            <p className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              Transformamos negocios a través de soluciones digitales
            </p>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              Nos especializamos en ayudar a negocios a digitalizarse y atraer
              tráfico a través de campañas de publicidad efectivas.
            </p>
            <button className="text-center w-full lg:w-1/2 my-4 text-xl text-white custom-font-light border bg-blue-600 rounded-full p-4 hover:bg-blue-800 transition duration-300 ease-in-out">
              <a href="#calendly">
                Agendá tu consultoría{" "}
                <span className="font-semibold">GRATUITA</span>
              </a>
            </button>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={hero} alt="Hero" className="h-4/5 lg:h-89" />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-row lg:pl-0 lg:pr-0"
          data-aos="fade-down"
        >
          <div className="lg:w-1/2 z-0 flex flex-col items-center justify-center relative lg:bottom-16">
            <p className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              Transforming Businesses through Digital Solutions
            </p>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              We specialize in helping businesses digitize and attract traffic
              through effective advertising campaigns.
            </p>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={hero} alt="Hero" className="h-4/5 lg:h-89" />
          </div>
        </div>
      )}
    </>
  );
};
export default HeroHeader;
