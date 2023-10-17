"use client";
import { asyncsigninstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isAuthenticated, student } = useSelector(
		(state) => state.studentReducer
	);
	// console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/student/auth");
		// console.log("clg from signin page", isAuthenticated, student);
	}, [isAuthenticated, student]);

	const SigninHandler = () => {
		// alert("Signin")
		const student = {
			email: "shrutidarwai@gmail.com",
			password: "12345678",
		};

		dispatch(asyncsigninstudent(student));
	};

	return (
		<div className=" mt-5 flex gap-8 ">
			<button
				className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				// href="/student/signin  "
				onClick={SigninHandler}
			>
				Signin
			</button>
			<br />
			<Link
				className="button bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
				href="/student/forget"
			>
				Forget Password
			</Link>
		</div>
	);
};

export default page;
