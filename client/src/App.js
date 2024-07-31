import React, { useEffect, useState } from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";
import TechnicalProjectsSection from "./sections/TechnicalProjectsSection";
import SideProjectsSection from "./sections/SideProjectsSection";
import ContactForm from "./sections/ContactForm";

/**
 * Render all sections here.
 * 
 * @returns the App.js.
 */
function App() {

  // Top margin value for the main element, so that all the content can be seen.
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

  /**
   * Displays/hide the hamburger menu.
   */
  const toggle = () => {
    setShowMobileMenu((isOpen) => !isOpen);
  }

  /**
   * Forcibly hides the hamburger menu.
   */
  const smartToggleOff = () => {
    if (showMobileMenu) {
      setShowMobileMenu(() => false);
    }
  }

  useEffect(() => {

    /**
     * Sets a new top margin value for the main content, based on the height of the header.
     */
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
      <main style={{ marginTop: `${scrollOffset}px` }}>
        <Home />
        <About />
        <SkillsSection />
        <TechnicalProjectsSection />
        <SideProjectsSection />
        <ContactForm />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
