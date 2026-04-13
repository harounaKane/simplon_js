export default function EtudiantForm({
  formData,
  setFormData,
  isEditing,
  handleSubmit,
  handleCancel,
}) {
  return (
    <form onSubmit={handleSubmit} className="bg-light p-3 rounded mb-4">
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={(e) =>
              setFormData({ ...formData, telephone: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mt-2 d-flex gap-2">
        <button
          type="submit"
          className={`btn ${isEditing ? "btn-warning" : "btn-primary"}`}
        >
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
      </div>
    </form>
  );
}
