import { useCallback, useState } from "react";
import cn from "classnames";

import styles from "./BurgerButton.module.scss";

const BurgerButton = ({ className }) => {
  const [clicked, setClicked] = useState(false);

  const toggleButton = useCallback(
    () => setClicked((isClicked) => !isClicked),
    []
  );

  return (
    <button
      className={cn(styles.container, className, {
        [styles.opened]: clicked,
      })}
      onClick={toggleButton}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </button>
  );
};

export default BurgerButton;
