import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {ChevronDown , ChevronUp} from "lucide-react"
import Reveal from "./Reveal.jsx";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="flex justify-between w-full text-left text-tertiary-white oswald-semibold text-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Reveal>
                    <span className='xs:text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] '>{question}</span>
                </Reveal>

                <Reveal>
                  <span>{isOpen ? (
                      <ChevronUp/>
                  ) : (
                      <ChevronDown/>
                  )}</span>
                </Reveal>

            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-tertiary-white text-base mt-3 oswald-regular"
                    >
                        <Reveal>
                            <p className='xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem]'>{answer}</p>
                        </Reveal>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FAQItem;