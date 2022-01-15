import React, { useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Add(props) {
  const [userInfo, setuserInfo] = useState({
    title: ""
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

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
                    Participant
                  </h2>

                  <label className="font-weight-bold">
                    {" "}
                    Participant <span className="required"> * </span>{" "}
                  </label>
                  <div class="input-group mb-3">
                    <select class="custom-select" id="Select01">
                      <option selected>Choose...</option>
                      <option value="1">Modul 5</option>
                      <option value="2">Modul 6</option>
                    </select>
                  </div>

                  <label className="font-weight-bold">Add participant</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      name="title"
                      value={userInfo.title}
                      onChange={onChangeValue}
                      className="form-control"
                      placeholder="Add participant"
                      required
                    />
                  </div>
                </div>

                {/* button ------------------------------- */}
                <div
                  className="form-group col-sm-12 text-right"
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <button
                    type="add"
                    className="btn btn__theme"
                    style={{
                      marginTop: "20px",

                      marginRight: "10px"
                    }}
                  >
                    Add
                  </button>
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
