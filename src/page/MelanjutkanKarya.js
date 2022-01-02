import React from "react";
import prosesBelajar from "../picture/prosesBelajar.jpg"


function MelanjutkanKarya() {
    return (
      <div>
        <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
          <div>
              <h2 style={{marginTop: "70px", fontWeight:"650"}}>Melanjutkan Karya</h2>
              <p style={{fontSize:"22px"}}>Pembelajaran Kontekstual Berbasis Proyek.</p>
          </div>
        </div>
        {/* --Runtutan Proses Belajar-- */}
        <div className="d-flex justify-content-center">
               <h2 style={{marginTop: "90px", fontWeight:"650", marginBottom:"90px"}}>Runtutan Proses Belajar</h2>
        </div>
        <div className="d-flex justify-content-center" style={{marginLeft:"70px"}}>
          <img style={{width:"700px", height:"400px"}} src={prosesBelajar}></img>
        </div>


        {/* --Hasil Refleksi-- */}

        <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
               <h2 style={{marginTop: "150px", fontWeight:"650"}}>Kesimpulan Hasil Riset</h2>
        </div>
        <div className="Module1" style={{paddingLeft:"100px", paddingRight:"70px", paddingTop:"30px"}}>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Deskripsi rancangan proyek atau karya</p>
        <p style={{backgroundColor: "#BC6ACA", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", color:"#FFFFFF", fontWeight:"600", margin:"0" }}>Lokasi atau tempat pengerjaan proyek/karya</p>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Kolaborator yang akan terlibat dalam pengerjaan proyek/karya</p>
        <p style={{backgroundColor: "#BC6ACA", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", color:"#FFFFFF", fontWeight:"600", margin:"0"}}>Jadwal Rencana Pengerjaan Proyek/Karya</p>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Bagaimana kamu akan melakukannya?</p>
      </div>



      {/* --Rangkaian Observasi-- */}

      <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
               <h2 style={{marginTop: "70px", fontWeight:"650"}}>Rangkaian Observasi</h2>
        </div>
        <div className="Module1" style={{paddingLeft:"100px", paddingRight:"70px", paddingTop:"30px", paddingBottom:"150px"}}>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Deskripsi proses eksperimentasi</p>
        <p style={{backgroundColor: "#BC6ACA", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", color:"#FFFFFF", fontWeight:"600", margin:"0" }}>Referensi Karya <br></br>Judul karya/ proyek/penemuan dan Hal menarik yang bisa diadaptasi</p>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Bagaimana kamu akan melakukannya?</p>
      </div>

      </div>
    );
  }
  
  export default MelanjutkanKarya;