import React from "react";
import {useNavigate, useLocation} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    if (!location.state){     
        return navigate("/login")
    }

    const {_id, name, hkid} = location.state

    return (
        <div>
            Welcome {name}
            Your HKID is retrieved: {hkid}
        </div>        
    )
}