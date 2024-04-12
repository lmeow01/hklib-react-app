import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    if (!location.state) {
        return window.location.href = "/login"
    } else {
        const {_id, name, hkid} = location.state
        return (
            <div>
                <h1>Your Name is {name}</h1>
                <h1>Your HKID is retrived as follow: {hkid}</h1>
            </div>
        )
    }
}