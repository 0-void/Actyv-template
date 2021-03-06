import styles from './navbar.module.css'
import BurgerMenu from '../Burger-menu/index'
import Navlinks from './Navlinks/index'

const Navbar = () => {
  return (
    <nav className={styles.mainnavbar}>
      <img src="/vercel-icon-dark.svg" width="40px" height="40px" />
      <Navlinks />
      <BurgerMenu />
    </nav>
  )
}

export default Navbar
