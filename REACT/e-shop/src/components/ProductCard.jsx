import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const ratingStar = (note) => "⭐".repeat(Math.round(note));

  return (
    <div className="card my-2">
      <img src={product.image} className="card-img-top imgProd" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title"> {product.name} </h5>
        <div className="text-success">{product.price}€</div>
        <div>
          {" "}
          {ratingStar(product.rating)} {product.rating}
        </div>
        <div>Stock : {product.stock}</div>
      </div>
      <Link className="link text-center" to={`/product/${product.id}/detail`}>
        Voir détail
      </Link>
    </div>
  );
}
