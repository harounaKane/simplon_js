import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBarre from "./NavBarre";

export default function Layout({ cart, children }) {
  return (
    <div className="d-flex flex-column">
      <NavBarre cart={cart} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
