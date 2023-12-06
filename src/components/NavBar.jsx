import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

import { changeLanguage } from '../redux/actions/changeLanguage'

import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/logo.svg'


const NavBar = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [lang, setPageLang] = useState('Es')
  const [isOpen, setIsOpen] = useState(false)

  const closedClass = 'hidden'
  const openClass = 'z-10 block overflow-hidden bg-white absolute w-20 h-20 rounded-md flex flex-col items-center justify-evenly right-4 drop-shadow-c';
  
  const hoverNav = 'bg-blue-300 rounded-full transition duration-300 ease-in-out'
  
  const languageMenuRef = useRef(null);

  // Función para cerrar el menú de idiomas
  const closeLanguageMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        closeLanguageMenu();
      }
    };

    // Agregar el manejador de eventos cuando el menú está abierto
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Eliminar el manejador de eventos cuando el menú está cerrado
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const changeLang = (language) => {
    if (language === lang ) {
      closeLanguageMenu();
      return
    }
    else {
      dispatch(changeLanguage(language))
      setPageLang(language)
      closeLanguageMenu();
    }
  }


  return (
    <div id='header'className='z-20 relative flex justify-between w-100% h-24 px-20 items-center border border-t-0 border-x-0 border-white bg-blue-200 '>
      
      <button><div onClick={() => navigate('/')}className='flex items-center w-16 '><img src={logo} alt="Logo" className='w-16' /> <p className='m-4 custom-font-bold text-5xl'> SMART </p></div></button>
      
      {/* Switch Language */}

      {
        lang === 'Es' ?
          <div>
            <Link to="/home" className={`p-3 custom-font-regular text-xl hover:bg-blue-300 hover:rounded-full hover:transition hover:duration-300 hover:ease-in-out`}> Sobre Nosotros </Link>
            <Link to="/solutions" className={`p-3 custom-font-regular text-xl hover:${hoverNav}`}> Soluciones </Link>
            <Link to="/contact" className={`p-3 custom-font-regular text-xl hover:${hoverNav}`}> Contacto </Link>
          </div>
        : 
        <div>
        <Link to="/home" className={`p-3 custom-font-regular text-xl hover:bg-blue-300 hover:rounded-full hover:transition hover:duration-300 hover:ease-in-out`}> About Us </Link>
        <Link to="/solutions" className={`p-3 custom-font-regular text-xl hover:${hoverNav}`}> Solutions </Link>
        <Link to="/contact" className={`p-3 custom-font-regular text-xl hover:${hoverNav}`}> Contact </Link>
      </div>

      }

      <div className='relative' ref={languageMenuRef}>
        <button onClick={() => setIsOpen(!isOpen)} className={`p-3 flex items-center w-16 justify-center custom-font-regular text-xl hover:${hoverNav}`}>
          {lang} {isOpen ? <IoMdArrowDropright/> : <IoMdArrowDropdown/>}
        </button>
        <div className={isOpen ? openClass : closedClass}>
          <button onClick={() => changeLang('Es')} className='custom-font-light hover:drop-shadow-c'> Español </button>
          <button onClick={() => changeLang('En')} className='custom-font-light hover:drop-shadow-c'> English </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar