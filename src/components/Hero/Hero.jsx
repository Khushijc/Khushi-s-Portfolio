import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Khushii!!</h1>
        <p className={styles.description}>
          I'm a second-year student pursuing a B.tech degree in computer engineering at RCPIT,shirpur . 
          I am passionate about web development and have a keen interest in exploring new technologies. 
        </p>
        <a href="mailto:khushijc2106@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="./heroImage.jpg"
        alt="Khushi Chuadhari"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
