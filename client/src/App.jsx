import React from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";
import ContactForm from "./sections/ContactForm";
import Projects from "./sections/Projects";
import AddData from "./sections/AddData";

/**
 * Render all sections here.
 * 
 * @returns the App.js.
 */
function App() {

  console.log(process.env.NODE_ENV);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsSection />
        <Projects />
        <ContactForm />
        {process.env.NODE_ENV === "development" ? <AddData /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
