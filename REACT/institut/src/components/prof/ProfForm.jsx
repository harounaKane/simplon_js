export default function ProfForm({
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
        style={{ maxWidth: "220px" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "220px" }}
      />

      <input
        type="text"
        name="spec"
        placeholder="Spécialité"
        value={formData.spec}
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
