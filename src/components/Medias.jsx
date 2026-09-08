import { Link } from 'react-router-dom'
import {
    AiOutlineInstagram,
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineCodepen,
} from 'react-icons/ai'
import { SiFrontendmentor } from "react-icons/si";

const Medias = () => {
    return (
        <section className="flex gap-3 w-full mt-2 justify-center">

            {/* Instagram */}
            <Link
                to="https://www.instagram.com/___veerin___/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="medias bg-transparent group-hover:bg-[#E1306C]">
                    <AiOutlineInstagram className="medias" size={24} />
                </div>
            </Link>

            {/* GitHub */}
            <Link
                to="https://github.com/vee309bajracharya"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="medias bg-transparent group-hover:bg-[#333333]">
                    <AiFillGithub className="medias" size={24} />
                </div>
            </Link>

            {/* LinkedIn */}
            <Link
                to="https://www.linkedin.com/in/veerin-bajracharya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="medias bg-transparent group-hover:bg-[#0a66c2]">
                    <AiFillLinkedin className="medias" size={24} />
                </div>
            </Link>

            {/* CodePen */}
            <Link
                to="https://codepen.io/veerinbajra"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="medias bg-transparent group-hover:bg-[#000]">
                    <AiOutlineCodepen className="medias" size={24} />
                </div>
            </Link>

            {/* Frontend Mentor */}
            <Link
                to="https://www.frontendmentor.io/profile/vee309bajracharya"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <div className="medias bg-transparent group-hover:bg-[#3e54a3]">
                    <SiFrontendmentor className="medias" size={24} />
                </div>
            </Link>
        </section>
    )
}

export default Medias