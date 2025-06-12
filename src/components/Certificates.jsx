import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

import Certificate1 from '../assets/medias/certificates/cert1.jpg';
import Certificate2 from '../assets/medias/certificates/cert2.jpg';
import Certificate3 from '../assets/medias/certificates/cert3.jpg';
import Certificate4 from '../assets/medias/certificates/cert4.jpg';
import Certificate5 from '../assets/medias/certificates/cert5.jpg';


const Certificates = () => {

    // State to manage the titles
    const [activeIndex, setActiveIndex] = useState(0);

    // images array
    const images = [
        {
            id: 1,
            src: Certificate1,
            title: 'Public Speaking Competition',

        },
        {
            id: 2,
            src: Certificate2,
            title: 'Basic Computer Course',

        },
        {
            id: 3,
            src: Certificate3,
            title: 'Creation of Basic Chat Bot',

        },
        {
            id: 4,
            src: Certificate4,
            title: 'Digital Marketing Workshop',

        },
        {
            id: 5,
            src: Certificate5,
            title: 'Fullstack Development using MERN Stack',
        }
    ]

    return (
        <section className='w-full px-4 sm:px-6 lg:px-8 py-5 '>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                loop={true}
                onSlideChange={(swiper) => {
                    const realIndex = swiper.realIndex;
                    setActiveIndex(realIndex);
                }}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="max-w-4xl mx-auto"
            >
                {images.map((image,index) => (
                    <SwiperSlide key={image.id}>
                        <div className="flex flex-col items-center justify-center p-4">
                            <img
                                src={image.src}
                                alt={image.title}
                                loading='lazy'
                                className="w-full lg:max-w-2xl md:max-w-[60%] h-auto object-contain rounded-lg shadow-lg border-[var(--light-color)] border-1 text-center" />
                            <h3
                                className={`mt-7 md:text-2xl font-medium font-[outfit] text-[var(--light-color)] transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {image.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}
export default Certificates;