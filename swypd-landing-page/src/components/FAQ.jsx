import SectionWrapper from "../hoc/SectionWrapper.jsx";
import FAQItem from "./FAQItem.jsx";
import {faqItems} from "../constants/index.js";
import Reveal from "./Reveal.jsx";

const FAQ = () => {
    return (
        <div id='faq' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 flex items-center justify-center w-full'>
            <div className='flex lg:flex-row xs:flex-col items-start justify-center gap-12  w-full'>
                <div className="lg:w-1/2 xs:w-full flex flex-col items-start justify-center">
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl '>FAQ</p>
                    </Reveal>
                    <Reveal>
                        <h2 className='akira text-primary-red 2xs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left leading-[1.05] mt-4'>
                            <span className=' akira xs:block lg:hidden '>questions ? we've got you</span>
                            <span className=' akira xs:hidden lg:block'>questions ?</span>
                            <span className='akira xs:hidden lg:block'>we've got you</span>
                        </h2>
                    </Reveal>

                    <div className="lg:flex xs:hidden items-center justify-start gap-4 mt-8">
                        <Reveal>
                            <p className='oswald-regular xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-tertiary-white'>
                                Didn’t find your answer ?
                            </p>
                        </Reveal>
                        <Reveal>
                            <a href={"/#footer"}>
                                <button
                                    className="akira bg-tertiary-white/90 hover:bg-tertiary-white
                                text-secondary-black cursor-pointer rounded-xs
                                transition-colors duration-200 h-full 2xs:text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                2xs:py-2 2xs:px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-5 xl:px-9  "
                                >
                                    Contact us
                                </button>
                            </a>
                        </Reveal>
                    </div>
                </div>
                <div className='lg:w-1/2 xs:w-full'>
                    <div className="w-full h-px bg-tertiary-white/60 mb-4"></div>
                    {faqItems.map((item, index) => (
                        <>
                            <FAQItem key={index} question={item.question} answer={item.answer}/>
                            <div className="w-full h-px bg-tertiary-white/60 my-4"></div>
                        </>

                    ))}
                </div>
                <div className="xs:flex w-full lg:hidden items-center justify-between">
                    <Reveal>
                        <p className='oswald-regular xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-tertiary-white'>
                            Didn’t find your answer ?
                        </p>
                    </Reveal>
                    <Reveal>
                        <a href={"/#footer"}>
                            <button
                                className="akira bg-tertiary-white/90 hover:bg-tertiary-white
                                text-secondary-black cursor-pointer rounded-xs
                                transition-colors duration-200 h-full 2xs:text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
                                2xs:py-2 2xs:px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 md:py-3.5 md:px-7 lg:py-4 lg:px-7 xl:py-5 xl:px-9  "
                            >
                                Contact us
                            </button>
                        </a>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(FAQ, 'faq')