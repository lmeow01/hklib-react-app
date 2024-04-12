import React, { useEffect, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const _id = Cookies.get("_id")
    const name = Cookies.get("name")
    const hkid = Cookies.get("hkid")

    
    return (
        (name && hkid && <div>
            Welcome {name}
            Your HKID is retrieved: {hkid}
        </div>  )
              
    )
        
    

    
}