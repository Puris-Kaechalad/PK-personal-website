import React from 'react'
import Navbar from '../component/nav.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen bg-neutral-100">
                <h1 className="text-black text-6xl font-bold">
                    Hello world!!
                </h1>
            </div>
        </>
    )
}

export default Home