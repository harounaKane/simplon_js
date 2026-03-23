import ProductCard from "../components/ProductCard";
import { products } from "../data/produits";

export default function Products() {
  return (
    <>
      <h2 className="text-center mt-4">📦 Tous les produits</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </>
  );
}
