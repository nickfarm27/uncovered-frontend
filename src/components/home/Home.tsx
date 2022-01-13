import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Home
