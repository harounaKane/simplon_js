export default function EtudiantForm({
  formData,
  setFormData,
  handleSubmit,
  isEdit,
  cancel,
}) {
  const handleChange = (e) => {
    // const {name, value} = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4 flex-wrap">
        <input
          type="text"
          name="nom"
          className="form-control"
          placeholder="nom"
          value={formData.nom}
          onChange={handleChange}
          style={{ maxWidth: "220px" }}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="e-mail"
          value={formData.email}
          onChange={handleChange}
          style={{ maxWidth: "220px" }}
        />
        <input
          type="text"
          name="telephone"
          className="form-control"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
          style={{ maxWidth: "220px" }}
        />

        <input
          type="submit"
          className={`btn btn-${isEdit ? "warning" : "success"}`}
          value={isEdit ? "Modifier" : "Ajouter"}
        />
        {isEdit && (
          <button type="button" className="btn btn-danger" onClick={cancel}>
            Annulet
          </button>
        )}
      </form>
    </>
  );
}
