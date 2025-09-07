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
                    <span>{question}</span>
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
                            <p>{answer}</p>
                        </Reveal>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FAQItem;