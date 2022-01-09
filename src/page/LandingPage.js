import React from "react";
import ButtonItem from "../components/Button";
import "../style/button.css"
import illustrasi1 from "../picture/illustrasi1.png";
import illustrasi2 from "../picture/illustrasi2.png";
import unlimited from "../picture/unlimited.png";
import easy from "../picture/easy.png";
import learn from "../picture/learn.png";
import about from "../picture/about.png";
import about2 from "../picture/about2.png";
import about3 from "../picture/about3.png";

const buttonPage = {
    title: "Ayo Mulai",
};

function LandingPage() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start" style={{marginLeft:"50px"}}>
                <div>
                    <h1 style={{marginTop: "150px", fontFamily: 'Roboto', fontSize:"55px", fontWeight:"bold"}}>Belajar <span style={{color:"rgb(235, 32, 191)", fontWeight:"bolder"}}>Seni </span>lebih <br></br>mudah dengan <br></br>Modul Remedial</h1>
                    <p style={{marginTop: "20px", fontFamily: 'Roboto', fontSize:"16px", fontWeight:"normal", lineHeight:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>

              <div style={{marginTop:"100px", display:"flex", justifyContent:"flex-end", marginLeft:"-50px"}} className="col-md-6">
                <img style={{width:"500px", height:"350px"}} src={illustrasi1}></img>
              </div>

            </div>
          </div>
        </div>


        <div>
          <div className="container">
            <div className="row">
                <div style={{marginTop:"200px", display:"flex", justifyContent:"flex-end", marginLeft:"-50px"}} className="col-md-6">
                    <img style={{width:"500px", height:"270px", marginRight:"-50px"}} src={illustrasi2}></img>
                </div>

            <div className="col-md-6 d-flex justify-content-end" style={{paddingLeft:"50px", marginTop: "50px"}}>
                <div>
                    <h1 style={{marginTop: "150px", fontFamily: 'Roboto', fontSize:"55px", fontWeight:"bold"}}>Eksplor <br></br>Kreatifitas Kamu!</h1>
                    <p style={{marginTop: "20px", fontFamily: 'Roboto', fontSize:"16px", fontWeight:"normal", lineHeight:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua. Ut enim ad minim veniam.</p>
                    <ButtonItem title={buttonPage.title} style={{marginTop:"10px", padding:"22px",lineHeight:"0px", paddingLeft:"20px", paddingRight:"20px"}}></ButtonItem>
                </div>

            </div>

            {/* --Kenapa Kami-- */}

            <div className="d-flex justify-content-center">
                <h2 style={{marginTop: "180px", fontFamily: 'Roboto', fontSize:"40px", fontWeight:"normal"}}>Kenapa Kami?</h2>
            </div>

            <div className="d-flex justify-content-center">
                <p style={{fontFamily: 'Roboto', fontSize:"16px", fontWeight:"normal", lineHeight:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>

            {/* --Tentang Kami-- */}

            
            <div className="d-flex justify-content-start" style={{marginLeft:"50px"}}>
               <h2 style={{marginTop: "90px", fontWeight:"650"}}>Tentang Kami</h2>
            </div>

            <div>
            <div className="container">
                <div className="row" style={{marginBottom:"200px"}}>
                <div className="col-md-6">
                    <p style={{marginLeft:"25px",marginRight:"25px", paddingTop:"10px"}}>Remedial adalah tempat belajar dan berlatih seni yang diciptakan oleh Serrum untuk kamu anak muda yang sedang duduk di bangku SMA/sederajat. Di sini, kita akan belajar seni dengan cara kekinian yang berfokus pada penggalian informasi dan interaksi aktif serta saling membangun. Tujuannya, agar kamu punya pengetahuan dan kecapakan terbaik di bidang seni. <br></br><br></br>Serrum merupakan perkumpulan studi seni rupa dan pendidikan yang didirikan pada tahun 2006. Serrum berfokus pada isu pendidikan, sosial-politik dan perkotaan dengan pendekatan presentasi yang edukatif dan artistik. </p>
                </div>
                <div style={{marginTop:"-50px", display:"flex", justifyContent:"flex-end", flexDirection:"column", marginLeft:"20px"}} className="col-md-3 px-5">
                    <img style={{width:"200px", height:"200px", paddingBottom:"5px"}} src={about}></img>
                    <img style={{width:"200px", height:"200px", paddingTop:"5px"}} src={about2}></img>
                </div>
                <div style={{marginTop:"-50px", marginLeft:"-25px", display:"flex"}} className="col-md-3">
                    <img style={{width:"200px", height:"400px"}} src={about3}></img>
                </div>
                </div>
            </div>
            </div>


            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default LandingPage;