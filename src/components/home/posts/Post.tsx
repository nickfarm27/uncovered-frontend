import React from 'react'
import { FiThumbsUp, FiThumbsDown, FiMessageSquare } from 'react-icons/fi';

interface Props {
    
}

const Post = (props: Props) => {
    return (
        <div className='bg-slate-100 rounded-lg box-border p-4'>
            <div className='bg-white flex flex-col'>
                <div className='flex'>
                    <div className='box-border h-12 w-12 rounded-full bg-black my-2'></div>
                    <div>
                        <div className='flex'>
                            <h1>Mokey Gan</h1>
                            <h2>@mokeygan</h2>
                            <h2>2h</h2>
                        </div>
                        <p>I will rule China one day</p>
                    </div>
                </div>
                <div>PROGRESS BAR</div>
            </div>
            <div className='flex'>
                <FiThumbsUp />
                <FiThumbsDown />
                <FiMessageSquare />
            </div>
        </div>
    )
}

export default Post
