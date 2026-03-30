export default function EtudiantForm({ formData, setFormData, add }) {
  const handleChange = (e) => {
    // const {name, value} = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={add} action="" className="d-flex gap-3">
        <div className="mb-3">
          <label htmlFor="">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            placeholder="nom"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="e-mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Téléphone</label>
          <input
            type="text"
            name="telephone"
            className="form-control"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
          />
        </div>

        <input type="submit" className="btn btn-success" />
      </form>
    </>
  );
}
