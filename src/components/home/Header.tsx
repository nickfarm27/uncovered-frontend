import React from 'react'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <div className='bg-white flex flex-row flex-nowrap justify-between items-center'>
            <h1 className='ml-40 logo text-4xl'>uncovered</h1>
            <input type="text" className='h-8 w-1/3 rounded px-2 mr-10 bg-slate-100 border-2' placeholder='Search Posts'></input>
            <div className='box-border h-12 w-12 rounded-full bg-black my-4 mr-40'></div>
        </div>
    )
}

export default Header
