import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const [_id, setId] = useState(Cookies.get("_id"))
    const [name, setName] = useState(Cookies.get("name"))
    const [hkid, setHkid] = useState(Cookies.get("hkid"))

    
    useEffect(() => {
        if (!_id) {
            navigate("/login")
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
                </div>  )
                      
            )
        }
    })
  
}