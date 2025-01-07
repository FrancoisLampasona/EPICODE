import React from "react";
import Card from "react-bootstrap/Card";

const MusicCard = ({ imageUrl, altText, cardTittle }) => {
  return (
    <Card className="border-0">
      <Card.Img
        src={imageUrl}
        alt={altText}
        className=" rounded-3"
      />
      <Card.Body>
        <h5>{cardTittle}</h5>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
