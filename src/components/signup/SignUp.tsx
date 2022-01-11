import { useRef } from "react";
import InputBox from "../ui/InputBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { get_Auth, get_Firestore } from "../../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { generateNewAccount } from "../blockchain/newAccount";
import image from "../assets/SignUpImage.jpg";
import GoogleSignUp from "./GoogleSignUp";
import TwitterSignUp from "./TwitterSignUp";

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
							privateKey: "TEST",
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
		<div className="flex">
			<div className="box-border h-128 w-128 pr-12 mr-12 mt-32 ml-32">
				<img src={image} />
			</div>

			<div
				className="flex flex-col 
        items-start mt-48"
			>
				<h1 className="text-3xl mb-5">Sign up with email</h1>
				<form onSubmit={submitHandler}>
					<InputBox
						type="text"
						id="userName"
						placeholder="Username"
						ref={userNameInputRef}
						className="mt-3 bg-gray-200 w-80 mb-5 pl-3 pb-2 pt-2 rounded-md"
					/>
					<br />
					<InputBox
						type="email"
						id="signUpEmail"
						placeholder="Email"
						ref={emailInputRef}
						className="bg-gray-200 w-80 mb-5 pl-3 pb-2 pt-2 rounded-md"
					/>
					<br />
					<InputBox
						type="password"
						id="signUpPassword"
						placeholder="Password"
						ref={passwordInputRef}
						className="bg-gray-200 w-80 mb-5 pl-3 pb-2 pt-2 rounded-md"
					/>
					<br />
					<InputBox
						type="password"
						id="confirmPassword"
						placeholder="Confirm Password"
						ref={confirmPasswordInputRef}
						className=" bg-gray-200 w-80 mb-10 pl-3 pb-2 pt-2 rounded-md"
					/>
					<br />

					<div className="grid gap-x-8 gap-y-6 grid-cols-2 ">
						<GoogleSignUp />
						<TwitterSignUp />

						<div>
							<h1 className="">By signing up, I agree to the</h1>
							<h1 className="">
								terms of service and privacy policy
							</h1>
						</div>
						<button className="w-60 shadow-lg rounded-lg font-bold py-3 px-4 bg-sky-500 text-white">
							Sign Up
						</button>
					</div>
				</form>

				<div className="mt-36">
					<h1>Already have an account?</h1>
					<h1 className="text-sky-500">Sign in now</h1>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
