import React from 'react'
import Navbar from '../component/nav.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-white text-6xl font-bold">
                    hello world!!
                </h1>
            </div>
        </>
    )
}

export default Home