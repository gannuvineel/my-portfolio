import React, { useEffect, useState } from "react"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Experience() {
    const [experienceData, setExperienceData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "experience"]{
            company,
            role,
            startDate,
            endDate,
            location,
            description,
            logo
        }`
        )
            .then((data) => setExperienceData(data))
            .catch(console.error)
    }, [])

    return (
        <main className="bg-gray-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Experience</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my experience page!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                  {experienceData && experienceData.map((experience, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-gray-700">
                                {experience.role}
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <div className="float-left">
                                <span>
                                    <h6 className="text-2xl">
                                        <a 
                                            href={experience.companyURL} 
                                            rel="noopener noreferrer" 
                                            target="_blank" 
                                            className="text-gray-800 hover:underline hover:text-gray-400"
                                        >
                                            {experience.company}
                                        </a>
                                    </h6>
                                </span>
                            </div>
                            <div className="float-right"> 
                                <span>
                                    <img src={urlFor(experience.logo).url()} alt="Background Display" className="relative w-25 h-12"/>
                                </span>
                            </div>
                        </div>
                        <div className="relative mt-12 text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Start Date</strong>: {experience.startDate}
                            </span>
                            <span>
                                <strong className="font-bold">End Date</strong>: {experience.endDate}
                            </span>
                            <br/><br/>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {experience.description }
                            </p>
                        </div>
                    </article>
                )) }    
                </section>
            </section>
        </main>
    )
}