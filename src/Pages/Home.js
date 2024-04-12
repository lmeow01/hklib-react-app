import React, { useEffect, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const [_id, setId] = useState(Cookies.get("_id"))
    const [name, setName] = useState(Cookies.get("name"))
    const [hkid, setHkid] = useState(Cookies.get("hkid"))

    
    useEffect(() => {
        if (!_id) {
            navigate("/login")
        }
    })
    
    return (
        (name && hkid && <div>
            Welcome {name}
            Your HKID is retrieved: {hkid}
            <button onClick={() => {
                Cookies.delete("_id")
                Cookies.delete("name")
                Cookies.delete("hkid")
                setId("")
                setName("")
                setHkid("")
            }}>Logout</button>
        </div>  )
              
    )
        
    

    
}