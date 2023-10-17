"use client";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const {isAuthenticated} = useSelector((state) => state.employeReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/employe/auth");
	}, [isAuthenticated]);

	const SignupHandler = () => {
		const newemploye = {
			firstname: "Shivani ",
			lastname: "Darwai ",
			contact: "98765403",
			email: "techshivani26@gmail.com",
			password: "12345678",
			organizationname:"kuch-to",
		};
		dispatch(asyncsignupemploye(newemploye));
	};

	return (
		<div className="container mt-5 ">
			<button
				className=" button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				// href="/employe/signup "
				onClick={SignupHandler}
			>
				Signup
			</button>
		</div>
	);
};

export default page;
