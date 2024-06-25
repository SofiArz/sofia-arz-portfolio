'use client'
import React, { useState } from 'react'

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="container flex mx-auto">
            <div className="flex border-l border-gray-300 min-w-64 grid gap-y-3">
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
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
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