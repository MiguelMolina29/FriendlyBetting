import React from 'react';
// import axios from 'axios';
import Navbar from '../Components/Navbar';
import LandingInfo from '../Components/LandingInfo';


const MainContainer = () => {
    return (
        <div>
            <div className="main-container">
                <Navbar/>
                <LandingInfo/>
                
            </div>
            <div className="sigcontenedor">

            </div>
        </div>
    )
}

export default MainContainer
