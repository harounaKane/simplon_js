import { Link } from "react-router-dom";
import Categories from "./Categories";
import { products } from "../data/produits";
import Products from "./Products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const newProds = products.slice(0, 4);
  return (
    <main className="container mt-5">
      {/* Hero */}
      <section className="bg-info text-center p-3">
        <h2>Bienvenue à E-shop 🛍️</h2>
        <p>Les meilleurs produit en ligne !</p>
        <Link className="link" to="/products">
          Voir tous nos produits ➡️
        </Link>
      </section>

      {/* Catégories */}
      <section className="my-4">
        <h2>Catégories</h2>
        <Categories />
      </section>

      {/* nouveaux produits */}
      <section>
        <h2 className="text-center mt-4">📦 Nos nouveaux produits</h2>
        <div className="d-flex justify-content-around flex-wrap">
          {newProds.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
