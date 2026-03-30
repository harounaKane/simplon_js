export default function EtudiantListe({ etudiants }) {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id_etudiant}>
              <td>{etudiant.nom}</td>
              <td>{etudiant.telephone}</td>
              <td>
                <button className="btn btn-success mx-1">✏️</button>
                <button className="btn btn-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
