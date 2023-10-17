"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// export const metadata = {
// 	title: " employe | Homepage",
// };

const page = () => {
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.employeReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/employe/auth");
	}, [isAuthenticated]);

	return (
		<div className="container mt-5">
			<Link
				className=" me-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				href="/employe/signin"
			>
				Signin
			</Link>
			<Link
				className="me-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				href="/employe/signup"
			>
				Signup
			</Link>
		</div>
	);
};

export default page;
