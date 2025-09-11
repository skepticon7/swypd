import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {heroArrow, heroCircle, heroLine1, heroLine2, heroSlime} from "../assets/index.js";
import {motion} from "framer-motion"
import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "../utils/motion.js";
import Reveal from "./Reveal.jsx";


const Hero = () => {
    return (
        <section className='relative pt-21'>
            <div
                className=" md:py-42 sm:py-30 py-18 relative flex items-center justify-center"
            >
                <div className="flex  flex-col w-full items-center relative gap-5 justify-center">
                    {/* Headline */}
                    <Reveal>
                        <h1 className=" relative text-center akira text-tertiary-white leading-[1.15]">
                            <span className="akira 2xl:text-[3.2rem] xl:text-[3rem]  lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] text-[1rem] block">
                                We build digital
                            </span>
                            <span
                                  className="akira 2xl:text-[3.2rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] text-[1rem] block">
                                experiences that
                            </span>
                            <span
                                  className="akira 2xl:text-[3.2rem] xl:text-[3rem]  lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] text-[1rem] block">
                                grows your business
                            </span>

                            <motion.img
                                className="absolute 2xl:top-28 2xl:right-20 xl:top-25 xl:right-15  lg:top-21 lg:right-7 md:top-17 md:right-4 md:w-20 sm:top-14 sm:right-5 sm:w-15 xs:top-10.5 xs:right-6 top-8 right-2 w-10 xs:w-10"
                                src={heroLine1}
                                variants={fadeIn("left", "spring", 0.9, 1)}
                                initial="hidden"
                                animate="show"
                            />
                            <motion.img
                                className="absolute 2xl:top-29.5 2xl:right-25  xl:top-27 xl:right-25 lg:top-23 lg:right-15 md:top-18 md:right-8 md:w-15 sm:top-15.5 sm:right-10 sm:w-10 xs:top-11 xs:right-8 w-8 top-8.5 right-4 xs:w-8"
                                src={heroLine2}
                                variants={fadeIn("left", "spring", 1, 1)}
                                initial="hidden"
                                animate="show"
                            />
                        </h1>
                    </Reveal>


                    <div className='flex flex-col items-center justify-center gap-5 relative'>
                        <Reveal>
                            <h2
                                variants={fadeIn("up", "spring", 0.6, 1)}
                                className="oswald-extralight text-tertiary-white text-center tracking-wide"
                            >
                        <span className=" xl:text-xl md:text-lg sm:text-md xs:text-xs text-xs block leading-relaxed">
                          From design to development and marketing, our team helps
                        </span>
                                <span className=" xl:text-xl md:text-lg sm:text-md xs:text-xs text-xs block leading-relaxed">
                        you turn ideas into powerful digital solutions
                        </span>
                            </h2>
                        </Reveal>

                            <a
                                href={'/#pricing'}
                            >
                                <motion.button
                                    variants={fadeIn("up", "spring", 0.8, 1)}
                                    className="akira text-tertiary-white  md:mt-4 bg-primary-red/90 hover:bg-primary-red
                      duration-200 text-sm cursor-pointer rounded-xs xl:text-sm text-xs   transition-colors
                      text-[0.6rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
    py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-3.5 xl:px-7"
                                >
                                    start your project
                                </motion.button>
                            </a>
                        <motion.img
                            className="absolute 2xl:top-16 2xl:-left-10 xl:top-20 xl:w-12 xl:-left-10  lg:top-18 lg:-left-8 lg:w-10   md:top-18 md:-left-5 md:w-10  sm:w-9 sm:-left-18 sm:top-8 md:rotate-0 xs:w-8 xs:-left-10 xs:top-10 xs:block  hidden"
                            src={heroArrow}
                            variants={fadeIn("right", "spring", 0.8, 1)}
                            initial="hidden"
                            animate="show"
                        />
                    </div>
                </div>
            </div>
            <img
                className="absolute 2xl:top-15 2xl:w-lg 2xl:-right-15  xl:-right-1 xl:top-25 xl:w-md lg:top-30 lg:right-15 lg:w-sm  md:top-35 md:right-20 md:w-xs sm:top-20 sm:-right-5 sm:w-2xs xs:top-10 xs:-right-10 xs:w-3xs w-[12rem] -right-18 top-15 -z-99"
                src={heroCircle}

            />
            <img
                className="absolute 2xl:top-15 2xl:w-4xl 2xl:-left-35 2xl:rotate-5 xl:w-3xl xl:top-25 xl:-left-10 lg:top-25 lg:-left-25 lg:w-2xl  md:top-30 md:-left-30 md:w-xl sm:w-lg  sm:rotate-15 sm:-left-25 xs:rotate-15 xs:-left-30 xs:top-20 xs:w-md sm:top-25 top-20 rotate-30 -left-32 -z-99"
                src={heroSlime}

            />
        </section>
    )
}

export default SectionWrapper(Hero, "hero");