import React from 'react'
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { get_Auth } from "../../Firebase";

interface Props {
    
}

const TwitterLogin = (props: Props) => {
    const submitHandler = async () => {
		const provider = new TwitterAuthProvider();
		const auth = get_Auth;

		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					TwitterAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result;
				console.log(user, token);

				if (get_Auth.currentUser?.uid != null) {
					// history.replace("/menu");
				}
			})
			.catch((error) => {
				// // Handle Errors here.
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// // The email of the user's account used.
				// const email = error.email;
				// // The AuthCredential type that was used.
				// const credential = TwitterAuthProvider.credentialFromError(error);
			});
	};

	return (
		<div>
			<button
				className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
				onClick={submitHandler}
			>
				Sign In with Twitter
			</button>
		</div>
	);
}

export default TwitterLogin