import React from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";
import ContactForm from "./sections/ContactForm";
import Projects from "./sections/Projects";

/**
 * Render all sections here.
 * 
 * @returns the App.js.
 */
function App() {

  return (
    <React.Fragment>
      <Header/>
      <main>
        <Home />
        <About />
        <SkillsSection />
        <Projects/>
        <ContactForm />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
