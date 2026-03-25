import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ deleteCart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ prenom: "", nom: "", email: "" });
  const [submited, setSubmited] = useState(false);

  const payer = (e) => {
    e.preventDefault();

    if (formData.prenom && formData.nom && formData.email) {
      setSubmited(true);
      deleteCart();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (submited) {
    return (
      <div className="alert alert-success p-3 my-5">
        Paiement effectué avec succès, {formData.prenom + " " + formData.nom}
      </div>
    );
  }

  return (
    <section className="container mt-5 p-5">
      <h2>💳 Payer la commande</h2>
      <form action="" onSubmit={payer}>
        <div className="mb-3">
          <label htmlFor="">Prénom</label>
          <input
            onChange={handleChange}
            type="text"
            name="prenom"
            className="form-control"
            placeholder="prénom"
            value={formData.prenom}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Nom</label>
          <input
            onChange={handleChange}
            type="text"
            name="nom"
            className="form-control"
            placeholder="nom"
            value={formData.nom}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="E-mail"
            value={formData.email}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Payer
        </button>
      </form>
    </section>
  );
}
