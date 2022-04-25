import BurgerButton from "./components/BurgerButton";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <BurgerButton className={styles.burgerButton} />
      <ul className={styles.container}>
        <li className={styles.menuItem}>
          <a>Streams</a>
        </li>
        <li className={styles.menuItem}>
          <a>Projects</a>
        </li>
        <li className={styles.menuItem}>
          <a>About Us</a>
        </li>
        <li className={styles.menuItem}>
          <a>Careers</a>
        </li>
        <li className={styles.menuItem}>
          <a>Careers</a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
