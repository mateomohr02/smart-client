import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/Mobile/MobileNavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';

function App() {
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
      {windowWidth < 1024 ? <MobileNavBar /> : <NavBar />}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
}

export default App;

