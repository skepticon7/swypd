import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {heroArrow, heroCircle, heroLine1, heroLine2, heroSlime} from "../assets/index.js";
import {motion} from "framer-motion"
import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "../utils/motion.js";


const Hero = () => {
    return (
        <section className='relative pt-21'>
            <div
                className="px-14 py-26 flex items-center justify-center"
            >
                <div className="flex flex-col w-full items-center gap-8 justify-center">
                    {/* Headline */}
                    <motion.h1 className="text-center w-[80%] akira text-tertiary-white leading-[1.15]">
                        <motion.span variants={textVariant(0)} className="akira text-[4rem] block">
                            We build digital
                        </motion.span>
                        <motion.span variants={textVariant(0.2)} className="akira text-[4rem] block">
                            experiences that grow
                        </motion.span>
                        <motion.span variants={textVariant(0.4)} className="akira text-[4rem] block">
                            your business
                        </motion.span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2
                        variants={fadeIn("up", "spring", 0.6, 1)}
                        className="oswald-extralight text-tertiary-white text-center"
                    >
            <span className="text-2xl block leading-relaxed">
              From design to development and marketing, our team helps you turn ideas
            </span>
                        <span className="text-2xl block leading-relaxed">
              into powerful digital solutions
            </span>
                    </motion.h2>

                    {/* Button */}
                    <motion.button
                        variants={zoomIn(1, 0.5)}
                        className="akira text-tertiary-white mt-5 bg-primary-red/90 hover:bg-primary-red
                      duration-200 cursor-pointer rounded-xs transition-colors
                      py-5 px-9"
                    >
                        start your project
                    </motion.button>
                </div>
            </div>
            <img
                className="absolute top-20 right-5 -z-99"
                src={heroCircle}

            />
            <img
                className="absolute top-15 -rotate-0 left-20 -z-99"
                src={heroSlime}

            />
            <motion.img
                className="absolute bottom-48 left-110"
                src={heroArrow}
                variants={fadeIn("right", "spring", 1.2, 1)}
                initial="hidden"
                animate="show"
            />
            <motion.img
                className="absolute top-83 right-50"
                src={heroLine1}
                variants={fadeIn("left", "spring", 1, 1)}
                initial="hidden"
                animate="show"
            />
            <motion.img
                className="absolute top-86 right-60"
                src={heroLine2}
                variants={fadeIn("left", "spring", 1.2, 1)}
                initial="hidden"
                animate="show"
            />
        </section>
    )
}

export default SectionWrapper(Hero, "hero");