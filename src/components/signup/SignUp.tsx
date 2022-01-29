import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import InputBox from "../ui/InputBox";
import GoogleSignUp from "./GoogleSignUp";
import TwitterSignUp from "./TwitterSignUp";
import image from "../assets/SignUpImage.png";
import { ReactComponent as Logo } from "../assets/Logo.svg";

interface Props {}

const SignUp = (props: Props) => {
	const userNameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

	const authCtx = useContext(AuthContext);

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const userName = userNameInputRef.current?.value;
		const enteredEmail = emailInputRef.current?.value;
		const enteredPassword = passwordInputRef.current?.value;
		const enteredConfirmPassword = confirmPasswordInputRef.current?.value;

		await authCtx.signUp(enteredEmail as string, enteredConfirmPassword as string, userName as string)
	};

	return (
		<div className="flex min-h-screen">
			<div className="flex justify-center w-1/2" >
				<img src={image} alt="random" className="w-[30rem] object-contain ml-12" />
			</div>

			<div className="flex flex-col items-center w-1/2 justify-evenly">
				<div className="w-24 mt-4">
					<Logo />
				</div>
				
				<h1 className="text-2xl text-center font-semibold">Sign Up</h1>
				
				<form onSubmit={submitHandler} className="flex flex-col items-center">
					<InputBox
						type="text"
						id="userName"
						placeholder="Username"
						ref={userNameInputRef}
						className="mt-3 bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2 text-sm"
					/>
					<InputBox
						type="email"
						id="signUpEmail"
						placeholder="Email"
						ref={emailInputRef}
						className="bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2 text-sm"
					/>
					<InputBox
						type="password"
						id="signUpPassword"
						placeholder="Password"
						ref={passwordInputRef}
						className="bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2 text-sm"
					/>
					<InputBox
						type="password"
						id="confirmPassword"
						placeholder="Confirm Password"
						ref={confirmPasswordInputRef}
						className=" bg-slate-100 w-80 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2 text-sm"
					/>
					<button className="mb-4 w-80 shadow-lg rounded-full font-bold py-2 px-4 bg-sky-500 text-white">
						Sign Up
					</button>
					<h1 className="text-center w-80 text-xs">By signing up, you are agreeing to the terms of service and privacy policy</h1>
				</form>
				
				<hr className="w-80 bg-slate-200 h-[1px]" />
				
				<div>
					<div className="mb-4">
						<GoogleSignUp />
					</div>
					<div className="mb-4">
						<TwitterSignUp />
					</div>
				</div>
				
				<h1 className="text-sm">Already have an account? <Link to="/login" className="text-sky-500 ml-1 text-sm font-medium">Sign In</Link></h1>
			</div>
		</div>
	);
};

export default SignUp;
