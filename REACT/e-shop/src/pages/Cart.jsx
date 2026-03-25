import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { products } from "../data/produits";

export default function Card({ cartItems, deleteCartProd, updateQty }) {
  if (!cartItems.length) {
    return (
      <>
        <section className="container mt-5 h1 d-flex justify-content-evenly">
          <div>Panier vide !</div>
          <button className="btn btn-outline-secondary">
            <Link className="link" to="/">
              Continuer vos achats
            </Link>
          </button>
        </section>
      </>
    );
  }
  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find((prod) => prod.id == item.id),
  }));

  const totalPanier = cartProducts.reduce(
    (sum, carProd) => sum + carProd.product.price * carProd.quantite,
    0,
  );

  return (
    <section className="container mt-5">
      <h2>Mon Panier</h2>
      {cartProducts.map((cartProd) => (
        <CartItem
          key={cartProd.id}
          cartProd={cartProd}
          deleteCartProd={deleteCartProd}
          updateQty={updateQty}
        />
      ))}

      <div className="text-end">
        <h3>Résumé</h3>
        <p>
          Total: <span>{totalPanier.toFixed(2)}€</span>
        </p>
        <p>Livraison gratuite </p>

        <button className="btn btn-success">
          <Link to="/checkout" className="link text-white">
            Passer la commande
          </Link>
        </button>
      </div>
    </section>
  );
}
