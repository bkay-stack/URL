import React from "react";
import Nav from "./componets/nav/Nav";
import Stat from "./componets/stat/Stat";
import Footer from "./componets/footer/Footer";
import Boost from "./componets/boost/Boost";
import Shortener from "./componets/shortner/Shortener";
const App = () => {
  return (
    <div className="container">
      <Nav />
      <Shortener />
      <Stat />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
