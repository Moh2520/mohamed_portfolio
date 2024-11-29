import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <p className={styles.about}>
            Hi there! I’m a passionate software engineer with a strong interest in cybersecurity. I thrive on solving complex problems 
            and building innovative solutions that make a difference. Outside of coding, you’ll often find me experimenting with new recipes in the kitchen 
            or enjoying the thrill of snowboarding down snowy slopes. Balancing creativity, technical skills, and outdoor adventures keeps me motivated 
            and inspired every day. Some of my favorite dishes include Somali Rice, and Somali Crepes also Known as Somali Pancakes. 
          </p>
        </div>
      </div>
    </section>
  );
};
