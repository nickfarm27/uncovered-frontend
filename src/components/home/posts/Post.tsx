//CHANGE UNVERIFIED VIEW (NORMAL/VERIFIER)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrustBar from "./verified/TrustBar";
import InvestigatorSlots from "./verifiers/InvestigatorSlots";
import JurySlots from "./verifiers/JurySlots";
// @ts-ignore
import { Checkmark } from "react-checkmark";


interface Props {
	verified: boolean;
	name: string;
	username: string;
	text: string;
	id: string;
	verifiedByInvestigator: boolean;
}

const Post = (props: Props) => {
	const [selected, setSelected] = useState(0);
	const [chosen, setChosen] = useState(false);

	let Color = "";
	let tickColor = "";

	switch (selected) {
		case 0:
			Color = "#f4f4f5";
			break;
		case 1:
			Color = "#ffece6";
			tickColor = "red";
			break;
		case 2:
			Color = "#e6ffe6";
			tickColor = "green";
			break;
	}

	let verifier = Boolean(true);

	return (
		<motion.div whileHover={{ scale: 1.02, backgroundColor: "white" }}>
			{verifier ? (
				<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer">
					<Link to={`/${props.id}`}>
						<div className="flex pb-4 self-start">
							<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
							<div className="flex flex-col pl-3">
								<div className="flex gap-2">
									<h1 className="font-semibold">
										{props.name}
									</h1>
									<h2 className="text-slate-500">
										@{props.username}
									</h2>
									<h2 className="text-slate-500">· 2h</h2>
								</div>
								<p className="font-medium">{props.text}</p>
							</div>
						</div>
					</Link>

					<div className="w-full flex items-center justify-center">
						{props.verified ? (
							<TrustBar />
						) : props.verifiedByInvestigator ? (
							<JurySlots id={props.id} />
						) : (
							<InvestigatorSlots id={props.id} />
						)}
					</div>
				</div>
			) : (
				<motion.div
					initial={{ backgroundColor: "white" }}
					animate={{ backgroundColor: Color }}
					className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer"
				>
					<Link to={`/${props.id}`}>
						<div className="flex pb-4 self-start">
							<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
							<div className="flex flex-col pl-3">
								<div className="flex gap-2">
									<h1 className="font-semibold">
										{props.name}
									</h1>
									<h2 className="text-slate-500">
										@{props.username}
									</h2>
									<h2 className="text-slate-500">· 2h</h2>
								</div>
								<p className="font-medium">{props.text}</p>
							</div>
						</div>
					</Link>
					{!chosen ? (
						<div className="w-full flex items-center justify-center">
							{props.verified ? (
								<TrustBar />
							) : (
								<div className="flex justify-around w-2/3">
									<motion.div
										onTap={(e) => {
											setSelected(2);
											setChosen(true);
										}}
										whileHover={{
											scale: 1.02,
											backgroundColor: "#008000",
										}}
										transition={{ duration: 0.2 }}
										className="bg-green-500 rounded-xl w-1/3 cursor-pointer"
									>
										<h1 className="text-white font-medium p-4 text-center">
											True
										</h1>
									</motion.div>

									<motion.div
										onTap={(e) => {
											setSelected(1);
											setChosen(true);
										}}
										whileHover={{
											scale: 1.02,
											backgroundColor: "#b30000",
										}}
										transition={{ duration: 0.2 }}
										className="bg-red-500 rounded-xl w-1/3 cursor-pointer"
									>
										<h1 className="text-white font-medium p-4 text-center">
											False
										</h1>
									</motion.div>
								</div>
							)}
						</div>
					) : (
						<Checkmark color={tickColor} />
					)}
				</motion.div>
			)}
		</motion.div>
	);
};

export default Post;
