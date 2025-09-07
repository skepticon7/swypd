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
                className={`max-w-[80rem] mx-auto`}
            >
                <Component/>
            </motion.section>
        )
    }


export default SectionWrapper