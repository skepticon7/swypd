import {zoomIn} from "../Utils/motion.js";
import {motion} from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {create, discover, launch, support} from "../assets/index.js";
import Reveal from "./Reveal.jsx";

const HowCard = ({icon , title , description}) => {
    return (
        <div className='flex items-center justify-start gap-10'>
            <Reveal>
                <img className='w-[3.5rem]' src={icon}/>
            </Reveal>
            <div className='flex flex-col gap-2 items-start justify-center'>
                <Reveal>
                    <p className='oswald-bold text-xl text-tertiary-white'>{title}</p>
                </Reveal>
                <Reveal>
                    <p className='oswald-light text-base text-tertiary-white'>{description}</p>
                </Reveal>
            </div>
        </div>
    )
}

const How = () => {
    return(
        <div id='how' className='py-28 flex items-center justify-center'>
            <div className='flex items-center justify-between w-full h-full '>
                <div className="">
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white text-base '>How it works</p>
                    </Reveal>

                    <Reveal>
                        <h2 className='akira text-primary-red text-5xl text-left leading-[1.05] mt-4'>
                            <span className=' akira block '>Simple steps</span>
                            <span className='akira block'>to bring your</span>
                            <span className='akira block'>idea to life</span>
                        </h2>
                    </Reveal>

                    <Reveal>
                        <a href='/#pricing'>
                            <button
                                className="akira  mt-6 bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200 text-sm text-secondary-black cursor-pointer rounded-xs transition-colors
                      py-5 px-9"
                            >
                                talk to us about your idea
                            </button>
                        </a>
                    </Reveal>


                </div>
                <div className='flex flex-col gap-5 items-start  h-full'>
                        <HowCard icon={discover} title={'Discover'}
                                 description={'We listen, understand your goals, and plan.'}/>
                    <div className="w-px h-15 ml-7 bg-tertiary-white"></div>
                        <HowCard icon={create} title={'Create'}
                                 description={"Our designers and developers craft your solution."}/>
                    <div className="w-px h-15 ml-7 bg-tertiary-white"></div>
                        <HowCard icon={launch} title={'Launch'}
                                 description={'We test, deliver, and celebrate your new product.'}/>
                    <div className="w-px h-15 ml-7 bg-tertiary-white"></div>
                        <HowCard icon={support} title={'Support'}
                                 description={'Ongoing help to keep everything running smoothly.'}/>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(How , 'how');