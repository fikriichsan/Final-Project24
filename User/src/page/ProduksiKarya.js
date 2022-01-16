import React from "react";
import NaviBar from "../components/Navbar";
import ButtonItem from "../components/Button";
import "../style/button.css"
import { Link } from "react-router-dom";
import Rectangle1 from "../picture/Rectangle1.png";
import Rectangle2 from "../picture/Rectangle2.png";
import Rectangle3 from "../picture/Rectangle3.png";

const buttonBack = {
    title: "Back",
};


function ProduksiKarya() {
  return (
      <div>
          <NaviBar></NaviBar>
          <div >
          <h2 style={{marginLeft:"100px", marginTop:"100px", fontWeight:"600"}}>PRODUKSI KARYA</h2>
          <h5 style={{marginLeft:"100px"}}>Pembelajaran Kontekstual Berbasis Proyek.</h5>
          <h6 style={{marginLeft:"100px", marginTop:"50px", fontWeight:"600"}}>Rangkuman proses produksi proyek/karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Tanggapan fasilitator/guru/sumber belajar</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Paraf</h6>
          </div>

          <div>
          <h2 style={{marginLeft:"100px", marginTop:"70px", fontWeight:"600"}}>Jurnal Proses Produksi</h2>
          <h6 style={{marginLeft:"100px", marginTop:"40px", fontWeight:"600"}}>Hari/tanggal</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Agenda kegiatan</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Lokasi</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Keterangan</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"70px"}}>Bagaimana kamu akan melakukannya: </h6>
          </div>


          <div>
          <h2 style={{marginLeft:"100px", marginTop:"70px", fontWeight:"600"}}>Presentasi karya</h2>
          <h6 style={{marginLeft:"100px", marginTop:"50px"}}>Siswa mempresentasikan karya sebagai artikulasi gagasan. Penyajian karya ini bertujuan agar bisa dinikmati publik sesuai dengan konteks lokalnya.</h6>
          <h6 style={{marginLeft:"100px"}}>Proses ini meliputi beberapa point diantaranya adalah:</h6>
          <h6 style={{marginLeft:"100px"}}>1. Target audience</h6>
          <h6 style={{marginLeft:"100px"}}>2. Ruang presentasi</h6>
          <h6 style={{marginLeft:"100px"}}>3. Dampak karya/ proyek</h6>

          <h6 style={{marginLeft:"100px", marginTop:"40px", fontWeight:"600"}}>Rangkuman proses produksi proyek/karya</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600"}}>Tanggapan fasilitator/guru/sumber belajar</h6>
          <h6 style={{marginLeft:"100px", marginTop:"20px", fontWeight:"600", marginBottom:"100px"}}>Paraf</h6>
          </div>

          <div >
          <h2 style={{marginLeft:"100px", marginTop:"100px", fontWeight:"600"}}>DOKUMENTASI</h2>
          <h5 style={{marginLeft:"100px", marginBottom:"100px"}}>Pembelajaran Kontekstual Berbasis Proyek.</h5>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                  <img style={{width:"300px", height:"270px"}} src={Rectangle1}></img>
                  </div>
                  <div className="col-md-4">
                  <img style={{width:"300px", height:"270px"}} src={Rectangle2}></img>
                  </div>
                  <div className="col-md-4">
                  <img style={{width:"300px", height:"270px", marginBottom:"100px"}} src={Rectangle3}></img>
                  </div>
              </div>
          </div>

          <div>
          <Link to="/RancanganKarya">
            <ButtonItem title={buttonBack.title} style={{marginTop:"-100px", marginLeft:"70px", padding:"20px",lineHeight:"0", borderRadius:"5px"}}></ButtonItem>
          </Link>
          </div>
      </div>
  )
}

export default ProduksiKarya;