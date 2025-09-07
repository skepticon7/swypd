import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../Utils/motion.js";
import {heroArrow, heroLine1, heroLine2} from "../assets/index.js";
import Reveal from "./Reveal.jsx";

const CTA = () => {
    return (
        <div id="cta" className="py-28 flex items-center justify-center relative">
            <div className="text-center">
                <Reveal>
                    <h1 className="akira text-5xl text-tertiary-white leading-[1.15]">
                        <span className="akira  block">ready to start</span>
                        <span className="akira  block">your next project ? </span>
                    </h1>
                </Reveal>

                <Reveal>
                    <h2 className="oswald-extralight text-tertiary-white text-lg mt-4 tracking-wide">
                        Let’s bring your ideas to life with design, development, and marketing that deliver results.
                    </h2>
                </Reveal>

                <Reveal>
                    <a
                        href="https://calendly.com/yussefelhilali"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="akira self-end  mt-8 bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200 text-sm text-secondary-black cursor-pointer rounded-xs transition-colors
                      py-5 px-9"
                        >
                            book an appointment
                        </button>
                    </a>
                </Reveal>


            </div>
            <motion.img
                variants={fadeIn("left", "spring", 0.9, 1)}
                className='absolute top-53 right-120' src={heroLine1}
            />
            <motion.img
                variants={fadeIn("left", "spring", 1, 1)}
                className='absolute top-56 right-131' src={heroLine2}/>
            <motion.img
                variants={fadeIn("right", "spring", 1, 1)}
                className='absolute left-100 bottom-35 w-10' src={heroArrow}/>
        </div>
    );
};

export default SectionWrapper(CTA, "cta");
