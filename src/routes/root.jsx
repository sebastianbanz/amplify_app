
import stylesDark from "../CSS/AppHeader.module.css"
import React from "react";
import Catty from './Info';
import { Outlet } from "react-router";
import { Link } from "react-router-dom";




export default function Root(){  

const styles = stylesDark;
  return (
    <>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><Link to={"/home"} className={styles.link}>Home</Link></li>
          <li><Link to={"/info"} className={styles.link}>Info</Link></li>
          <li><Link to={"/experiences"} className={styles.link}>Experiences</Link></li>
        </ul>
      </nav>
    </header>

    <div>
      <Outlet />
    </div>
    </>
  );

}

