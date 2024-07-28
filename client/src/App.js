import React, { useEffect, useState } from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";

function App() {
  const [scrollOffset, setScrollOffset] = useState(() => {
    if (window.innerWidth >= 768) {
      return 86;
    } else if (window.innerWidth >= 600) {
      return 101;
    } else {
      return 122;
    }
  });

  const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggle = () => {
        setShowMobileMenu((isOpen) => !isOpen);
    }

    const smartToggleOff = () => {
        if (showMobileMenu) {
            setShowMobileMenu(() => false);
        }
    }

  useEffect(() => {
    const handleResize = () => {
        setScrollOffset(() => document.querySelector('header').offsetHeight);
        smartToggleOff();
    }
    

    window.addEventListener('resize', handleResize);
  });

  return (
    <React.Fragment>
      <Header
        showMobileMenu={showMobileMenu}
        onToggle={toggle}
        onSmartToggle={smartToggleOff}
      />
      <main style={{marginTop: `${scrollOffset}px`}}>
        <Home/>
        <About/>
        <SkillsSection/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
