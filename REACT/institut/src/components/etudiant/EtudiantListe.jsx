export default function EtudiantListe({ etudiants, onEdit, onDelete }) {
  return (
    <div>
      <h4 className="mb-3">🎓 Liste des étudiants</h4>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                Aucun étudiant
              </td>
            </tr>
          )}
          {etudiants.map((e) => (
            <tr key={e.id_etudiant}>
              <td>{e.id_etudiant}</td>
              <td>{e.nom}</td>
              <td>{e.email}</td>
              <td>{e.telephone ?? "—"}</td>
              <td className="d-flex gap-1">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => onEdit(e)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(e.id_etudiant)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
