// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <TextForm heading="Text Form" />
      </div>
    </>
  );
}

export default App;
