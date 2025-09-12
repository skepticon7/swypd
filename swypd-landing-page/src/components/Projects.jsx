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
        <div id='projects' className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 py-10 flex  items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <Reveal>
                        <p className='oswald-semibold text-tertiary-white xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl'>Our
                            projects</p>
                    </Reveal>
                    <Reveal>
                        <h2 className='akira text-primary-red text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-[1.05]'>
                            <span className=' akira block '>emphasize what's</span>
                            <span className='akira block'>important to your</span>
                            <span className='akira block'>company</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 sm:gap-5 gap-2 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">
                    <div className="md:row-span-5 row-span-3  ">
                        <Reveal>
                            <img className="w-full rounded-md" src={partyValues}/>
                        </Reveal>
                    </div>

                    <div className="md:col-start-1 md:row-start-6 md:row-span-3  col-start-1 row-start-4 row-span-3  ">
                        <Reveal>
                            <img className="w-full rounded-md" src={service1values}/>
                        </Reveal>
                    </div>

                    <div className="md:row-span-5 row-span-3  ">
                        <Reveal>
                            <img className="w-full rounded-md" src={partyValues}/>
                        </Reveal>
                        {/*<Reveal>*/}
                        {/*    <img className="w-full rounded-md" src={swypdValues}/>*/}
                        {/*</Reveal>*/}
                    </div>

                    <div className="md:col-start-2 md:row-start-1 md:row-span-4 col-start-2 row-start-1 row-span-2 ">
                        <Reveal>
                            <img className="w-full rounded-md" src={swypdValues}/>
                        </Reveal>

                        {/*<Reveal>*/}
                        {/*    <img className="w-full rounded-md" src={djValues}/>*/}
                        {/*</Reveal>*/}
                    </div>

                    <div className="md:col-start-2 md:row-start-5 md:row-span-7 col-start-2 row-start-3 row-span-5 ">

                        <Reveal>
                            <img className="w-full rounded-md" src={djValues}/>
                        </Reveal>

                        {/*<Reveal>*/}
                        {/*    <img className="w-full rounded-md" src={partyValues}/>*/}
                        {/*</Reveal>*/}
                    </div>

                    <div className="md:col-start-3 md:row-start-6 md:row-span-5  col-start-2 row-start-8 row-span-3 ">
                        <Reveal>
                            <img className="w-full rounded-md" src={service2values}/>
                        </Reveal>
                    </div>
                </div>

                {/*<div className="columns-2 md:columns-3 sm:gap-5 gap-2 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">*/}
                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={partyValues}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}

                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={service1values}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}

                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={swypdValues}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}

                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={djValues}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}

                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={partyValues}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}

                {/*    <div className="break-inside-avoid xs:mb-2 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10">*/}
                {/*        <Reveal>*/}
                {/*            <img className="w-full rounded-md" src={service2values}/>*/}
                {/*        </Reveal>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <img className='absolute -z-10 xs:-left-30 xs:-top-0 -rotate-[10px] -left-30 top-0' src={projectSlime}/>
            <img className='absolute -z-10 xs:-bottom-20 xs:-right-65 -rotate-70 -bottom-20 -right-45' src={heroSlime}/>
        </div>
    )
}

export default SectionWrapper(Projects, 'projects');