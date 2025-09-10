import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {heroArrow, heroCircle, heroLine1, heroLine2, heroSlime} from "../assets/index.js";
import {motion} from "framer-motion"
import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "../utils/motion.js";
import Reveal from "./Reveal.jsx";


const Hero = () => {
    return (
        <section className='relative pt-21'>
            <div
                className=" md:py-42 sm:py-30 2xs:py-18 relative flex items-center justify-center"
            >
                <div className="flex  flex-col w-full items-center relative gap-5 justify-center">
                    {/* Headline */}
                    <Reveal>
                        <h1 className=" relative text-center akira text-tertiary-white leading-[1.15]">
                            <span className="akira 2xl:text-[4rem] xl:text-[3rem]  lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] block">
                                We build digital
                            </span>
                            <span
                                  className="akira 2xl:text-[4rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] block">
                                experiences that
                            </span>
                            <span
                                  className="akira 2xl:text-[4rem] xl:text-[3rem]  lg:text-[2.5rem] md:text-[2rem] sm:text-[1.7rem] xs:text-[1.2rem] block">
                                grow your business
                            </span>

                            <motion.img
                                className="absolute 2xl:top-34 2xl:right-15 xl:top-25 xl:right-15  lg:top-21 lg:right-7 md:top-17 md:right-4 md:w-20 sm:top-14 sm:right-5 sm:w-15 xs:top-10.5 xs:right-6 2xs:top-8 2xs:right-2 2xs:w-10 xs:w-10"
                                src={heroLine1}
                                variants={fadeIn("left", "spring", 0.9, 1)}
                                initial="hidden"
                                animate="show"
                            />
                            <motion.img
                                className="absolute 2xl:top-36 2xl:right-25  xl:top-27 xl:right-25 lg:top-23 lg:right-15 md:top-18 md:right-8 md:w-15 sm:top-15.5 sm:right-10 sm:w-10 xs:top-11 xs:right-8 2xs:w-8 2xs:top-8.5 2xs:right-4 xs:w-8"
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
                        <span className="2xl:text-2xl xl:text-xl md:text-lg sm:text-md xs:text-xs 2xs:text-xs block leading-relaxed">
                          From design to development and marketing, our team helps
                        </span>
                                <span className="2xl:text-2xl xl:text-xl md:text-lg sm:text-md xs:text-xs 2xs:text-xs block leading-relaxed">
                        you turn ideas into powerful digital solutions
                        </span>
                            </h2>
                        </Reveal>

                            <a
                                href={'/#pricing'}
                            >
                                <motion.button
                                    variants={fadeIn("up", "spring", 0.8, 1)}
                                    className="akira text-tertiary-white mt-105 md:mt-4 bg-primary-red/90 hover:bg-primary-red
                      duration-200 text-sm cursor-pointer rounded-xs xl:text-sm text-xs   transition-colors
                      xl:py-5 xl:px-9 md:px-7 md:py-4 sm:px-25 sm:py-4 xs:px-15 xs:py-3 2xs:px-10 2xs:py-2"
                                >
                                    start your project
                                </motion.button>
                            </a>
                        <motion.img
                            className="absolute 2xl:top-21 2xl:-left-5 xl:top-20 xl:w-12 xl:-left-10  lg:top-18 lg:-left-8 lg:w-10   md:top-18 md:-left-5 md:w-10 sm:top-0 sm:w-15 sm:-left-5 sm:top-70 md:rotate-0 xs:w-12 xs:-left-4 xs:top-80 2xs:rotate-15 2xs:-left-3 2xs:w-10 2xs:top-90"
                            src={heroArrow}
                            variants={fadeIn("right", "spring", 0.8, 1)}
                            initial="hidden"
                            animate="show"
                        />
                    </div>
                </div>
            </div>
            <img
                className="absolute 2xl:top-20 2xl:w-lg 2xl:-right-30  xl:-right-1 xl:top-25 xl:w-md lg:top-30 lg:right-15 lg:w-sm  md:top-35 md:right-20 md:w-xs sm:top-20 sm:-right-5 sm:w-2xs xs:top-10 xs:-right-10 xs:w-3xs 2xs:w-[12rem] 2xs:-right-5 2xs:top-15 -z-99"
                src={heroCircle}

            />
            <img
                className="absolute 2xl:top-25 2xl:w-4xl 2xl:-left-50   xl:w-3xl xl:top-25 xl:-left-10 lg:top-25 lg:left-4 lg:w-2xl  md:top-30 md:-left-10 md:w-xl sm:w-lg  sm:rotate-30 sm:-left-50 xs:rotate-30 xs:-left-40 xs:top-80 xs:w-md sm:top-60 2xs:top-90 2xs:rotate-30 2xs:-left-32 -z-99"
                src={heroSlime}

            />
        </section>
    )
}

export default SectionWrapper(Hero, "hero");