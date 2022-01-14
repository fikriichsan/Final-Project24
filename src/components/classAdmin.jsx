import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Add from "./Add";
import Edit from "./Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../style/class-admin.css";
import ModulAdmin from "../page/modulAdmin";

import Participant from "../page/Participant";
import Publish from "../page/Publish";
// import {storage} from "./firebase/firebase";

function classAdmin() {
  return (
    <>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        style={{ borderColor: "blue" }}
      >
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              style={{ paddingTop: "80px" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="first">1. Class</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2. Module & Sub Module</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="third">3. Participant </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth">4. Publish </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {/* <Sonnet /> */}

                <BrowserRouter>
                  <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<Add />}>
                      <Route path="edit" element={<Edit />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                {/* <Sonnet /> */}
                <ModulAdmin />
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                {/* <Sonnet /> */}
                <Participant />
              </Tab.Pane>

              <Tab.Pane eventKey="forth">
                <Publish />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default classAdmin;
