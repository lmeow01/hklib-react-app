import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link, Navigate} from "react-router-dom"
import {useCookies} from "react-cookie"

export default function Index() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['_id', 'name', 'hkid'])
    console.log(cookies)
    return (
        <>
            {!cookies.name && <Navigate to="/login" reaplce={true}/> }
            {cookies.name && 
                <div className="flex">
                    <h1>Your Name is {cookies.name}</h1>
                    <h1>Your HKID is retrived as follow: {cookies.hkid}</h1>
                    <Link to="/login" onClick={() => {
                        removeCookie("_id")
                        removeCookie("name")
                        removeCookie("hkid")
                    }}>Logout</Link>
                </div>
            }
        </>
        
    )
}