import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Page non trouvée !</h2>
      <p>
        <Link to="/">Retour à l'accueil</Link>
      </p>
    </>
  );
}

export default NotFound;
