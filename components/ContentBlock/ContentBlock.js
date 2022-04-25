import styles from "./ContentBlock.module.scss";

const ContentBlock = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentBlock;
