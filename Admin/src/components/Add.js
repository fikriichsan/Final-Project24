import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UploadImage from "./uploadImage";

function Add() {
  let navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: ""
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
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
      axios
        .post(`http://localhost:8080/addArticle`, {
          title: userInfo.title,
          description: userInfo.description.value
        })
        .then((res) => {
          if (res.data.success === true) {
            navigate("/");
          }
        });
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
                    Class
                  </h2>

                  <label className="font-weight-bold">
                    {" "}
                    Class name <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={userInfo.title}
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Class name"
                    required
                  />
                </div>
                <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold">
                    {" "}
                    Description <span className="required"> * </span>{" "}
                  </label>
                  <Editor
                    editorState={description}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                  <textarea
                    style={{ display: "none" }}
                    disabled
                    ref={(val) => (userInfo.description = val)}
                    value={draftToHtml(
                      convertToRaw(description.getCurrentContent())
                    )}
                  />
                </div>
                {isError !== null && <div className="errors"> {isError} </div>}

                <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold">
                    {" "}
                    Card picture <span className="required"> * </span>{" "}
                  </label>
                  <UploadImage />​
                </div>
                {isError !== null && <div className="errors"> {isError} </div>}

                <div className="form-group col-sm-12 text-right">
                  <button
                    type="submit"
                    className="btn btn__theme"
                    style={{ marginTop: "60px" }}
                  >
                    {" "}
                    Submit{" "}
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
