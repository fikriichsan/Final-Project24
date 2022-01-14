import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Add() {
  return (
    <>
      <Card className="text-center" style={{ marginTop: "80px" }}>
        <Card.Body className="text-center">
          <Card.Title style={{ paddingTop: "20px", paddingBottom: "40px" }}>
            <h2>Publish</h2>
          </Card.Title>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn btn__theme"
              style={{ paddingLeft: "200px", paddingRight: "200px" }}
            >
              Publish
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
