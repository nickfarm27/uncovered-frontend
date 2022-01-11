import React from "react";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { get_Auth, get_Firestore } from "../../Firebase";
// import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { FaTwitter } from "react-icons/fa";

interface Props {}

const TwitterSignUp = (props: Props) => {
	// const history = useHistory();
	const submitHandler = async () => {
		const provider = new TwitterAuthProvider();
		const auth = get_Auth;
		const db = get_Firestore;

		signInWithPopup(auth, provider)
			.then(async (result) => {
				// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
				// You can use these server side with your app's credentials to access the Twitter API.
				const credential =
					TwitterAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				const secret = credential?.secret;

				// The signed-in user info.
				const user = result.user;
                console.log(user);
				// ...

				if (get_Auth.currentUser?.uid != null) {
					// history.replace("/menu");
				}

				try {
					const docRef = await setDoc(
						doc(db, "Users", String(get_Auth.currentUser?.uid)),
						{
							uid: get_Auth.currentUser?.uid,
							userName: get_Auth.currentUser?.displayName,
							email: get_Auth.currentUser?.email,
							investigator: false,
							userRating: 0,
							onGoingTask: [],
							missions: [],
							experiencePoints: 0,
							numberOfVerifiedNews: 0,
						}
					);
					console.log("Document written with ID: ", docRef);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential =
					TwitterAuthProvider.credentialFromError(error);
				// ...
			});
	};
	
    return (
		<div>
			<button
				className="w-60 flex shadow-lg border-solid border-2 border-sky-500 rounded-lg py-3 px-4 bg-white"
				onClick={submitHandler}
			>
				<FaTwitter className='mr-3 text-2xl text-sky-500'/> Continue with Twitter
			</button>
		</div>
	);
};

export default TwitterSignUp;