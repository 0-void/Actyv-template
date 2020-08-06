import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./side-drawer.module.css";
import Backdrop from "../Backdrop/index";

const SideDrawer = ({ onCloseHandler }) => {
  const path = useRouter().pathname.toString();
  return (
    <>
      <Backdrop />
      <div className={styles.sideDrawer}>
        <button onClick={onCloseHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </button>
        <ul className={styles.navbar}>
          <li>
            <Link href="/">
              <a className={path === "/" ? styles.highlight : undefined}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a className={path === "/team" ? styles.highlight : undefined}>
                Team
              </a>
            </Link>
          </li>
          <li className={styles.products}>
            <Link href="/products">
              <>
                <a
                  className={
                    path === "/products" ? styles.highlight : undefined
                  }
                >
                  Products
                </a>
                <div className={styles.dropdown}>
                  <div>Pro</div>
                  <div>Jandhan</div>
                </div>
              </>
            </Link>
          </li>
          <li>
            <Link href="/career">
              <a className={path === "/career" ? styles.highlight : undefined}>
                Career
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
