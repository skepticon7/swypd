import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import {styles} from "../style.js";


const SectionWrapper = (Component , idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once : true , amount : 0.35}}
                className={`xs:px-4 2xs:px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full 2xl:max-w-[90rem] xl:max-w-[80rem] lg:max-w-[70rem] mx-auto`}
            >
                <Component/>
            </motion.section>
        )
    }


export default SectionWrapper