import React from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";
import About from "./sections/About";

function App() {

  return (
    <React.Fragment>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
