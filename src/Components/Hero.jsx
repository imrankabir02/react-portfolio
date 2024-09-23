import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/Kabir.png';

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 lg:pb-16">
            {/* Main container */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                
                {/* Left side - Text content */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/2 px-4">
                    <h1 className="pb-4 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl text-center lg:text-left">
                        Mridha Imran Kabir
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent text-center lg:text-left">
                        Backend Developer
                    </span>
                    <p className="mt-4 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left">
                        {HERO_CONTENT}
                    </p>
                </div>

                {/* Right side - Profile picture */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 px-4">
                    <img 
                        src={profilePic} 
                        alt="Imran Kabir" 
                        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
