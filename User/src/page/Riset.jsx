import React from "react";
import NaviBar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../style/button.css";
import ButtonItem from "../components/Button";

const buttonBack = {
  title: "Back"
};

const buttonNext = {
  title: "Next"
};

function Riset() {
  return (
    <div>
      <NaviBar></NaviBar>
      <div>
        <h2 style={{ paddingTop: "60px", paddingLeft: "60px" }}>
          <strong>RISET</strong>{" "}
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
            paddingTop: "40px",
            paddingLeft: "60px",
            paddingBottom: "20px"
          }}
        >
          <strong> Proses riset </strong>
        </h2>

        <p
          style={{
            fontSize: "20px",
            paddingBottom: "40px",
            paddingLeft: "60px"
          }}
        >
          Observasi mandiri dan menemukan sumber belajar sebagai proses
          pemahaman yang sesuai dengan kebutuhannya
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
              Kesimpulan hasil refleksi awal
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Rangkaian observasi yang sudah dilakukan
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
          <strong> Referensi Belajar </strong>
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
              Judul artikel/buku/jurnal
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Informasi yang kamu dapat :
            </li>
          </ul>
        </p>

        <h2
          style={{
            paddingTop: "0px",
            paddingLeft: "60px",
            paddingBottom: "40px"
          }}
        >
          <strong> Profil Sumber Belajar </strong>
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
              Nama
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Alamat
            </li>

            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Aktivitas yang biasa dilakukan
            </li>
            <li
              style={{
                paddingBottom: "20px",
                fontWeight: "510"
              }}
            >
              Rencana belajar yang akan dilakukan
            </li>
          </ul>
        </p>
      </div>

      <h2
        style={{
          paddingTop: "0",
          paddingLeft: "60px",
          paddingBottom: "20px"
        }}
      >
        <strong> Kesimpulan Hasil Riset </strong>
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
            Kesimpulan hasil observasi awal
          </li>
        </ul>
      </p>

      <Link to="/Refleksi">
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

      <Link to="/IdeKarya">
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

export default Riset;
