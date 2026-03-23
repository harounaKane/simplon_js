import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card my-2">
      <img src={product.image} className="card-img-top imgProd" alt="..."></img>
      <div className="card-body text-center">
        <h5 className="card-title"> {product.name} </h5>
        <div>{product.price}€</div>
        <div>{product.rating}</div>
        <div>{product.stock}</div>
      </div>
      <Link className="link text-center" to="{`/category/${categorie.id}`}">
        Voir détail
      </Link>
    </div>
  );
}
