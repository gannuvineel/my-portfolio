import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return(
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-black-300 text-4xl font-bold cursive tracking-widest"
                    >
                        VINEEL
                    </NavLink>
                    {/* 
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black hover:bg-black-200"
                        > 
                        Blog Posts
                    </NavLink>
                    */}
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black hover:bg-white"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/experience"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black hover:bg-white"
                    >
                        Experience
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-black hover:bg-white"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-6 my-6">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/vineelgannu/"
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width:35}}
                    />
                    <SocialIcon 
                        url="mailto: vineel563@gmail.com"
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width:35}}
                    />
                    <SocialIcon 
                        url="whatsapp: +1 (306) 450 9420"
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width:35}}
                    />
                </div>
            </div>
        </header>
    ) 
}