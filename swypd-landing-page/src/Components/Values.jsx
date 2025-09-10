import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {valuesItems} from "../constants/index.js";
import swypdReel from "../assets/swypd-reel.mp4"
import {valuesCircle} from "../assets/index.js";
import Reveal from "./Reveal.jsx";


const ValueCard = ({ value }) => {
    return (
        <div className="w-full xs:flex items-center justify-start gap-3 md:block">
                <Reveal>
                    <img
                        className="2xl:w-12  md:w-9.5 xs:w-9 "
                        src={value.icon}
                        alt={value.title}
                    />
                </Reveal>

            <div>
                <Reveal>
                    <p className="xs:text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]  oswald-bold text-tertiary-white md:mt-4">{value.title}</p>
                </Reveal>
                <Reveal>
                    <p className="2xl:text-base xl:text-sm sm:text-[0.75rem] xs:text-[0.65rem] oswald-regular text-tertiary-white mt-1">{value.description}</p>
                </Reveal>
            </div>

        </div>
    );
};



const Values = () => {
    return (
        <div id="values" className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 flex items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl '>Our values</p>
                    </Reveal>
                    <Reveal>
                        <h2 className='akira text-primary-red 2xs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-[1.05]'>
                            <span className=' akira block '>why clients</span>
                            <span className='akira block'>choose us</span>
                        </h2>
                    </Reveal>

                </div>
                <div className='flex md:flex-row 2xs:flex-col items-center md:gap-10 gap-20 justify-between w-full'>
                    <div className='xs:order-2 md:order-1 md:w-1/2 xs:w-full self-center'>
                        <div className='w-full grid  xs:grid-cols-2 2xl:gap-x-15 md:gap-y-10 xl:gap-x-10 sm:gap-y-8 xs:gap-y-10 xs:gap-x-5 lg:gap-x-8 md:gap-x-10 sm:gap-x-15 sm:gap-y-10'>
                            {valuesItems.map((item, index) => (
                                    <ValueCard
                                        key={index}
                                        value={item}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className='xs:order-1 md:order-2 xs:w-full md:w-1/2 relative'>
                        <Reveal>
                            <video
                                src={swypdReel}
                                loop
                                autoPlay
                                muted
                                className="!min-w-full 2xl:h-[42rem] xl:h-[35rem] lg:h-[30rem] md:h-[28rem] sm:h-[26rem] xs:h-[25rem] object-cover rounded-lg"
                            />
                        </Reveal>
                        <div
                            className='absolute 2xl:w-[35rem] 2xl:-left-55 2xl:top-80 xl:w-[30rem] xl:-left-45 xl:top-65 lg:w-[25rem] lg:-left-40 lg:top-60 md:w-[20rem] md:-left-35 md:top-65 sm:w-[15rem] sm:-top-30 sm:-right-30 xs:w-[12rem] xs:-top-20 xs:-left-20 -z-10'>
                            <img className='w-full' src={valuesCircle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Values, 'values');