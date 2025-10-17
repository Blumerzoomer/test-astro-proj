import styles from "./HomeImages.module.css";
import classNames from "classnames";


export default function HomeImages() {
  return (
    <>
      <div
        className={classNames(
          styles.bgClouds,
          styles.bgCloudsLeft,
          styles.bgCloudsRight
        )}
      ></div>
      <div className={styles.senseiImg}></div>
    </>
  );
}
