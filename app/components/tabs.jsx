'use client'
import React, { useState } from 'react'

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="container md:flex mx-auto">
            <div className="lg:grid border-l border-gray-300 min-w-64 gap-y-16 py-4 hidden">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? 'border-l-4 border-purple-500' : ''
                            } flex-1 text-gray-300 font-medium py-2`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {children.map(child => {

                    return <div className={child.props.label !== activeTab ? "lg:hidden my-8" : ""} key={child.props.label}>{child.props.children}</div>;

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