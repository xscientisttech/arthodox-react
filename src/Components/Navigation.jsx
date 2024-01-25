import React, { Fragment } from 'react'
import {FaCaretLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router'

const Navigation = () => {

    const Navigate = useNavigate();
    return (
        <Fragment>
            <div className="bg-[#f9f1e7]  h-[70px] w-full flex justify-start pl-20 items-center">
                <div className="flex gap-5">
                    <div className="flex gap-2.5 justify-start items-center">
                        <p onClick={()=>Navigate('/')} className=' cursor-pointer'>Home</p>
                        <FaCaretLeft/>
                        <p onClick={()=>Navigate('/Products')} className=' cursor-pointer'>Products</p>
                        <FaCaretLeft/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;