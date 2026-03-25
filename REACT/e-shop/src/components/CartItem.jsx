export default function CartItem({ cartProd, deleteCartProd, updateQty }) {
  const onDeleteProdCart = () => {
    deleteCartProd(cartProd.id);
  };

  const onUpdateCart = (qte) => {
    updateQty(cartProd.id, qte);
  };

  return (
    <div className="d-flex p-3 my-3 justify-content-between cartBg">
      <div className="d-flex gap-4">
        <img src={cartProd.product.image} alt="" className="img-fluid w-25" />

        <div>
          <h3> {cartProd.product.name} </h3>
          <div>Prix: {cartProd.product.price.toFixed(2)}€</div>
          <div>Quantité: {cartProd.product.stock}</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-success"
          onClick={() => onUpdateCart(cartProd.quantite - 1)}
        >
          -
        </button>{" "}
        {cartProd.quantite}
        <button
          className="btn btn-success"
          onClick={() => onUpdateCart(cartProd.quantite + 1)}
        >
          +
        </button>
        <div> {(cartProd.product.price * cartProd.quantite).toFixed(2)}€ </div>
        <div>
          <button
            title="supprimer"
            className="btn btn-outline-danger"
            onClick={onDeleteProdCart}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
