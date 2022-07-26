import './assets/css/style.css';
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import About from "./components/about";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="container">
      <Header />
      <ParallaxProvider>
        <Routes>
          <Route className="navlink" exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ParallaxProvider>
      <Footer />
    </div>
  );
}

export default App;
