import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {motion} from "framer-motion";function DynamicRole() {
  return (
    <div className="text-4xl text-white font-bold">
      <Typewriter
        words={[
          "Website Developer",
          "Frontend Developer",
          "Backend Developer",
          "Full-Stack Developer",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </div>
  );
}
export default function App() {
  const skills = [
    "C Language",
    "C++",
    "Java",
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "MYSQL",
    "SQL",
    "GitHub",
    "Postman",
    "Apache"
  ];
  const skillLogos = {
  "C Language": "/logos/c.png",
  "C++": "/logos/C++.png",
  "Java": "/logos/Java.png",
  "HTML": "/logos/HTML.png",
  "Tailwind CSS": "/logos/tailwind.png",
  "JavaScript": "/logos/javascript.png",
  "React": "/logos/react.png",
  "MYSQL": "/logos/mysql.png",
  "SQL": "/logos/sql.png",
  "GitHub": "/logos/git.png",
  "Postman": "/logos/postman.png",
  "Apache": "/logos/apache.png",
};


  const services = [
    {
      title: "Web Application Development",
      desc:
        "Designing and building responsive, high-performance web applications from idea to production.",
    },
    {
      title: "Frontend Development",
      desc:
        "Cross-platform websites with great UX — from prototypes to stores.",
    },
    {
      title: "Backend Development",
      desc:
        "APIs, databases and server-side logic using Node/Express and cloud deployments.",
    },
  ];

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
 const certification = [
    {
      title: "IEEE Hackathon Finalist ",
      subtitle: "MIT-ADT University 2025",
      img: "/certification/IEEE.jpg",
      link: "",
    },
    {
      title: "Internet Of Things",
      subtitle: "IIT Kharagpur  2024",
      img: "/certification/IOT.jpg",
      link: "",
    },
    {
      title: "Enhancing Soft Skill and Dev",
      subtitle: "IIT Kanpur 2023",
      img: "/certification/ESSD.jpg",
      link: "",
    },
    {
      title: "Data Visualization",
      subtitle: "TATA Forsage 2025",
      img: "/certification/tata.jpg",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className=" fixed shadow-md bg-white w-full ">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              AK
            </div>
            <div>
              <div className="font-semibold">Ankur Kumar</div>
              
             
            </div>
          </div>

          <nav className="space-x-5 text-md hidden md:block gap-7 ">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#certification" className="hover:text-indigo-600">Certification</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

         
        </div>
      </header>

   
      <section id="home" className="bg-gradient-to-br from-indigo-500 to-purple-500 container mx-auto px-6 py-26 flex flex-col md:flex-row items-center gap-8 rounded-2xl">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-amber-300">Hi, I am Ankur</h1> <DynamicRole />
          <p className="font-bold text-2xl mt-5 text-white ">I am a Passionate Full-Stack Developer. I am currently working at React Technologies as a web Developer.</p>
         <div className="flex items-center gap-3 mt-20 md-20 ">
           <a
  href="/myresume.pdf"
   download="myresume.pdf"
  className="w-50 mx-4  px-4 py-2 text-xl hover:bg-violet-700 bg-white text-center justify-center"
>
 Download Resume
</a>

          </div>

     
  <div className="flex space-x-4  mx-14 mt-10">
  
    <a href="https://www.linkedin.com/in/ankurkumar24h9" target="_blank" rel="noreferrer">
      <img
        src="/logos/images.png"
        alt="LinkedIn"
        className="w-8 h-8 hover:opacity-8 "
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
        className="w-8 h-8 hover:opacity-8"
      />
    </a>
  </div>
          <div className="mt-28 flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">Contact Me</a>
            <a href="mailto:ankurkumar62049@gmail.com" className="px-6 py-3 border border-gray-200 rounded-full hover:bg-gray-100">Send Email</a>
          </div>

         
        </div>

        <div className="flex justify-end items-center w-full md:w-1/2 mt-0">
  <div className="w-124 h-104 rounded-2xl shadow-md overflow-hidden">
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?semt=ais_hybrid&w=740&q=80"
      alt="profile"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>
       </section>
    
     
      <section id="about" className="container mx-auto  bg-gray-800 rounded-lg shadow-sm my-16 pt-5">
        <h2 className="text-5xl font-bold text-center text-white pt-15">About Me</h2>
        <h4 className="text-semibold text-2xl text-blue-600 mx-5">A bit about me</h4>
        <p className="mt-3  text-white text-2xl mx-5">I'm a Full Stack web developer and Designer with experience in designing new features from ideation to production. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.</p>

        <h3 className="mt-6 font-medium text-3xl text-blue-600 mx-5 ">Technologies and Tools</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 py-5 mx-5">
      {skills.map((s, index) => (
        <motion.div
          key={s}
          className="flex items-center gap-3 p-3 rounded shadow hover:shadow-lg transition  text-white"
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 
          transition={{ duration: 0.4, delay: index * 0.1 }} 
        >
          <div className="w-15 h-15 bg-white rounded shadow flex items-center justify-center">
            <img
              src={skillLogos[s]}
              alt={s}
              className="w-9 h-9 object-contain"
            />
          </div>
          <div className="text-sm font-medium">{s}</div>
        </motion.div>
      ))}
    </div>
      </section>

      
      <section id="services" className="container mx-auto  bg-gray-800 rounded-lg shadow-sm my-1 h-max-screen py-20 ">
        <h2 className="text-5xl font-semibold text-center text-white pt-2">Services</h2>
        <p className="mt-2 text-blue-600 text-3xl font-bold  px-5">What I Provide</p>

        <div className="grid md:grid-cols-3 gap-6 h-full px-6 py-2 mt-5">
          {services.map((svc) => (
            <div key={svc.title} className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-center">{svc.title}</h4>
              <p className="mt-2 text-gray-600 text-xl ">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
      id="projects"
      className="container mx-auto  bg-gray-800 rounded-lg shadow-sm py-40 mt-10"
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



<section
      id="certification"
      className="container mx-auto  bg-gray-800 rounded-lg shadow-sm py-40 mt-10"
    >
      <h2 className="text-5xl font-bold text-center text-white">Certification</h2>
      <p className="mt-2 text-blue-600 text-3xl font-bold px-6">What I Earn</p>

      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 text-white">
        {certification.map((p, index) => (
          <motion.article
            key={p.title}
            className="rounded overflow-hidden shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }} 
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="h-50 bg-gray-200 flex items-center justify-center">
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











     
      <section id="contact" className="mt-5 container mx-auto max-h  px-6 py-3 font-extrabold bg-black">
        <h2 className="text-5xl font-bold text-center text-white mt-30">Contact</h2>
        <p className="mt-2 text-blue-600 text-3xl font-bold">Connect with me</p>
        <p className="text-white font-normal mt-4">If you want to know more about me or my work, or if you would just
like to say hello, send me a message. I'd love to hear from you.</p>

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-40xl ">
          <input className="p-3 border rounded  bg-white" placeholder="Name" required/><br />
          <input className="p-3 border rounded mt-5  bg-white" placeholder="Email" required/>
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

  <h4 className="font-semibold mt-4 text-white flxt">Social Media</h4>
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
          All Right reserved by @ <span className="text-red-500"></span> by Ankur Kumar
        </div>
      </footer>
      </section>

      
      
    </div>
  );
}

