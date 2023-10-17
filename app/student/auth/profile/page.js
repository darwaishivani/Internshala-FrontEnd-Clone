"use client";
import {
	asyncavatarstudent,
	asyncresetpasswordstudent,
	asyncupdatestudent,
} from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const { student } = useSelector((state) => state.studentReducer);
	// console.log(student);
	const StudentUpdateHandler = () => {
		const newStudent = {
			
			email:"shrutidarwai@gmail.com"
		};
		dispatch(asyncupdatestudent(newStudent));
	};

	const AvatarHandler = (e) => {
		e.preventDefault();
		const formdata = new FormData(e.target);
		formdata.set(
			"avatar",
			e.target.avatar.files[0],
			e.target.avatar.files[0].name
		);
		// console.log(formdata);
		dispatch(asyncavatarstudent(formdata));
	};

	const ResetPasswordHandler = () => {
		const pwd = {
			password: "123456789",
		};
		dispatch(asyncresetpasswordstudent(pwd));
	};

	return (
		<div>
			<img
				width={200}
				height={200}
				src={student && student.avatar.url}
				alt="avatar"
			/>

			<form onSubmit={AvatarHandler} encType="multipart/form-data">
				<input type="file" name="avatar" />
				<button type="submit">Submit</button>
			</form>

			<button
				onClick={StudentUpdateHandler}
				className="button p-3 border border-sky-500 text-black font bold hover:text-white hover:bg-blue-900 shadow-md m-5 rounded-lg transition"
			>
				Update Student
			</button>

			<button
				onClick={ResetPasswordHandler}
				className="button p-3 border border-sky-500 text-black font bold hover:text-white hover:bg-blue-900 shadow-md m-5 rounded-lg transition"
			>
				Reset Student Password
			</button>
		</div>
	);
};

export default page;
