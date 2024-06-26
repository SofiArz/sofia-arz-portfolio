'use client'
import React, { useState } from 'react'

const Tabs = ({ children: tabs }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTabIndex(index);
    };

    return (
        <div className="container px-9">
            <div className="lg:flex border-b  border-zinc-600 min-w-64 gap-16 hidden mb-4 ">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.props.label}
                        className={`${index === selectedTabIndex ? 'border-b-4 border-purple-500 text-white scale-105' : ''
                            } flex-1 text-gray-300 font-light py-2 hover:scale-105 hover:text-white hover:duration-200`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>

            <div className="py-4">
                {tabs.map((tab, index) => {
                    return <div className={index !== selectedTabIndex ? "lg:hidden my-8" : ""} key={tab.props.label}>{tab.props.children}</div>;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">

            {children}

        </div>
    );
};
export { Tabs, Tab };