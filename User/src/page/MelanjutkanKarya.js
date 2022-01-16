import React from "react";
import NaviBar from "../components/Navbar";
import runtutan from "../picture/runtutan.png";
import ButtonItem from "../components/Button";
import "../style/button.css"
import { Link } from "react-router-dom";

const buttonBack = {
  title: "Back",
};

const buttonNext = {
  title: "Next",
};

function MelanjutkanKarya() {
  return (
      <div>
          <NaviBar></NaviBar>
          <div >
          <h2 style={{marginLeft:"100px", marginTop:"100px", fontWeight:"600"}}>Melanjutkan Karya</h2>
          <h6 style={{marginLeft:"100px"}}>Pembelajaran Kontekstual Berbasis Proyek.</h6>
          <h3 className="d-flex justify-content-center" style={{marginTop:"50px"}}>Runtutan Proses Belajar</h3>
          </div>
          <div style={{marginTop:"50px", display:"flex", justifyContent:"center"}}>
                <img style={{width:"600px", height:"350px"}} src={runtutan}></img>
          </div>

          <div>
          <h3 style={{marginLeft:"100px", marginTop:"100px", fontWeight:"600"}}>Kesimpulan Hasil Riset :</h3>
          <h6 style={{marginLeft:"100px", marginTop:"30px", fontWeight:"600"}}>Deskripsi rancangan proyek atau karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Lokasi atau tempat pengerjaan proyek/karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Kolaborator yang akan terlibat dalam
pengerjaan proyek/karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Jadwal Rencana Pengerjaan Proyek/Karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"80px"}}>Bagaimana kamu akan melakukannya: </h6>
          </div>


          <div>
          <h3 style={{marginLeft:"100px", fontWeight:"600"}}>Rangkaian Observasi :</h3>
          <h6 style={{marginLeft:"100px", marginTop:"30px", fontWeight:"600"}}>Deskripsi proses eksperimentasi</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Referensi Karya (Judul karya/ proyek/penemuan dan Hal menarik yang bisa diadaptasi)
</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"100px"}}>Bagaimana kamu akan melakukannya: </h6>
          </div>

          <div>
          <Link to="/Modul6">
            <ButtonItem title={buttonBack.title} style={{marginTop:"-100px", marginLeft:"70px", padding:"20px",lineHeight:"0", borderRadius:"5px"}}></ButtonItem>
          </Link>
          <Link to="/RancanganKarya">
          <ButtonItem title={buttonNext.title} style={{marginTop:"-100px", marginLeft:"820px", padding:"20px",lineHeight:"0", borderRadius:"5px"}}></ButtonItem>
          </Link>
          </div>
      </div>
  )
}

export default MelanjutkanKarya;