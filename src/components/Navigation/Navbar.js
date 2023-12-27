import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["home-section"]}>NASLOVNA</div>
      <div className={styles["portfolio-section"]}>
        <div>ZAVJESE</div>
        <div>ROLICE I PANELI</div>
        <div>DEKORACIJA</div>
        <div>PRATEĆA DEKORACIJA</div>
      </div>
      <div className={styles["info-section"]}>
        <div>KONTAKT</div>
        <div>LOKACIJA</div>
      </div>
    </div>
  );
};

export default Navbar;
