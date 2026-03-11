import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import Alert from "react-bootstrap/Alert";

function Detail() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  return (
    <div className="w-25 m-4">
      {product && <ProductCard product={product} />}
      {!product && (
        <Alert variant="danger">Pas de produit avec cet id : {id}</Alert>
      )}
    </div>
  );
}
export default Detail;
