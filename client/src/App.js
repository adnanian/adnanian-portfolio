import React, { useEffect, useState } from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";

function App() {
  const [scrollOffset, setScrollOffset] = useState();

  useEffect(() => {
    const handleResize = () => {
        setScrollOffset(() => document.querySelector('header').offsetHeight);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <React.Fragment>
      <Header/>
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
