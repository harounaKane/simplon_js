import CartItem from "../components/CartItem";
import { products } from "../data/produits";

export default function Card({ cartItems, deleteCartProd }) {
  if (!cartItems.length)
    return <section className="container mt-5 h1">Panier vide</section>;

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
        <CartItem cartProd={cartProd} deleteCartProd={deleteCartProd} />
      ))}

      <div className="text-end">
        <h3>Résumé</h3>
        <p>
          Total: <span>{totalPanier}€</span>{" "}
        </p>
        <p>Livraison gratuite </p>

        <button>Passer la commande</button>
      </div>
    </section>
  );
}
