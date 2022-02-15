import React, { useContext, useState } from "react";
import Captain from "../../../assets/Captain.png";
import Warrior from "../../../assets/Warrior.png";
import Wizard from "../../../assets/Wizard.png";
import { motion } from "framer-motion";
import Classes from "./Classes";
import BlueButton from "../../../ui/BlueButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../../store/user-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Investigator = (props: Props) => {
	const [activate1, setActivate1] = useState(false);
	const [activate2, setActivate2] = useState(false);
	const [activate3, setActivate3] = useState(false);
	const userCtx = useContext(UserContext)
	const navigate = useNavigate();
	let text = "Role upgraded to investigator";

	const notify = () => {
		toast.info(text);
	};

	const submitHandler = async () => {
		console.log("Join");
		try {
			if (activate1 || activate2 || activate3) {
				console.log("SEND DATA");
				
				const response = await axios.post("http://localhost:3030/user/upgrade/investigator", {
					uid: userCtx.user.uid,
					class: activate1 ? "CAPTAIN" : activate2 ? "WARRIOR" : "WIZARD"
				})
				if (response.data.message) {
					notify()
					navigate("/profile", { replace: true })
				}
			}
		} catch (error) {
			console.log("ERROR");
		}
	};
	return (
		<div className="flex flex-col gap-y-14">
			<div className="flex justify-around m-6 items-end ">
				<motion.div
					onTap={(e) => {
						setActivate1(true);
						setActivate2(false);
						setActivate3(false);
					}}
				>
					<Classes
						picture={Captain}
						class="Captain"
						size="w-[14rem]"
						stats="+15% EXP"
						selected={activate1}
					/>
				</motion.div>
				<motion.div
					onTap={(e) => {
						setActivate2(true);
						setActivate1(false);
						setActivate3(false);
					}}
				>
					<Classes
						picture={Warrior}
						class="Warrior"
						size="w-[12rem]"
						stats="+15% Reward"
						selected={activate2}
					/>
				</motion.div>

				<motion.div
					onTap={(e) => {
						setActivate3(true);
						setActivate1(false);
						setActivate2(false);
					}}
				>
					<Classes
						picture={Wizard}
						class="Wizard"
						size="w-[14rem]"
						stats="+7.5% EXP + 7.5% Reward"
						selected={activate3}
					/>
				</motion.div>
			</div>
			<div className="flex items-center justify-center  ">
				<h1 className="font-medium text-sm italic text-center">
					Proceeding will result in change of role from standard users
					to investigator. All Investigator will be responsible for
					verifying submitted news tweet from other users, and a form
					of cryptocurrency called XPX coins will be earned for every
					successful verification. Investigator will also be
					introducted to gamification where badges can be earned,
					missions to complete and be able to compete with other
					Investigators. (Note: This action is irreversible)
				</h1>
			</div>
			<div className="flex items-center justify-center mb-14">
				<BlueButton
					text={"Upgrade to Investigator now!"}
					submit={submitHandler}
				/>
			</div>
		</div>
	);
};

export default Investigator;
