import React from 'react'
import {FaCaretLeft} from 'react-icons/fa'

const Navigation = () => {
    return (
        <>
            <div className="bg-[#f9f1e7]  h-[70px] w-full flex justify-start pl-20 items-center">
                <div className="flex gap-5">
                    <div className="flex gap-2.5 justify-start items-center">
                        <p>Home</p>
                        <FaCaretLeft/>
                        <p>Products</p>
                        <FaCaretLeft/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;