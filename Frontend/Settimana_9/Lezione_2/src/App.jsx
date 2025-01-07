import { Row } from "react-bootstrap";
import "./assets/css/App.css";
import CardBook from "./components/CardBook";
import FooterComponent from "./components/FooterComponent";
import NavBar from "./components/navbar";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Row>
          <BookList></BookList>
        </Row>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
}

export default App;
