import React from "react"
import image from "../bg-image.jpg"

export default function Home() {
    return(
        <main>
            <img src={image} alt="Blue Wall" className="absolute object-cover w-full h-full opacity-60"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-700 font-bold cursive leading-none lg:leafing-snug home-name">
                    Hola. I'm Vineel Gannu.
                </h1>
            </section>    
        </main>
    )
}