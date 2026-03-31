export default function EtudiantForm({
  formData,
  setFormData,
  handleSubmit,
  isEdit,
}) {
  const handleChange = (e) => {
    // const {name, value} = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit} action="" className="d-flex gap-3">
        <div className="mb-3">
          <label htmlFor="">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            placeholder="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="e-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Téléphone</label>
          <input
            type="text"
            name="telephone"
            className="form-control"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="btn btn-success"
          value={isEdit ? "Modifier" : "Ajouter"}
        />
        {isEdit && <button className="btn btn-danger">Annulet</button>}
      </form>
    </>
  );
}
