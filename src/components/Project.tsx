// components/Card.js
import React from "react";
import styles from "./Project.module.css";

const Card = ({ name, briefDescription, image, link }) => {
  return (
    <a href={link} className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image.src} alt={image.alt} />
      </div>
      <h3 className={styles.h3}>{name}</h3>
      <p
        className={styles.p}
        dangerouslySetInnerHTML={{ __html: briefDescription }}
      />
      <div className={styles.learnMore}>Read More</div>
    </a>
  );
};

export default Card;
