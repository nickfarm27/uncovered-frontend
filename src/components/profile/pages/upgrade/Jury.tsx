import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../../store/user-context";
import BlueButton from "../../../ui/BlueButton";
import ProgressBar from "../profile/ProgressBar";
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Jury = (props: Props) => {
	const userCtx = useContext(UserContext);
	const navigate = useNavigate();
	let color = "";

	let text = "Role upgraded to jury";

	const notify = () => {
		toast.info(text);
	};

	switch (userCtx.user.numberOfVerifiedNews >= 50) {
		case true:
			color = "rgb(0, 204, 102)";
			break;
		case false:
			color = "rgb(203, 0, 0)";
			break;
	}

	const submitHandler = async () => {
		console.log("Join Jury");
		try {
			const response = await axios.post("http://localhost:3030/user/upgrade/jury", {
				uid: userCtx.user.uid,
			})
			if (response.data.message) {
				notify()
				navigate("/profile", { replace: true })
			}
		} catch (error) {
			console.log("ERROR");
		}
	};
	return (
		<div>
			<div className="m-6">
				<div className="flex flex-col items-center h-full ">
					<h1 className="font-semibold pb-2 text-lg">
						Eligibility for jury
					</h1>

					<ProgressBar
						percentage={(userCtx.user.numberOfVerifiedNews / 50) * 100}
						text={`${userCtx.user.numberOfVerifiedNews > 50 ? 100 : (userCtx.user.numberOfVerifiedNews / 50) * 100}%`}
						textSize="18px"
						color={color}
					/>
				</div>
			</div>

			<div className="flex items-center justify-center ">
				{userCtx.user.numberOfVerifiedNews >= 50 ? (
					<div className="flex flex-col items-center justify-center w-2/3">
						<h1 className="font-medium text-sm italic pt-8 pb-8 text-center">
							Congratulations, you are eligible to be promoted to
							Jury. A jury will have more impact on all news
							verification compared to investigator and rating
							from premium user. All of the earned badges and
							experience points will remain the same. <br /> (Note: This
							action is irreversible)
						</h1>
						<BlueButton
							text={"Upgrade to Jury now!"}
							submit={submitHandler}
						/>
					</div>
				) : (
					<div>
						<h1 className="font-medium text-sm italic pt-8 text-center">
							Tip: Verify more news accurately to fill the bar.
						</h1>
						<h1 className="font-medium text-sm italic pt-2">
							Investigators will need to verify atleast 50 news to
							be eligible to be promoted to jury.
						</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Jury;
