import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarre from "./components/NavBarre";
import { products } from "./data/produits";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarre />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
