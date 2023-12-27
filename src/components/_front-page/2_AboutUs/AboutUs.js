import styles from "./AboutUs.module.css";

import image from "../../../assets/head-img.jpg";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}>O nama</div>
        <div className={styles.description}>
          Salon zavjesa Sonja započela je s radom 2009. godine. Nudimo Vam
          široki asortiman zavjesa, dekora, ukrasnih jastuka, prekrivača,
          odnosno sve vezano uz dekoraciju prostora sa tkaninom. Nudimo Vam
          idejna rješenja, izmjeru, izradu i montažu u skladu sa zahtjevima
          kupaca i trendovima
        </div>
      </div>
      <img className={styles.image} src={image} />
    </div>
  );
};

export default AboutUs;
