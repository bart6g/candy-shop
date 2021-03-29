import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Hero />
    </Router>
  );
};

export default App;
