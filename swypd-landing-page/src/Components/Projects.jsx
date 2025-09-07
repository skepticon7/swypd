import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {
    djValues, heroSlime,
    partyValues,
    partyValues2,
    projectSlime,
    service1values,
    service2values,
    swypdValues
} from "../assets/index.js";
import Reveal from "./Reveal.jsx";

const Projects = () => {
    return (
        <div id='projects' className='py-28 flex  items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white text-base '>Our projects</p>
                    </Reveal>
                    <Reveal>
                        <h2 className='akira text-primary-red text-5xl text-center leading-[1.05]'>
                            <span className=' akira block '>emphazise what's</span>
                            <span className='akira block'>important to your</span>
                            <span className='akira block'>company</span>
                        </h2>
                    </Reveal>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-full">
                    <div className='row-span-[5]  '>
                        <Reveal>
                            <img className='w-full rounded-md' src={partyValues}/>
                        </Reveal>
                    </div>

                    <div className='row-span-[3] col-start-1 row-start-[6]'>
                        <Reveal>
                            <img className=' w-full rounded-md' src={service1values}/>
                        </Reveal>
                    </div>


                    <div className='row-span-[4] col-start-2 row-start-1'>
                        <Reveal>
                            <img src={swypdValues} className=' w-full rounded-md'/>
                        </Reveal>
                    </div>

                    <div className='row-span-[7] col-start-2 row-start-[5]'>
                        <Reveal>
                            <img src={djValues} className=' rounded-md w-full'/>
                        </Reveal>
                    </div>



                    <div className='row-span-[5]'>
                        <Reveal>
                            <img src={partyValues} className=' w-full bg-white rounded-md '/>
                        </Reveal>
                    </div>

                    <div className='row-span-[5] col-start-3 row-start-6'>
                        <Reveal>
                            <img src={service2values} className=' rounded-md w-full'/>
                        </Reveal>
                    </div>


                </div>


            </div>
            <img className='absolute -z-10 -left-30 -top-0 -rotate-[10px]' src={projectSlime}/>
            <img className='absolute -z-10 -bottom-20 -right-65 -rotate-70' src={heroSlime}/>
        </div>
    )
}

export default SectionWrapper(Projects, 'projects');