import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup>
        <Form.Control
          style={{ backgroundColor: "rgba(137, 134, 134, 0.46)" }}
          name="search"
          type="text"
          placeholder={placeholder || "Cerca..."}
          aria-label="Search"
          className="me-1"
        />
        <Button
          className="border-0"
          variant="primary"
          type="submit"
          style={{ backgroundColor: "rgba(63, 62, 62, 0.46)" }}
        >
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
