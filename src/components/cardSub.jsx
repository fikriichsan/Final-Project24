import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ButtonItem from "./Button";
import "../style/button-card-sub.css";
import "../style/button.css"

const buttonPage = {
  title: "Explore Module"
};

function cardSub(props) {
  return (
    <div className="col-md-4 w-25" style={{marginLeft:"100px", marginTop:"70px"}}>
      <Card style={{borderRadius: 10}}>
        <Card.Header 
          as="h5"
          style={{ backgroundColor: "rgb(144, 6, 167)", color: "white", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        >
          {props.content.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={props.content.list1} />
              <Form.Check type="checkbox" label={props.content.list2} />
              <Form.Check type="checkbox" label={props.content.list3} />
            </Form.Group>
          </Form>
          <ButtonItem style={{width:"150px", marginTop:"10px"}} title={buttonPage.title}></ButtonItem>
        </Card.Body>
      </Card>
    </div>
  );
}

export default cardSub;
