import React from 'react'
import { Tabs, Tab } from '../components/tabs'
import { jobs } from '../../util/constants'


const Experience = () => {
    return (
        <section>
            <h2 className='border-b-2 border-purple-300'>Where I've worked </h2>
            <Tabs>
                {jobs.map(job => (
                    <Tab label={job.company}>
                        <div className="py-4 border rounded-xl border-zinc-600 text-justify">
                            <h2 className="text-lg font-medium mb-2">
                                {job.title}
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {job.company}
                                </a>
                            </h2>
                            <p className="text-gray-100">{job.date}</p>
                            <ul>
                                {job.experience.map(exp => (
                                    <li className="text-gray-100">
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