import {useEffect, useState} from "react";
import {styles} from "../style.js";
import {navItems} from "../constants/index.js";
import {swypdLogo} from "../assets/index.js";

const Navbar = () => {
    const [active , setActive] = useState("");
    const [scrolled , setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


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
            className={`${styles.paddingX} w-full flex items-center py-5  fixed top-0 z-20 bg-secondary-black ${
                scrolled ? "border-b-2 border-primary-red" : ""
            }`}
        >
            <div
                className={` w-full relative max-w-[100rem] p-0 mx-auto flex items-center justify-between`}
            >
                <ul className="list-none flex gap-8">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={`relative ${
                                active === item.title ? "text-primary-red" : "text-tertiary-white"
                            }
            hover:text-primary-red cursor-pointer oswald-regular text-lg duration-200 transition-colors
          `}
                            onClick={() => scrollToSection(item.id, item.title)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
                <img
                    onClick={handleLogoClick}
                    className="w-32 absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
                    src={swypdLogo}
                />
                <button
                    className="akira text-tertiary-white bg-primary-red/90 hover:bg-primary-red
             duration-200 cursor-pointer rounded-xs transition-colors
             py-2.5 px-5"
                >
                    get started
                </button>
            </div>
        </nav>

    )
}

export default Navbar;