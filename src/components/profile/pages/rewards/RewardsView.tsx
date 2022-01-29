import React from "react";
import Award from "../../../assets/Award.png";
import Law from "../../../assets/Law.png";
import Newspaper from "../../../assets/Newspaper.png";
import Time from "../../../assets/Time.png";
import Correct from "../../../assets/Correct.png";
import Hundred from "../../../assets/100.png";
import Sad from "../../../assets/Sad.png";
import Calender from "../../../assets/Calender.png";
import Level from "../../../assets/Level.png";
import Champion from "../../../assets/Champion.png";
import Login from "../../../assets/Login.png";
import Cup from "../../../assets/Cup.png";
import Badges from "../profile/Badges";
import Dividers from "@mui/material/Divider";

interface Props {}

const RewardsView = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-8 drop-shadow-xl rounded-lg p-6  ">
			<div className="box-border bg-zinc-100  drop-shadow-lg rounded-xl p-6 ">
				<h1 className="font-semibold text-lg pb-2">Earned Badges</h1>
				<Dividers />

				<div className="grid grid-cols-3 gap-y-8 order-last m-4 justify-items-center">
					<Badges
						image={Award}
						name="Investigator Role"
						description="Become an investigator."
						opacity={100}
					/>

					<Badges
						image={Newspaper}
						name="Contributor"
						description="Submit 5 news tweet to Uncovered. Submit 5 news tweet to Uncovered."
						opacity={100}
					/>
					<Badges
						image={Law}
						name="Virtual Lawyer"
						description="Verify 5 news tweets."
						opacity={100}
					/>
				</div>
			</div>

			<div className="box-border bg-zinc-100  drop-shadow-lg rounded-xl p-6 ">
				<h1 className="font-semibold text-lg pb-2">Available Badges</h1>
				<Dividers />

				<div className="grid grid-cols-3 gap-y-8  m-4 justify-items-center">
					<Badges
						image={Time}
						name="Speedy"
						description="Complete 5 news verifications in 2 days."
						opacity={25}
					/>

					<Badges
						image={Correct}
						name="High Accuracy"
						description="Correctly verify 5 news tweets."
						opacity={25}
					/>
					<Badges
						image={Hundred}
						name="Green Streak"
						description="Correctly verify 10 news tweets straight."
						opacity={25}
					/>

					<Badges
						image={Sad}
						name="It's Okay"
						description="Verify 1 news incorrectly."
						opacity={25}
					/>
					<Badges
						image={Calender}
						name="Full Attendance"
						description="Login to Uncovered for a month straight."
						opacity={25}
					/>

					<Badges
						image={Level}
						name="Consistency"
						description="React level 25."
						opacity={25}
					/>
					<Badges
						image={Champion}
						name="It's a Flex"
						description="Achieve top 10 in the leaderboard"
						opacity={25}
					/>

					<Badges
						image={Login}
						name="Welcome Back"
						description="Login to Uncovered for 10 times."
						opacity={25}
					/>
					<Badges
						image={Cup}
						name="Supreme Verifier"
						description="Become #1 in the leaderboard."
						opacity={25}
					/>
				</div>
			</div>
		</div>
	);
};

export default RewardsView;
