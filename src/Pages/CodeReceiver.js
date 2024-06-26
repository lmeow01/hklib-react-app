import React, { useEffect } from "react";
import {useNavigate, redirect, Navigate} from "react-router-dom"
import {useCookies} from "react-cookie"

export default function CodeReceiver() {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get("code")
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['_id', 'name', 'hkid', "codeVerifier"])

    useEffect(async () => {
        const codeVerfier = cookies.codeVerifier
        const response = await fetch(`https://hkid-f3672587ec5b.herokuapp.com/api/oauth/token?projectID=hklib.myapp.in&redirectURL=https://hklib.vercel.app/oauth/code_receiver&projectSecret=f3fb291a3221ae83dc3e1759f8b3f44a9d28b0977c0804fe597c7d504243bc6b&scope=default&code=${code}&code_verifier=${codeVerfier}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then((response) => {
            return response.json()
        }).then(async (data) => {
            const access_token = data.access_token

            if (!access_token) {
                return alert(data)
            }
            
            const response = await fetch(`https://hkid-f3672587ec5b.herokuapp.com/api/oauth/userinfo?access_token=${access_token}&`, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then((response) => {
                return response.json()
            }).then((data) => {
                const {_id, name, hkid} = data

                if (!_id) {
                    alert(data)
                }

                setCookie('_id', _id, {path: '/'})
                setCookie('name', name, {path: '/'})
                setCookie('hkid', hkid, {path: '/'})
                window.location.href = "/"
            });
        });
    })
  return (
    <></>
  );
}