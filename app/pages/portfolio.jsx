import React from 'react'
import Card from '../components/card'

const Portfolio = () => {
    return (
        <section className='lg:px-24 w-full'>
            <h2 className='border-b-2 border-purple-300 mb-20'>Things I've built</h2>
            <div className='flex flex-wrap gap-16 max-w-[1163px] m-auto'>
                <Card
                    title='Where to watch v1.0'
                    githubLink='https://github.com/SofiArz/movie-search'
                >
                    <p className='text-base'>A single page web app to help search the right streaming platform to watch a movie/serie.
                        The current version fetch the data from <a
                            href='https://www.omdbapi.com/'
                            target="_blank"
                            rel="noopener noreferrer">
                            OMDb API
                        </a>.
                        The next version will return the data from the Rest Api <a
                            href='https://www.movieofthenight.com/about/api'
                            target="_blank"
                            rel="noopener noreferrer">
                            Movie of the night
                        </a>.
                    </p>
                </Card>

                <Card
                    title='Azure file rename API'
                    githubLink='https://github.com/SofiArz/azure-file-blob-managment'
                >
                    <p className='text-base h-[144px]'>An api that receives two parameters, the old name of a file and the new name to update it.
                        It connects with azure blob storage.
                    </p>
                </Card>

                <Card
                    title='Pet shelter'
                    githubLink='https://github.com/SofiArz/VolunteerPetShelter'
                >
                    <p className='text-base text-base h-[144px]'>
                        A web application for adopting pets and applying to volunteer at shelters. This project was part of my final year at university and was built using C#, jQuery, JavaScript, Entity Framework, and SQL.
                    </p>
                </Card>

                <Card
                    title='My portfolio'
                    githubLink='https://github.com/SofiArz/sofia-arz-portfolio'
                >
                    <p className='text-base text-base h-[144px]'>
                        This website was developed using Next.js, React.js, Tailwind CSS, CSS3, and HTML5.
                        The open source font used is <a
                            href='https://www.jetbrains.com/lp/mono/'
                            target="_blank"
                            rel="noopener noreferrer">
                            Jetbrains Mono
                        </a>
                    </p>
                </Card>

            </div>

        </section>
    );
};

export default Portfolio;