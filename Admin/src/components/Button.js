import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonItem = ({buttonLink, title, style}) => {
    return (
        <Button className="buttonItem" style={style} href={buttonLink}>{title}</Button> 
    )
}

export default ButtonItem;