import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import axios from "axios";

function IsiPopup() {
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
      <div className="App" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              {/* <h3 className="myaccount-content"> Add </h3> */}
              <div className="form-row" style={{ paddingTop: "0" }}>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default IsiPopup;
