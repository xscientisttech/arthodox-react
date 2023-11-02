import React from 'react'

const Navigation = () => {
    return (
        <>
            <div className="bg-[#f9f1e7]  h-[70px] w-full flex justify-start pl-20 items-center">
                <div className="flex gap-5">
                    <div className="flex gap-2.5 justify-start items-center">
                        <p>Home</p>
                        <i class="fa-solid fa-caret-left"></i>
                        <p>Products</p>
                        <i class="fa-solid fa-caret-left"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;