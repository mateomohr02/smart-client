import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

const AlertMessage = () => {
  let message = useSelector((state) => state.contactReducer.message);
  const globalLang = useSelector((state) => state.languageReducer.language);

  const [lang, setLang] = useState(globalLang)

  useEffect(() => {
    setLang(globalLang)
  },[globalLang])

  const portalRoot = document.getElementById('alert-portal');

  const [position, setPosition] = useState('top-negative')
  //const [position, setPosition] = useState('top-upper')


  if (lang === 'En') {
    message = 'Email sended Succesfully' 
  }

  useEffect(() => {
    setTimeout(() => {
      setPosition('top-upper')
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        setPosition('top-negative')
      }, 100)
    }, 2500)
  }, [])

  return ReactDOM.createPortal(
  <div className={`${position} fixed w-screen h-20 bg-white border border-smart border-8 border-t-0 border-x-0 z-50 transform transition-all duration-300 ease-in-out flex items-center justify-center`}>
    <p className='text-black text-xl text-center custom-font-bold'>{message}</p>
  </div>, portalRoot);
};

export default AlertMessage;
