import {useEffect, useState } from "react";

import {styles} from "../style.js";
import {navItems} from "../constants/index.js";
import {SwypdLogo} from "../assets/index.js";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../Utils/motion.js";

const Navbar = () => {
    const [active , setActive] = useState("");
    const [scrolled , setScrolled] = useState(false);

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
    }

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5  fixed top-0 z-9999 bg-secondary-black ${
                scrolled ? "border-b-2 border-primary-red" : ""
            }`}
        >
            <div
                className={` w-full relative max-w-[100rem] p-0 mx-auto flex items-center justify-between`}
            >
                <ul className="list-none flex gap-8">
                    {navItems.map((item , index) => (
                        <motion.li
                            variants={textVariant(0.1 * index)}
                            initial="hidden"
                            animate="show"
                            key={item.id}
                            className={`relative ${
                                active === item.title ? "text-primary-red" : "text-tertiary-white"
                            }
            hover:text-primary-red cursor-pointer oswald-regular text-lg duration-200 transition-colors
          `}
                            onClick={() => scrollToSection(item.id, item.title)}
                        >
                            <a href={`#${item.id}`}>{item.title}</a>
                        </motion.li>
                    ))}
                </ul>

                <motion.a
                    variants={fadeIn("up" , "spring" , 0.3 , 1)}
                    initial="hidden"
                    animate="show"
                    href={'/#'}
                    className='absolute left-1/2 transform -translate-x-1/2'
                    onClick={handleLogoClick}
                >
                    <SwypdLogo className='w-32 h-full text-primary-red  cursor-pointer'/>
                </motion.a>

                <a
                    href={'/#pricing'}
                >
                    <motion.button
                        variants={fadeIn("left" , "spring" , 0.4 , 1)}
                        initial="hidden"
                        animate="show"
                        className="akira text-tertiary-white bg-primary-red/90 hover:bg-primary-red
             duration-200 cursor-pointer rounded-xs transition-colors
             py-2.5 px-5"
                    >
                        get started
                    </motion.button>
                </a>

            </div>
        </nav>

    )
}

export default Navbar;