import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Module from "./page/Module";
import Kelas from "./page/Kelas";
import SignupPage from "./page/Admin/SignupPage";
import SigninPage from "./page/SigninPage";
import Modul5 from "./page/Modul5";
import Modul6 from "./page/Modul6";
import ClassAdmin from "./components/classAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninPage />}></Route>
        <Route path="/module" element={<Module />}></Route>
        <Route path="/kelas" element={<Kelas />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        <Route path="/Modul5" element={<Modul5 />}></Route>
        <Route path="/Modul6" element={<Modul6 />}></Route>
        <Route path="/classAdmin" element={<ClassAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
