import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Project1 from '../assets/medias/projects/codesquad.jpg'
import Project2 from '../assets/medias/projects/vicky-art-station.jpg'
import Project3 from '../assets/medias/projects/euro.jpg'
import Project4 from '../assets/medias/projects/flavorwave.jpg'
import Project5 from '../assets/medias/projects/readify.jpg'
import Project6 from '../assets/medias/projects/thinkverse.jpg'
import { AnimatePresence, motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Projects = () => {
     useEffect(() => {
          AOS.init();
     }, []);

     // projects array
     const projects = [
          {
               id: 1,
               image: Project1,
               title: "CodeSquad",
               desc: "A quick and simple webpage for CodeSquad tech-group",
               about: "Made a single homepage website to teach my BCA junior batch about Tailwind CSS Framework.",
               tech: ["HTML", "TailwindCSS", "JavaScript"],
               repo: "https://github.com/vee309bajracharya/Frameworks_practice",
               live: "https://vee309bajracharya.github.io/Frameworks_practice/front-end/public/views/index.html",
               modalBg: "#3f187c",
          },
          {
               id: 2,
               image: Project2,
               title: "Vicky Art Station",
               desc: "Sticker business website for product showcase.",
               about: "My First real-world web project developed for a small business, fully responsive and focusing on an engaging, user-friendly experience across all devices.",
               tech: ["ReactJS", "TailwindCSS"],
               repo: "https://github.com/vee309bajracharya/vicky-art-station",
               live: "https://www.vickyartstation.com.np/",
               modalBg: "#0f2790",
          },
          {
               id: 3,
               image: Project3,
               title: "Euro School",
               desc: "Euro School's demo website",
               about: "A website for Euro School is created as a school assignment mini project. Taught with beginner-friendly HTML and CSS code for newcomers to web technology.",
               tech: ["HTML", "CSS", "JS"],
               repo: "https://github.com/vee309bajracharya/school-vacation-assignment?tab=readme-ov-file",
               live: "https://vee309bajracharya.github.io/school-vacation-assignment/assets/pages/",
               modalBg: "#14345b",
          },
          {
               id: 4,
               image: Project4,
               title: "Flavorwave",
               desc: "Restaurant and Cafe website demo",
               about: "My first project, fully responsive, built after getting started with HTML and CSS.",
               tech: ["HTML", "CSS", "JavaScript", "jQuery"],
               repo: "https://github.com/vee309bajracharya/Flavorwave-Cafe-project/tree/master",
               live: "https://vee309bajracharya.github.io/Flavorwave-Cafe-project/pages/index.html",
               modalBg: "#341000",
          },
          {
               id: 5,
               image: Project5,
               title: "Readify",
               desc: "Library Management System",
               about: "A semester project with my partner, created a Library Management System with PHP as back-end having functionality of both registered users and admin",
               tech: ["HTML", "Bootstrap5", "JavaScript", "PHP"],
               repo: "https://github.com/vee309bajracharya/Readify-Library-Management-System",

               modalBg: "#2b26ba",
          },
          {
               id: 6,
               image: Project6,
               title: "ThinkVerse",
               desc: "A blog-based tech community site",
               about: "A solo semester project, created with Laravel backend framework having the blog functionality",
               tech: ["Blade Template", "Laravel", "TailwindCSS"],
               repo: "https://github.com/vee309bajracharya/ThinkVerse-BlogApp",

               modalBg: "#b6552e",
          }
     ]

     // define open and close Modal
     const [selectedProject, setSelectedProject] = useState(null)

     const openModal = (project) => setSelectedProject(project)
     const closeModal = () => setSelectedProject(null)

     return (

          <section>
               <Navbar />

               <section className='xs:px-5 md:px-12 md:max-w-screen-xl md:py-8 md:my-5 md:mx-auto' data-aos="zoom-in" data-aos-duration="4000">
                    <h1 className='font-[fibonacci] xs:text-3xl md:text-5xl mt-4'>Projects</h1>

                    <section className='my-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-5'>
                         {/* project display here */}
                         {projects.map((project, id) => (
                              <div
                                   key={project.id}
                                   className={`relative group rounded-lg overflow-hidden ${id === 0 ? "lg:col-span-3" : ""}`}
                                   onClick={() => openModal(project)}>

                                   <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                   />

                                   {/* hover the details */}
                                   <div className='absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-3'>

                                        <h2 className='text-[var(--light-color)] text-2xl font-black font-[outfit]'>{project.title}</h2>

                                        <p className='text-gray-300 text-sm'>{project.desc}</p>
                                   </div>
                              </div>
                         ))}
                    </section>


               </section>


               {/* Modal */}
               <AnimatePresence>
                    {selectedProject && (
                         // modal container
                         <motion.div
                              className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
                              onClick={closeModal}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                         >
                              <motion.div
                                   className='relative w-full max-w-2xl mx-4 xs:mx-6 md:mx-0 text-[var(--dark-color)] rounded-xl p-4 xs:p-6 xs:max-h-[90vh] md:max-h-none overflow-y-auto'
                                   style={{ backgroundColor: selectedProject.modalBg }}
                                   initial={{ scale: 0.8, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   exit={{ scale: 0.8, opacity: 0 }}
                                   transition={{ duration: 0.3 }}
                                   alt="Project Preview"
                              >

                                   <button
                                        onClick={closeModal}
                                        className='absolute top-3 right-5 text-white text-3xl cursor-pointer'>
                                        &times;
                                   </button>


                                   <h2 className='text-[var(--light-color)] xs:text-2xl md:text-4xl font-bold font-[outfit] my-2'>{selectedProject.title}</h2>
                                   <p className='text-gray-200 mb-4 font-medium'>{selectedProject.desc}</p>
                                   <figure>
                                        <img
                                             src={selectedProject.image}
                                             alt={selectedProject.desc}
                                             className='rounded-md w-full max-h-72 object-cover my-3 backdrop-blur-md' />
                                   </figure>

                                   <h3 className='text-[var(--light-color)] text-xl font-bold font-[outfit] my-2'>About Project</h3>
                                   <p className='text-[var(--light-color)] font-[outfit] font-light mb-2'>{selectedProject.about}</p>

                                   <div className='flex gap-2 flex-wrap mb-4'>
                                        <h4 className='w-full font-bold font-[outfit] text-[var(--light-color)] text-xl'>Technologies</h4>
                                        {selectedProject.tech.map((techVal, i) => (
                                             <span
                                                  key={i}
                                                  className='bg-gray-300 font-[outfit] font-semibold px-2 py-0.5 rounded-md'
                                             > {techVal}
                                             </span>
                                        ))}
                                   </div>

                                   {/* only display Website Live, if included */}
                                   {selectedProject.live && (
                                        <div className="flex items-center gap-3 w-full mb-4">
                                             <h5 className="font-bold font-[outfit] text-[var(--light-color)] text-xl">
                                                  Website Live
                                             </h5>
                                             <a
                                                  href={selectedProject.live}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-[var(--light-color)] hover:text-gray-300"
                                             >
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       strokeWidth={1.5}
                                                       stroke="currentColor"
                                                       className="w-6 h-6"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                                       />
                                                  </svg>
                                             </a>
                                        </div>
                                   )}

                                   <a
                                        href={selectedProject.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-[var(--dark-blue)] text-[var(--light-color)] text-center px-4 py-3 rounded-md hover:bg-gray-900 transition duration-300"
                                   >
                                        <div className="flex justify-center items-center gap-2">
                                             Open Project
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="w-5 h-5"
                                                  viewBox="0 0 24 24"
                                                  fill='var(--light-color)'
                                             >
                                                  <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                                             </svg>
                                        </div>
                                   </a>


                              </motion.div>

                         </motion.div>
                    )}
               </AnimatePresence>
          </section>
     )
}

export default Projects
