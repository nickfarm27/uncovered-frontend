import MissionContainer from "./MissionContainer";
import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { get_Firestore } from "../../../Firebase";
import './Mission.css'


interface Props {}

export const Mission = (props: Props) => {
	const [mission, setMission] = useState([
		{ title: "", description: "", experiencePointsToEarn: 0 },
	]);

	const retriveUserData = async () => {
		const db = get_Firestore;
		const q = query(collection(db, "Missions"));
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			setMission((data) => [
				...data,
				{
					title: doc.get("title"),
					description: doc.get("description"),
					experiencePointsToEarn: doc.get("experiencePointsToEarn"),
				},
			]);
		});
	};

	useEffect(() => {
		retriveUserData();
	}, []);

	return (
		
		<div className = "container">
			<h1>Mission</h1>
			{mission.slice(1).map((user) => (
				<MissionContainer
					title={user.title}
					description={user.description}
					experiencePointsToEarn={user.experiencePointsToEarn}
				/>
			))}
		</div>
	);
};
