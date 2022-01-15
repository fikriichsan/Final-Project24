import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

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
            borderTopRightRadius: 10,
            padding: "15px"
          }}
        >
          {props.content.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-5" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={props.content.list1} style={{paddingBottom:"10px", paddingTop:"5px"}} />
              <Form.Check type="checkbox" label={props.content.list2} style={{paddingBottom:"10px", paddingTop:"5px"}} />
              <Form.Check type="checkbox" label={props.content.list3} style={{paddingBottom:"10px", paddingTop:"5px"}} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default cardSub;