import { useParams } from "react-router";
import styles from "./Gallery.module.css";
import GalleryImage from "./GalleryImage";
import { useEffect, useState } from "react";

const zavjese = require.context(
  `../../../assets/webImages/zavjese/img_01`,
  true
);

const zavjese1 = require.context(
  `../../../assets/webImages/zavjese/img_01`,
  true
);
const zavjese2 = require.context(
  `../../../assets/webImages/zavjese/img_02`,
  true
);
const zavjese3 = require.context(
  `../../../assets/webImages/zavjese/img_03`,
  true
);

const rolice_paneli1 = require.context(
  `../../../assets/webImages/rolice_paneli/img_01`,
  true
);

const rolice_paneli2 = require.context(
  `../../../assets/webImages/rolice_paneli/img_02`,
  true
);

const rolice_paneli3 = require.context(
  `../../../assets/webImages/rolice_paneli/img_03`,
  true
);

const dekoracija1 = require.context(
  `../../../assets/webImages/dekoracija/img_01`,
  true
);

const dekoracija2 = require.context(
  `../../../assets/webImages/dekoracija/img_02`,
  true
);
const dekoracija3 = require.context(
  `../../../assets/webImages/dekoracija/img_03`,
  true
);

const prateca_dekoracija1 = require.context(
  `../../../assets/webImages/prateca_dekoracija/img_01`,
  true
);

const prateca_dekoracija2 = require.context(
  `../../../assets/webImages/prateca_dekoracija/img_02`,
  true
);

const prateca_dekoracija3 = require.context(
  `../../../assets/webImages/prateca_dekoracija/img_03`,
  true
);

const Gallery = () => {
  const [imageList1, setImageList1] = useState();
  const [imageList2, setImageList2] = useState();
  const [imageList3, setImageList3] = useState();

  const setImageListHandler = (setOne, setTwo, setThree) => {
    setImageList1(setOne.keys().map((image) => setOne(image)));
    setImageList2(setTwo.keys().map((image) => setTwo(image)));
    setImageList3(setThree.keys().map((image) => setThree(image)));
  };

  useEffect(() => {
    const path = window.location.hash.slice(2);

    setImageList1();
    setImageList2();
    setImageList3();

    setTimeout(() => {
      switch (path) {
        case "zavjese":
          setImageListHandler(zavjese1, zavjese2, zavjese3);
          break;
        case "rolice_paneli":
          setImageListHandler(rolice_paneli1, rolice_paneli2, rolice_paneli3);
          break;
        case "dekoracija":
          setImageListHandler(dekoracija1, dekoracija2, dekoracija3);
          break;
        case "prateca_dekoracija":
          setImageListHandler(
            prateca_dekoracija1,
            prateca_dekoracija2,
            prateca_dekoracija3
          );
          break;
      }
    }, [1]);
  }, [useParams()]);

  return (
    <div className={styles.wrapper}>
      {imageList1 && imageList2 && imageList3 && (
        <div className={styles.grid}>
          <div className={`${styles.column} ${styles["column1"]}`}>
            {imageList1 &&
              imageList1.length > 0 &&
              imageList1.map((image, i) => {
                return <GalleryImage key={i} image={image} />;
              })}
          </div>
          <div className={`${styles.column} ${styles["column2"]}`}>
            {imageList2 &&
              imageList2.length > 0 &&
              imageList2.map((image, i) => {
                return <GalleryImage key={i} image={image} />;
              })}
          </div>
          <div className={`${styles.column} ${styles["column3"]}`}>
            {imageList3 &&
              imageList3.length > 0 &&
              imageList3.map((image, i) => {
                return <GalleryImage key={i} image={image} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
