import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link, Navigate} from "react-router-dom"
import {useCookies} from "react-cookie"

export default function Index() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['_id', 'name', 'hkid'])
    const [name, setName] = useState("")
    const [hkid, setHkid] = useState("")
    console.log(cookies)
    useEffect(() => {
        if (cookies.name && cookies.name.length != 0) {
            setName(cookies.name)
            setHkid(cookies.hkid)
        }
    })
    return (
        <>
            {cookies.name == 0 && <Navigate to="/login" reaplce={true}/> }
            {cookies.name.length != 0 && 
                <div className="flex">
                    <h1>Your Name is {name}</h1>
                    <h1>Your HKID is retrived as follow: {hkid}</h1>
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