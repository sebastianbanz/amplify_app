import React from "react"
import { Outlet } from "react-router";

export default function Experiences() {

    return (
        <>
            <div>
                <h1> experience these nuts </h1>
            </div>

            <div><Outlet /></div>
        </>

    );


}