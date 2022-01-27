import React from "react";
import User from "../../../assets/User.png";
import Dividers from "@mui/material/Divider";
import { AiOutlineEdit } from "react-icons/ai";
import ProgressBar from "./ProgressBar";

interface Props {}

const ProfileView = (props: Props) => {
	return (
		<div className="flex  w-full h-full p-8 gap-x-8 ">
			<div className="flex flex-col w-1/2 gap-y-8 ">
				<div className="box-border bg-zinc-100 w-full h-80 drop-shadow-lg rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Personal Details
						</h1>

						<AiOutlineEdit className="text-2xl" />
					</div>
					<Dividers />
					<div className="flex gap-x-24 items-center pt-8">
						<div className="flex flex-col justify-between">
							<h1 className="font-medium pb-2 ">
								Name: Mokey Gan
							</h1>

							<h1 className="font-medium pb-2">
								Email: ganzj45@gmail.com
							</h1>
							<h1 className="font-medium pb-2">
								XPX Private Key: 97nnsv786HKHK7t78
							</h1>
						</div>
						<div className="flex flex-col items-center">
							<img
								src={User}
								alt="User"
								className=" w-[6rem] object-contain items-center"
							/>
						</div>
					</div>
				</div>

				<div className="box-border bg-zinc-100 w-full h-80 drop-shadow-lg rounded-xl p-6">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Statistics
						</h1>
					</div>
					<Dividers />
					
                    <div className="flex justify-between">
						<div className="flex flex-col pt-8 ">
							<h1 className="font-medium pb-2">
                                Level: 50</h1>
							<h1 className="font-medium pb-2">
								Role: Investigator
							</h1>
							<h1 className="font-medium pb-2">
                                Class: Captain</h1>
						</div>

                        <div className="flex flex-col items-center pt-4">
                            <h1 className="pb-1 font-medium">Experience Points</h1>
                            <ProgressBar />
                            <h1 className="pt-1 font-medium">65/100</h1>
                        </div>
                        </div>

					
				</div>
			</div>

			<div className=" box-border bg-zinc-100 w-1/2 drop-shadow-xl rounded-lg p-6">
				<h1>Badges and Achievements</h1>
				<h1></h1>
				<h1></h1>
			</div>
		</div>
	);
};

export default ProfileView;
