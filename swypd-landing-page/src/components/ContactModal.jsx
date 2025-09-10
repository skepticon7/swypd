import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {


    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-secondary-black/50 w-full">
                    <motion.div
                        key="modal"
                        initial={{ x: "115%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "115%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-tertiary-white/50 backdrop-blur-lg shadow-lg rounded-md relative xs:w-[60%]"
                    >
                        <div className="xs:px-8 xs:py-4 sm:px-15 sm:py-10 2xl:py-20 2xl:px-50 flex flex-col gap-10 items-center justify-center">
                            <div className="flex items-center justify-between w-full">
                                <p className="oswald-semibold xs:text-xl">Contact us</p>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 duration-200 transition-all"
                                >
                                    <X className="text-secondary-black" />
                                </button>
                            </div>

                            <form className="flex flex-col gap-4 w-full">
                                <input
                                    type="text"
                                    className="flex-grow w-full text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl
                             focus:outline-none rounded-xs border border-tertiary-white/60
                             bg-transparent px-2 py-2 h-full"
                                    placeholder="Your Full Name"
                                />
                                <input
                                    type="text"
                                    className="flex-grow w-full text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl
                             focus:outline-none rounded-xs border border-tertiary-white/60
                             bg-transparent px-2 py-2 h-full"
                                    placeholder="Your Email"
                                />
                                <textarea
                                    className="flex-grow w-full text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl
                             focus:outline-none rounded-xs border border-tertiary-white/60
                             bg-transparent px-2 py-2 h-full"
                                    placeholder="Let us hear from you ..."
                                ></textarea>
                            </form>

                            <button
                                type="submit"
                                className="akira w-full flex-shrink-0 text-tertiary-white bg-primary-red/90 hover:bg-primary-red
                           duration-200 cursor-pointer rounded-xs transition-colors
                           2xs:text-[0.7rem] xs:text-[0.70rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                           2xs:px-4 2xs:py-2 xs:px-5 sm:px-6 md:px-7 lg:px-7 xl:px-9"
                            >
                                send message
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
