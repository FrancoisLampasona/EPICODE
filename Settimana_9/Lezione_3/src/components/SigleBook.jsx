import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SigleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, // Stato iniziale del libro
    };
  }

  handleSelect = () => {
    // Toggle dello stato 'selected'
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { data } = this.props;
    const { selected } = this.state;

    // Condizione per applicare 'bg-warning' se selezionato
    const cardClass = selected ? "bg-warning" : "";

    return (
      <Col xs={12} md={6} xl={3} className="mb-3">
        <Card
          className={`p-2 text-black ${cardClass}`} // Aggiungi classe 'bg-warning' se selezionato
          key={data.asin}
        >
          <div
            className="d-flex justify-content-center"
            onClick={this.handleSelect} // Gestisci il clic
          >
            <Card.Img
              variant="top"
              src={data.img}
              alt={data.title}
              style={{ width: "150px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>
              <h5>
                {data.title.length > 50
                  ? data.title.slice(0, 50) + "..."
                  : data.title}
              </h5>
            </Card.Title>
            <Card.Text className="m-0">
              <p className="text-uppercase">{data.category}</p>
            </Card.Text>
            <Card.Text className="m-0">
              <p>${data.price}</p>
            </Card.Text>
            <div className="d-flex flex-grow-1 align-items-end justify-content-center">
              <Button variant="primary">
                {selected ? "Deseleziona" : "Seleziona"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SigleBook;
