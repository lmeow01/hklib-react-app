import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link, Navigate} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const _id = Cookies.get("_id")
    
    return (
        <>
            {_id || _id.length != 0 || <Navigate to="/login" reaplce={true}/> }
            {_id && _id.length != 0 && 
                <div className="flex">
                    <h1>Your Name is {Cookies.get("name")}</h1>
                    <h1>Your HKID is retrived as follow: {Cookies.get("hkid")}</h1>
                    <Link to="/login" onClick={() => {
                        Cookies.delete("_id")
                        Cookies.delete("name")
                        Cookies.delete("hkid")
                    }}>Logout</Link>
                </div>
            }
        </>
        
    )
}