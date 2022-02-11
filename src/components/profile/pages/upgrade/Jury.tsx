import React from "react";
import BlueButton from "../../../ui/BlueButton";
import ProgressBar from "../profile/ProgressBar";

type Props = {};

const Jury = (props: Props) => {
	let color = "";
	let eligible = Boolean(true);
	const percentage = 100;

	switch (eligible) {
		case true:
			color = "rgb(0, 204, 102)";
			break;
		case false:
			color = "rgb(203, 0, 0)";
			break;
	}

	const submitHandler = () => {
		console.log("Join");
	};
	return (
		<div>
			<div className="m-6">
				<div className="flex flex-col items-center h-full ">
					<h1 className="font-semibold pb-2 text-lg">
						Eligibility for jury
					</h1>

					<ProgressBar
						percentage={percentage}
						text={`${percentage}%`}
						textSize="18px"
						color={color}
					/>
				</div>
			</div>

			<div className="flex items-center justify-center ">
				{eligible ? (
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
