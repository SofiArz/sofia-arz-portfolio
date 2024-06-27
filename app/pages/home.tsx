'use client'
import React, { FC } from "react";


const Home: FC = () => {

    return (
        <section>
            <div className="container lg:flex">
                <div className="title-container mb-28">
                    <p><strong className="text-cyan-200"> Hi! My name is </strong></p>
                    <h1>Sofia Arzamendia</h1>
                    <p className="text-gray-200">I am a software developer based in Italy that loves using
                        .Net + Reactjs to create amazing things.</p>
                    <a
                        className="resume-btn"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
                <img
                    alt="sofi-profile-pic"
                    src="./sofi-profile-pic.jpg"
                    className="lg:ml-28 m-auto" />
            </div>
        </section>
    );
};

export default Home;
