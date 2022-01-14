import React from "react";
import Card from "../components/card"
import ButtonItem from "../components/Button";
import "../style/button.css"
import NaviBar from "../components/Navbar";
import { Link } from "react-router-dom";

const buttonPage = {
    title: "Explore",
};
const buttonEdit = {
    title: "Edit",
};

function Module() {
  return (
      <div>
          <NaviBar></NaviBar>
          <div className="d-flex justify-content-center">
              <h2 style={{marginTop: "90px", fontWeight:"650"}}>Kelas Remedial</h2>
          </div>
          <div style={{marginTop: "50px", marginBottom:"100px"}}>
          <div className="container">
              <div className="row justify-content-md-center">
                  <div className="col-md-4">
                      <Card content ={{
                          imageUrl:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
                          title:"Remedial",
                          Paragraph:"Pembelajaran Konstektual Seni dan Budaya Berbasis Proyek.",
                      }}>
                      </Card>
                      <Link to="/module">
                      <ButtonItem title={buttonPage.title} style={{marginTop:"-100px", marginLeft:"15px"}}></ButtonItem>
                      </Link>
                      <Link to="">
                      <ButtonItem title={buttonEdit.title} style={{marginTop:"-100px", marginLeft:"70px", borderRadius:"5px"}}></ButtonItem>
                      </Link>

                  </div>
                  <div className="col-md-4">
                      <Card content={{
                          imageUrl:'https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
                          title:"Presisi",
                          Paragraph:"Seni dan Budaya Sebagai Media Artikulasi Pengetahuan.",
                      }}>
                      </Card>
                      <Link to="/">
                      <ButtonItem title={buttonPage.title} style={{marginTop:"-100px", marginLeft:"15px"}}></ButtonItem>
                      </Link>
                      <Link to="/">
                      <ButtonItem title={buttonEdit.title} style={{marginTop:"-100px", marginLeft:"70px", borderRadius:"5px"}}></ButtonItem>
                      </Link>

                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Module;