import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Trend from "./Pages/Trend/Trend";
import Work from "./Pages/Work/Work";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
