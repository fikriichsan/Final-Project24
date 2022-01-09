import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ButtonItem from "./Button";
import "../style/button-card-sub.css";

const buttonPage = {
  title: "Explore Module"
};

function cardSub(props) {
  return (
    <div>
      <Card
        style={{
          borderRadius: 10,
          paddingBottom: 10,
          borderColor: "rgb(144, 6, 167)"
        }}
      >
        <Card.Header
          as="h5"
          style={{
            backgroundColor: "rgb(144, 6, 167)",
            color: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}
        >
          {props.content.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={props.content.list1} />
              <Form.Check type="checkbox" label={props.content.list2} />
              <Form.Check type="checkbox" label={props.content.list3} />
            </Form.Group>
          </Form>
          <ButtonItem title={buttonPage.title}></ButtonItem>
        </Card.Body>
      </Card>
    </div>
  );
}

export default cardSub;
