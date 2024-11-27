import React from "react";
import { Card, Button } from "react-bootstrap";

const CardBook = (props) => {
  const book = props.book;

  const objectfit = {
    objectFit: "cover",
    width: "100%",
    height: "30vh",
  };

  return (
    <Card className="mb-3 mt-4" style={{ width: "240px" }}>
      <Card.Img variant="top" src={book.img} style={objectfit} />
      <Card.Body style={{ padding: "10px" }}>
        <Card.Title>{book.title.slice(0, 20)}</Card.Title>

        <Card.Text>
          {book.description ||
            "Some quick example text to build on the card title."}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBook;
