"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// export const metadata = {
// 	title: " Student | Homepage",
// };

const page = () => {
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.studentReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) router.push("/student/auth");
	}, [isAuthenticated]);

	return (
		<div className="container mt-5">
			{/* <Link
				className=" me-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				href="/student/signin"
			>
				Signin
			</Link>
			<Link
				className="me-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				href="/student/signup"
			>
				Signup
			</Link> */}
			
		</div>
	);
};

export default page;
