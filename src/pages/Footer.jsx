import Medias from '../components/Medias'

const Footer = () => {
    return (
        <section className='text-center'>
            <Medias />
            <p className='font-[outfit] font-medium text-center xs:text-sm md:text-xl text-[var(--light-color)] mt-2'>
                &copy; {new Date().getFullYear()} Veerin Bajracharya. All Rights Reserved.
            </p>
        </section>
    )
}

export default Footer