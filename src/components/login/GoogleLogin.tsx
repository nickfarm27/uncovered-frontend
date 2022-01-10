import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { get_Auth } from "../../Firebase";

interface Props {
    
}

const GoogleLogin = (props: Props) => {
    const submitHandler = async () => {
		const provider = new GoogleAuthProvider();
		const auth = get_Auth;

		signInWithPopup(auth, provider)
			.then(async (result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
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
				// const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	return (
		<div>
			<button
				className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
				onClick={submitHandler}
			>
				Sign In with Google
			</button>
		</div>
	);
}

export default GoogleLogin
