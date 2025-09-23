import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {pricing} from "../constants/index.js";
import {useContext, useEffect, useState} from "react";
import {check, pricingSlime} from "../assets/index.js";
import Reveal from "./Reveal.jsx";
import {ContactModal} from "./index.js";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {scrollToSection} from "@/utils/scrollToSection.js";
import {motion , AnimatePresence} from "framer-motion"
import {containerVariants, fadeIn, itemVariants} from "@/utils/motion.js";
import {useService} from "@/context/context.jsx";





export const Pricing = () => {

    const [contactOpen  , setContactOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("ads")
    const [mobilePack , setMobilePack] = useState('left');
    const {selectedService , setSelectedService} = useService();

    const navigationItems = [
        { id: "ads", label: "AD Strategy" },
        { id: "branding", label: "Branding" },
        { id: "video", label: "Video Editing" },
        { id: "website", label: "Web Dev" },
    ]


    const handleContact = (serviceName) => {
        console.log(serviceName);
        setSelectedService(serviceName);
        if(window.innerWidth <= 1023){
            scrollToSection('contact')
        }else{
            setContactOpen(true);
        }

    }


    return (
        <div id='pricing' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 relative'>
            <div className='flex flex-col  items-center justify-center gap-10'>
                        <div className='flex flex-col gap-4 items-center justify-center text-center'>
                            <Reveal>
                                <h2 className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>Pricing</h2>
                            </Reveal>
                            <Reveal>
                                <h2 className='akira text-primary-red text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-[1.05]'>
                                    <span className=' akira block '>flexible plans for </span>
                                    <span className=' akira block '>every flexible plans</span>
                                </h2>
                            </Reveal>
                            {/*<Reveal>*/}
                            {/*    <h2*/}
                            {/*        className="oswald-regular xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-tertiary-white text-left mt-4"*/}
                            {/*    >*/}
                            {/*        <span className=" block leading-relaxed">Whether you’re a startup or an established brand, we adapt to your needs.</span>*/}
                            {/*    </h2>*/}
                            {/*</Reveal>*/}

                        </div>
                        <div className='flex flex-col gap-9 items-center justify-center w-full '>
                            <div className="flex relative w-full items-center">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveItem(item.id)}
                                        className={`relative w-1/4  py-3 text-xs xs:text-sm sm:text-md md:text-sm lg:text-base xl:text-lg cursor-pointer border-b border-b-[1px] oswald-regular border-tertiary-white/60 transition-colors duration-200 z-10 ${
                                            activeItem === item.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                                        }`}
                                    >
                                        <Reveal>
                                            {item.label}
                                        </Reveal>
                                        {activeItem === item.id && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                                                layoutId="activeIndicator"
                                                initial={false}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className='md:grid md:grid-cols-2 hidden w-full gap-5'>
                                <div
                                    className='md:p-5 lg:p-6 xl:p-7 border-1 border-tertiary-white/60 rounded-sm flex flex-col items-start justify-center gap-6'
                                >
                                    <div className='flex flex-col items-start justify-center gap-1'>
                                        <Reveal>
                                            <h3 className='md:text-base lg:text-lg xl:text-xl oswald-bold text-tertiary-white'>{activeItem === 'website' ? 'Static Website Package' : 'One-Time Deal'}</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className='md:text-sm lg:text-base xl:text-lg oswald-regular text-tertiary-white'>
                                                {pricing[activeItem].oneTime.title}
                                            </p>
                                        </Reveal>
                                    </div>
                                    <div className="w-full h-px bg-tertiary-white/60 "></div>
                                    <Reveal>
                                        <p  className='text-tertiary-white md:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] oswald-bold'>${pricing[activeItem].oneTime.price}/one time</p>
                                    </Reveal>

                                    <div className='w-full'>
                                        <Reveal>
                                            <button
                                                onClick={() => handleContact( pricing[activeItem].oneTime.title)}
                                                className="akira text-center  bg-tertiary-white/90 w-full hover:bg-tertiary-white
                                    duration-200   text-secondary-black cursor-pointer rounded-xs transition-colors
                                    text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                                "
                                            >
                                                get started today
                                            </button>
                                        </Reveal>
                                    </div>
                                        <div className="w-full h-px bg-tertiary-white/60 "></div>
                                        <div className='flex flex-col items-start justify-center gap-3'>
                                            {pricing[activeItem].oneTime.features.map((feature) => (
                                                <Reveal>
                                                    <div className="flex items-start gap-4 justify-start">
                                                        <img
                                                            src={check}
                                                            className={`w-5`}
                                                            alt="check"
                                                        />
                                                        <p className="2xl:text-base text-[0.7rem] xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[0.9rem] xl:text-[1rem]  oswald-regular text-tertiary-white">
                                                            {feature}
                                                        </p>
                                                    </div>
                                                </Reveal>
                                            ))}
                                        </div>
                                </div>
                                <div
                                    className='md:p-5 lg:p-6 xl:p-7 border-1 border-tertiary-white/60 rounded-sm flex flex-col items-start justify-center gap-6'>
                                    <div className='flex flex-col items-start justify-center gap-1'>
                                        <Reveal>
                                            <h3 className='md:text-base lg:text-lg xl:text-xl oswald-bold text-tertiary-white'>{activeItem === 'website' ? 'Website + Backend Package' : 'Partner Deal'}</h3>
                                        </Reveal>
                                        <Reveal>
                                            <p className='md:text-sm lg:text-base xl:text-lg oswald-regular text-tertiary-white'>
                                                {pricing[activeItem].partner.title}
                                            </p>
                                        </Reveal>
                                    </div>
                                    <div className="w-full h-px bg-tertiary-white/60 "></div>
                                    <Reveal>
                                        <p className='text-tertiary-white md:text-[2rem]  lg:text-[2.2rem] xl:text-[2.5rem] oswald-bold'>${pricing[activeItem].partner.price}/{activeItem === 'website' ? 'one time' : 'Month'}</p>
                                    </Reveal>
                                    <div className='w-full'>
                                        <Reveal>
                                            <button
                                                onClick={() => handleContact(pricing[activeItem].partner.title)}
                                                className="akira  bg-tertiary-white/90 w-full hover:bg-tertiary-white
                                    duration-200   text-secondary-black cursor-pointer rounded-xs transition-colors
                                    text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                                "
                                            >
                                                get started today
                                            </button>
                                        </Reveal>
                                    </div>
                                    <div className="w-full h-px bg-tertiary-white/60 "></div>
                                    <div className='flex flex-col items-start justify-center gap-3'>
                                        {pricing[activeItem].partner.features.map((feature) => (
                                            <Reveal>
                                                <div className="flex items-start gap-4 justify-start">
                                                    <img
                                                        src={check}
                                                        className={`w-5`}
                                                        alt="check"
                                                    />
                                                    <p className="2xl:text-base text-[0.7rem] xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[0.9rem] xl:text-[1rem]  oswald-regular text-tertiary-white">
                                                        {feature}
                                                    </p>
                                                </div>
                                            </Reveal>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className='p-5 xs:p-6 sm:p-7 md:hidden border-1 border-tertiary-white/60 rounded-sm w-full flex flex-col items-center justify-center gap-4 xs:gap-5 sm:gap-6'>
                                <Reveal>
                                    <div className='p-1.5 flex items-center justify-center gap-1 bg-white/10'>
                                        <motion.button
                                            onClick={() => {
                                                if (mobilePack !== "left") setMobilePack("left");
                                            }}
                                            animate={{
                                                backgroundColor: mobilePack === "left" ? "#D9D9D9" : "rgba(0, 0, 0, 0)",
                                                color: mobilePack === 'left' ? "#0B0A0A" : "#D9D9D9"
                                            }}
                                            transition={{duration: 0.25, ease: "easeInOut"}}
                                            className="px-5 py-2 text-xs xs:text-sm sm:text-base text-tertiary-white"
                                        >
                                            {activeItem === "website" ? "Starter Website" : "One-Time Deal"}
                                        </motion.button>

                                        <motion.button
                                            onClick={() => {
                                                if (mobilePack !== "right") setMobilePack("right");
                                            }}
                                            animate={{
                                                backgroundColor: mobilePack === "right" ? "#D9D9D9" : "rgba(0, 0, 0, 0)",
                                                color: mobilePack === 'right' ? "#0B0A0A" : "#D9D9D9"
                                            }}
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                            className="px-5 py-2 text-xs xs:text-sm sm:text-base  text-tertiary-white"
                                        >
                                            {activeItem === "website" ? "Website + Backend" : "Partner Deal"}
                                        </motion.button>
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <p className='text-tertiary-white oswald-regular  text-sm text-center xs:text-lg sm:text-xl'>{mobilePack === 'left' ? pricing[activeItem].oneTime.title : pricing[activeItem].partner.title}</p>
                                </Reveal>
                                <div className="w-full h-px bg-tertiary-white/60 "></div>
                                <div className='self-start'>
                                    <Reveal>
                                        <p className='text-tertiary-white text-[1.9rem] xs:text-[2.3rem] sm:text-[2.7rem] oswald-bold'>
                                            ${mobilePack === 'left' ? pricing[activeItem].oneTime.price : pricing[activeItem].partner.price}/{activeItem === 'website' ? 'one time' : 'Month'}
                                        </p>
                                    </Reveal>
                                </div>
                                <div className='w-full'>
                                    <Reveal>
                                        <button
                                            onClick={() => handleContact(mobilePack === 'left' ? pricing[activeItem].oneTime.title : pricing[activeItem].partner.title)}
                                            className="akira text-center  bg-tertiary-white/90 w-full hover:bg-tertiary-white
                                    duration-200   text-secondary-black cursor-pointer rounded-xs transition-colors
                                    text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7
                                "
                                        >
                                            get started today
                                        </button>
                                    </Reveal>
                                </div>
                                <div className="w-full h-px bg-tertiary-white/60 "></div>
                                <div className='flex flex-col self-start items-start justify-center gap-3'>

                                    {mobilePack === 'left' && pricing[activeItem].oneTime.features.map((feature) => (
                                        <Reveal>
                                            <div className="flex items-center gap-3 justify-center">
                                                <img
                                                    src={check}
                                                    className={`w-3 xs:w-4 sm:w-5`}
                                                    alt="check"
                                                />
                                                <p className="  text-xs xs:text-sm sm:text-base  oswald-regular text-tertiary-white">
                                                    {feature}
                                                </p>
                                            </div>
                                        </Reveal>

                                    ))}
                                    {mobilePack === 'right' && pricing[activeItem].partner.features.map((feature) => (

                                        <Reveal>
                                            <div className="flex items-center gap-3 justify-center">
                                                <img
                                                    src={check}
                                                    className={`w-3 xs:w-4 sm:w-5`}
                                                    alt="check"
                                                />
                                                <p className="  text-xs xs:text-sm sm:text-base  oswald-regular text-tertiary-white">
                                                    {feature}
                                                </p>
                                            </div>
                                        </Reveal>

                                    ))}
                                </div>
                            </div>

                        </div>
            </div>
            <img className='absolute -left-90 -bottom-65 rotate-5 -z-10' src={pricingSlime}/>
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)}/>
        </div>
    )
}
export default SectionWrapper(Pricing, 'pricing');