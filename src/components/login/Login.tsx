import React, { useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { get_Auth } from '../../Firebase';
import GoogleLogin from './GoogleLogin';
import TwitterLogin from './TwitterLogin';
import InputBox from '../ui/InputBox';

interface Props {
    
}

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
		<div className="container">
			<h1>Sign In</h1>
			<GoogleLogin />
			<TwitterLogin />
			<form onSubmit={submitHandler} className="container">
				<InputBox
					type="email"
					id="logInEmail"
					placeholder="Email"
					ref={emailInputRef}
					className=""
				/>
				<InputBox
					type="password"
					id="logInPassword"
					placeholder="Password"
					ref={passwordInputRef}
					className=""
				/>
				<button className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login
