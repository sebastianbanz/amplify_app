
import stylesDark from "../CSS/AppHeader.module.css"
import React from "react";



export default function Root(){  

const styles = stylesDark;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#" className={styles.link}>Home</a></li>
          <li><a href="#" className={styles.link}>Info</a></li>
          <li><a href="#" className={styles.link}>Experiences</a></li>
        </ul>
      </nav>
    </header>
  );

}

