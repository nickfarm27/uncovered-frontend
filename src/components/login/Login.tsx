import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { get_Auth } from "../../Firebase";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";
import InputBox from "../ui/InputBox";
import { ReactComponent as Logo } from '../assets/Logo.svg'

interface Props {}

const Login = (props: Props) => {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	// const history = useHistory();

	//For extracting the current value of email and password
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const enteredEmail = emailInputRef.current?.value;
		const enteredPassword = passwordInputRef.current?.value;

		signInWithEmailAndPassword(
			get_Auth,
			String(enteredEmail),
			String(enteredPassword)
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("Login");
				console.log(user.uid);
				console.log(user.email);
				console.log(get_Auth.currentUser);

				if (get_Auth.currentUser?.uid != null) {
					// history.replace("/menu");
				}
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
			});
	};

	return (
		<div className="flex flex-col items-center min-h-screen justify-evenly">
			<div className="w-24 mt-4">
				<Logo />
			</div>
			
			<h1 className="text-2xl text-center font-semibold">Log In</h1>

			<div>
				<form onSubmit={submitHandler}>
					<div className="">
						<InputBox
							type="email"
							id="logInEmail"
							placeholder="Email"
							ref={emailInputRef}
							className="bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2"
						/>
					</div>
					<div className="">
						<InputBox
							type="password"
							id="logInPassword"
							placeholder="Password"
							ref={passwordInputRef}
							className="bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2"
						/>
					</div>
					<button className="mb-4 rounded-full w-80 font-bold py-2 px-4 bg-sky-500 text-white">
						Log In
					</button>
				</form>
				
				<hr className="w-80 bg-slate-200 h-[1px]" />

				<div>
					<div className="mt-4 mb-4 ">
						<GoogleLogin />
					</div>
					<div className="mb-4 ">
						<TwitterLogin />
					</div>
				</div>
			</div>
			
			<h1 className="text-sm">New to Uncovered? <Link to="/signup" className="font-medium text-center text-sky-500">Sign Up</Link></h1>
		</div>
	);
};

export default Login;
