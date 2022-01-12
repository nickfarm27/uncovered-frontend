import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { get_Auth } from "../../Firebase";
import { FcGoogle } from "react-icons/fc";
interface Props {}

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
				className="flex justify-center w-80 shadow-md border border-sky-500 rounded-full py-2 px-4 bg-white"
				onClick={submitHandler}
			>
				<FcGoogle className="mr-3 flex text-2xl" /> Continue with Google
			</button>
		</div>
	);
};

export default GoogleLogin;
