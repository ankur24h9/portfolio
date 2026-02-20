
import { Link } from "react-router-dom";
import React, { useState } from 'react'


const Service = () => {
      const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive UI using React, Tailwind CSS and JavaScript."
    },
    {
      title: "Backend Development",
      desc: "Creating secure APIs and server-side logic using Node.js and Express."
    },
    {
      title: "Full Stack Development",
      desc: "Developing complete web applications from frontend to backend with database integration."
    }
  ];

  return (

    
    <div className='w-full min-h-screen bg-white text-gray-900'>
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
            
      <section className="container mx-auto bg-gray-800 rounded-lg shadow-sm my-1 py-50">
        <h2 className="text-5xl font-semibold text-center text-white pt-0">Services</h2>
        <p className="mt-2 text-blue-600 text-3xl font-bold px-5">What I Provide</p>

        <div className="grid md:grid-cols-3 gap-6 px-6 py-2 mt-5">
          {services.map((svc) => (
            <div key={svc.title} className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-center">{svc.title}</h4>
              <p className="mt-2 text-gray-600 text-xl">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default Service
