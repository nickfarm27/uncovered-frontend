import React from 'react'
import { FaCheckCircle, FaRegCheckCircle, FaQuestionCircle, FaRegQuestionCircle } from 'react-icons/fa'
import { HiOutlineLink } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/Logo.svg';

interface Props {
    
}

const Header = (props: Props) => {
    const location = useLocation();
    const { pathname: pathName } = location;

    return (
        <div className='bg-white flex flex-row flex-nowrap items-center shadow-md'>
            <div className='flex items-center w-1/3'>
                <Logo className='h-12 ml-6 mr-4' />
                <input type="text" className='h-12 w-72 rounded-full px-4 bg-slate-100' placeholder='Search Posts'></input>
            </div>
            <nav className='flex items-center w-1/3 justify-center'>
                <Link to="/">
                    <div className='mx-2'>
                    <div className={`flex justify-center items-center w-24 h-16 rounded-md mt-1 ${pathName !== "/" && "hover:bg-slate-100"}`}>
                            {pathName === "/" ? <FaCheckCircle className="h-7 w-7 text-blue-500" /> : <FaRegCheckCircle className="h-7 w-7 text-gray-500" />}
                        </div>
                        <div className={`min-h-[0.25rem] w-full ${pathName === "/" && "bg-blue-500"}`}></div>
                    </div>
                </Link>
                <Link to="unverified">
                    <div className='mx-2'>
                    <div className={`flex justify-center items-center w-24 h-16 rounded-md mt-1 ${pathName !== "/unverified" && "hover:bg-slate-100"}`}>
                            {pathName === "/unverified" ? <FaQuestionCircle className="h-7 w-7 text-blue-500" /> : <FaRegQuestionCircle className="h-7 w-7 text-gray-500" />}
                        </div>
                        <div className={`min-h-[0.25rem] w-full ${pathName === "/unverified" && "bg-blue-500"}`}></div>
                    </div>
                </Link>
                <Link to="upload">
                    <div className='mx-2'>
                        <div className={`flex justify-center items-center w-24 h-16 rounded-md mt-1 ${pathName !== "/upload" && "hover:bg-slate-100"}`}>
                            <HiOutlineLink className={`h-7 w-7 ${pathName === "/upload" ? "text-blue-500" : "text-gray-500"}`} />
                        </div>
                        <div className={`min-h-[0.25rem] w-full ${pathName === "/upload" && "bg-blue-500"}`}></div>
                    </div>
                </Link>
            </nav>
            <div className='flex w-1/3 justify-end'>
                <Link to="/profile" className='box-border min-h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] rounded-full bg-black mr-8'></Link>
            </div>
        </div>
    )
}

export default Header
