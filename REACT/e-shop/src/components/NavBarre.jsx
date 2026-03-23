import { Link } from "react-router-dom";

export default function NavBarre() {
  return (
    <>
      <header className="bg-secondary p-3 d-flex align-items-center justify-content-evenly">
        <h1>
          <Link className="link" to="/">
            🛍️ E-SHop
          </Link>
        </h1>
        <nav>
          <Link className="link" to="/">
            🏠 Home
          </Link>
          <Link className="link" to="/products">
            {" "}
            📦 Products
          </Link>
          <Link className="link" to="/category">
            {" "}
            📦 Category
          </Link>
        </nav>
      </header>
    </>
  );
}
