import { useCallback } from "react";
import cn from "classnames";

import styles from "./Slide.module.scss";

const Slide = ({ component: InnerComponent, props, isActive, id, onClick }) => {
  const onClickCallback = useCallback(
    (event) => onClick(id, event),
    [onClick, id]
  );

  return (
    <div
      className={cn(styles.slide, {
        [styles.slideActive]: isActive,
      })}
      onClick={onClickCallback}
    >
      <InnerComponent {...props} isActive={isActive} />
    </div>
  );
};

export default Slide;
