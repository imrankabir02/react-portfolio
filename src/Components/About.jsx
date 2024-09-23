import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 lg:pb-16">
            <h1 className="my-20 text-center text-4xl font-bold">
                About
                <span className="text-neutral-400"> Me</span>
            </h1>

            {/* Main container for image and text */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                
                {/* Left side - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 px-4">
                    <img 
                        src={aboutImg} 
                        alt="about" 
                        className="rounded-2xl w-64 h-64 lg:w-96 lg:h-96 object-cover"
                    />
                </div>
                
                {/* Right side - Text */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4">
                    <p className="my-2 max-w-xl text-center lg:text-left py-6 text-lg font-light leading-relaxed">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
