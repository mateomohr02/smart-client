import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import marketing from "../assets/marketing.jpg";

import AOS from "aos";

const DetailMarketing = () => {
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
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              {" "}
              Público Objetivo dirigido al Sitio
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              Atraemos una audiencia específica y altamente relevante, lo que se
              traduce en un mayor retorno de inversión y resultados efectivos
              para tu negocio en línea.
            </p>
            <div className="flex justify-evenly lg:justify-between mt-px mb-4 lg:w-1/2">
              <div className="w-1/2">
                <p className="custom-font-bold text-lg">Aumento de tráfico</p>{" "}
                <p className="custom-font-light pr-px lg:pr-4">
                  Nuestras campañas de publicidad con Google Ads ayudan a llegar
                  a la audiencia correcta y aumentar tus conversiones.{" "}
                </p>
              </div>
              <div className="w-1/2">
                <p className="custom-font-bold text-lg">Maximizar ROI</p>{" "}
                <p className="custom-font-light">
                  Con nuestras estrategias <br />
                  de optimización nos <br />
                  aseguramos que tu inversión <br /> de resultados.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={marketing} alt="Marketing" className="h-4/5 lg:h-89 " />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-row lg:pl-0 lg:pr-0"
          data-aos="fade-down"
        >
          <div className="lg:w-1/2 z-0 flex flex-col items-center justify-center relative lg:bottom-16">
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              {" "}
              Target Audience Directed to the Website
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              We attract a specific and highly relevant audience, resulting in a
              higher return on investment and effective results for your online
              business.
            </p>
            <div className="flex justify-evenly lg:justify-between mt-px mb-4 lg:w-1/2">
              <div className="w-1/2">
                <p className="custom-font-bold text-lg">Traffic Increase</p>{" "}
                <p className="custom-font-light pr-px lg:pr-4">
                  Our Google Ads advertising campaigns help reach the right
                  audience and increase your conversions.
                </p>
              </div>
              <div className="w-1/2">
                <p className="custom-font-bold text-lg">Maximize ROI</p>{" "}
                <p className="custom-font-light">
                  With our optimization strategies, we ensure that your
                  investment yields results.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={marketing} alt="Marketing" className="h-4/5 lg:h-89 " />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMarketing;
