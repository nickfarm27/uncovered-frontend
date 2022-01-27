import React, { useContext, useRef } from "react";
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { get_Auth } from "../../Firebase";
import GoogleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";
import InputBox from "../ui/InputBox";
import { ReactComponent as Logo } from '../assets/Logo.svg'
import { User } from "firebase/auth";
import AuthContext from "../../store/auth-context";

interface Props {
	setAuth: React.Dispatch<React.SetStateAction<User | null>>
}

const Login = (props: Props) => {
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const location = useLocation();
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);
	// console.log(get_Auth.currentUser);

	//For extracting the current value of email and password
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const enteredEmail = emailInputRef.current?.value;
		const enteredPassword = passwordInputRef.current?.value;

		const response = await authCtx.login(enteredEmail as string, enteredPassword as string)
		const from = location.state ? location.state as string : "/";
		navigate(from, { replace: true});

		console.log("WORKS???");
		

		// setPersistence(get_Auth, browserLocalPersistence)
		// 	.then(() => {
		// 		// Existing and future Auth states are now persisted in the current
		// 		// session only. Closing the window would clear any existing state even
		// 		// if a user forgets to sign out.
		// 		// ...
		// 		// New sign-in will be persisted with session persistence.
		// 		signInWithEmailAndPassword(get_Auth, enteredEmail as string, enteredPassword as string)
		// 		.then((userCredential) => {
		// 				// console.log(get_Auth.currentUser);
		// 				// console.log(userCredential);
		// 				props.setAuth(get_Auth.currentUser);
		
		// 				if (get_Auth.currentUser?.uid != null) {
		// 					const from = location.state ? location.state as string : "/";
		// 					navigate(from, { replace: true});
		// 					// console.log(location.state);
		// 				}
		// 			})
		// 			.catch((error) => {
		// 				// const errorCode = error.code;
		// 				// const errorMessage = error.message;
		// 			});
		// 	})
		// 	.catch((error) => {
		// 		// Handle Errors here.
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 	});

		// signInWithEmailAndPassword(
		// 	get_Auth,
		// 	String(enteredEmail),
		// 	String(enteredPassword)
		// )
		// 	.then((userCredential) => {
		// 		// Signed in
		// 		// const user = userCredential.user;
		// 		// console.log(userCredential);
				
		// 		// console.log("Login");
		// 		// console.log(user.uid);
		// 		// console.log(user.email);
		// 		console.log(get_Auth.currentUser);
		// 		console.log(userCredential);
		// 		props.setAuth(get_Auth.currentUser);

		// 		if (get_Auth.currentUser?.uid != null) {
		// 			const from = location.state ? location.state as string : "/";
		// 			navigate(from, { replace: true});
		// 			console.log(location.state);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		// const errorCode = error.code;
		// 		// const errorMessage = error.message;
		// 	});
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
