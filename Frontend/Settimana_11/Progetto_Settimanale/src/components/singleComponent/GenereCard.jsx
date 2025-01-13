import React from "react";
import Button from "react-bootstrap/Button";

const GenereCard = ({ cardTittle }) => {
  return (
    <Button
      className="border-0 text-light w-100"
      style={{
        backgroundColor: "rgba(12, 11, 11, 0.72)",
        borderRadius: "14px",
        padding: "1rem",
        textAlign: "left",
      }}
    >
      <h5
        className="mb-0"
        style={{
          color: "rgba(223, 223, 223, 0.89)",
        }}
      >
        {cardTittle}
        <i className="bi bi-arrow-right-short ms-2"></i>
      </h5>
    </Button>
  );
};

export default GenereCard;
