import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from "../assets/home.jpg"

export default function Home() {

    return (
        <>
            <div className="">
                <div className="p-4 lg:mx-36 md:mx-8 origin-bottom-right mb-16">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 p-4">

                        <div className="md:flex md:flex-col md:justify-center pr-4">

                            <h2 className="font-dancingScript self-center text-indigo-800 text-5xl md:text-4xl lg:text-7xl font-bold mb-4 tracking-wider">Eduministic</h2>

                            <p className="font-sourceSerifPro self-center text-xl text-justify tracking-wide">Eduministic helps us to learn with 3D Models, which makes our understanding easier, and faster. Eduministic is a web platform where students from any background can visit the site and learn various concepts with the help of 3D Models, which makes their understanding easier, and faster.</p>

                            <Link to="study">
                                <button className="font-sourceSerifPro md:w-1/3 px-8 mt-4 bg-red-50 text-white p-2 text-base shadow-sm font-semibold tracking-wider border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full hover:shadow-lg ">Explore</button>
                            </Link>

                        </div>

                        <div className="">
                            <img src={HomeImg} alt="img" className="w-screen lg:p-10" />
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}