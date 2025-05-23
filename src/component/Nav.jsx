import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div className="navbar fixed">
                <div className="flex justify-center items-center gap-8 py-2 px-4 shadow-md tracking-wider rounded-md bg-white">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="hover:scale-110 cursor-pointer transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-md z-1 mt-3 w-50 p-2 shadow-lg text-black">
                            <li><Link to="/">Home</Link></li>
                            <li><Link>About me</Link></li>
                            <li><Link>Activity</Link></li>
                            <li><Link to="Profile">Profile</Link></li>
                        </ul>
                    </div>
                    <h1 className="text-black text-lg font-semibold">Puris Kaechalad</h1>
                </div>
                
            </div>
        </>
    )
}

export default Nav