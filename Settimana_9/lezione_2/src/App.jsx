import "./assets/css/App.css";
import FooterComponent from "./components/FooterComponent";
import NavBar from "./components/navbar";
import WelcomeAlert from "./components/WelcomeAlert";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <WelcomeAlert></WelcomeAlert>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
}

export default App;
