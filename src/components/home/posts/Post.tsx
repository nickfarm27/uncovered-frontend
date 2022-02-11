import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PremiumUser from "./unverified/PremiumUser";
import TrustBar from "./verified/TrustBar";
import Slots from "./verifiers/Slots";

interface Props {
	verified: boolean;
	name: string;
	username: string;
	text: string;
	id: string;
}

const Post = (props: Props) => {
	let verifier = Boolean(true);

	return (
		<motion.div whileHover={{ scale: 1.02, backgroundColor: "white" }}>
			{verifier ? (
				<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer">
					{props.verified ? (
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
					) : (
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
					)}

					<div className="w-full flex items-center justify-center">
						{props.verified ? <TrustBar /> : <Slots id = {props.id}/>}
					</div>
				</div>
			) : (
				<div className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer">
					<div className="flex pb-4 self-start">
						<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
						<div className="flex flex-col pl-3">
							<div className="flex gap-2">
								<h1 className="font-semibold">{props.name}</h1>
								<h2 className="text-slate-500">
									@{props.username}
								</h2>
								<h2 className="text-slate-500">· 2h</h2>
							</div>
							<p className="font-medium">{props.text}</p>
						</div>
					</div>

					<div className="w-full flex items-center justify-center">
						{props.verified ? <TrustBar /> : <PremiumUser />}
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Post;
