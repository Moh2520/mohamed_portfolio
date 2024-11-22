import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, My name is Mohamed</h1>
        <p className={styles.description}>
          I'm a software engineer with previous experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com"className={styles.contactBtn}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            Email</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/myname" className={styles.contactBtn}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          linkedin</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/myname"className={styles.contactBtn}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          github</a>
        </li>
      </ul>
      </div>
      <img
        src={getImageUrl("hero/mpic1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
