import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineCampaign } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import AOS from "aos";

const Solutions = () => {
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
          className="flex flex-col items-center justify-center lg:mb-20 pl-28 lg:pl-0 pr-4 lg:pr-0 "
          id="solutions"
          data-aos="fade-down"
        >
          <div className="lg:w-3/4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              Desbloquea todo el potencial de tu negocio con nosotros
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              Creemos en la transformación digital como la clave para el éxito
              en línea. Ofrecemos un enfoque integral que combina el desarrollo
              web excepcional y la creación y gestión experta de campañas
              publicitarias. Con esto logramos aumentar la visibilidad en línea,
              generar leads de calidad y aumentar las ventas de tu negocio,
              estamos aquí para impulsar tu éxito en línea. <br />
              Transformá tu negocio, convertite{" "}
              <span className="custom-font-medium">SMART</span>.
            </p>
          </div>
          <div className="w-3/4 flex flex-col lg:flex-row justify-between mt-5">
            <div className="my-4 mt-0 lg:my-0">
              <TfiWorld style={{ fontSize: "2.5rem" }} className="mb-2" />
              <h3 className="custom-font-bold text-lg">Desarrollo Web</h3>
              <p className="custom-font-light">
                {" "}
                Diseño y creación de sitios web que transmiten la identidad de
                tu marca.{" "}
              </p>
            </div>
            <div className="my-4 lg:my-0">
              <MdOutlineCampaign
                style={{ fontSize: "2.5rem" }}
                className="mb-2"
              />
              <h3 className="custom-font-bold text-lg">
                Gestión Campañas Publicitarias
              </h3>
              <p className="custom-font-light">
                {" "}
                Creación, gestión y optimización de campañas de Google Ads a
                medida.{" "}
              </p>
            </div>
            <div className="my-4 lg:my-0">
              <FiSettings style={{ fontSize: "2.5rem" }} className="mb-2" />
              <h3 className="custom-font-bold text-lg">Optimización SEO</h3>
              <p className="custom-font-light"> Próximamente... </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center lg:mb-20 pl-28 lg:pl-0 pr-4 lg:pr-0"
          id="solutions"
          data-aos="fade-down"
        >
          <div className="lg:w-3/4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl lg:pr-4">
              Unlock the full potential of your business with us
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              We believe in digital transformation as the key to online success.
              We offer a comprehensive approach that combines exceptional web
              development and expert creation and management of advertising
              campaigns. With this, we increase online visibility, generate
              quality leads, and boost your business sales. We are here to drive
              your online success. <br />
              Transform your business, become{" "}
              <span className="custom-font-medium">SMART</span>.
            </p>
          </div>
          <div className="w-3/4 flex flex-col lg:flex-row justify-between mt-5">
            <div className="my-4 mt-0 lg:my-0">
              <TfiWorld style={{ fontSize: "2.5rem" }} className="mb-2" />
              <h3 className="custom-font-bold text-lg">Web Development</h3>
              <p className="custom-font-light">
                {" "}
                Design and creation of websites that convey your brand identity.{" "}
              </p>
            </div>
            <div className="my-4 lg:my-0">
              <MdOutlineCampaign
                style={{ fontSize: "2.5rem" }}
                className="mb-2"
              />
              <h3 className="custom-font-bold text-lg">
                Advertising Campaign Management
              </h3>
              <p className="custom-font-light">
                {" "}
                Tailored creation, management, and optimization of Google Ads
                campaigns.{" "}
              </p>
            </div>
            <div className="my-4 lg:my-0">
              <FiSettings style={{ fontSize: "2.5rem" }} className="mb-2" />
              <h3 className="custom-font-bold text-lg">SEO Optimization</h3>
              <p className="custom-font-light"> Coming soon... </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Solutions;
