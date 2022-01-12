import React from "react";
import CardSub from "../components/cardSub";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Modul6() {
  return (
    <div>

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
        </div>

        <CardSub
          content={{
            title: "Produksi karya",
            list1: "Proses produksi karya",
            list2: "Presentasi karya",
            list3: "Dokumentasi"
          }}
        ></CardSub>
      </Row>
    </div>
  );
}

export default Modul6;