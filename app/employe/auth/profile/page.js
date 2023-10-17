"use client";
import {
	asyncavataremploye,
	asyncresetpasswordemploye,
	asyncupdateemploye,
} from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const { employe } = useSelector((state) => state.employeReducer);
	// console.log(employe);
	const employeUpdateHandler = () => {
		const newemploye = {
			firstname :"Shiv",
		};
		dispatch(asyncupdateemploye(newemploye));
	};

	const AvatarHandler = (e) => {
		e.preventDefault();
		const formdata = new FormData(e.target);
		formdata.set(
			"oganizationlogo",
			e.target.oganizationlogo.files[0],
			e.target.oganizationlogo.files[0].name
		);
		// console.log(formdata);
		dispatch(asyncavataremploye(formdata));
	};

	const ResetPasswordHandler = () => {
		const pwd = {
			password: "123456",
		};
		dispatch(asyncresetpasswordemploye(pwd));
	};

	return (
		<div>
			<img
				width={200}
				height={200}
				src={employe && employe.oganizationlogo.url}
				alt="avatar"
			/>

			<form onSubmit={AvatarHandler} encType="multipart/form-data">
				<input type="file" name="oganizationlogo" />
				<button type="submit">Submit</button>
			</form>

			<button
				onClick={employeUpdateHandler}
				className="button p-3 border border-sky-500 text-black font bold hover:text-white hover:bg-blue-900 shadow-md m-5 rounded-lg transition"
			>
				Update employe
			</button>

			<button
				onClick={ResetPasswordHandler}
				className="button p-3 border border-sky-500 text-black font bold hover:text-white hover:bg-blue-900 shadow-md m-5 rounded-lg transition"
			>
				Reset employe Password
			</button>
		</div>
	);
};

export default page;
