import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";
import { ReactComponent as MinhasFotos } from "../Assets/Img/feed.svg";
import { ReactComponent as Estatísticas } from "../Assets/Img/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../Assets/Img/adicionar.svg";
import { ReactComponent as Sair } from "../Assets/Img/sair.svg";
import useMedia from "../Hooks/useMatch";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.btnMobile} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } `}
      >
        <NavLink to="/conta" end>
          <MinhasFotos /> {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatísticas /> {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto /> {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          {" "}
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
