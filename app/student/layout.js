"use client";
import {
	asynccurrentstudent,
	asyncsignoutstudent,
} from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentLayout = ({ children }) => {
	const dispach = useDispatch();
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.studentReducer);
	// console.log(isAuthenticated);

	useEffect(() => {
		dispach(asynccurrentstudent());
		if (isAuthenticated) router.push("/student/auth");
	}, [isAuthenticated]);

	const SignoutHandler = () => {
		dispach(asyncsignoutstudent());
	};

	return (
		<>
			<nav className="flex gap-3 align-center m-2 border-b p-2 pl-9 text-blue-950">
				<Link href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link>

				{isAuthenticated ? (
					<>
						<Link href="/student/auth/profile">Profile</Link>
						<br />
						<Link href="/student/auth/resume">Resume</Link>
						<br />
						<Link href="/student/applied">My Application</Link>
						<br />
						<Link onClick={SignoutHandler} href="">
							Logout
						</Link>
					</>
				) : (
					<>
						<Link href="/student/signup"> Signup</Link>
						<br />
						<Link href="/student/signin"> Signin</Link>
					</>
				)}
			</nav>

			{children}
		</>
	);
};

export default StudentLayout;
