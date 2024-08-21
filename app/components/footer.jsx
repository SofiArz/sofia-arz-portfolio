import React from 'react'
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaWhatsapp
} from "react-icons/fa";

const items = [
    { name: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/sofia-arzamendia/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/SofiArz" },
    { name: "Whatsapp", icon: FaWhatsapp, link: "https://wa.me/+393761858867" },
    { name: "Mail", icon: FaEnvelope, link: "mailto:arzamendia.sofi@gmail.com" }
];

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4 font-light text-sm">Designed & built by Sofia Arzamendia</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    {items.map((x, index) => {
                        return (
                            <a
                                key={x.name}
                                href={x.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500">
                                <x.icon key={index} className="hover:text-white" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>

    );
};

export default Footer;