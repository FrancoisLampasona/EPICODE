import "./App.css";
import ButtonComponent from "./component/ButtonComponent";
import ImageComponent from "./component/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent testo="Francois"></ButtonComponent>
      <ImageComponent
        src="https://placecats.com/millie/300/150"
        alt="billy"
      ></ImageComponent>
    </div>
  );
}

export default App;
