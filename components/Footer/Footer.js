import { useCallback } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const onBackToTheTopClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <footer className={styles.container}>
      <button className={styles.upBtn} onClick={onBackToTheTopClick}>
        Back to the top
      </button>

      <div className={styles.companyName}>KTM Innovation GmbH</div>
      <div className={styles.companyDescription}>
        Technology consultant and developer with software expertise in Big Data,
        AI and Blockchain.
      </div>

      <div className={styles.bottomLine}>
        <div className={styles.allRightReserved}>
          KTM Innovation. All the rights reserved, 2020.
        </div>
        <div className={styles.policyLinks}>
          <a>Imprint</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
