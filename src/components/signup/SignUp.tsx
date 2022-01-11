import { useRef } from "react";
import InputBox from "../ui/InputBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { get_Auth, get_Firestore } from "../../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { generateNewAccount } from "../blockchain/newAccount";

interface Props {}

const SignUp = (props: Props) => {
	const userNameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
	// const history = useHistory();

	//For extracting the current value of email and password
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const userName = userNameInputRef.current?.value;
		const enteredEmail = emailInputRef.current?.value;
		const enteredPassword = passwordInputRef.current?.value;
		const enteredConfirmPassword = confirmPasswordInputRef.current?.value;
		const db = get_Firestore;
		const auth = get_Auth;
        // const privateKey = generateNewAccount().privateKey;
		createUserWithEmailAndPassword(
			auth,
			String(enteredEmail),
			String(enteredPassword)
		)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user.email;
				// ...
				if (get_Auth.currentUser?.uid != null) {
					// history.replace("/menu");
				}

				try {
					const docRef = await setDoc(
						doc(db, "Users", String(get_Auth.currentUser?.uid)),
						{
							uid: get_Auth.currentUser?.uid,
							userName: userName,
							email: enteredEmail,
							investigator: false,
							userRating: 0,
							onGoingTask: [],
							missions: [],
							experiencePoints: 0,
							numberOfVerifiedNews: 0,
							privateKey: 'TEST' 
						}
					);
					console.log("Document written", docRef);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// ..
			});
	};

	return (
		<div>
            <div>Sign up with email</div>
			<form onSubmit={submitHandler}>
				<InputBox
					type="text"
					id="userName"
					placeholder="Username"
					ref={userNameInputRef}
					className=""
				/>
				<br />
				<InputBox
					type="email"
					id="signUpEmail"
					placeholder="Email"
					ref={emailInputRef}
					className=""
				/>
				<br />
				<InputBox
					type="password"
					id="signUpPassword"
					placeholder="Password"
					ref={passwordInputRef}
					className=""
				/>
				<br />
				<InputBox
					type="password"
					id="confirmPassword"
					placeholder="Confirm Password"
					ref={confirmPasswordInputRef}
					className=""
				/>
				<br />
				<button className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;

