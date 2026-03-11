import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="bg-primary p-4 my-3 text-white">
      <Link className="text-white btn btn-success" to="/">
        Home
      </Link>
      <Link className="text-white btn btn-success" to="/about">
        about
      </Link>
      <Link className="text-white btn btn-success" to="/login">
        login
      </Link>
    </header>
  );
}

export default Navigation;
