import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logow.svg";
import { Link }from 'react-router-dom'
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions/changeLanguage";

import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const MobileNavBar = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [titleOpen, setTitleOpen] = useState(false);
  const [lang, setPageLang] = useState("Es");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languageMenuMobileRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setTitleOpen((prevTitleOpen) => !prevTitleOpen);
      }, 200);
  
      return () => {
        clearTimeout(timer);
      };
    } else {
      setTitleOpen(false);
    }
  }, [isOpen, setTitleOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        languageMenuMobileRef.current &&
        !languageMenuMobileRef.current.contains(event.target)
      ) {
        closeLanguageMenu();
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    // Agregar el manejador de eventos cuando el menú está abierto
    if (isLangOpen || isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      // Eliminar el manejador de eventos cuando el menú está cerrado
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isLangOpen, isOpen]);

  const changeLang = (language) => {
    if (language === lang) {
      closeLanguageMenu();
      return;
    } else {
      dispatch(changeLanguage(language));
      setPageLang(language);
      closeLanguageMenu();
    }
  };

  const closeLanguageMenu = () => {
    setIsLangOpen(false);
  };

  const containerWidth = isOpen ? "w-60" : "w-24";
  const closedClass = "hidden";
  const openClass =
    "z-10 block overflow-hidden bg-smart bottom-0 absolute w-40 h-24 border border-white border-4 flex flex-col items-center justify-evenly left-20";

  const navHeight = isOpen ? "h-full" : "h-2x";

  return (
    <div
      className={`top-0 ${navHeight} flex flex-col justify-between fixed w-24 bg-smart z-50 ${containerWidth} border border-white border-4 border-y-0 border-l-0 transition-all duration-300 `}
      ref={languageMenuMobileRef}
    >
      <div>
        <div
          className="w-full items-center justify-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {" "}
          <div className="flex items-center w-full">
            <img src={logo} alt="Logo" className="w-16 my-10 ml-3" />
            <p
              className={`m-4 custom-font-bold text-2xl text-white ${
                titleOpen ? "opacity-100" : "hidden"
              }`}
            >
              {" "}
              SMART{" "}
            </p>
          </div>
        </div>

        {lang === "Es" ? (
          <div className="flex flex-col">
            <Link
              to="/"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white`}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Nosotros{" "}
            </Link>
            <Link
              to="/solutions"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white `}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Soluciones{" "}
            </Link>
            <Link
              to="/contact"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white`}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Contacto{" "}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <Link
              to="/"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white`}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              About Us{" "}
            </Link>
            <Link
              to="/solutions"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white `}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Solutions{" "}
            </Link>
            <Link
              to="/contact"
              className={`${
                titleOpen ? "opacity-100" : "hidden"
              } p-3 custom-font-regular text-xl text-white`}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Contact{" "}
            </Link>
          </div>
        )}
      </div>

      {/* BTN LANGUAGE */}

      <div
        className={`w-full flex items-center mb-10 ${
          titleOpen ? "opacity-100" : "hidden"
        }`}
      >
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className={`flex items-center w-16 justify-center custom-font-regular text-xl text-white`}
        >
          {lang} {isLangOpen ? <IoMdArrowDropright /> : <IoMdArrowDropdown />}
        </button>
        <div className={isLangOpen ? openClass : closedClass}>
          <button
            onClick={() => {
              changeLang("Es");
              setIsOpen(false);
            }}
            className="custom-font-regular text-xl text-white"
          >
            {" "}
            Español{" "}
          </button>
          <button
            onClick={() => {
              changeLang("En");
              setIsOpen(false);
            }}
            className="custom-font-regular text-xl text-white"
          >
            {" "}
            English{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
