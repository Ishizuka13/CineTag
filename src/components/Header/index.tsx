import Logo from "../../assets/imagens/logo.png";
import Banner from "../../assets/imagens/banner-home.png";
import "./styles.css";

export const Header = () => {
  return (
    <>
      <section className="Header">
        <nav className="HeaderNav">
          <img src={Logo} alt="" />
          <ul className="Actions">
            <li>Home</li>
            <li>Favoritos</li>
          </ul>
        </nav>
      </section>
      <section className="Banner">
        <img src={Banner} alt="" />
      </section>
    </>
  );
};
