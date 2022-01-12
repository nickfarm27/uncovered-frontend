import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { get_Auth } from "../../Firebase";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";
import InputBox from "../ui/InputBox";
import Logo from '../assets/Logo.svg'

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
		<div className="flex flex-col items-center mt-32">
			<div className="w-24 ">
				<img src={Logo} alt="React Logo" />	
			</div>
			
			<h1 className="text-3xl text-center mt-10 font-medium">Log In</h1>

			<div className="flex justify-center mt-20">
			<form onSubmit={submitHandler}>
		
					<div className="">
						<InputBox
							type="email"
							id="logInEmail"
							placeholder="Email"
							ref={emailInputRef}
							className="bg-gray-200 w-80 mb-5 pl-3 pb-2 pt-2 rounded-md"
						/>
					</div>

					<div className="">
						<InputBox
							type="password"
							id="logInPassword"
							placeholder="Password"
							ref={passwordInputRef}
							className="bg-gray-200 w-80 mb-16 pl-3 pb-2 pt-2 rounded-md"
						/>
					</div>
				
				<button className="mb-4 rounded-full w-80 font-bold py-2 px-4 bg-sky-500 text-white">
					Log In
				</button>

				<div className="mb-4 ">
					<GoogleLogin />
				</div>
				<div className="mb-4 ">
					<TwitterLogin />
				</div>
				
			</form>
			</div>

			

			<div className="text-center mt-8">
				<h1 className=" text-sky-500">Sign Up a New Account</h1>
			</div>

			</div>
		
	);
};

export default Login;
