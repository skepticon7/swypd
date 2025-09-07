import {sliderItems} from "../constants/index.js";

export const SoftwareSlider = () => {
    return (
        <div className='py-28 flex flex-col items-center justify-start gap-10'>
            <p className='oswald-semibold text-tertiary-white text-2xl'>Our tools</p>
            <div className="relative overflow-hidden w-full ">
                <div
                    className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-secondary-black to-transparent z-10 pointer-events-none"/>

                {/* Right shadow gradient */}
                <div
                    className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-secondary-black to-transparent z-10 pointer-events-none"/>
                <div className="flex animate-infinite-scroll-left items-center">
                    {sliderItems.concat(sliderItems).map((item, index) => (
                        <img
                            key={index}
                            className="h-22 object-contain"
                            src={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SoftwareSlider;