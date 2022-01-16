import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Module from "./page/Module";
import Kelas from "./page/Kelas";
import SignupPage from "./page/Admin/SignupPage";
import SigninPage from "./page/SigninPage";
import Modul5 from "./page/Modul5";
import Modul6 from "./page/Modul6";
import MelanjutkanKarya from "./page/MelanjutkanKarya";
import RancanganKarya from "./page/RancanganKarya"
import ProduksiKarya from "./page/ProduksiKarya"
import IdeKarya from "./page/IdeKarya"
import Refleksi from "./page/Refleksi"
import Riset from "./page/Riset"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/module" element={<Module />}></Route>
        <Route path="/kelas" element={<Kelas />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        <Route path="/SigninPage" element={<SigninPage />}></Route>
        <Route path="/Modul5" element={<Modul5/>}></Route>
        <Route path="/Modul6" element={<Modul6 />}></Route>
        <Route path="/MelanjutkanKarya" element={<MelanjutkanKarya />}></Route>
        <Route path="/RancanganKarya" element={<RancanganKarya />}></Route>
        <Route path="/ProduksiKarya" element={<ProduksiKarya />}></Route>
        
        <Route path="/IdeKarya" element={<IdeKarya />}></Route>
        <Route path="/Refleksi" element={<Refleksi />}></Route>
        <Route path="/Riset" element={<Riset />}></Route>
      </Routes>
    </div>
  );
}

export default App;
