
import React, { useRef } from "react";
import BlueButton from "../../ui/BlueButton";
import InputBox from "../../ui/InputBox";

type Props = {};

const UploadView = (props: Props) => {
	const linkRef = useRef<HTMLInputElement>(null);

	const submitHandler = () => {
		console.log("Verify");
	};

	return (
		<div className="flex justify-center h-screen items-start mt-8">
			<div className="flex flex-col w-2/3 bg-zinc-100 drop-shadow-lg rounded-xl p-6 items-center justify-center">
				<h1 className="text-3xl font-semibold text-[#015a91]">
					What news do you want to check today?
				</h1>

				<form
					onSubmit={submitHandler}
					className="flex flex-col w-full items-center"
				>
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
