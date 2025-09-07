import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {Facebook, Instagram, Linkedin, SwypdLogo, Tiktok, X} from "../assets/index.js";
import {motion} from "framer-motion";
import {zoomIn} from "../Utils/motion.js";
import Reveal from "./Reveal.jsx";

const Footer = () => {
    return (
        <div id='footer' className='py-10 flex items-center justify-center'>
            <div className='flex flex-col gap-8 items-center justify-center w-full'>
                <Reveal>
                    <SwypdLogo className='text-tertiary-white w-xs h-auto'/>
                </Reveal>
                <div className='flex flex-col items-center gap-8 justify-center w-full'>
                    <div className='flex items-start justify-between w-full'>
                        <div className=''>
                            <Reveal>
                                <p className='text-tertiary-white text-lg oswald-semibold'>Stay in the loop.</p>
                            </Reveal>
                            <Reveal>
                                <p className='text-tertiary-white text-base mt-1 oswald-regular tracking-wide'>Get
                                    design tips, digital
                                    insights, and
                                    agency updates straight to your inbox. No spam, ever.</p>
                            </Reveal>

                            <form onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <Reveal>
                                    <div className="flex items-stretch gap-3 justify-start mt-7">
                                        <input
                                            type="text"
                                            className="text-tertiary-white w-1/2 rounded-xs border border-tertiary-white/60 bg-transparent px-3 py-2 h-full "
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            type={'submit'}
                                            className="akira text-tertiary-white bg-primary-red/90 hover:bg-primary-red
                                            duration-200 px-5 text-sm cursor-pointer rounded-xs transition-colors px-4 "
                                        >
                                            join us
                                        </button>
                                    </div>
                                </Reveal>

                            </form>
                            <Reveal>
                                <p className='text-tertiary-white text-base mt-5'>You can unsubscribe anytime.</p>
                            </Reveal>
                        </div>

                        <div className='flex flex-col items-start justify-center gap-8'>
                            <Reveal>
                                <p className='oswald-semibold text-tertiary-white'>Quick links</p>
                            </Reveal>

                            <div className='flex flex-col items-start justify-center gap-5 '>
                                <Reveal>
                                    <a href={'/#'}
                                       className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>
                                        Home
                                    </a>
                                </Reveal>
                                <Reveal>
                                    <a href={'/#projects'}
                                       className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>
                                        Projects
                                    </a>
                                </Reveal>
                                <Reveal>
                                    <a href={'/#pricing'}
                                       className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>
                                        Pricing
                                    </a>
                                </Reveal>
                                <Reveal>
                                    <a href={'/#footer'} className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>
                                        Contact
                                    </a>
                                </Reveal>
                            </div>
                        </div>


                        <div className='flex flex-col items-start justify-center gap-8'>
                            <Reveal>
                                <p className='oswald-semibold text-tertiary-white'>Contact info</p>
                            </Reveal>
                            <div className='flex flex-col items-start justify-center gap-5 '>
                                <Reveal>
                                    <a href="mailto:example@email.com"
                                       className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>Email</a>
                                </Reveal>
                                <Reveal>
                                    <a href="tel:+1234567890"
                                       className='cursor-pointer text-tertiary-white text-sm oswald-regular duration-200 transition-colors hover:underline'>Phone number</a>
                                </Reveal>
                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-8'>
                            <Reveal>
                                <p className='oswald-semibold text-tertiary-white'>Socials</p>
                            </Reveal>
                            <div className='flex items-start justify-center gap-3 '>
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

                    <div className="w-full h-px bg-tertiary-white/60 "></div>
                    <Reveal>
                        <p className='oswald-regular text-tertiary-white text-sm'>© 2025 SWYPD. All rights reserved.</p>
                    </Reveal>

                </div>
            </div>
        </div>
    )
}
export default SectionWrapper(Footer, 'footer');