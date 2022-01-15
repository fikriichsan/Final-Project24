import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Example from "./Popup";
import Example2 from "./Pupu";

function Add() {
  const [userInfo, setuserInfo] = useState({
    title: ""
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.value.length < 50) {
        setError("Required, Add description minimum length 50 characters");
        return;
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="App">
        <div className="container" style={{ marginTop: "80px" }}>
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              {/* <h3 className="myaccount-content"> Add </h3> */}
              <div className="form-row">
                <div className="form-group col-md-12">
                  <h2
                    className="font-weight-bold"
                    style={{ textAlign: "center", paddingBottom: "20px" }}
                  >
                    Module dan Sub Module
                  </h2>

                  <label className="font-weight-bold">
                    {" "}
                    Module <span className="required"> * </span>{" "}
                  </label>
                  <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">Modul 5</option>
                      <option value="2">Modul 6</option>
                    </select>
                  </div>

                  <div
                    className="form-group col-sm-12 text-right"
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <button
                      type="delete"
                      className="btn btn__theme"
                      style={{ marginTop: "20px" }}
                    >
                      Delete
                    </button>
                    <Example2 />
                  </div>

                  <label className="font-weight-bold">
                    {" "}
                    Sub Module <span className="required"> * </span>{" "}
                  </label>
                  <div class="input-group mb-3">
                    <select class="custom-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">Runtutan Proses Belajar</option>
                      <option value="2">Proses Refleksi</option>
                      <option value="3">Hasil Refleksi</option>
                    </select>
                  </div>
                </div>

                <div
                  className="form-group col-sm-12 text-right"
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <button
                    type="delete"
                    className="btn btn__theme"
                    style={{ marginTop: "20px" }}
                  >
                    Delete
                  </button>

                  <Example />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add;
