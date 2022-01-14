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

function Modul5() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div>
        <Link to="/module">
        <ButtonItem title={buttonBack.title} style={{marginTop:"10px", marginLeft:"60px"}}></ButtonItem>
        </Link>
      <h1 style={{ paddingTop: "60px", paddingLeft: "60px" }}>Modul 5</h1>
      <p
        style={{ fontSize: "20px", paddingBottom: "40px", paddingLeft: "60px" }}
      >
        Pembelajaran Kontekstual Berbasis Proyek.{" "}
      </p>
      <Row xs={1} md={3} style={{ padding: "0 60px 0 60px" }}>
        <Col style={{ paddingBottom: "40px" }}>
          <CardSub
            content={{
              title: "Refleksi",
              list1: "Runtutan Proses Belajar",
              list2: "Proses Refleksi",
              list3: "Hasil Refleksi"
            }}
          ></CardSub>
            <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>
        </Col>

        <div style={{ paddingBottom: "40px" }}>
          <CardSub
            content={{
              title: "Riset",
              list1: "Proses Riset",
              list2: "Referensi Belajar",
              list3: "Kesimpulan Hasil Riset"
            }}
          ></CardSub>
            <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>
        </div>

        <div>
        <CardSub
          content={{
            title: "Ide Karya",
            list1: "Deskripsi Singkat",
            list2: "Mindmap",
            list3: "Evaluasi"
          }}
        ></CardSub>
          <ButtonItem title={buttonPage.title} style={{marginTop:"-100px",marginLeft:"15px", borderRadius:"5px"}}></ButtonItem>
        </div>
      </Row>
      </div>
    </div>
  );
}

export default Modul5;