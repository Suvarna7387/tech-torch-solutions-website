import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Main";
import ContactUs from "./Components/ContactUs";
import ContactUSRoute from "./Components/ContactUSRoute";
import Career from "./Components/Career";
import AboutUS from "./Components/AboutUS";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{marginTop:"90px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/contact" element={<ContactUSRoute />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;
