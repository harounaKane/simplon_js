export default function CrudTable({ columns, rows, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}

            <td>
              <button
                className="btn btn-warning me-2"
                onClick={() => onEdit(row)}
              >
                ✏️
              </button>

              <button className="btn btn-danger" onClick={() => onDelete(row)}>
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
