import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import BlueButton from "../ui/BlueButton";
import SideBar from "./SideBar";

interface Props {}

const Profile = (props: Props) => {
	const [title, setTitle] = useState("Dashboard");
	const location = useLocation();
	const { pathname: pathName } = location;

	const submitHandler = () => {
		console.log("Upgrade Role");
	};

	useEffect(() => {
		switch (pathName) {
			case "/profile":
				setTitle("Dashboard");
				break;
			case "/profile/view":
				setTitle("Profile");
				break;
			case "/profile/edit":
				setTitle("Edit Profile");
				break;
			case "/profile/wallet":
				setTitle("Wallet");
				break;
			case "/profile/feed":
				setTitle("My Feed");
				break;
			case "/profile/missions":
				setTitle("Missions");
				break;
			case "/profile/rewards":
				setTitle("Rewards");
				break;
			case "/profile/tasks":
				setTitle("Tasks");
				break;
			case "/profile/leaderboard":
				setTitle("Leaderboard");
				break;
			case "/profile/upgrade":
				setTitle("Upgrade Role");
				break;

			default:
				setTitle("Verifier Rating");
				break;
		}
	}, [pathName]);

	return (
		<div className="min-h-screen flex">
			<SideBar />
			<div className="w-full">
				<div className="w-full flex justify-between border-b-2 border-slate-100 font-medium text-xl py-7 pl-10 items-center">
					{title}

					<div className="mr-8">
						<Link to="upgrade">
							<BlueButton
								text="Upgrade Role"
								submit={submitHandler}
							/>
						</Link>
					</div>
				</div>

				<Outlet />
			</div>
		</div>
	);
};

export default Profile;
