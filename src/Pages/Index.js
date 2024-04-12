import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from "react-router-dom"
import Cookies from "js-cookie"

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const _id = Cookies.get("_id")
        if (!_id || _id.length == 0){
            navigate("/login")
        } else {
            navigate("/home")
        }
    })
}