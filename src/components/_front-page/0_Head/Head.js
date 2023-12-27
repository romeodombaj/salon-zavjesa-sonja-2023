import styles from "./Head.module.css";

import headImg from "../../../assets/head-img.jpg";

const Head = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`image-wrapper`]}>
        <img src={headImg} className={styles.image} />
      </div>
      <div className={styles.title}>SALON ZAVJESA SONJA</div>
    </div>
  );
};

export default Head;
