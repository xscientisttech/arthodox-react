import React from 'react'
import bedroomImg from '../assets/images/bedroom.webp'

const CategoryItem = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-50 after:rounded-3xl after:left-0 after:top-0 after:bg-[#070707]">
                <img
                    src={bedroomImg}
                    alt="image"
                    className="w-[328px] rounded-3xl xl:w-[348px]"
                />
            </div>
            <div className="absolute z-[1] text-center md:top-[35%] top-[45%] w-56 sm:w-80 md:p-8 xl:w-[316px] xl:p-10">
                <h2 className="text-[2rem] font-medium text-white mb-3">
                    Dining
                </h2>
            </div>
        </div>
    )
}

export default CategoryItem