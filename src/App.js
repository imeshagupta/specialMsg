import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SpecialMsg from "./components/SpecialMsg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/fourthPage" element={<FourthPage />} />
        <Route path="/fifthPage" element={<FifthPage />} />
        <Route path="/specialMsg" element={<SpecialMsg />} />
      </Routes>
    </Router>
  );
}

export default App;
