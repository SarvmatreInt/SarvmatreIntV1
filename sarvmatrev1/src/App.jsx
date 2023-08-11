import "./App.css";
import "./index.css";
import "./Pages/GlobalCss/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import InvestorRelation from "./Pages/InvesterRelation/InvestorRelation";
import NewContact from "./Pages/NewContact/NewContact";
import FeaEve from "./Pages/InvesterModule/FeaturedEve/FeaEve";
import PressRelease from "./Pages/InvesterModule/PressRelease/PressRelease";
import NewsModule from "./Pages/InvesterModule/NewsModule/NewsModule";
import AboutSarv from "./Pages/AboutUs/AboutSarvmatre/AboutSarv";
import Footer from "./Pages/GlobalPages/Footer/Footer";
import Navbar from "./Pages/GlobalPages/Navbar/Navbar";
import NewCareersPage from "./Pages/NewCareersPage/NewCareersPage";
import AboutProdley from "./Pages/AboutProdley/AboutProdley";
import { useState } from "react";
import Form from "./Pages/NewContact/Components/ContactTeam/Modal/Form";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [backdrop, setBackdrop] = useState(false);
  return (
    <div className="m-0 p-0">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/investor" element={<InvestorRelation />} />
          <Route
            path="contact"
            element={
              <>
                {backdrop && (
                  <Form
                    onClose={() => {
                      setBackdrop((prev) => !prev);
                    }}
                  />
                )}
                <NewContact
                  onClick={() => {
                    setBackdrop((prev) => !prev);
                  }}
                />
              </>
            }
          />
          <Route path="investor/event" element={<FeaEve />} />
          <Route path="investor/press" element={<PressRelease />} />
          <Route path="investor/news" element={<NewsModule />} />
          <Route path="/about/sarvmatre" element={<AboutSarv />} />
          <Route path="/about/prodley" element={<AboutProdley />} />
          <Route path="/career" element={<NewCareersPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
