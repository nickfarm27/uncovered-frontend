import React from "react";
import Blockchain from "../assets/Blockchain.png";
import TrustIndex from "../assets/Percent.png";
import Sample from "../assets/Sample.jpg";
import { motion } from "framer-motion";

interface Props {}

const Introduction = (props: Props) => {
	return (
		<div>
			<div className="flex flex-col justify-center pt-28 pl-12 box-border bg-blue-200 h-screen">
				<h1 className="text-6xl font-bold">Uncovered</h1>
				<h1 className="pt-12 text-3xl leading-loose">
					A platform allowing a community to identify new's genuinity.{" "}
					<br /> Read and write reviews for every possible news found
					on Twitter. <br /> Keep news honest. Look for credible news
					online.
				</h1>

				<button className="mt-24 rounded-full w-80 font-bold py-2 px-4 bg-sky-500 text-white">
					Get Started!
				</button>
			</div>

			<div className="flex flex-col items-center justify-evenly box-border bg-blue-300 h-screen ">
				<h1 className="text-6xl font-bold text-white">What We Use</h1>

				<div className="flex justify-around w-full">
					<div className="flex flex-col justify-space-around items-center">
						<motion.div
							whileHover={{ scale: 1.5, rotate: 90 }}
							className="box-border rounded-full h-72 w-72 bg-blue-400 p-8"
						>
							<img src={Blockchain} alt="Blockchain" />
						</motion.div>
						<h1 className="text-5xl text-white mt-14">
							Blockchain
						</h1>
					</div>

					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-72 w-72 bg-blue-400 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-5xl text-white mt-14">
							Trust Index
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col box-border items-center justify-evenly bg-blue-400 h-screen">
				<h1 className="text-6xl font-bold text-white">
					Fun Way to Detect Fake News
				</h1>

				<div className="flex justify-around items-center">
					<div className=" ">
						<img
							src={Sample}
							alt="Sample"
							className="w-[36rem] object-contain"
						/>
					</div>

					<div className="box-border  w-1/2 ">
						<h1 className="text-white text-2xl text-justify">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-evenly items-center box-border bg-blue-200 h-screen ">
				<h1 className="text-6xl font-bold text-white">
					Choose Your Investigation
				</h1>

				<div className="flex justify-evenly w-full">
					<div className="flex flex-col justify-evenly items-center">
						<img
							src={Sample}
							alt="Sample"
							className="w-[24rem] object-contain"
						/>
						<h1 className="text-5xl text-white mt-14">Warrior</h1>
					</div>
					<div className="flex flex-col justify-evenly items-center">
						<img
							src={Sample}
							alt="Sample"
							className="w-[24rem] object-contain"
						/>
						<h1 className="text-5xl text-white mt-14">Captain</h1>
					</div>
					<div className="flex flex-col justify-evenly items-center">
						<img
							src={Sample}
							alt="Sample"
							className="w-[24rem] object-contain"
						/>
						<h1 className="text-5xl text-white mt-14">Wizard</h1>
					</div>
				</div>
			</div>

			<div className="flex box-border bg-blue-300 h-screen ">
				<div className="flex flex-col justify-evenly items-center w-2/3">
					<h1 className="text-6xl font-bold text-white">
						Earn Dem' Badges
					</h1>

					<div className="">
						<h1 className="text-white text-2xl text-justify p-8">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</h1>
					</div>
				</div>

				<div className="flex items-center w-1/3 mr-4">
					<img
						src={Sample}
						alt="Sample"
						className="w-[64rem] object-contain "
					/>
				</div>
			</div>

			<div className="flex flex-col justify-evenly items-center box-border bg-blue-400 h-screen ">
				<h1 className="text-6xl font-bold text-white">
					Problems? Not Anymore!
				</h1>

				<div className="flex justify-evenly w-full">
					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-5xl text-white mt-14">Fake News</h1>
					</div>
					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-5xl text-white mt-14">
							Authentication
						</h1>
					</div>
					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-5xl text-white mt-14 text-center">
							Outdated <br /> Researches
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-evenly items-center box-border bg-blue-200 h-screen ">
				<h1 className="text-6xl font-bold text-white">Meet Our Team</h1>

				<div className="flex gap-96 w-10/12  justify-start  ">
					<div className="ml-8 flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-3xl text-white mt-14">Sachine Vijaya Kumar</h1>
					</div>
					<div className=" flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-3xl text-white mt-14">Nicholas Ryan Farm</h1>
					</div>
				</div>

				<div className="flex gap-96 justify-end w-10/12 ">
					<div className="flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-3xl text-white mt-14">Low Yee Yieng</h1>
					</div>
					<div className=" mr-8 flex flex-col items-center">
						<div className="box-border rounded-full h-48 w-48 bg-blue-500 p-14">
							<img src={TrustIndex} alt="Trust Index" />
						</div>
						<h1 className="text-3xl text-white mt-14">Gan Zheng Jie</h1>
					</div>
				</div>
			</div>

			<div className="box-border bg-blue-300 h-screen">FAQ</div>
		</div>
	);
};

export default Introduction;
