export default function MatiereForm({
  formData,
  setFormData,
  profs,
  isEditing,
  handleSubmit,
  handleCancel,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4 flex-wrap">
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "180px" }}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "220px" }}
      />

      <input
        type="number"
        name="duree"
        placeholder="Durée"
        value={formData.duree}
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "140px" }}
      />

      <select
        name="idProf"
        value={formData.idProf}
        onChange={handleChange}
        className="form-select"
        style={{ maxWidth: "220px" }}
      >
        <option value="">Choisir un prof</option>
        {profs.map((prof) => (
          <option key={prof.id_prof} value={prof.id_prof}>
            {prof.nom} - {prof.spec}
          </option>
        ))}
      </select>

      <button type="submit" className="btn btn-primary">
        {isEditing ? "Modifier" : "Ajouter"}
      </button>

      {isEditing && (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Annuler
        </button>
      )}
    </form>
  );
}
