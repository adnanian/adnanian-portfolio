import React from "react";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
import Home from "./sections/Home";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
