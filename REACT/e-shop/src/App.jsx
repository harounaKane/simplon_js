import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarre from "./components/NavBarre";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProdDetail from "./pages/ProdDetail";
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prodId) => {
    const prodExist = cartItems.find((p) => p.id == prodId);

    if (prodExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id == prodId ? { ...item, quantite: item.quantite + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { id: prodId, quantite: 1 }]);
    }
  };

  const totalPanier = cartItems.reduce((sum, item) => sum + item.quantite, 0);

  return (
    <>
      <BrowserRouter>
        <Layout cart={totalPanier}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/product/:id/detail"
              element={<ProdDetail addToCart={addToCart} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
