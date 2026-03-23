import { Link, useParams } from "react-router-dom";
import { products } from "../data/produits";
import { useState } from "react";

export default function ProdDetail({ addToCart }) {
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const prod = products.find((p) => p.id == id);

  const ratingStar = (note) => "⭐".repeat(Math.round(note));

  const addToCartHandle = () => {
    addToCart(prod.id);
    setAdded(true);
    // setTimeout(() => {

    // }, 3000);
  };

  return (
    <>
      {added && (
        <div className="alert alert-success text-center mt-4">
          Produit ajouté avec succès. <Link to="">Allez au panier</Link>
        </div>
      )}
      <section className="d-flex justify-content-center gap-5 mt-5">
        <img src={prod.image} alt="" />
        <div className="d-flex flex-column justify-content-between">
          <div>{prod.name}</div>
          <div>{ratingStar(prod.rating)}</div>
          <div>{prod.name}</div>
          <div className="text-success">{prod.price}€</div>
          <div>{prod.description}</div>
          <div>Stock: {prod.stock} disponibles</div>
          <button className="w-100 btn btn-success" onClick={addToCartHandle}>
            Ajouter au panier
          </button>
        </div>
      </section>
    </>
  );
}
