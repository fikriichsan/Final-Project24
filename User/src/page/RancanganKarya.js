import React from "react";
import NaviBar from "../components/Navbar";
import ButtonItem from "../components/Button";
import "../style/button.css"
import { Link } from "react-router-dom";

const buttonBack = {
    title: "Back",
};

const buttonNext = {
    title: "Next",
};

function RancanganKarya() {
  return (
      <div>
          <NaviBar></NaviBar>
          <div >
          <h2 style={{marginLeft:"100px", marginTop:"100px", fontWeight:"600"}}>RANCANGAN KARYA ATAU PROYEK</h2>
          <h5 style={{marginLeft:"100px"}}>Pembelajaran Kontekstual Berbasis Proyek.</h5>
          <h6 style={{marginLeft:"100px", marginTop:"30px", fontWeight:"600"}}>Deskripsi :</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Sketsa :</h6>
          </div>

          <div>
          <h2 style={{marginLeft:"100px", marginTop:"70px", fontWeight:"600"}}>Temuan teknologi</h2>
          <h5 style={{marginLeft:"100px"}}>Teknis, Keterampilan, Keahlian dasar.</h5>
          <h6 style={{marginLeft:"100px", marginTop:"40px", fontWeight:"600"}}>Deskripsi singkat temuan teknologi :</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Sumber belajar:</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Durasi proses belajar:</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"70px"}}>Jadwal Rencana Pengerjaan Proyek/Karya</h6>
          </div>


          <div>
          <h2 style={{marginLeft:"100px", marginTop:"70px", fontWeight:"600"}}>Integrasi Mata Pelajaran</h2>
          <h5 style={{marginLeft:"100px"}}>Teknis, Keterampilan, Keahlian dasar.</h5>
          <h6 style={{marginLeft:"100px", marginTop:"40px", fontWeight:"600"}}>Subjek yang dipelajari</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Mapel yang terkait</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Guru Mapel</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"100px"}}>Alasan keterkaitan dengan mata pelajaran</h6>
          </div>

          <div>
          <Link to="/MelanjutkanKarya">
            <ButtonItem title={buttonBack.title} style={{marginTop:"-100px", marginLeft:"70px", padding:"20px",lineHeight:"0", borderRadius:"5px"}}></ButtonItem>
          </Link>
          <Link to="/ProduksiKarya">
          <ButtonItem title={buttonNext.title} style={{marginTop:"-100px", marginLeft:"820px", padding:"20px",lineHeight:"0", borderRadius:"5px"}}></ButtonItem>
          </Link>
          </div>
      </div>
  )
}

export default RancanganKarya;