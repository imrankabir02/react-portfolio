import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="h-20 flex items-center justify-between px-6 py-4">
            {/* Logo section */}
            <a href="https://www.github.com/imrankabir02" className="text-3xl font-bold">
                <img
                    src="/path/to/logo.png"
                    alt="Logo"
                    className="h-10 w-auto"
                />
            </a>

            {/* Social icons section */}
            <div className="flex items-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/imrankabir02" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.github.com/imrankabir02" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/imrankabir02" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/imrankabir02" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
