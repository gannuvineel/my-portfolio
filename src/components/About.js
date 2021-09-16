import React, { useEffect, useState } from "react"
import sanityClient from "../client.js"
import pexel from "../pexels.jpg"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);
    
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
            .then((data) => setAuthor(data[0] ))
            .catch(console.error)
    }, [])

    if(!author) return <div>Loading...</div>

    return(
        <main className="relative">
            <img src={pexel} alt="Background Display" className="absolute w-full opacity-10"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-black rounded-lg shadow-2xl lg:flex p-20">
                <img src={urlFor(author.authorImage).url() } className="rounder w-40 h-60 lg:w-60 lg:h-72 mr-8" alt={author.name}/>
                <div className="text-lg flex flex-col justify-center">
                    <h1 className="cursive text-6xl text-gray-300 mb-4">
                        Hey there. I'm {""}
                        <span className="text-gray-100">{author.name}</span>
                    </h1>
                    <div className="prose lg:prose-xl text-white">
                        <BlockContent blocks={author.bio} projectId="lloq2kp2" dataset="studio_dataset" />
                    </div>    
                </div>
                </section>
            </div>
        </main>
    )
}