import React from 'react'
import Navbar from '../component/nav.jsx';

function Profile() {
    return (
        <>
            <Navbar />
            <div className="w-screen flex justify-center items-center p-16">
                <div>
                    <h2>
                        My full profile
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Profile