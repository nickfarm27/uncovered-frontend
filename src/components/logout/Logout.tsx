import React from "react";
import { signOut } from "firebase/auth";
import { get_Auth } from "../../Firebase";

interface Props {
	
}

export const Logout = (props: Props) => {
	// const history = useHistory();

	const submitHandler = () => {
		const auth = get_Auth;
		signOut(auth)
			.then(() => {
				console.log("Logged out");
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});

		// history.replace("/");
	};

	return (
		<>
			<button
				onClick={submitHandler}
				className="logout"
			>
				Logout
			</button>
		</>
	);
};

export default Logout;