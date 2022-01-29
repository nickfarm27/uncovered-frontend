import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

interface Props {}

const GoogleSignUp = (props: Props) => {
	const authCtx = useContext(AuthContext);

	const submitHandler = async () => {
		await authCtx.externalAuth(true)
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

export default GoogleSignUp;