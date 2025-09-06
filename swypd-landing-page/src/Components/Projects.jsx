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

const Projects = () => {
    return (
        <div id='projects' className='py-24 flex items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <p className='oswald-semibold text-tertiary-white text-2xl '>Our values</p>
                    <h2 className='akira text-primary-red text-5xl text-center leading-[1.05]'>
                        <span className=' akira block '>emphazise what's</span>
                        <span className='akira block'>important to your</span>
                        <span className='akira block'>company</span>
                    </h2>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-full">
                        <img className='row-span-[5]  w-full rounded-md' src={partyValues}/>

                        <img className='row-span-[3] col-start-1 row-start-[6] w-full rounded-md' src={service1values}/>

                        <img src={swypdValues} className='row-span-[4] col-start-2 row-start-1 w-full rounded-md'/>

                        <img src={djValues} className='row-span-[7] col-start-2 row-start-[5] rounded-md w-full'/>

                        <img src={partyValues} className='row-span-[5] w-full bg-white rounded-md '/>

                        <img src={service2values} className='row-span-[5] col-start-3 row-start-6 rounded-md w-full'/>
                </div>


            </div>
            <img className='absolute -z-10 left-0 -top-8' src={projectSlime}/>
            <img className='absolute -z-10 -bottom-20 -right-65 -rotate-70' src={heroSlime}/>
        </div>
    )
}

export default SectionWrapper(Projects, 'projects');