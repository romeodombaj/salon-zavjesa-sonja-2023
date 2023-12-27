import styles from "./Services.module.css";

import img from "../../../assets/email-icon.png";

const Services = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles["icon-wrapper"]}>
          <img src={img} className={styles.icon} />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>

        <div className={styles["icon-wrapper"]}>
          <img src={img} className={styles.icon} />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>

        <div className={styles["icon-wrapper"]}>
          <img src={img} className={styles.icon} />
        </div>
        <div className={styles.description}>
          NUDIMO USLUGE ČIŠĆENAJA BRISANJA I PRANJA SVIH MOGUĆIH VRSTA ZAVJESA
        </div>
        
      </div>
    </div>
  );
};

export default Services;
