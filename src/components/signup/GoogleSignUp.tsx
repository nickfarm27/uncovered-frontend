import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { get_Auth, get_Firestore } from "../../Firebase";
// import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { generateNewAccount } from "../blockchain/newAccount";

interface Props {}

const GoogleSignUp = (props: Props) => {
	// const history = useHistory();
	const submitHandler = async () => {
		const provider = new GoogleAuthProvider();
		const auth = get_Auth;
		const db = get_Firestore;

		signInWithPopup(auth, provider)
			.then(async (result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result;
				console.log(user);

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
							privateKey: generateNewAccount().privateKey
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
					GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	return (
		<div>
			<button
				className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
				onClick={submitHandler}
			>
				Sign Up with Google
			</button>
		</div>
	);
};

export default GoogleSignUp;