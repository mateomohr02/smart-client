import React from 'react'
import logo from "../assets/logo.svg";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=' h-40 flex items-center justify-between border border-black border-x-0 border-b-0 px-24'>
        <a href="#header"><img src={logo} alt="Logo" className='w-24'/></a>

        <a href="https://www.instagram.com/smartbusiness.arg/?hl=es-la" target='blank'><BsInstagram style={{ fontSize: '3rem' }} className='p-1 hover:rounded-xl hover:bg-blue-200 hover:transition hover:duration-300 hover:ease-in-out'/></a>
    </div>
  )
}

export default Footer