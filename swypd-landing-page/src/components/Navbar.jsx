import {useEffect, useRef, useState} from "react";

import {styles} from "../style.js";
import {navItems} from "../constants/index.js";
import {Facebook, Instagram,X  , Linkedin, SwypdLogo, Tiktok} from "../assets/index.js";
import {AnimatePresence, motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import { Sling as Hamburger } from 'hamburger-react'
import Reveal from "./Reveal.jsx";


const NavbarDropdown = ({  dropDownOpen, setDropDownOpen , active , setActive , setScrolled}) => {


    const scrollToSection = (id, title) => {
        setActive(title)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
        setDropDownOpen(false)
    }

    const handleLogoClick = () => {
        setActive("")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setScrolled(false)
        setDropDownOpen(false)
    }

    return (
        <AnimatePresence>
            {dropDownOpen && (

                <motion.div
                    key="dropdown"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-0 right-0 bg-tertiary-white/50  z-40 backdrop-blur-lg
                     2xs:w-full md:w-2/3 "
                >


                    <div className="relative pt-20 pb-10  xs:px-4 2xs:px-3 sm:px-6 flex items-center justify-start">
                        <button
                            onClick={handleLogoClick}
                        >
                            <SwypdLogo
                                className='md:w-28 sm:w-28  lg:w-30 2xs:hidden text-primary-red md:block left-5 h-auto top-7 absolute '/>
                        </button>

                        <div className='flex flex-col items-start justify-center gap-50 w-full'>
                            <ul className="list-none flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        variants={textVariant(0.05 * index)}
                                        initial="hidden"
                                        animate="show"
                                        key={item.id}
                                        className={`relative ${
                                            active === item.title ? "text-primary-red" : "text-secondary-black"
                                        }
                                         cursor-pointer oswald-regular 2xs:text-md xs:text-lg sm:text-xl  duration-200 transition-colors
                                      `}
                                        onClick={() => scrollToSection(item.id, item.title)}
                                    >
                                        <a >{item.title}</a>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className='flex flex-col items-center justify-center w-full gap-2'>
                                <motion.p
                                    initial='hidden'
                                    animate='show'
                                    variants={fadeIn("right" , "spring" , 0.2 , 0.5)}
                                    className='text-secondary-black 2xs:text-md xs:text-lg sm:text-xl oswald-semibold'
                                >
                                    Socials
                                </motion.p>
                                <div
                                    className='flex  items-start justify-center gap-1.5 '>
                                    <motion.a
                                        variants={textVariant(0.1)}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <Facebook
                                            className={'cursor-pointer text-secondary-black  xs:w-7 xs:h-7   duration-200 transition-colors'}/>
                                    </motion.a>

                                    <motion.a
                                        variants={textVariant(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={'https://www.instagram.com/swypdmedia/'}
                                    >
                                        <Instagram
                                            className={'cursor-pointer text-secondary-black xs:w-7 xs:h-7 sm:w-8 sm:h-8  duration-200 transition-colors'}/>
                                    </motion.a>

                                    <motion.a
                                        variants={textVariant(0.3)}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <X className={'cursor-pointer text-secondary-black xs:w-7 xs:h-7 sm:w-8 sm:h-8  duration-200 transition-colors'}/>
                                    </motion.a>

                                    <motion.a
                                        variants={textVariant(0.4)}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <Tiktok
                                            className={'cursor-pointer text-secondary-black xs:w-7 xs:h-7 sm:w-8 sm:h-8  duration-200 transition-colors'}/>
                                    </motion.a>
                                    <motion.a
                                        variants={textVariant(0.5)}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <Linkedin
                                            className={'cursor-pointer text-secondary-black xs:w-7 xs:h-7 sm:w-8 sm:h-8  duration-200 transition-colors'}/>
                                    </motion.a>
                                </div>
                                <div className="w-full h-px bg-secondary-black mt-5"></div>
                                    <p className='oswald-regular xs:text-xs md:text-sm lg:text-base xl:text-lg text-secondary-black text-sm mt-2'>©
                                        2025 SWYPD. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)

            if (window.scrollY < 50) {
                setActive("")
                return
            }

            const sections = navItems.map(link => document.getElementById(link.id))

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop
                    const sectionBottom = sectionTop + section.offsetHeight

                    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                        setActive(navItems[index].title)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const scrollToSection = (id, title) => {
        setActive(title)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    const handleLogoClick = () => {
        setActive("")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setScrolled(false)
        setDropDownOpen(false)
    }

    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setDropDownOpen(false);
            }
        };

        if (dropDownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropDownOpen, setDropDownOpen]);  useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setDropDownOpen(false);
            }
        };

        if (dropDownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropDownOpen, setDropDownOpen]);




    return (
        <nav
            className={`${styles.paddingX}  w-full flex items-center py-5 xl:py-6 md:py-4 2xs:py-2   fixed top-0 z-9999 bg-secondary-black ${
                scrolled ? "border-b-2 border-primary-red" : ""
            }`}
        >


            <div
                className={` w-full relative max-w-[100rem] p-0 mx-auto flex items-center justify-between`}
            >


                <ul className="list-none hidden xl:flex gap-8">
                    {navItems.map((item, index) => (
                        <motion.li
                            variants={textVariant(0.1 * index)}
                            initial="hidden"
                            animate="show"
                            key={item.id}
                            className={`relative ${
                                active === item.title ? "text-primary-red" : "text-tertiary-white"
                            }
            hover:text-primary-red cursor-pointer oswald-regular 2xl:text-lg xl:text-md duration-200 transition-colors
          `}
                            onClick={() => scrollToSection(item.id, item.title)}
                        >
                            <a >{item.title}</a>
                        </motion.li>
                    ))}
                </ul>

                <motion.a
                    variants={fadeIn("up", "spring", 0.3, 1)}
                    initial="hidden"
                    animate="show"
                    className="md:absolute 2xs:z-50 md:z-40 md:left-1/2 md:transform md:-translate-x-1/2"
                    href={'/#'}
                    onClick={handleLogoClick}
                >
                    <SwypdLogo
                        className='xl:w-32 lg:w-30 md:w-28 sm:w-28 2xs:w-22 w-18 h-full text-primary-red cursor-pointer'/>
                </motion.a>

                <button onClick={() => setDropDownOpen(!dropDownOpen)} className='xl:hidden z-50 sm:block order-2'>
                    <Hamburger toggled={dropDownOpen} toggle={() => setDropDownOpen(prev => !prev)} color={dropDownOpen ? '#0B0A0A' : '#D9D9D9'}
                               size={18}/>
                </button>

                <a
                    onClick={() => scrollToSection("cta" , "cta")}
                >
                    <motion.button
                        variants={fadeIn("down", "spring", 0.4, 1)}
                        initial="hidden"
                        animate="show"
                        className="akira md:block text-tertiary-white bg-primary-red/90 hover:bg-primary-red
             duration-200 cursor-pointer rounded-xs transition-colors xl:text-base lg:text-sm md:text-xs hidden
             py-2.5 px-5"
                    >
                        get started
                    </motion.button>
                </a>

            </div>


            <NavbarDropdown ref={dropDownRef} dropDownOpen={dropDownOpen} setScrolled={setScrolled} setDropDownOpen={setDropDownOpen} active={active} setActive={setActive} />


        </nav>

    )
}

export default Navbar;