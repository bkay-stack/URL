import React from "react";
import Nav from "./componets/nav/Nav";
import Shortner from "./componets/shortner/Shortner";
import Stat from "./componets/stat/Stat";
import Footer from "./componets/footer/Footer";
import Boost from "./componets/boost/Boost";
const App = () => {
  return (
    <div className="container">
      <Nav />
      <Shortner />
      <Stat />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
