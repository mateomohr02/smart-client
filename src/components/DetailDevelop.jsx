import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { BsBarChart } from "react-icons/bs";
import Design from "../assets/design.jpg";

import AOS from "aos";

const DetailDevelop = () => {
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
          id="detail"
        >
          <div className="lg:w-1/2 z-0 flex flex-col items-center justify-center relative lg:bottom-16">
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              {" "}
              La Identidad de Tu Marca en la Web{" "}
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              Diseñamos y creamos sitios web profesionales que marcan la
              diferencia. Combinamos creatividad con estrategias de marketing
              probadas para no solo atraer a los usuarios, sino que también
              retenerlos y lograr conversiones.
            </p>
            <div className="flex justify-evenly lg:justify-between mt-px mb-4 lg:w-1/2">
              <div className="w-1/2">
                <LiaPencilRulerSolid
                  style={{ fontSize: "3rem" }}
                  className="mb-2"
                />{" "}
                <p className="custom-font-bold text-lg">Diseño</p>{" "}
                <p className="custom-font-light">
                  Sitios web atractivos, amigables con el usuario, con diseño
                  adaptativo y optimizados.
                </p>
              </div>
              <div className="w-1/2">
                <BsBarChart style={{ fontSize: "3rem" }} className="mb-2" />
                <p className="custom-font-bold text-lg">Marketing</p>{" "}
                <p className="custom-font-light">
                  Tráfico específico hacia el sitio, aumentando la visibilidad y
                  conversiones.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={Design} alt="Design" className="h-4/5 lg:h-89" />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col pl-28 pr-4 lg:flex-row lg:pl-0 lg:pr-0"
          data-aos="fade-down"
          id="detail"
        >
          <div className="lg:w-1/2 z-0 flex flex-col items-center justify-center relative lg:bottom-16">
            <h2 className="text-left w-full pt-4 text-2xl lg:w-1/2 custom-font-bold lg:text-4xl">
              {" "}
              Your Brand Identity on the Web{" "}
            </h2>
            <p className="text-left w-full lg:w-1/2 my-4 text-lg custom-font-light">
              We design and create professional websites that make a difference.
              We combine creativity with proven marketing strategies to not only
              attract users but also retain them and achieve conversions.
            </p>
            <div className="flex justify-evenly lg:justify-between mt-px mb-4 lg:w-1/2">
              <div className="w-1/2">
                <LiaPencilRulerSolid
                  style={{ fontSize: "3rem" }}
                  className="mb-2"
                />{" "}
                <p className="custom-font-bold text-lg">Design</p>{" "}
                <p className="custom-font-light">
                  Attractive, user-friendly websites with responsive design and
                  optimization.
                </p>
              </div>
              <div className="w-1/2">
                <BsBarChart style={{ fontSize: "3rem" }} className="mb-2" />
                <p className="custom-font-bold text-lg">Marketing</p>{" "}
                <p className="custom-font-light">
                  Targeted traffic to the website, increasing visibility and
                  conversions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center lg:w-1/2 lg:flex-none lg:mb-0 lg:justify-start z-negative">
            <img src={Design} alt="Design" className="h-4/5 lg:h-89" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailDevelop;
