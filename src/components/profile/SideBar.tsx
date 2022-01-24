import React from "react";
import { CgProfile } from 'react-icons/cg'
import { HiOutlineLogout } from 'react-icons/hi'
import { IoPodiumOutline } from 'react-icons/io5'
import { BiTask, BiWallet, BiGridAlt, BiNews } from 'react-icons/bi'
import { GrTarget } from 'react-icons/gr'
import { ReactComponent as Logo } from '../assets/Logo.svg';
import Bars from "./Bars";
import { Link } from "react-router-dom";

type Props = {};

// #f3f4f6
const SideBar = (props: Props) => {
    return (
        <div className="bg-slate-50 min-w-[16rem] border-r-2 border-slate-200 p-3">
            <Link to="/" className="flex p-3 mb-2">
                <Logo className='h-10' />
                <div className="logo text-4xl ml-4">uncovered</div>
            </Link>
            <div className="flex items-center my-4 p-2">
                <div className="min-w-[3rem] min-h-[3rem] bg-blue-500 rounded-full"></div>
                <div className="flex flex-col ml-4">
                    <h1 className="font-medium">Mokey Gan</h1>
                    <h2 className="font-medium text-slate-500">@mokeygan</h2>
                </div>
            </div>
            <hr />
            <div className="mt-2">
                <Bars icon={BiGridAlt} name="Dashboard" link="/profile" />
                <Bars icon={CgProfile} name="Profile" link="/profile/view" />
                <Bars icon={BiWallet} name="Wallet" link="/profile/wallet" />
                <Bars icon={BiNews} name="My Feed" link="/profile/feed" />
                <Bars icon={GrTarget} name="Missions" link="/profile/missions" />
                <Bars icon={BiTask} name="Tasks" link="/profile/tasks" />
                <Bars icon={IoPodiumOutline} name="Leaderboard" link="/profile/leaderboard" />
                <Bars icon={HiOutlineLogout} name="Log Out" link="/logout" />
            </div>
        </div>
    );
};

export default SideBar;
