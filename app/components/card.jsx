import React from 'react'
import {
    FaRegFolder,
    FaGithub
} from "react-icons/fa";


const Card = ({title, githubLink, children}) => {
    return (
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-purple-300 to-cyan-300 p-0.5 shadow-lg">
            <div className="bg-slate-800 p-7 rounded-md">
                <div className="flex justify-between pt-2 mb-4">
                    <FaRegFolder className="text-4xl text-cyan-300 mt-[-16px]" />
                    <FaGithub className='text-2xl text-gray-500 mt-[-10px]' />
                </div>
                <h1 className="font-bold text-xl mb-2">{title}</h1>
                {children}
               
            </div>
        </div>

    );
};

export default Card;