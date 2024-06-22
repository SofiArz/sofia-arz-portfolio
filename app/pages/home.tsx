'use client'
import React, { FC } from "react";


const Home: FC = () => {

    return (
        <div className="container">
            <div className="title-container">
                <p><strong> Hi! My name is </strong></p>
                <h1>Sofia Arzamendia</h1>
                <p>I am a software developer based in Italy that loves using 
                 .Net + Reactjs to create amazing things.</p>
            </div>
            <img
                alt="sofi-profile-pic"
                src="./sofi-profile-pic.jpg" />

        </div>
    );
};

export default Home;
