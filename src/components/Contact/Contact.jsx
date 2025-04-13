import React from "react";
// import {emailIcon} from "/Contact/emailIcon.png"

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:khushijc2106@gmail.com">khushijc2106@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/posts/khushi-chaudhari-554263299_java-internship-programming-activity-7222866299004026880-nARl?utm_source=share&utm_medium=member_android">linkedin.com/KhushiChaudhari</a>
        </li>
        <li className={styles.link}>
          <img src="./contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/khushijc">github.com/khushijc</a>
        </li>
      </ul>
    </footer>
  );
};
