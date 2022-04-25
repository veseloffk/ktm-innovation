import cn from "classnames";

import styles from "./DefaulSliderInner.module.scss";

const DefaulSliderInner = ({ title, description, moreLink, isActive }) => (
  <>
    <div
      className={cn(styles.inner, {
        [styles.innerActive]: isActive,
      })}
    >
      <div className={styles.description}>{description}</div>
      <div className={styles.slideTitle}>{title}</div>

      {isActive && (
        <a href={moreLink} className={styles.learnMoreLink}>
          Learn more
        </a>
      )}
    </div>
  </>
);

export default DefaulSliderInner;
