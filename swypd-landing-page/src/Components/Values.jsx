import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {valuesItems} from "../constants/index.js";
import swypdReel from "../assets/swypd-reel.mp4"
import {valuesCircle} from "../assets/index.js";


const ValueCard = ({ value }) => {
    return (
        <div className="">
            <img className="w-14" src={value.icon} alt={value.title} />
            <p className="text-2xl oswald-bold text-tertiary-white mt-4">{value.title}</p>
            <p className="text-base oswald-regular text-tertiary-white mt-1">{value.description}</p>
        </div>
    );
};



const Values = () => {
    return (
        <div id="values" className='py-26 flex items-center justify-center relative'>
            <div className='flex flex-col gap-20 items-center justify-center w-full'>
                <div className='flex flex-col gap-5 items-center justify-center'>
                    <p className='oswald-semibold text-tertiary-white text-2xl '>Our values</p>
                    <h2 className='akira text-primary-red text-5xl text-center leading-[1.05]'>
                        <span className=' akira block '>why clients</span>
                        <span className='akira block'>choose us</span>
                    </h2>
                </div>
                <div className='flex items-center justify-between gap-10 w-full'>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-x-20 gap-y-18'>
                            {valuesItems.map((item , index) => (
                                <ValueCard
                                    key={index}
                                    value={item}
                                />
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <video
                            src={swypdReel}
                            loop
                            autoPlay
                            muted
                            className="w-[40rem]  h-[50rem] object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className='absolute w-[35rem] -bottom-27 right-80 -z-10'>
                <img className='w-full' src={valuesCircle}/>
            </div>
        </div>
    )
}

export default SectionWrapper(Values , 'values');