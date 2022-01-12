import React from 'react'
import Post from './Post'

interface Props {
    
}

const Posts = (props: Props) => {
    return (
        <div className='flex justify-center pt-4'>
            <div className='flex flex-col w-1/2'>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts
