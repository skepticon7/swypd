import {sliderItems} from "../constants/index.js";

export const SoftwareSlider = () => {
    return (
        <div className='2xl:py-24 xl:py-20 lg:py-18 xs:py-15 flex flex-col items-center justify-start gap-10'>
            <p className='oswald-semibold text-tertiary-white sm:text-base text-sm'>Our tools</p>
            <div className="relative overflow-hidden w-full ">
                <div
                    className="absolute left-0 top-0 h-full 2xl:w-48 xl:w-40 lg:w-36 md:w-30 sm:w-25 xs:w-20 bg-gradient-to-r from-secondary-black to-transparent z-10 pointer-events-none"/>

                {/* Right shadow gradient */}
                <div
                    className="absolute right-0 top-0 h-full 2xl:w-48 xl:w-40 lg:w-36 md:w-30 sm:w-25 xs:w-20  bg-gradient-to-l from-secondary-black to-transparent z-10 pointer-events-none"/>
                <div className="flex animate-infinite-scroll-left items-center">
                    {sliderItems.concat(sliderItems).map((item, index) => (
                        <img
                            key={index}
                            className="2xl:h-22 xl:h-20 lg:h-18 md:h-16 xs:h-12  object-contain"
                            src={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SoftwareSlider;