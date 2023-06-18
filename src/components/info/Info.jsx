import { useState } from "react";
import styles from "./Info.module.css";
import { useEffect } from "react";

function Info() {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClose(true);
    }, 6000);
  }, []);

  return (
    <div className={`${styles.container}${isClose ? styles.close : ""}`}>
      <button className={styles.closeBtn} onClick={handleClose}>
        x
      </button>
      <h2 className={styles.title}>Controls</h2>
      <div>
        <h3 className={styles.moveTitle}>Move</h3>
        <div className={styles.moveContainer}>
          <div className={styles.moveLeft}>
            <div className={styles.moveLeftLeft}>A</div>
            <div className={styles.moveLeftTop}>W</div>
            <div className={styles.moveLeftBack}>S</div>
            <div className={styles.moveLeftRight}>D</div>
          </div>
          <div>Or</div>
          <div className={styles.moveLeft}>
            <div className={styles.moveLeftLeft}>←</div>
            <div className={styles.moveLeftTop}>↑</div>
            <div className={styles.moveLeftBack}>↓</div>
            <div className={styles.moveLeftRight}>→</div>
          </div>
        </div>
        <h3 className={styles.moveTitle}>Mouse</h3>
        <div className={styles.moveContainer}>
          <div className={styles.clickContainer}>
            <div>Placing blocks</div>
            <div className={styles.clickLeft}></div>
            <div className={styles.clickLeftInfo}>click left</div>
          </div>
          <div>|</div>
          <div className={styles.clickContainer}>
            <div>Delete blocks</div>
            <div className={styles.containerClickDelete}>
              <div className={styles.clickLeftInfo}>alt + </div>
              <div className={styles.clickLeft}></div>
            </div>
            <div className={styles.clickLeftInfo}>alt + click left</div>
          </div>
        </div>
        <h3 className={styles.moveTitle}>Jump</h3>
        <div className={styles.jumpContainer}>
          <div className={styles.jumpInfo}>
            <div>Space Bar</div>
            <div className={styles.spaceBar}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
