import React from "react";
import "../style/button.css";
import ButtonItem from "../components/Button";
import runtutanBelajar from "../picture/runtutanBelajar.jpg";
import NaviBar from "../components/Navbar";
import { Link } from "react-router-dom";

const buttonBack = {
  title: "Back"
};

const buttonNext = {
  title: "Next"
};

function Refleksi() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div>
        <h2 style={{ paddingTop: "60px", paddingLeft: "60px" }}>
          <strong>REFLEKSI </strong>{" "}
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

        <h2
          style={{
            paddingTop: "60px",
            paddingLeft: "60px",
            paddingBottom: "60px"
          }}
        >
          <strong>
            <center> Runtutan Proses Belajar </center>{" "}
          </strong>{" "}
        </h2>

        <div style={{ paddingBottom: "40px", textAlign: "center" }}>
          <img
            style={{ width: "700px", height: "400px" }}
            src={runtutanBelajar}
          ></img>
        </div>

        <h2
          style={{
            paddingTop: "100px",
            paddingLeft: "60px",
            paddingBottom: "20px"
          }}
        >
          <strong> Proses Refleksi </strong>
        </h2>

        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          Refleksi diri sebagai proses awal bagi siswa agar dapat mengenali
          potensi diri dan menggali pertanyaan yang mendasar{" "}
        </p>

        <h2
          style={{
            paddingTop: "20px",
            paddingLeft: "60px",
            paddingBottom: "40px"
          }}
        >
          <strong> Hasil Refleksi </strong>
        </h2>

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
              Hal apa yang sedang kamu gemari?
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Hal apa saja yang membuatmu ingin tahu lebih banyak?
            </li>

            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Hal apa saja yang menjadi kegelisahanmu?
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Kira-kira apa yang bisa kamu lakukan?
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Bagaimana kamu akan melakukannya?
            </li>
          </ul>
        </p>
      </div>

      <Link to="/Modul5">
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

      <Link to="/Riset">
        <ButtonItem
          title={buttonNext.title}
          style={{
            marginTop: "-100px",
            marginLeft: "820px",
            padding: "20px",
            lineHeight: "0",
            borderRadius: "5px"
          }}
        ></ButtonItem>
      </Link>
    </div>
  );
}

export default Refleksi;
