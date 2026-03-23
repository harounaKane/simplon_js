import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarre from "./components/NavBarre";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarre />
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
