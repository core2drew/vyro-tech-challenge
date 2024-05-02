import styles from "./index.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
