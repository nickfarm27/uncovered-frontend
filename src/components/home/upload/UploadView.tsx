import React, { useContext, useRef } from "react";
import BlueButton from "../../ui/BlueButton";
import InputBox from "../../ui/InputBox";
import axios from "axios";
import UserContext from "../../../store/user-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const UploadView = (props: Props) => {
	const userCtx = useContext(UserContext);
	const linkRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	let text = "News submitted";

	const notify = () => {
		toast.success(text);
	};

	const uploadPost = async (url: string) => {
		try {
			const response = await axios.post("http://localhost:3030/post", {
				url: url,
				uid: userCtx.user.uid,
			});
			console.log("RESPONSE: ", response.data.data.tweet_id);
			if (response.data.data) {
				navigate(`/${response.data.data.tweet_id}`);
				notify();
			} else {
				// show error
			}
		} catch (error) {
			console.log(error);
		}
	};

	const submitHandler = (event: React.MouseEvent) => {
		event.preventDefault();

		uploadPost(linkRef.current?.value as string);
	};

	return (
		<div className="flex justify-center h-screen items-start mt-8">
			<div className="flex flex-col w-2/3 bg-zinc-100 drop-shadow-lg rounded-xl p-6 items-center justify-center">
				<h1 className="text-3xl font-semibold text-[#015a91]">
					What news do you want to check today?
				</h1>

				<form className="flex flex-col w-full items-center">
					<InputBox
						type="link"
						id="link"
						placeholder="Paste link here ... "
						ref={linkRef}
						className="bg-slate-100 mb-4 pl-3 py-2 rounded-md border-slate-200 border-2 m-8 w-1/2"
					/>
					<BlueButton text="Verify Now!" submit={submitHandler} />
				</form>
			</div>
		</div>
	);
};

export default UploadView;
