import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {
    artBoard1, artBoard2, artBoard3,
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

                <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 auto-rows-[minmax(0,auto)]">
                    {/* ArtBoard 1 */}
                    <div className="row-span-3 md:row-span-5">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={artBoard1}/>
                        </Reveal>
                    </div>

                    {/* Service 1 Values */}
                    <div className="row-span-2 md:col-start-1 md:row-start-6 md:row-span-3">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={service1values}/>
                        </Reveal>
                    </div>

                    {/* ArtBoard 2 */}
                    <div className="row-span-3 md:row-span-5">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={artBoard2}/>
                        </Reveal>
                    </div>

                    {/* Swypd Values */}
                    <div className="row-span-2 md:col-start-2 md:row-start-1 md:row-span-3">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={swypdValues}/>
                        </Reveal>
                    </div>

                    {/* DJ Values */}
                    <div className="row-span-5 md:col-start-2 md:row-start-4 md:row-span-5">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={artBoard3}/>
                        </Reveal>
                    </div>

                    {/* Service 2 Values */}
                    <div className="row-span-3 md:col-start-3 md:row-start-6">
                        <Reveal>
                            <img className="w-full h-full object-contain rounded-md" src={service2values}/>
                        </Reveal>
                    </div>
                </div>


            </div>
            <img className='absolute -z-10 xs:-left-30 xs:-top-0 -rotate-[10px] -left-30 top-0' src={projectSlime}/>
            <img className='absolute -z-10 xs:-bottom-20 xs:-right-65 -rotate-70 -bottom-20 -right-45' src={heroSlime}/>
        </div>
    )
}

export default SectionWrapper(Projects, 'projects');