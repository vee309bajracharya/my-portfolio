import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PolarAreaChart from '../components/PolarAreaChart'
import Certificates from '../components/Certificates'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Navbar />

      {/* about section starts */}
      <section className="xs:px-5 md:px-12 md:max-w-screen-xl md:py-8 md:my-5 md:mx-auto">

        <h1 className="my-5 font-[fibonacci] font-extrabold xs:text-3xl md:text-5xl">About</h1>

        {/* about */}
        <ul className="relative border-l-1 border-gray-300 mt-12" data-aos="fade-down" data-aos-duration="4000">

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-950 border-3 rounded-full -left-1.5"></div>
            <h2 className="xs:text-xl md:text-3xl font-bold mb-5 font-[outfit]">Bio</h2>
            <p className="xs:text-sm md:text-lg font-normal tracking-wide leading-6">Hey! Myself Veerin Bajracharya, a curious front-end web developer currently pursuing my Bachelors degree in Computer Application. I enjoy turning ideas into clean, beautiful and responsive websites. I love experimenting with front-end stuffs like TailwindCSS, ReactJS and exploring various front-end libraries to include something new on projects. I may be a beginner, but I'm constantly working, learning and pushing myself toward becoming a skilled developer as well as teacher. I do enjoy teaching others as well, with what I have learnt. I began my teaching process with giving tuitions and teaching my juniors in college too.</p>
          </li>

          <li className="mb-20 ml-4">
            <div className="absolute w-3 h-3 bg-gray-950 border-3 rounded-full -left-1.5"></div>
            <h2 className="xs:text-xl md:text-3xl font-bold mb-5 font-[outfit]">Personal Interests & Fun Facts</h2>
            <p className="xs:text-sm md:text-lg font-normal tracking-wide leading-6">As for personal interests, I love trying things out on
              <span className='font-bold text-blue-400'><a href="https://codepen.io/veerinbajra/"> CodePen</a></span>, taking some of the front-end challenges on the
              <span className='font-bold text-blue-400'><a href="https://www.frontendmentor.io/profile/vee309bajracharya"> Front-end Mentor </a></span>
              to exercise my front-end skills + taking courses on the
              <span className='font-bold text-blue-400'><a href="https://www.sololearn.com/en/"> Sololearn </a></span>
              platform to refresh my knowledge on my tech stack! In addition to my "live" classes I also record teaching videos for future references and I do quite a bit of public speaking and enjoy giving presentations.<br /><br />

              And about Fun Facts, besides the coding world, I'm completely into playing carrom board and the badmintion. I'm a solo traveller always exploring beauties and varieties of the surroundings and enjoying capturing photos and editing them. Along with all these, my most favorite thing is to collect unique items and wearing the punk-style accessories.</p>
          </li>

          {/* chart */}
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-950 border-3 rounded-full -left-1.5"></div>
            <h2 className="xs:text-xl md:text-3xl font-bold mb-5 font-[outfit]">My Tech Learning Journey</h2>
            <PolarAreaChart />
          </li>

          {/* certificates */}
          <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-gray-950 border-3 rounded-full -left-1.5"></div>
            <h2 className="xs:text-xl md:text-3xl font-bold mb-5 font-[outfit]">Certificates</h2>

            <Certificates />

          </li>
        </ul>

        {/* continue to projects btn */}
        <div className='my-5'>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <Link 
              to='/projects' 
              className='xs:text-xs md:text-[1rem] font-[outfit] bg-transparent p-3 shadow-blue-900 shadow-sm rounded-[10px_100px/120px_100px] hover:shadow-none hover:bg-blue-900 text-[var(--light-color)] hover:transition-all hover:translate-y-1 ease-in-out'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Continue to Projects

            </Link>

          </motion.button>

        </div>

      </section>
    </section>
  )
}

export default About