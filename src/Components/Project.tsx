import React from "react";
import Link from "next/link";
import img1 from '@/assets/imgs/web1.png'
import img2 from '@/assets/imgs/web2.png'
import img3 from '@/assets/imgs/web3.png'
import Image from "next/image";

const projects = [
  {
    title: "Insightfulpages",
    description: "A blog website made while learning react js with chai aur code",
    image: img1,
    link: "https://insightfulpages.vercel.app/", 
  },
  {
    title: "Resume Builder",
    description: "A resume builder website which create resume for given details",
    image: img2,
    link: "https://resume-builder-byawais.vercel.app/", 
  },
  {
    title: "Furniro",
    description: "A frontend e-commerce website made in one day",
    image: img3,
    link: "https://furniroawais.vercel.app/", 
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 xl:h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-lg rounded-lg group transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
