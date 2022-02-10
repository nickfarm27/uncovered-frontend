import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


interface Props {
	verified: boolean;
}

const Post = (props: Props) => {


	return (
		<motion.div whileHover={{ scale: 1.02, backgroundColor: "white" }}>
			<Link
				to="/11111"
				className="bg-zinc-100 flex flex-col items-center mb-4 box-border drop-shadow-lg rounded-xl p-6 cursor-pointer"
			>
				
				<div className="flex pb-4 self-start">
					<div className="box-border h-12 w-12 min-w-[3rem] rounded-full bg-black"></div>
					<div className="flex flex-col pl-3">
						<div className="flex gap-2">
							<h1 className="font-semibold">Mokey Gan</h1>
							<h2 className="text-slate-500">@mokeygan</h2>
							<h2 className="text-slate-500">· 2h</h2>
						</div>
						<p className="font-medium">
							I will rule China one day. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Itaque animi
							debitis veniam quod expedita inventore pariatur odit
							fugit, aut, fugiat sunt deserunt placeat voluptatum,
							dicta enim iure! Quia, culpa fugit.
						</p>
					</div>
				</div>

				{props.verified ? (
					<div className="bg-green-300 rounded-full text-center w-full min-h-[1.5rem]"></div>
				) : null}


			</Link>
		</motion.div>
	);	
};

export default Post;
