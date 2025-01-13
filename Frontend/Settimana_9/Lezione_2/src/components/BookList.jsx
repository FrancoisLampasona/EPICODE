import { Col } from "react-bootstrap";
import CardBook from "./CardBook";
import LibriFantasy from "../../data/fantasy.json";
import LibriHistory from "../../data/history.json";
import LibriHorror from "../../data/horror.json";
import LibriRomance from "../../data/romance.json";
import LibriScifi from "../../data/scifi.json";

const BookList = () => {
  const AllBooks = [
    ...LibriFantasy,
    ...LibriHorror,
    ...LibriHistory,
    ...LibriRomance,
    ...LibriScifi,
  ];

  console.log(AllBooks);

  return (
    <div className="row">
      {AllBooks.map((book, index) => (
        <Col xs={12} sm={6} md={4} lg={2} key={index}>
          <CardBook book={book} />
        </Col>
      )).slice(0, 18)}
    </div>
  );
};

export default BookList;
