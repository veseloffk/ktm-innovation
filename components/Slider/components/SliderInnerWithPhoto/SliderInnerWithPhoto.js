import cn from "classnames";

import styles from "./SliderInnerWithPhoto.module.scss";

const SliderInnerWithPhoto = ({ title, description, photoUrl, isActive }) => (
  <div
    className={cn(styles.container, {
      [styles.activeContainer]: isActive,
    })}
  >
    <img className={styles.photo} src={photoUrl} />
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

export default SliderInnerWithPhoto;
