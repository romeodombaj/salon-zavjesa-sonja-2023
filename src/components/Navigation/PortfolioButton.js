import styles from "./PortfolioButton.module.css";

const PortfolioButton = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[props.navShrink && "shrink"]}`}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default PortfolioButton;
