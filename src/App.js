import './assets/css/style.css';
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Homepage from "./components/homepage";
import Experiences from "./components/experiences";
import Hitme from "./components/hitme";
import About from "./components/about";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="container parallax">
      <Header />
      <ParallaxProvider>
        <Routes>
          <Route className="navlink" exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/hitme" element={<Hitme />} />
        </Routes>
      </ParallaxProvider>
      
    </div>
  );
}

export default App;
