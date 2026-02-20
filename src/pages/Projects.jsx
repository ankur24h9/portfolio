import React, { useState } from 'react'
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const Projects = () => {
        const [isOpen, setIsOpen] = useState(false);
  
   const projects = [
    {
      title: "Project One",
      subtitle: "AI-Powered JobLinker Website 2025",
      img: "/logos/JobLinker.jpg",
      link: "",
    },
    {
      title: "Project Two",
      subtitle: "Weather Forecating as per location 2024",
      img: "/logos/Weather.jpg",
      link: "",
    },
    {
      title: "Project Three",
      subtitle: "RideXperts riding Application 2025",
      img: "/logos/RideXperts.jpg",
      link: "",
    },

  ];
  return (
    <div className='min-h-screen bg-white text-gray-900'>
  <div className='min-h-screen bg-white text-gray-900'>
     <header className="fixed shadow-md bg-white w-full z-50">
   <div className="container mx-auto px-6 py-4 flex items-center justify-between">
 
     
     <div className="flex items-center gap-3">
       <div className="w-12 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
         AK
       </div>
       <div className="font-semibold">Ankur Kumar</div>
     </div>
 
     
     <nav className="hidden md:flex space-x-6 text-md">
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/services">Services</Link>
       <Link to="/projects">Projects</Link>
       <Link to="/certification">Certification</Link>
       <Link to="/contact">Contact</Link>
     </nav>
 
     
     <button
       className="md:hidden text-2xl"
       onClick={() => setIsOpen(!isOpen)}
     >
       ☰
     </button>
   </div>
 
   
   {isOpen && (
     <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
       <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
       <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
       <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
       <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
       <Link to="/certification" onClick={() => setIsOpen(false)}>Certification</Link>
       <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
     </div>
   )}
 </header>
      
       <section
        id="projects"
        className="container mx-auto  bg-gray-800 rounded-lg shadow-sm py-40 mt-0"
      >
        <h2 className="text-5xl font-bold text-center text-white">Projects</h2>
        <p className="mt-2 text-blue-600 text-3xl font-bold px-6">What I Built</p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3  gap-6 px-6 text-white">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              className="rounded overflow-hidden shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 text-white">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-white-600 mt-2">{p.subtitle}</p>
                <a
                  href={p.link}
                  className="font-bold px-6 py-4 mt-3 inline-block bg-cyan-400 text-sm rounded"
                >
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default Projects
