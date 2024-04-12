import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const [_id, setId] = useState("")
    const [name, setName] = useState("")
    const [hkid, setHkid] = useState("")
    setId(Cookies.get("_id"))
    setName(Cookies.get("name"))
    setHkid(Cookies.get("hkid"))
    console.log(_id)
    console.log(name)
    console.log(hkid)
    if (_id.length == 0) {
        window.location.href = "/login"
    } else {
        return (
            (name && hkid && <div>
                Welcome {name}
                Your HKID is retrieved: {hkid}
                <Link to='/login' onClick={() => {
                    Cookies.delete("_id")
                    Cookies.delete("name")
                    Cookies.delete("hkid")
                }}> Logout</Link>
            </div>)
                  
        )
    }
}