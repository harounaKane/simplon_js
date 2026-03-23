import ProductCard from "../components/ProductCard";

export default function Products({ products }) {
  return (
    <>
      <h2 className="text-center mt-4">📦 Tous les produits</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {products.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </div>
    </>
  );
}
