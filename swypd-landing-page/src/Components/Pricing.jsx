import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {motion} from "framer-motion";
import {fadeIn} from "../Utils/motion.js";
import {pricing} from "../constants/index.js";
import {useEffect, useState} from "react";
import {check, pricingSlime} from "../assets/index.js";
import Reveal from "./Reveal.jsx";


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
            <div className='flex items-center justify-center gap-7'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                    className="w-8 h-8 webkit-checkbox"
                />
                <div className='flex flex-col gap-2 items-start justify-center'>
                        <div className='flex items-center justify-center gap-4'>
                            <Reveal>
                                <img src={values.icon} className={'w-8'}/>
                            </Reveal>
                            <Reveal>
                                <p className='text-3xl text-tertiary-white oswald-bold'>{values.title}</p>
                            </Reveal>
                        </div>
                    <Reveal>
                        <p className='text-base text-tertiary-white oswald-regular'>{values.description}</p>
                    </Reveal>
                </div>

            </div>
            <Reveal>
                <p className='text-tertiary-white text-4xl oswald-bold '>{values.price}</p>
            </Reveal>
        </div>

    )
}


export const Pricing = () => {

    const [selectedFeatures, setSelectedFeatures] = useState(new Set());


    const features = pricing.flatMap(price => price.features);


    return (
        <div id='pricing' className='py-28 flex items-center justify-center gap-15 relative'>
            <div className='flex items-center justify-between gap-20 w-full h-full   '>
                    <div className=' w-1/2 flex flex-col items-start justify-between'>
                        <div>
                            <Reveal>
                                <p className='oswald-semibold text-tertiary-white text-base '>Pricing</p>
                            </Reveal>
                            <Reveal>
                                <h2 className='akira text-primary-red text-5xl text-left leading-[1.05] mt-4'>
                                    <span className=' akira block '>flexible plans</span>
                                    <span className='akira block'>for every</span>
                                    <span className='akira block'>business size</span>
                                </h2>
                            </Reveal>
                            <Reveal>
                                <h2
                                    className="oswald-regular text-lg text-tertiary-white text-left mt-6"
                                >
                                    <span className=" block leading-relaxed">Whether you’re a startup or an established brand, we adapt to your needs.</span>
                                    <span className=" block leading-relaxed">Example packages:</span>
                                </h2>
                            </Reveal>

                        </div>

                        <div className='w-full'>
                            <p className='text-xl text-tertiary-white oswald-bold mt-20'>Included in every plan</p>
                            <div className='grid grid-cols-2 w-full gap-x-5  gap-y-5 mt-6'>
                                {
                                    features.map((feature, index) => (
                                        <Reveal>
                                            <div
                                                className='flex items-center justify-start gap-3'
                                                key={index}
                                            >
                                                <img src={check}
                                                     className={`${selectedFeatures.has(feature.id) ? '' : 'opacity-10'} w-6`}
                                                     alt={'check'}
                                                />
                                                <p className='text-base oswald-regular text-tertiary-white'>{feature.feat}</p>
                                            </div>
                                        </Reveal>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                <div
                    className=' w-1/2 p-8 flex flex-col items-center justify-between  rounded-lg border-[1px] border-tertiary-white/60'>
                    <div className='flex flex-col items-center w-full justify-between'>
                        {pricing.map((price, index) => (
                                <div key={price.title} className="w-full flex flex-col items-center  justify-between">
                                    <PriceCard selected={selectedFeatures} setSelected={setSelectedFeatures}
                                               index={index} size={pricing.length} values={price}/>
                                    <div className="w-full h-px bg-tertiary-white/60 my-8"></div>
                                </div>
                        ))}
                    </div>

                    <div className='self-end'>
                        <Reveal>
                            <button
                                className="akira   mt-6 bg-tertiary-white/90 hover:bg-tertiary-white
                      duration-200 text-sm text-secondary-black cursor-pointer rounded-xs transition-colors
                      py-5 px-9"
                            >
                                get started today
                            </button>
                        </Reveal>
                    </div>




                </div>


            </div>
            <img className='absolute -left-70 -bottom-40 rotate-5 -z-10' src={pricingSlime}/>
        </div>
    )
}
export default SectionWrapper(Pricing, 'pricing');