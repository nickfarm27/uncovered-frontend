import React from 'react'
import Post from './Post'

interface Props {
    
}

const Posts = (props: Props) => {
    return (
        <div className='bg-slate-200 flex justify-center pt-4'>
            <div className='bg-slate-300 flex flex-col w-1/2 gap-4'>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts
