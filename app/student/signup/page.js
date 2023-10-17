"use client";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const {isAuthenticated} = useSelector((state) => state.studentReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/student/auth");
	}, [isAuthenticated]);

	const SignupHandler = () => {
		const newStudent = {
			firstname: "Shivani ",
			lastname: "Darwai ",
			contact: "98765403",
			city: "Bhopal",
			gender: "Female",
			email: "123@gmail.com",
			password: "12345678",
		};
		dispatch(asyncsignupstudent(newStudent));
	};

	return (
		<div className="container mt-5 ">
			<button
				className=" button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				// href="/student/signup "
				onClick={SignupHandler}
			>
				Signup
			</button>
		</div>
	);
};

export default page;
