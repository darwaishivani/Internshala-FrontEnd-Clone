"use client";
import { asyncsigninemploye } from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isAuthenticated, employe } = useSelector(
		(state) => state.employeReducer
	);
	console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/employe/auth");
		console.log("clg from signin page", isAuthenticated, employe);
	}, [isAuthenticated, employe]);

	const SigninHandler = () => {
		// alert("Signin")
		const employe = {
			email: "techshivani26@gmail.com",
			password: "123456",
		};

		dispatch(asyncsigninemploye(employe));
	};

	return (
		<div className=" mt-5 flex gap-8 ">
			<button
				className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={SigninHandler}
			>
				Signin
			</button>
			<br />
			<Link
				className="button bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
				href="/employe/forget"
			>
				Forget Password 
			</Link>
		</div>
	);
};

export default page;
