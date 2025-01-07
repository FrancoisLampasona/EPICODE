import React, { useState } from "react";
import BooksFantasy from "./../../data/fantasy.json";
import SigleBook from "./SigleBook";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";



const BookList = function () {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBooks = BooksFantasy.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Form className="mb-5">
        <Form.Label htmlFor="searchBookInput">Cerca un libro</Form.Label>
        <Form.Control
          type="text"
          id="searchBookInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Cerca per titolo o categoria"
        />
      </Form>

      <Row className="g-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <SigleBook key={book.asin} data={book} />)
        ) : (
          <p>Non sono stati trovati libri corrispondenti.</p>
        )}
      </Row>
    </div>
  );
};

export default BookList;
