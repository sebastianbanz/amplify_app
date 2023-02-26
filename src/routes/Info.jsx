import React from "react"
import { Outlet } from "react-router";
import style from '../CSS/AppHeader.module.css';

export default function catty() {

    const cat = require('../Images/cover3.jpg'); // with require



    return (
        <>

        <div>
            <h1> hiee</h1>
            <img fetchpriority="high" src={cat} className={style.img} />
        </div>

        <div><Outlet /></div>

        </>

    );


}