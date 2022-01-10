import React, { useRef } from "react";
import InputBox from "../ui/InputBox";
import axios from "axios";
import { doc, setDoc } from "@firebase/firestore";

import './Upload.css'
import { get_Firestore } from "../../Firebase";

interface Props {}

export const UploadPost = (props: Props) => {
	const db = get_Firestore;
	const URLInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const enteredURL = URLInputRef.current?.value;
		if (enteredURL) {
			axios.post("http://localhost:3001/twitter", {
				url : enteredURL
			})
				.then(function (response) {
					// handle success
					console.log(response.data);
					const data = response.data.data;
					
					setDoc(doc(db, "Posts", data.id), {
						tweet_id: data.id,
						author_id: data.author_id,
						created_at: data.created_at,
						text: data.text
					});
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
			}

	};

	return (
		<div >
			<form onClick={submitHandler} className = "upload">
				<InputBox
					type="text"
					id="postURL"
					placeholder="Paste URL Link"
					ref={URLInputRef}
					className="upload_field"
				/>
				<button className="upload_button w-40">Check</button>
			</form>
		</div>
	);
};
