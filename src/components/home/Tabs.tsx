import React from 'react'
import Posts from './posts/Posts'

interface Props {
    
}

const Tabs = (props: Props) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-around w-1/2 text-white'>
                    <div className='px-4 py-1.5 m-4 bg-blue-500 rounded cursor-pointer font-medium'>Verified</div>
                    <div className='px-4 py-1.5 m-4 bg-blue-500 rounded cursor-pointer font-medium'>Unverified</div>
                    <div className='px-4 py-1.5 m-4 bg-blue-500 rounded cursor-pointer font-medium'>Upload Post</div>
                </div>
            </div>
            <Posts />
        </>
    )
}

export default Tabs
