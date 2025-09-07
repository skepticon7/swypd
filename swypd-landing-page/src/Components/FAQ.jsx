import SectionWrapper from "../hoc/SectionWrapper.jsx";
import FAQItem from "./FAQItem.jsx";
import {faqItems} from "../constants/index.js";
import Reveal from "./Reveal.jsx";

const FAQ = () => {
    return (
        <div id='faq' className='py-24 flex items-center justify-center w-full'>
            <div className='flex items-start justify-center gap-15  w-full'>
                <div className="w-1/2 flex flex-col items-start justify-center">
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white text-base '>FAQ</p>
                    </Reveal>
                    <Reveal>
                        <h2 className='akira text-primary-red text-5xl text-left leading-[1.05] mt-4'>
                            <span className=' akira block '>questions ?</span>
                            <span className='akira block'>we've got you</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <h2
                            className="oswald-regular text-lg text-tertiary-white text-left mt-6 tracking-wide"
                        >
                            Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
                        </h2>
                    </Reveal>
                    <div className="flex items-center justify-start gap-4 mt-8">
                        <Reveal>
                            <p className='oswald-regular text-lg text-tertiary-white'>
                                Didn’t find your answer ?
                            </p>
                        </Reveal>
                        <Reveal>
                            <a href={"/#footer"}>
                                <button
                                    className="akira bg-tertiary-white/90 hover:bg-tertiary-white
                 text-sm text-secondary-black cursor-pointer rounded-xs
                 transition-colors duration-200 h-full py-4 px-6"
                                >
                                    Contact us
                                </button>
                            </a>
                        </Reveal>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className="w-full h-px bg-tertiary-white/60 mb-4"></div>
                    {faqItems.map((item, index) => (
                        <>
                            <FAQItem key={index} question={item.question} answer={item.answer}/>
                            <div className="w-full h-px bg-tertiary-white/60 my-4"></div>
                        </>

                        ))}
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(FAQ, 'faq')