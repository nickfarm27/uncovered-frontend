import React from "react";
import { motion } from "framer-motion";
import Dividers from "@mui/material/Divider";

interface Props {}

const DashboardView = (props: Props) => {
	return (
		<div className="flex w-full h-full p-8 gap-x-8 ">
			<div className="flex flex-col w-1/2 h-full gap-y-8 ">
				<div className="box-border bg-zinc-100 w-full  drop-shadow-lg rounded-xl p-6 ">
					<div className="flex justify-between">
						<h1 className="font-semibold text-lg pb-2">
							Wallet Balance
						</h1>
					</div>
					<Dividers />
				</div>

				<div className="box-border bg-zinc-100 w-full drop-shadow-lg rounded-xl p-6 ">
					<div className="">
						<h1 className="font-semibold text-lg pb-2">
							ProximaX Price (XPX)
						</h1>
					</div>
					<Dividers />
				</div>
			</div>
		</div>
	);
};

export default DashboardView;
