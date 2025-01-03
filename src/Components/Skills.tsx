import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGem, FaCube, } from "react-icons/fa";


const Skills: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white lg:h-screen flex flex-col justify-center py-16 px-6'>
            <div className='max-w-6xl mx-auto text-center'>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">MY Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaHtml5 className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">HTML</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full w-[90%]" ></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaCss3Alt className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">CSS</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full w-[90%]" ></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaJs className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">JavaScript</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaReact className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">React</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-400 to-teal-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaNodeJs className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Node.js</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-teal-500 h-2.5 rounded-full w-[60%]" ></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaGithub className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">GitHub</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-gray-600 h-2.5 rounded-full w-[70%]" ></div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaGem className="text-6xl text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">GSAP</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full w-[47%]" ></div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <div className="flex justify-center mb-4">
                            <FaCube className="text-6xl text-white" /> 
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Three.js</h3>
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                            <div className="bg-purple-500 h-2.5 rounded-full w-[37%]" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills