import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import PortfolioButton from "./PortfolioButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [navShrink, setNavShrink] = useState(false);

  const onNavigate = (e) => {
    const value = e.currentTarget.getAttribute("value");
    navigate("/" + value);
  };

  useEffect(() => {
    if (
      (window.location.hash === "#/" || window.location.hash === "") &&
      window.scrollY === 0
    ) {
      setNavShrink(false);
    } else {
      setNavShrink(true);
    }

    window.onscroll = () => {
      if (
        (window.location.hash === "#/" || window.location.hash === "") &&
        window.scrollY === 0
      ) {
        setNavShrink(false);
      } else {
        setNavShrink(true);
      }
    };
  }, [window.location.hash]);

  return (
    <div
      className={`${styles.wrapper} ${styles[navShrink && "wrapper-shrink"]}`}
    >
      <div className={`${styles["content-section"]}`}>
        <div
          onClick={onNavigate}
          value=""
          className={`${styles.home} ${styles[navShrink && "home-shrink"]}`}
        >
          NASLOVNA
        </div>
        <div
          className={`${styles.portfolios} ${
            styles[navShrink && "portfolios-shrink"]
          }`}
        >
          <PortfolioButton
            navShrink={navShrink}
            value="zavjese"
            onClick={onNavigate}
          >
            Zavjese
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            value="rolice_paneli"
            onClick={onNavigate}
          >
            Rolice {!navShrink && <br></br>}i paneli
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            value="dekoracija"
            onClick={onNavigate}
          >
            Dekoracija
          </PortfolioButton>
          <PortfolioButton
            navShrink={navShrink}
            value="prateca_dekoracija"
            onClick={onNavigate}
          >
            Prateća {!navShrink && <br></br>}dekoracija
          </PortfolioButton>
        </div>
        <div className={styles.info}>
          <div
            onClick={onNavigate}
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            KONTAKT
          </div>
          <div
            onClick={onNavigate}
            className={`${styles["info-button"]} ${
              styles[navShrink && ["info-button-shrink"]]
            }`}
          >
            LOKACIJA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
