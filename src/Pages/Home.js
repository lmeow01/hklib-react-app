import React, { useEffect, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState("")
    const [hkid, setHkid] = useState("")
    const [_id, setId] = useState("")
 
    useEffect(() => {
        if (!location.state){     
            return navigate("/login")
        }

        setName(location.state.name)
        setHkid(location.state.hkid)
        setId(location.state._id)
    })

    return (
        (name.length != 0 && hkid.length != 0 && <div>
            Welcome {name}
            Your HKID is retrieved: {hkid}
        </div>  )
              
    )
        
    

    
}