import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {pricing} from "../constants/index.js";
import {useState} from "react";
import {check, pricingSlime} from "../assets/index.js";
import Reveal from "./Reveal.jsx";
import {ContactModal} from "./index.js";
import {Checkbox} from "@/components/ui/checkbox.jsx";


const PriceCard = ({values  ,selected ,  setSelected }) => {
    const allIds = values.features.map(f => f.id);
    const isChecked = allIds.every(id => selected.has(id));

    const handleChange = () => {
        setSelected(prev => {
            const newSet = new Set(prev);

            if (isChecked) {
                allIds.forEach(id => newSet.delete(id));
            } else {
                allIds.forEach(id => newSet.add(id));
            }

            return newSet;
        });
    };
    return (
        <div className={`flex items-center justify-between  w-full h-full `}>
            <div className='flex items-center justify-center md:gap-6 sm:gap-5 xs:gap-4 gap-3'>
                <Checkbox
                    checked={isChecked}
                    onClick={handleChange}
                    className="data-[state=checked]:bg-primary-red
                                          data-[state=checked]:border-tertiary-white
                                          data-[state=checked]:text-tertiary-white 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 lg:h-6 lg:w-6 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 h-4 w-4"
                />
                <div className='flex flex-col xs:gap-2 gap-1 items-start justify-center'>
                        <div className='flex items-center justify-center gap-3'>
                            <Reveal>
                                <img src={values.icon} className={'2xl:w-8 md:w-6 sm:w-5.5 xs:w-5 w-4.5'}/>
                            </Reveal>
                            <Reveal>
                                <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-2xl sm:text-xl xs:text-base text-sm text-tertiary-white oswald-bold'>{values.title}</p>
                            </Reveal>
                        </div>
                    <Reveal>
                        <p className='2xl:text-base xl:text-sm lg:text-sm md:text-sm text-xs  text-tertiary-white oswald-regular'>{values.description}</p>
                    </Reveal>
                </div>

            </div>
            <Reveal>
                <p className='text-tertiary-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-3xl xs:text-2xl oswald-bold '>{values.price}</p>
            </Reveal>
        </div>

    )
}


export const Pricing = () => {

    const [selectedFeatures, setSelectedFeatures] = useState(new Set());
    const [contactOpen  , setContactOpen] = useState(false);


    const features = pricing.flatMap(price => price.features);


    return (
        <div id='pricing' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex items-center justify-center gap-15 relative'>
            <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-12 xl:gap-15 w-full h-full'>
                    <div className=' lg:w-1/2 w-full flex flex-col items-start justify-between'>
                        <div>
                            <Reveal>
                                <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>Pricing</p>
                            </Reveal>
                            <Reveal>
                                <h2 className='akira text-primary-red text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left leading-[1.05] mt-4'>
                                    <span className=' akira block md:hidden'>flexible plans for every</span>
                                    <span className=' akira block hidden md:block'>flexible plans</span>
                                    <span className='akira block  hidden md:block'>for every</span>
                                    <span className='akira block '>business size</span>
                                </h2>
                            </Reveal>
                            <Reveal>
                                <h2
                                    className="oswald-regular xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-tertiary-white text-left mt-4"
                                >
                                    <span className=" block leading-relaxed">Whether you’re a startup or an established brand, we adapt to your needs.</span>
                                </h2>
                            </Reveal>

                        </div>

                        <div className='w-full  lg:mt-7 xl:mt-10 xs:mt-8 xs:block hidden'>
                            <div className="grid lg:grid-cols-2 md:grid-cols-3 xs:grid-cols-2   w-full gap-x-5 gap-y-5 ">
                                {features.map((feature, index) => (
                                    <Reveal key={index}>
                                        <div className="flex items-start gap-3 justify-start">
                                            <img
                                                src={check}
                                                className={`${selectedFeatures.has(feature.id) ? '' : 'opacity-10'} 2xl:w-6 xs:w-4.5 w-4.5 md:w-5`}
                                                alt="check"
                                            />
                                            <p className="2xl:text-base text-[0.7rem] xs:text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[0.9rem] xl:text-[1rem]  oswald-regular text-tertiary-white">
                                                {feature.feat}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>


                <div
                    className=' lg:w-1/2 w-full p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex flex-col mt-8 items-center justify-between  rounded-sm border-[1px] border-tertiary-white/60'>
                    <div className='flex flex-col items-center w-full justify-between'>
                        {pricing.map((price, index) => (
                            <div key={price.title} className="w-full flex flex-col items-center  justify-between">
                                <PriceCard selected={selectedFeatures} setSelected={setSelectedFeatures}
                                           index={index} size={pricing.length} values={price}/>
                                    <div className="w-full h-px bg-tertiary-white/60 my-3 xs:my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8"></div>
                                </div>
                        ))}
                    </div>

                    <div className='w-full'>
                        <Reveal>
                            <button
                                onClick={() => setContactOpen(true)}
                                className="akira w-full  xs:mt-4 mt-2  bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200  text-secondary-black cursor-pointer rounded-xs transition-colors
                      text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]
    py-2  xs:py-2.5  sm:py-3  md:py-3.5  lg:py-4 xl:py-3.5
                      "
                            >
                                get started today
                            </button>
                        </Reveal>
                    </div>




                </div>


            </div>
            <img className='absolute -left-90 -bottom-65 rotate-5 -z-10' src={pricingSlime}/>
        </div>
    )
}
export default SectionWrapper(Pricing, 'pricing');