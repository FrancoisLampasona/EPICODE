import React from "react";

const ButtonComponent = (props) => {
  return (
    <div className="text-center">
      <h1>Prova Bottone !</h1>
      <button>Cliccami ! {props.testo}</button>
    </div>
  );
};

export default ButtonComponent;
