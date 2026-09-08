import React, { useEffect } from 'react'
import Medias from './Medias'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const IntroSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='xs:px-5 md:px-12 md:max-w-screen-xl md:py-8 md:my-5 md:mx-auto'>

            <section
                data-aos="zoom-in-up"
                data-aos-duration="4000"
                className='my-5 text-center'>
                {/* intro section */}
                <span className='font-[fibonacci] tracking-wider mb-5 xs:text-[1rem] sm:text-2xl md:text-3xl 2xl:text-5xl'>Myself,</span>

                <h1 className='font-[smashe] font-bold uppercase tracking-wide xs:text-[2rem] sm:text-5xl md:text-7xl 2xl:text-8xl'>
                    <span className="text-[var(--light-color)]">Veerin<br /></span>
                    <span className="outlined-text">Bajracharya</span>
                </h1>

                <p className='font-[outfit] xs:leading-8 md:leading-10 my-7 xs:text-[1rem] md:text-xl font-extralight'>BCA student and aspiring Full Stack Web Developer focused on creating pleasant websites and web applications.</p>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Link to='/about' className='text-[1rem] font-[outfit] bg-transparent p-3 shadow-blue-900 shadow-sm rounded-[10px_100px/120px_100px] hover:shadow-none hover:bg-blue-900 text-[var(--light-color)] hover:transition-all hover:translate-y-1 ease-in-out'>
                        Know More
                    </Link>
                </motion.button>

            </section>
        </section>
    )
}

export default IntroSection