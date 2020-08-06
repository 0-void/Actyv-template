import { useEffect, useState } from "react";

import styles from "./burger-menu.module.css";
import SideDrawer from "../Side-drawer/index";

const BurgerMenu = () => {
  const [isSideDrawerOpen, SetIsSideDrawerOpen] = useState(false);
  const [onClick, SetOnClick] = useState(false);

  const onCloseHandler = () => {
    SetIsSideDrawerOpen(false);
    SetOnClick(true);
  };

  useEffect(() => {
    if (onClick) {
      SetIsSideDrawerOpen(false);
      SetOnClick(false);
    }
  }, [onClick]);

  useEffect(() => {
    let timeout;
    if (isSideDrawerOpen) {
      timeout = setTimeout(() => {
        //SetIsSideDrawerOpen(false);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [isSideDrawerOpen]);

  return (
    <div
      className={styles.burgerMenu}
      onClick={() => SetIsSideDrawerOpen(true)}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      {isSideDrawerOpen && <SideDrawer onCloseHandler={onCloseHandler} />}
    </div>
  );
};

export default BurgerMenu;
