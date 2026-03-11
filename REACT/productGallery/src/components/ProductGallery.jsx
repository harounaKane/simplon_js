import ProductCard from "./ProductCard";

function ProductGallery({ products }) {
  return (
    <main className="container-fluid my-5">
      <h2 className="text-center">🛍️ Gaelerie de produit</h2>
      <div className="d-flex gap-3 flex-wrap">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </main>
  );
}

export default ProductGallery;
