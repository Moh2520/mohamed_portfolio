// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:myemail@email.com">myemail@email.com</a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://www.github.com/myname">github.com/myname</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          Submit the form below or email me at{" "}
          <a href="mailto:moha1113@umn.edu" className={styles.email}>
              moha1113@umn.edu
          </a>
        </p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </footer>
  );
};
