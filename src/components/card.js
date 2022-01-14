import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonItem from "../components/Button";
import Card from "react-bootstrap/Card";
import "../style/button.css"
import "../style/card.css"

const buttonPage = {
    title: "Explore",
};
const buttonEdit = {
    title: "Edit",
};

function Cards (props) {
    return (
        <Card style={{borderRadius: "15px", width: '22rem'}}>
            <div className="overflow">
            <img src={props.content.imageUrl} alt="japan" className="card-img-top"></img>
            </div>
            <Card.Body className="card-body">
                <h4 style={{fontWeight:"650", fontSize:"22px"}}>{props.content.title}</h4>
                <small className="text-muted">{props.content.Paragraph}</small>
                <br></br><br></br>
                <ButtonItem title={buttonPage.title}></ButtonItem>
                <ButtonItem style={{marginLeft:"70px", borderRadius:"5px"}} title={buttonEdit.title}></ButtonItem>
            </Card.Body>
        </Card>
    )
}


export default Cards;