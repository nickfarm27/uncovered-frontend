import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { get_Auth, get_Firestore } from "../../../Firebase";
import "./MissionContainer.css";

interface Props {
	title: String;
	description: String;
	experiencePointsToEarn: Number;
}

const MissionContainer = (props: Props) => {
	const joinMission = async () => {
		const newMission = doc(
			get_Firestore,
			"Users",
			String(get_Auth.currentUser?.uid)
		);

		await updateDoc(newMission, {
			missions: arrayUnion(props.title),
		});
	};

	return (
		<div className="containers">
			<h1 className="title">{props.title}</h1>
			<h1 className="desc">Task: {props.description}</h1>

			<h1 className="reward">
				Complete the mission to earn: {props.experiencePointsToEarn} experience points
			</h1>
			
				<button className="btn" onClick={joinMission}>
					Join this mission!
				</button>
			
		</div>
	);
};

export default MissionContainer;
