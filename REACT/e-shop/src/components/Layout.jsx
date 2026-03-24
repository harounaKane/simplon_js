import Footer from "./Footer";
import NavBarre from "./NavBarre";

export default function Layout({ cart, children }) {
  return (
    <div className="containerLayout">
      <NavBarre cart={cart} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
