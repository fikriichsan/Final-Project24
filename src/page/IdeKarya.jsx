import React from "react";
import { Link } from "react-router-dom";
import NaviBar from "../components/Navbar";
import "../style/button.css";
import ButtonItem from "../components/Button";

const buttonBack = {
  title: "Back"
};

function IdeKarya() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div>
        <h2 style={{ paddingTop: "60px", paddingLeft: "60px" }}>
          <strong>IDE KARYA</strong>{" "}
        </h2>
        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          Pembelajaran Kontekstual Berbasis Proyek.{" "}
        </p>

        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          <ul>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Deskripsi singkat proyek yang akan dibuat
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Rancangan kerja dan sketsa
            </li>
          </ul>
        </p>

        <h2
          style={{
            paddingTop: "0",
            paddingLeft: "60px",
            paddingBottom: "20px"
          }}
        >
          <strong> Evaluasi proses pembelajaran. </strong>
        </h2>

        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          Hasil evaluasi (hal yang perlu ditingkatkan atau dilakukan
          selanjutnya)
        </p>

        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          <ul>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Kolom Siswa (siapkan pertanyaanmu)
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Kolom Guru (siapkan pertanyaanmu)
            </li>
          </ul>
        </p>
      </div>
      <Link to="/Riset">
        <ButtonItem
          title={buttonBack.title}
          style={{
            marginTop: "-100px",
            marginLeft: "70px",
            padding: "20px",
            lineHeight: "0",
            borderRadius: "5px"
          }}
        ></ButtonItem>
      </Link>
    </div>
  );
}

export default IdeKarya;
