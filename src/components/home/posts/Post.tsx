import React from 'react'
import { FiThumbsUp, FiThumbsDown, FiMessageSquare } from 'react-icons/fi';

interface Props {
    
}

const Post = (props: Props) => {
    return (
        <div className='bg-white flex flex-col p-4 rounded-lg items-center mb-4 box-border border border-slate-300'>
            <div className='flex pb-4 self-start'>
                <div className='box-border h-12 w-12 min-w-[3rem] rounded-full bg-black'></div>
                <div className='flex flex-col pl-3'>
                    <div className='flex gap-2'>
                        <h1 className='font-semibold'>Mokey Gan</h1>
                        <h2 className='text-slate-500'>@mokeygan</h2>
                        <h2 className='text-slate-500'>· 2h</h2>
                    </div>
                    <p className='font-normal'>I will rule China one day. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi debitis veniam quod expedita inventore pariatur odit fugit, aut, fugiat sunt deserunt placeat voluptatum, dicta enim iure! Quia, culpa fugit.</p>
                </div>
            </div>
            <div className='bg-green-300 rounded-full text-center w-full min-h-[1.5rem]'></div>
            <div className='flex text-xl gap-3 text-slate-400 self-start mt-4'>
                <FiThumbsUp />
                <FiThumbsDown />
                <FiMessageSquare />
            </div>
        </div>
    )
}

export default Post
