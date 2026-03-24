import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProdDetail from "./pages/ProdDetail";
import { useState } from "react";
import Layout from "./components/Layout";
import Card from "./pages/Cart";

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

  const deleteCartProd = (idProduct) => {
    setCartItems(cartItems.filter((item) => item.id != idProduct));
  };

  const totalPanier = cartItems.reduce((sum, item) => sum + item.quantite, 0);

  return (
    <>
      <BrowserRouter>
        <Layout cartItems={totalPanier}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/product/:id/detail"
              element={<ProdDetail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Card cartItems={cartItems} deleteCartProd={deleteCartProd} />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
