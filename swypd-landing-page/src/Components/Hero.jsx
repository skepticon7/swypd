import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {heroArrow, heroCircle, heroLine1, heroLine2, heroSlime} from "../assets/index.js";
import {motion} from "framer-motion"
import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "../utils/motion.js";
import Reveal from "./Reveal.jsx";


const Hero = () => {
    return (
        <section className='relative pt-21'>
            <div
                className=" py-42 flex items-center justify-center"
            >
                <div className="flex flex-col w-full items-center gap-8 justify-center">
                    {/* Headline */}
                    <Reveal>
                        <h1 className="text-center akira text-tertiary-white leading-[1.15]">
                        <span className="akira text-[4rem] block">
                            We build digital
                        </span>
                            <span variants={textVariant(0.2)} className="akira text-[4rem] block">
                            experiences that
                        </span>
                            <span variants={textVariant(0.4)} className="akira text-[4rem] block">
                            grow your business
                        </span>
                        </h1>
                    </Reveal>


                    {/* Subheading */}
                    <Reveal>
                        <h2
                            variants={fadeIn("up", "spring", 0.6, 1)}
                            className="oswald-extralight text-tertiary-white text-center tracking-wide"
                        >
                        <span className="text-2xl block leading-relaxed">
                          From design to development and marketing, our team helps
                        </span>
                            <span className="text-2xl block leading-relaxed">
                        you turn ideas into powerful digital solutions
                        </span>
                        </h2>
                    </Reveal>

                    <Reveal>
                        <a
                            href={'/#pricing'}
                        >
                            <button

                                className="akira text-tertiary-white mt-5  bg-primary-red/90 hover:bg-primary-red
                      duration-200 text-sm cursor-pointer rounded-xs transition-colors
                      py-5 px-9"
                            >
                                start your project
                            </button>
                        </a>
                    </Reveal>


                </div>
            </div>
            <img
                className="absolute top-25 w-lg -right-35 -z-99"
                src={heroCircle}

            />
            <img
                className="absolute top-5 w-5xl  -left-60 -z-99"
                src={heroSlime}

            />
            <motion.img
                className="absolute bottom-53 left-90"
                src={heroArrow}
                variants={fadeIn("right", "spring", 0.8, 1)}
                initial="hidden"
                animate="show"
            />
            <motion.img
                className="absolute top-97 right-48"
                src={heroLine1}
                variants={fadeIn("left", "spring", 0.9, 1)}
                initial="hidden"
                animate="show"
            />
            <motion.img
                className="absolute top-100 right-58"
                src={heroLine2}
                variants={fadeIn("left", "spring", 1, 1)}
                initial="hidden"
                animate="show"
            />
        </section>
    )
}

export default SectionWrapper(Hero, "hero");