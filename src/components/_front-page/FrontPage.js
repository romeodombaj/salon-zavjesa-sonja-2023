import Head from "./0_Head/Head";
import AboutUs from "./2_AboutUs/AboutUs";
import ContactUs from "./4_ContactUs/ContactUs";
import Services from "./1_Services/Services";
import Location from "./3_Location/Location";
import styles from "./FrontPage.module.css";

const FrontPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head />
      <Services />
      <div className={styles.divider} />
      <AboutUs />
      <div className={styles.divider} />
      <Location />
      <div className={styles.divider} />
      <ContactUs />
    </div>
  );
};

export default FrontPage;
