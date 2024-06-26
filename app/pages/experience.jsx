import React from 'react'
import { Tabs, Tab } from '../components/tabs'
import { SlCalender } from "react-icons/sl";
import { jobs } from '../../util/constants'


const Experience = () => {
    return (
        <section className='lg:px-24 w-full'>
            <h2 className='border-b-2 border-purple-300 mb-20'>Where I've worked </h2>
            <Tabs>
                {jobs.map(job => (
                    <Tab label={job.company}>
                        <div className="p-4 md:p-16 border rounded-xl border-zinc-600 text-justify lg:min-h-[500px]">
                            <a
                                href={job.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl">
                                {job.company}
                            </a>
                            <h2 className="text-lg mb-2">
                                {job.title + " "}
                            </h2>

                            <p className="flex text-base text-gray-400 mb-4">
                                <SlCalender className='text-purple-300 mr-2.5' />
                                {job.date}
                            </p>
                            <ul className='grid gap-4 max-w-[1024px]'>
                                {job.experience.map(exp => (
                                    <li className="text-gray-100 text-sm">
                                        <strong className='text-purple-300 mr-2.5 animate-pulse'>✦</strong>
                                        {exp}
                                    </li>

                                ))}
                            </ul>

                        </div>
                    </Tab>
                ))}
            </Tabs>
        </section>
    );
};

export default Experience;