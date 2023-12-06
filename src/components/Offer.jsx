import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AOS from "aos";

const Offer = () => {
  const globalLang = useSelector((state) => state.languageReducer.language);

  const [lang, setLang] = useState(globalLang);

  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);
  
  return (
    <>
    {lang === "Es" ? (
    <div className="flex flex-col mb-12 items-center pl-28 lg:pl-0" data-aos="fade-down">
      <h1 className="w-full pt-4 lg:text-center text-2xl custom-font-bold lg:text-4xl lg:pb-20">
        Nuestros Planes para Digitalizar tu Negocio
      </h1>
      <div className="flex flex-col lg:flex-row lg:px-64">
        <div className="mt-8 lg:mt-0 lg:mr-8 p-8 text-center font-custom text-lg m-auto w-plan sm:w-fit border sm:rounded-3xl bg-blue-200 ">
          <h3 className="text-2xl font-medium">Plan Standard <span className="hidden sm:inline">de Desarrollo</span></h3>
          <div className="sm:text-left my-4">
            <p className='text-sm sm:text-lg'>- Diseño Web Personalizado</p>
            <p className='text-sm sm:text-lg'>- Optimización para Móbiles</p>
            <p className='text-sm sm:text-lg'>- SEO Avanzado</p>
            <p className='text-sm sm:text-lg'>- Redes Sociales Integradas</p>
            <p className='text-sm sm:text-lg'>- Contenido optimizado para convertir</p>
            <p className='text-sm sm:text-lg'>- Dominio, Alojamiento y Correo Profesional</p>
            <p className='text-sm sm:text-lg'>- Configuración de Google Search Console</p>
            <p className='text-sm sm:text-lg'>- Plan de mantinimiento hecho a medida</p>
          </div>
          <button className="text-center text-xl text-white w-96 my-2 custom-font-light bg-blue-600 rounded-full p-4 hover:bg-blue-800 transition duration-300 ease-in-out">
            <Link to="/contact">Consultanos</Link>
          </button>
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-8 p-8 text-center font-custom text-lg m-auto w-plan sm:w-fit border rounded-3xl bg-blue-200 ">
          <h3 className="text-2xl font-medium">Plan Avanzado <br className="sm:hidden"/>+ Publicidad</h3>
          <p className="my-4">Plan Standard de Desarrollo</p>
          <p>+</p>
          <div className="sm:text-left my-4">
            <p className='text-sm sm:text-lg'>- Configuración de Google My Business</p>
            <p className='text-sm sm:text-lg'>- Creación de Campañas Publicitarias </p>
            <p className='text-sm sm:text-lg'>- Seguimientos de Conversiones </p>
            <p className='text-sm sm:text-lg'>- Reportes Mensuales de Campañas </p>
            <br />
          </div>
          <button className="text-center text-xl text-white w-96 my-2 custom-font-light bg-blue-600 rounded-full p-4 hover:bg-blue-800 transition duration-300 ease-in-out">
            <Link to="/contact">Consultanos</Link>
          </button>
        </div>
      </div>
    </div>
    ) : (

      <div className="flex flex-col mb-12 items-center pl-28 lg:pl-0" data-aos="fade-down">
  <h1 className="w-full pt-4 lg:text-center text-2xl custom-font-bold lg:text-4xl lg:pb-20">
    Our Plans to Digitize Your Business
  </h1>
  <div className="flex flex-col lg:flex-row lg:px-64">
    <div className="mt-8 lg:mt-0 lg:mr-8 p-8 text-center font-custom text-lg m-auto w-plan sm:w-fit border sm:rounded-3xl bg-blue-200">
      <h3 className="text-2xl font-medium">Standard Development <br className="sm:hidden"/> Plan</h3>
      <div className="sm:text-left my-4">
        <p className="text-sm sm:text-lg">- Custom Web Design</p>
        <p className="text-sm sm:text-lg">- Mobile Optimization</p>
        <p className="text-sm sm:text-lg">- Advanced SEO</p>
        <p className="text-sm sm:text-lg">- Integrated Social Media</p>
        <p className="text-sm sm:text-lg">- Conversion-Optimized Content</p>
        <p className="text-sm sm:text-lg">- Domain, Hosting, and Professional Email</p>
        <p className="text-sm sm:text-lg">- Google Search Console Setup</p>
        <p className="text-sm sm:text-lg">- Tailored Maintenance Plan</p>
      </div>
      <button className="text-center text-xl text-white w-96 my-2 custom-font-light bg-blue-600 rounded-full p-4 hover:bg-blue-800 transition duration-300 ease-in-out">
        <Link to="/contact">Contact Us</Link>
      </button>
    </div>

    <div className="mt-8 lg:mt-0 lg:ml-8 p-8 text-center font-custom text-lg m-auto w-plan sm:w-fit border rounded-3xl bg-blue-200">
      <h3 className="text-2xl font-medium">Advanced Plan <br className="sm:hidden" />+ Advertising</h3>
      <p className="my-4">Standard Development Plan</p>
      <p>+</p>
      <div className="sm:text-left my-4">
        <p className="text-sm sm:text-lg">- Google My Business Setup</p>
        <p className="text-sm sm:text-lg">- Creation of Advertising Campaigns</p>
        <p className="text-sm sm:text-lg">- Conversion Tracking</p>
        <p className="text-sm sm:text-lg">- Monthly Campaign Reports</p>
        <br />
      </div>
      <button className="text-center text-xl text-white w-96 my-2 custom-font-light bg-blue-600 rounded-full p-4 hover:bg-blue-800 transition duration-300 ease-in-out">
        <Link to="/contact">Contact Us</Link>
      </button>
    </div>
  </div>
</div>


    )}
    </>
  );
};

export default Offer;
