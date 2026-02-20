import React, { useState } from 'react'

import { Link } from "react-router-dom";

const Contact = () => {
          const [isOpen, setIsOpen] = useState(false);
    
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
          
         <section id="contact" className="mt-0 container mx-auto max-h  px-6 py-2 font-extrabold bg-black">
        <h2 className="text-5xl font-bold text-center text-white mt-30">Contact</h2>
        <p className="mt-2 text-blue-600 text-3xl font-bold">Connect with me</p>
        <p className="text-white font-normal mt-4">If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.</p>

        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-40xl ">
          <input className="p-3 border rounded  bg-white" placeholder="Name" required /><br />
          <input className="p-3 border rounded mt-5  bg-white" placeholder="Email" required />
          <textarea className="p-3 border rounded md:col-span-2 mt-5 max-w-200  bg-white" placeholder="Message" rows={5} required></textarea>
          <div className="md:col-span-2 flex gap-4 mt-5">
            <a href="mailto:ankurkumar62049@gmail.com" className="px-6 py-3 bg-indigo-600 text-white rounded-2xl"> Submit</a>
            <a href="mailto:ankurkmar52049@gmail.com" className="px-6 py-3 border rounded-2xl  bg-white">Send me email directly</a>
          </div>
        </form>
        <div className="mt-8 max-w-3xl justify-end">
          <h4 className="font-semibold text-white">Email</h4>
          <p className="text-sm text-sky-600">ankurkumar62049@gmail.com</p>

          <h4 className="font-semibold mt-4 text-white">Address</h4>
          <p className="text-sm text-sky-600">Karamveer Nagar Colony, Bhopal India</p>

          <h4 className="font-semibold mt-4 text-white flxt"> Social Media</h4>
          <div className="flex space-x-4 mt-2 justify-right">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ankurkumar24h9" target="_blank" rel="noreferrer">
              <img
                src="/logos/images.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>

            <a href="https://github.com/ankur24h9" target="_blank" rel="noreferrer">
              <img
                src="/logos/github.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-8"
              />
            </a>

            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
              <img
                src="/logos/twitter.png"
                alt="Twitter"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
        </div>


        <footer className="mt-12 bg-black">
          <div className=" text-2xl container mx-auto px-6 text-center text-violet-600 font-bold">
            All Right reserved  @ <span className="text-red-500"></span> by Ankur Kumar
          </div>
        </footer>
      </section>
      
    </div>
    </div>
  )
}

export default Contact
