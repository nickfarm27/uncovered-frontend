import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FiAward } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoPodiumOutline } from "react-icons/io5";
import { BiTask, BiWallet, BiGridAlt, BiNews } from "react-icons/bi";
import { GrTarget } from "react-icons/gr";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import Bars from "./Bars";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { get_Auth } from "../../Firebase";
import UserContext from "../../store/user-context";

type Props = {};

// #f3f4f6
const SideBar = (props: Props) => {

	const userCtx = useContext(UserContext);


	return (
		<div className="bg-slate-50 min-w-[16rem] border-r-2 border-slate-200 p-3">
			<Link to="/" className="flex p-3 mb-2">
				<Logo className="h-10" />
				<div className="logo text-4xl ml-4">uncovered</div>
			</Link>
			<div className="flex items-center my-4 p-2">
				<div className="min-w-[3rem] min-h-[3rem] bg-blue-500 rounded-full"></div>
				<div className="flex flex-col ml-4">
					<h1 className="font-medium">{userCtx.user.username}</h1>
					<h2 className="font-medium text-slate-500">@{userCtx.user.username}</h2>
				</div>
			</div>
			<hr />
			<div className="mt-2">
				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars icon={BiGridAlt} name="Dashboard" link="/profile" />
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars
						icon={CgProfile}
						name="Profile"
						link="/profile/view"
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars
						icon={BiWallet}
						name="Wallet"
						link="/profile/wallet"
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars icon={BiNews} name="My Feed" link="/profile/feed" />
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars
						icon={GrTarget}
						name="Missions"
						link="/profile/missions"
					/>
				</motion.div>
				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars
						icon={FiAward}
						name="Rewards"
						link="/profile/rewards"
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars icon={BiTask} name="Tasks" link="/profile/tasks" />
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<Bars
						icon={IoPodiumOutline}
						name="Leaderboard"
						link="/profile/leaderboard"
					/>
				</motion.div>

				<motion.div whileHover={{ scale: 1.05 }}>
					<div 
						onClick={() => {
							signOut(get_Auth)
						}} 
						className="flex p-[0.6rem] cursor-pointer hover:bg-slate-200 rounded-md items-center pl-4"
					>
						<HiOutlineLogout className="h-7 w-7" />
						<p className="font-medium pl-4">Log Out</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SideBar;
