import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./GalleryImage.module.css";
import { useState } from "react";

const GalleryImage = (props) => {
  const image = props.image;
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <div
      className={`${styles["image-wrapper"]} ${
        styles[loaded && "load-animation"]
      }`}
      ref={ref}
    >
      <img src={image} className={styles.image} />
    </div>
  );
};

export default GalleryImage;
