export default function StageForm({
  formData,
  setFormData,
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
        type="date"
        name="dateDebut"
        value={formData.dateDebut}
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "180px" }}
      />

      <input
        type="date"
        name="dateFin"
        value={formData.dateFin}
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
