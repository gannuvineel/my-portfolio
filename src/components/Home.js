import React from "react"
import pexel from "../pexels.jpg"

export default function Home() {
    return(
        <main>
            <img src={pexel} alt="Background Display" className="absolute object-cover w-full h-full opacity-10"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h2 className="text-6xl text-black font-bold cursive leading-none lg:leafing-snug home-name">
                    Hola. I'm Vineel Gannu.
                </h2>
            </section>    
        </main>
    )
}