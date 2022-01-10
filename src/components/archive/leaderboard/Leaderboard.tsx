import React, { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import Container from "./Container";
import { get_Firestore } from "../../../Firebase";


interface Props {}

export const Leaderboard = (props: Props) => {
	const [data, setData] = useState([{ userName: "", numberOfVerifiedNews: "" }]);

	const retriveUserData = async () => {
		const db = get_Firestore;
		const q = query(collection(db, "Users"), orderBy("numberOfVerifiedNews", "desc"));
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			setData((data) => [
				...data,
				{
					userName: doc.get("userName"),
					numberOfVerifiedNews: doc.get("numberOfVerifiedNews"),
				},
			]);
		});
	};

	useEffect(() => {
		retriveUserData();
	}, []);

	return (
		<div>
			<div>Leaderboard</div>
			{data.slice(1).map((user) => (
				<Container
					userName={user.userName}
					numberOfVerifiedNews={user.numberOfVerifiedNews}
				/>
			))}
		</div>
	);
};
export default Leaderboard;
