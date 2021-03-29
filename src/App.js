import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Hero />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
