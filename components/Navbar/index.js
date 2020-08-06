import styles from "./navbar.module.css";
import BurgerMenu from "../Burger-menu/index";
import Navlinks from "./Navlinks/index";

const Navbar = () => {
  return (
    <nav className={styles.mainnavbar}>
      <img src="/actyv_logo.svg" />
      <Navlinks />
      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
