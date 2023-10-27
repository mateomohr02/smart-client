import React, { useEffect, useState } from 'react'
import HeroHeader from '../components/HeroHeader'
import DetailDevelop from '../components/DetailDevelop'
import DetailMarketing from '../components/DetailMarketing'
import Solutions from '../components/Solutions'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <HeroHeader/>
      <DetailDevelop id='detail'/>
      <DetailMarketing/>
      <Solutions id='solutions'/>
      <Contact/>
      {windowWidth < 1024 ? '' : <Footer/>}
    </div>
  )
}

export default Home