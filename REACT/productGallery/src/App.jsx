import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import Detail from "./pages/Detail";
import products from "./data/products.json";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-primary p-3">
        <h1 className="text-center text-light">
          <Link to="/" className="text-white">
            Galerie de produits
          </Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<ProductGallery products={products} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
