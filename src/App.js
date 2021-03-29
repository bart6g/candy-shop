import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <Router>
      <Hero />
      <Content />
    </Router>
  );
};

export default App;
