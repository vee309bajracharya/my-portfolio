import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import ContactMsg from '../assets/svg/message.svg';
import Medias from '../components/Medias';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFormik } from 'formik';
import { YupValidation } from '../components/YupValidation';
import { toast } from 'react-toastify';
import axios from 'axios';


const initialValues = {
    name: '',
    email: '',
    message: '',
};

const formEndPoint = import.meta.env.VITE_FORMSPREE_URL;

const Contact = () => {

    const {
        values,
        errors,
        handleBlur,
        handleSubmit,
        handleReset,
        handleChange,
        touched 
        } = useFormik({
            initialValues: initialValues,
            validationSchema: YupValidation,
            onSubmit: async(values, {resetForm})=>{
                try{
                    const response = await axios.post(formEndPoint,values);

                    if(response.status === 200){
                        toast.success("Message sent successfully!",{
                            position: "top-center",
                            autoClose: 3000,
                        });
                        resetForm();
                    }else{
                        toast.error("Failed to send message. Please try again.",{
                            position: "top-center",
                            autoClose: 3000,
                        });
                    }
                }catch(error){
                    toast.error("Error. Please try again later.",{
                        position: "top-center",
                        autoClose: 3000,
                    });
                    console.log(error);
                }
            }
        });

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <section>
            <Navbar />

            <section className='xs:px-5 md:px-12 md:max-w-screen-xl md:py-8 md:my-5 md:mx-auto'>

                {/* content left */}
                <section data-aos="fade-right"
                    data-aos-offset="500"
                >
                    <h1 className='font-[fibonacci] xs:text-3xl md:text-5xl mt-4'>Contact</h1>
                    <p className='font-normal xs:text-[1rem] md:text-xl my-5'>Get in Touch or mail me on
                        <span className='pl-2 font-bold'>
                            <a href="mailto:veerinbajracharya08@gmail.com">veerinbajracharya08@gmail.com</a>
                        </span>
                    </p>
                </section>

                {/* form starts here */}
                <section
                    className='flex justify-between gap-5 items-center'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='w-full max-w-xl'>
                        <form
                            action=""
                            method="POST"
                            className='flex flex-col gap-6'
                            onSubmit={handleSubmit}>

                            {/* name field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className='peer w-full px-3 pt-6 pb-2 text-[1rem] border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-700'
                                    placeholder=''
                                    autoComplete='off'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onReset={handleReset}
                                />
                                {errors.name && touched.name ? (
                                    <p className='text-red-500 text-sm mt-1 font-medium'>{errors.name}</p>
                                ) : null}
                                <label
                                    htmlFor="name"
                                    className='absolute left-3 top-1 text-gray-500 text-md transition-all
                                            duration-200 transform -translate-y-2 scale-75 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                            peer-placeholder-shown:text-gray-40peer-focus:top-5
                                            peer-focus:text-md
                                            peer-focus:scale-75
                                            peer-focus:-translate-y-4
                                            peer-focus:backdrop-blur-xs
                                            peer-placeholder-shown:translate-y-0
                                            peer-focus:font-semibold
                                            peer-focus:text-blue-600'>
                                    Name
                                </label>
                            </div>

                            {/* email field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className='peer w-full px-3 pt-6 pb-2 text-[1rem] border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-700'
                                    placeholder=''
                                    autoComplete='off'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onReset={handleReset}
                                />
                                {errors.email && touched.email ? (
                                    <p className='text-red-500 text-sm mt-1 font-medium'>{errors.email}</p>
                                ) : null}
                                <label
                                    htmlFor="email"
                                    className='absolute left-3 top-1 text-gray-500 text-md transition-all
                                            duration-200 transform -translate-y-2 scale-75 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                            peer-placeholder-shown:text-gray-40peer-focus:top-5
                                            peer-focus:text-md
                                            peer-focus:scale-75
                                            peer-focus:-translate-y-4
                                            peer-focus:backdrop-blur-xs
                                            peer-placeholder-shown:translate-y-0
                                            peer-focus:font-semibold
                                            peer-focus:text-blue-600'>
                                    Email
                                </label>
                            </div>


                            {/* messsage field */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className='peer w-full px-3 pt-6 pb-2 text-[1rem] border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-blue-700 resize-none overflow-hidden h-32'
                                    autoComplete="off"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </textarea>
                                {errors.message && touched.message ? (
                                    <p className='text-red-500 text-sm mt-1 font-medium'>{errors.message}</p>
                                ) : null}
                                <label
                                    htmlFor="message"
                                    className='absolute left-3 top-1 pt-5 pb-2 text-gray-500 text-md transition-all
                                            duration-200 transform -translate-y-2 scale-75 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                            peer-placeholder-shown:text-gray-40peer-focus:top-5
                                            peer-placeholder-shown:translate-y-0
                                            peer-focus:p-0
                                            peer-focus:text-md
                                            peer-focus:scale-75
                                            peer-focus:-translate-y-4
                                            peer-focus:backdrop-blur-xs
                                            peer-focus:font-semibold
                                            peer-focus:text-blue-600'>
                                    Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="xs:text-xs md:text-[1rem] font-[outfit] bg-transparent p-3 text-center shadow-blue-900 shadow-sm rounded-[10px_100px/120px_100px] hover:shadow-none hover:bg-blue-900 text-[var(--light-color)] hover:transition-all hover:translate-y-1 ease-in-out w-[50%] md:w-[30%] cursor-pointer"
                            >
                                Send Message
                            </motion.button>
                        </form>

                        {/* medias */}
                        <Medias />

                    </div>

                    {/* content right */}
                    <section
                        className='xs:hidden lg:inline-flex lg:h-full'
                        data-aos="fade-right">
                        <img src={ContactMsg} alt="Contact Image" className='w-full h-[25rem]' />
                    </section>

                </section>

            </section>

        </section>
    )
}

export default Contact