import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {Facebook, Instagram, Linkedin, SwypdLogo, Tiktok, X} from "../assets/index.js";
import {motion} from "framer-motion";
import {zoomIn} from "../utils/motion.js";
import Reveal from "./Reveal.jsx";
import {scrollToSection} from "@/utils/scrollToSection.js";
import {handleLogoClick} from "@/utils/scrollToTop.js";

const Footer = () => {
    return (
        <div id='footer' className='py-8 flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full'>
                <Reveal>
                    <SwypdLogo className='text-tertiary-white 2xl:w-xs xl:w-2xs lg:w-3xs md:w-[15rem] xs:w-[10rem] w-[8rem] h-auto'/>
                </Reveal>
                <div className='flex flex-col items-center  justify-center w-full'>
                    <div className='flex flex-col md:flex-row items-start  md:gap-15 justify-between xs:mt-10 mt-8 xs:w-full'>
                        <div className='w-full md:w-1/2 text-center md:text-left'>
                            <Reveal>
                                <p className='text-tertiary-white text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl   oswald-semibold'>Stay
                                    in the loop.</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-tertiary-white text-xs md:text-sm lg:text-base xl:text-lg  mt-1 oswald-regular tracking-wide'>Get
                                    design tips, digital
                                    insights, and
                                    agency updates straight to your inbox. No spam, ever.</p>
                            </Reveal>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <Reveal>
                                    <div className="flex w-full md:w-2/3 items-stretch mt-5 gap-2 md:gap-5">
                                        <input
                                            type="text"
                                            className="flex-grow text-tertiary-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl
                                            focus:outline-none rounded-xs border border-tertiary-white/60
                                            bg-transparent px-2 py-2 h-full"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            type="submit"
                                            className="akira flex-shrink-0 text-tertiary-white bg-primary-red/90 hover:bg-primary-red
                                                   duration-200 cursor-pointer rounded-xs transition-colors
                                                   2xs:text-[0.7rem] xs:text-[0.70rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]

                                                   2xs:px-4 xs:px-5 sm:px-6 md:px-7 lg:px-7"
                                        >
                                            join us
                                        </button>
                                    </div>
                                </Reveal>
                            </form>
                            <Reveal>
                                <p className='text-tertiary-white text-xs md:text-sm lg:text-base xl:text-lg mt-5'>You
                                    can unsubscribe anytime.</p>
                            </Reveal>
                        </div>


                        <div className='flex flex-row  w-full md:w-1/2 md:gap-5 items-start justify-between mt-8 md:mt-0'>
                            <div className='flex flex-col items-start justify-center xs:gap-4 md:gap-8'>
                                <Reveal>
                                    <p className='oswald-semibold text-sm md:text-base lg:text-lg xl:text-xl text-tertiary-white'>Links</p>
                                </Reveal>

                                <div className='flex flex-col items-start justify-center md:gap-5 xs:gap-3 '>
                                    <Reveal>
                                        <a onClick={handleLogoClick}
                                           className='cursor-pointer text-tertiary-white   text-xs md:text-sm lg:text-base xl:text-lg   oswald-regular duration-200 transition-colors hover:underline'>
                                            Home
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a onClick={() => scrollToSection('projects')}
                                           className='cursor-pointer text-tertiary-white  text-xs md:text-sm lg:text-base xl:text-lg  oswald-regular duration-200 transition-colors hover:underline'>
                                            Projects
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a onClick={() => scrollToSection('pricing')}
                                           className='cursor-pointer text-tertiary-white  text-xs md:text-sm lg:text-base xl:text-lg  oswald-regular duration-200 transition-colors hover:underline'>
                                            Pricing
                                        </a>
                                    </Reveal>

                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-center xs:gap-4 md:gap-8'>
                                <Reveal>
                                    <p className='oswald-semibold xs:text-sm md:text-base lg:text-lg xl:text-xl  text-tertiary-white'>Contact</p>
                                </Reveal>
                                <div className='flex flex-col items-start justify-center  md:gap-5 xs:gap-3 '>
                                    <Reveal>
                                        <a href="mailto:contact@swypdmedia.com"
                                           className='cursor-pointer text-tertiary-white  text-xs md:text-sm lg:text-base xl:text-lg  oswald-regular duration-200 transition-colors hover:underline'>Email</a>
                                    </Reveal>
                                    {/*<Reveal>*/}
                                    {/*    <a href="tel:+1234567890"*/}
                                    {/*       className='cursor-pointer text-tertiary-white text-xs md:text-sm lg:text-base xl:text-lg  oswald-regular duration-200 transition-colors hover:underline'>Phone*/}
                                    {/*        number</a>*/}
                                    {/*</Reveal>*/}
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-4 md:gap-8'>
                                <Reveal>
                                    <p className='oswald-semibold text-sm md:text-base lg:text-lg xl:text-xl text-tertiary-white'>Socials</p>
                                </Reveal>
                                <div className='flex flex-col md:flex-row items-start justify-center gap-2.5 md:gap-3 '>
                                    <Reveal>
                                        <a>
                                            <Facebook
                                                className={'cursor-pointer text-tertiary-white hover:text-primary-red duration-200 transition-colors'}/>
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={'https://www.instagram.com/swypdmedia/'}
                                        >
                                            <Instagram className={'cursor-pointer text-tertiary-white hover:text-primary-red duration-200 transition-colors'}/>
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a>
                                            <X className={'cursor-pointer text-tertiary-white hover:text-primary-red duration-200 transition-colors'}/>
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a>
                                            <Tiktok className={'cursor-pointer text-tertiary-white hover:text-primary-red duration-200 transition-colors'}/>
                                        </a>
                                    </Reveal>
                                    <Reveal>
                                        <a>
                                            <Linkedin className={'cursor-pointer text-tertiary-white hover:text-primary-red duration-200 transition-colors'}/>
                                        </a>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full h-px bg-tertiary-white/60 mt-8"></div>
                    <Reveal>
                        <p className='oswald-regular xs:text-xs md:text-sm lg:text-base xl:text-lg text-tertiary-white text-sm mt-3'>© 2025 SWYPD. All rights reserved.</p>
                    </Reveal>

                </div>
            </div>
        </div>
    )
}
export default SectionWrapper(Footer, 'footer');