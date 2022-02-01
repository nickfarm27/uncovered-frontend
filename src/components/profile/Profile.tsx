import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'

interface Props {}

const Profile = (props: Props) => {
    const [title, setTitle] = useState("Dashboard");
    const location = useLocation();
    const { pathname: pathName } = location;
    
    useEffect(() => {
        switch (pathName) {
            case "/profile":
                setTitle("Dashboard")
                break;
            case "/profile/view":
                setTitle("Profile")
                break;
            case "/profile/edit":
                setTitle("Edit Profile")
                break;
            case "/profile/wallet":
                setTitle("Wallet")
                break;
            case "/profile/feed":
                setTitle("My Feed")
                break;
            case "/profile/missions":
                setTitle("Missions")
                break;
            case "/profile/rewards":
                setTitle("Rewards")
                break;
            case "/profile/tasks":
                setTitle("Tasks")
                break;
            case "/profile/leaderboard":
                setTitle("Leaderboard")
                break;
            default:
                setTitle("None")
                break;
        }
    }, [pathName]);

    return (
        <div className='min-h-screen flex'>
            <SideBar />
            <div className='w-full'>
                <div className='border-b-2 border-slate-100 font-medium text-xl py-7 pl-10'>{title}</div>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile
