import React from 'react'
import ErrorImg from '../assets/svg/page-not-found.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <section className='xs:px-5 md:px-12 md:max-w-screen-xl md:py-8 md:my-5 md:mx-auto'>
            <div className='flex flex-col items-center justify-center min-h-screen bg-transparent'>
                <img src={ErrorImg} alt="Page Not Found" className='max-w-xs' />
                
                <div className='text-center mt-5'>
                    <Link to='/' className='text-[var(--light-color)] underline font-normal'>
                        Go Back to Home
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default PageNotFound