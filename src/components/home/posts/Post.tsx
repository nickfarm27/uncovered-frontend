//CHANGE UNVERIFIED VIEW (NORMAL/VERIFIER)

import React, { useContext, useEffect, useState } from "react";
import Award from "../../assets/Award.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrustBar from "./verified/TrustBar";
import InvestigatorSlots from "./verifiers/InvestigatorSlots";
import JurySlots from "./verifiers/JurySlots";
import UserContext from "../../../store/user-context";
import axios from "axios";
// @ts-ignore
import { Checkmark } from "react-checkmark";

interface Props {
	investigatorIdentifier: number;
	juryIdentifier: number;
	verified: boolean;
	name: string;
	username: string;
	text: string;
	id: string;
	verifiedByInvestigator: boolean;
	role: string;
	image: string;
	post: any;
}

const Post = (props: Props) => {
	const userCtx = useContext(UserContext);


	const [selected, setSelected] = useState(0);
	const [chosen, setChosen] = useState(false);
	const [verified, setVerified] = useState(false);
	const [choice, setChoice] = useState(false)


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
	if (userCtx.user.role === "NORMAL") {
		verifier = Boolean(false);
	} else {
		verifier = Boolean(true);
	}

	useEffect(() => {
		if (
			props.post.user_vote_real.includes(userCtx.user.uid) ||
			props.post.user_vote_fake.includes(userCtx.user.uid)
		) {
			setVerified(true);
		}
	}, []);


	const addUserVote = async (vote: boolean) => {
		try {
			const response = await axios.post("http://localhost:3030/post/vote", {
				pid: props.post.tweet_id,
				uid: userCtx.user.uid,
				vote: vote
			})
		
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<motion.div whileHover={{ scale: 1.02, backgroundColor: "white" }}>
			{verifier ? (
				<div className="bg-zinc-100 flex flex-col items-start mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer">
					<Link to={`/${props.id}`}>
						<div className="flex pb-4 self-start">
							{props.image == null ? (
								<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
							) : (
								<div className="box-border h-12 w-12 min-w-[3rem] rounded-full ">
									<img
										src={props.image}
										alt="Award"
										className="w-[3rem] object-contain items-center rounded-full"
									/>
								</div>
							)}

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
						) : props.verifiedByInvestigator &&
						  props.role === "JURY" ? (
							<JurySlots
								id={props.id}
								identifier={props.juryIdentifier}
								post={props.post}
							/>
						) : (
							<InvestigatorSlots
								id={props.id}
								role={props.role}
								identifier={props.investigatorIdentifier}
								status={props.verifiedByInvestigator}
								post={props.post}
							/>
						)}
					</div>
				</div>
			) : (
				<motion.div
					initial={{ backgroundColor: "white" }}
					animate={{ backgroundColor: Color }}
					className="bg-zinc-100 flex flex-col items-start mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer"
				>
					<Link to={`/${props.id}`}>
						<div className="flex pb-4 self-start">
							{props.image == null ? (
								<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
							) : (
								<div className="box-border h-12 w-12 min-w-[3rem] rounded-full ">
									<img
										src={props.image}
										alt="Award"
										className="w-[3rem] object-contain items-center rounded-full"
									/>
								</div>
							)}

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
					{!verified ? (
						!chosen ? (
							<div className="w-full flex items-center justify-center">
								{props.verified ? (
									<TrustBar />
								) : (
									<div className="flex justify-around w-2/3">
										<motion.div
											onTap={(e) => {
												setSelected(2);
												setChosen(true);
												setChoice(true)
												console.log("true")
												addUserVote(true);
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
												setChoice(false)
												addUserVote(false);
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
						)
					) : (
						<div className="w-full flex justify-center items-center ">
							<h1 className="text-center font-semibold">
								Pending verifications from verifiers
							</h1>
						</div>
					)}
				</motion.div>
			)}
		</motion.div>
	);
};

export default Post;
