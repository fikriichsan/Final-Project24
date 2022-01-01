import React from "react";
import mengaca from "../picture/mengaca.jpg";
import runtutanBelajar from "../picture/runtutanBelajar.jpg"


function Refleksi() {
    return (
      <div>
        <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
          <div>
              <h2 style={{marginTop: "70px", fontWeight:"650"}}>REFLEKSI</h2>
              <p style={{fontSize:"22px"}}>Pembelajaran Kontekstual Berbasis Proyek.</p>
          </div>
        </div>
        {/* --Runtutan Proses Belajar-- */}
        <div className="d-flex justify-content-center" style={{marginLeft:"100px"}}>
               <h2 style={{marginTop: "90px", fontWeight:"650", marginBottom:"90px"}}>Runtutan Proses Belajar</h2>
        </div>
        <div className="d-flex justify-content-center">
          <img style={{width:"600px", height:"350px", marginBottom:"50px"}} src={runtutanBelajar}></img>
        </div>



        {/* --Proses Refleksi-- */}

        <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
               <h2 style={{marginTop: "90px", fontWeight:"650"}}>Proses Refleksi</h2>
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p style={{marginLeft:"25px", paddingTop:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nibh et, eget neque. Aliquet nunc mattis auctor mauris amet. Eget cursus pharetra dignissim sed facilisis aliquet curabitur. Nisl, malesuada convallis convallis suspendisse sit laoreet. Facilisis dictum commodo proin elementum. Ullamcorper tristique habitant pellentesque eleifend nec. Sodales aliquam ultrices diam ac id. Vitae eget amet sed vitae volutpat facilisis nunc, gravida.<br></br> <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nibh et, eget neque. Aliquet nunc mattis auctor mauris amet. Eget cursus pharetra dignissim sed facilisis aliquet curabitur. Nisl, malesuada convallis convallis suspendisse sit laoreet. Facilisis dictum commodo proin elementum. Ullamcorper tristique habitant pellentesque eleifend nec. Sodales aliquam ultrices diam ac id. Vitae eget amet sed vitae volutpat facilisis nunc, gravida.</p>
              </div>
              <div style={{marginTop:"-20px", display:"flex", justifyContent:"flex-end", marginLeft:"-30px"}} className="col-md-6">
                <img style={{width:"400px", height:"400px"}} src={mengaca}></img>
              </div>
            </div>
          </div>
        </div>



        {/* --Hasil Refleksi-- */}

        <div className="d-flex justify-content-start" style={{marginLeft:"100px"}}>
               <h2 style={{marginTop: "150px", fontWeight:"650"}}>Hasil Refleksi</h2>
        </div>
        <div className="Module1" style={{paddingLeft:"100px", paddingRight:"70px", paddingTop:"50px", paddingBottom:"150px"}}>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Hal apa yang sedang kamu gemari?</p>
        <p style={{backgroundColor: "#BC6ACA", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", color:"#FFFFFF", fontWeight:"600", margin:"0" }}>Hal apa saja yang membuatmu ingin tahu lebih banyak?</p>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Hal apa saja yang menjadi kegelisahanmu? <br></br>Dalam diri dan Lingkungan Sekitar
</p>
        <p style={{backgroundColor: "#BC6ACA", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", color:"#FFFFFF", fontWeight:"600", margin:"0"}}>Kira- kira apa yang bisa kamu lakukan?</p>
        <p style={{backgroundColor: "#FADDFF", paddingBottom:"10px", paddingTop:"20px", paddingLeft:"50px", fontWeight:"600", margin:"0"}}>Bagaimana kamu akan melakukannya?</p>
      </div>

      </div>
    );
  }
  
  export default Refleksi;