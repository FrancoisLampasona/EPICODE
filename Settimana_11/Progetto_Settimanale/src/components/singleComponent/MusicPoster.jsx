import React from "react";
import Card from "react-bootstrap/Card";

const MusicPoster = ({ imageUrl, altText }) => {
  return (
    <Card style={{ borderRadius: "15px", overflow: "hidden" }}>
      <Card.Img
        variant="top"
        src={imageUrl} 
        alt={altText} 
        style={{ borderRadius: "15px" }}
      />
    </Card>
  );
};

export default MusicPoster;
