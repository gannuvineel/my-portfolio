import React, { useEffect, useState } from "react"
import sanityClient from "../client.js"

export default function Experience() {
    const [experienceData, setExperienceData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "experience"]{
            company,
            role,
            startDate,
            endData,
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
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Start Date</strong>: {experience.startDate}
                            </span>
                            <span>
                                <strong className="font-bold">End Date</strong>: {experience.endDate}
                            </span>
                            <span>
                            <a 
                                href={experience.companyURL} 
                                rel="noopener noreferrer" 
                                target="_blank" 
                                className="text-gray-500 font-bold hover:underline hover:text-gray-400"
                            >
                                {experience.company}
                            </a>
                            </span>
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