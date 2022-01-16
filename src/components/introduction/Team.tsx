import React from "react";
import Gan from "../assets/Gan.png";
import Nic from "../assets/Nicholas.jpeg";
import Yy from "../assets/Yy.jpeg";
import Sachin from "../assets/Sachin.jpg";

interface Props {}

const Team = (props: Props) => {
	return (
		<div className="flex flex-col justify-evenly items-center box-border bg-white h-screen ">
			<h1 className="text-6xl font-bold ">Meet Our Team</h1>

			<div className="flex gap-96 w-10/12  justify-start  ">
				<div className="ml-8 flex flex-col items-center">
					<img
						src={Sachin}
						alt="Trust Index"
						className="box-border rounded-full h-56 w-56"
					/>

					<h1 className="text-3xl  mt-8">Sachine Vijaya Kumar</h1>
				</div>
				<div className=" flex flex-col items-center">
					<img
						src={Nic}
						alt="Trust Index"
						className="box-border rounded-full h-56 w-56"
					/>

					<h1 className="text-3xl  mt-8">Nicholas Ryan Farm</h1>
				</div>
			</div>

			<div className="flex gap-96 justify-end w-10/12 ">
				<div className="flex flex-col items-center">
					<img
						src={Yy}
						alt="Trust Index"
						className="box-border rounded-full h-56 w-56"
					/>

					<h1 className="text-3xl  mt-8">Low Yee Yieng</h1>
				</div>
				<div className=" mr-8 flex flex-col items-center">
					<img
						src={Gan}
						alt="Trust Index"
						className="box-border rounded-full h-56 w-56"
					/>

					<h1 className="text-3xl  mt-8">Gan Zheng Jie</h1>
				</div>
			</div>
		</div>
	);
};

export default Team;
