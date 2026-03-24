import Footer from "./Footer";
import NavBarre from "./NavBarre";

export default function Layout({ cartItems, children }) {
  return (
    <div className="containerLayout">
      <NavBarre cartItems={cartItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
