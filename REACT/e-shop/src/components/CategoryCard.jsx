import { Link } from "react-router-dom";

export default function CategoryCard({ categorie }) {
  return (
    <Link className="link" to={`/category/${categorie.id}`}>
      <div className="card p-5">
        <div className="card-body text-center">
          <div>{categorie.icon}</div>
          <div>{categorie.name}</div>
        </div>
      </div>
    </Link>
  );
}
