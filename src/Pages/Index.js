import React, { useEffect, useState } from "react";
import {useNavigate, useLocation, Link, Navigate} from "react-router-dom"
import {useCookies} from "react-cookie"

export default function Index() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['_id', 'name', 'hkid'])
    const [name, setName] = useState("")
    const [hkid, setHkid] = useState("")
    const list = Array.from(Array(20).keys())
    console.log(cookies)
    useEffect(() => {
        if (cookies.name && cookies.name.length != 0) {
            setName(cookies.name)
            setHkid(cookies.hkid)         
        }
    })
    return (
        <>
            {!cookies.name && <Navigate to="/login" reaplce={true}/> }
            <div className="flex space-x-96 px-6 py-2 text-xl">
                <h1>Your Name is {name}</h1>
                <h1>Your HKID is retrived as follow: <span className="font-bold">{hkid}</span></h1>
                <Link className="bg-blue-600 text-white rounded-md px-2 py-1" to="/login" onClick={() => {
                    removeCookie("_id")
                    removeCookie("name")
                    removeCookie("hkid")
                }}>Logout</Link>
            </div>
            <div className="flex space-x-96 px-6 py-2 text-xl">
                <table className="border-solid border-2 border-sky-500 w-full ">
                    {
                        list.map((book) => {
                            return (
                                <tr>
                                    <td>Book {book}</td>
                                    <td>Author {book}</td>
                                    <td>Publised Date {book}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                
            </div>
            
        </>
        
    )
}