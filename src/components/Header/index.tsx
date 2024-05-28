import Logo from "../../assets/imagens/logo.png";
import Banner from "../../assets/imagens/banner-home.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="Header">
        <nav className="HeaderNav">
          <img src={Logo} alt="" />
          <ul className="Actions">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("favorites")}>Favoritos</li>
          </ul>
        </nav>
      </section>
      <section className="Banner">
        <img src={Banner} alt="" />
      </section>
    </>
  );
};
