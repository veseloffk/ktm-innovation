import Image from "next/image";

import Menu from "components/Menu";

import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <img src="/logo.svg" className={styles.logo} />

    <div className={styles.leftBlock}>
      <Menu />
      <button className={styles.getInTouch}>Get In Touch</button>
    </div>
  </header>
);

export default Header;
