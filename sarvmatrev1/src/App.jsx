import "./App.css";
import "./index.css";
import "./Pages/GlobalCss/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/GlobalPages/Navbar/Navbar";
import Homepage from "./Pages/HomePage/Homepage";
import InvestorRelation from "./Pages/InvesterRelation/InvestorRelation";
import NewContact from "./Pages/NewContact/NewContact";
import FeaEve from "./Pages/InvesterModule/FeaturedEve/FeaEve";
import PressRelease from "./Pages/InvesterModule/PressRelease/PressRelease";
import NewsModule from "./Pages/InvesterModule/NewsModule/NewsModule";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="m-0 p-0">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/invester" element={<InvestorRelation/>} />
          <Route path="newContact" element={<NewContact/>} />
          <Route path="invester/event" element={<FeaEve/> }/>
          <Route path="invester/press" element={<PressRelease/> }/>
          <Route path="invester/news" element={<NewsModule/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
