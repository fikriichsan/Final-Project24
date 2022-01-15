import React from "react";
import CardSub from "../components/cardSub";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonItem from "../components/Button";
import "../style/button.css"
import NaviBar from "../components/Navbar";
import { Link } from "react-router-dom";

const buttonPage = {
    title: "Explore",
};
const buttonBack = {
  title: "Back",
};

function Modul6() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div>
      <Link to="/module">
        <ButtonItem title={buttonBack.title} style={{marginTop:"10px", marginLeft:"60px"}}></ButtonItem>
      </Link>
      <h1 style={{ paddingTop: "60px", paddingLeft: "60px" }}>Modul 6</h1>
      <p
        style={{ fontSize: "20px", paddingBottom: "40px", paddingLeft: "60px" }}
      >
        Pembelajaran Kontekstual Berbasis Proyek.{" "}
      </p>
      <Row xs={1} md={3} style={{ padding: "0 60px 0 60px" }}>
        <Col style={{ paddingBottom: "40px" }}>
          <CardSub
            content={{
              title: "Melanjutkan karya",
              list1: "Runtutan Proses Belajar",
              list2: "Proses melanjutkan ide karya",
              list3: "Proses kerja: eksperimentasi"
            }}
          ></CardSub>
              <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>

        </Col>

        <div style={{ paddingBottom: "40px" }}>
          <CardSub
            content={{
              title: "Rancangan karya/proyek",
              list1: "Rancangan karya",
              list2: "Temuan teknologi",
              list3: "Integrasi mata pelajaran"
            }}
          ></CardSub>
          <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>
        </div>

        <div>
        <CardSub
          content={{
            title: "Produksi karya",
            list1: "Proses produksi karya",
            list2: "Presentasi karya",
            list3: "Dokumentasi"
          }}
        ></CardSub>
        <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>
        </div>
      </Row>
      </div>
    </div>
  );
}

export default Modul6;