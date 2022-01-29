import React, { useContext } from 'react'
import { FaTwitter } from "react-icons/fa";
import AuthContext from '../../store/auth-context';
interface Props {
    
}

const TwitterLogin = (props: Props) => {
	const authCtx = useContext(AuthContext)

	const submitHandler = async () => {
		await authCtx.externalAuth(false)
	};

	return (
		<div>
			<button
				className="flex justify-center w-80 shadow-md border border-sky-500 rounded-full py-2 px-4 bg-white"
				onClick={submitHandler}
			>
				 <FaTwitter className='mr-3 text-2xl text-sky-500 '/> Continue with Twitter
			</button>
		</div>
	);
}

export default TwitterLogin


