import React from "react";
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

  // // Top margin value for the main element, so that all the content can be seen.
  // const [scrollOffset, setScrollOffset] = useState(() => {
  //   if (window.innerWidth >= 768) {
  //     return 86;
  //   } else if (window.innerWidth >= 600) {
  //     return 101;
  //   } else {
  //     return 122;
  //   }
  // });

  return (
    <React.Fragment>
      <Header/>
    </React.Fragment>
    // <React.Fragment>
    //   <Header
    //     showMobileMenu={showMobileMenu}
    //     onToggle={toggle}
    //     onSmartToggle={smartToggleOff}
    //   />
    //   <main style={{ marginTop: `${scrollOffset}px` }}>
    //     <Home />
    //     <About />
    //     <SkillsSection />
    //     <TechnicalProjectsSection />
    //     <SideProjectsSection />
    //     <ContactForm />
    //   </main>
    //   <Footer />
    // </React.Fragment>
  );
}

export default App;
