"use client";
import {
	asynccurrentemploye,
	asyncsignoutemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeLayout = ({ children }) => {
	const dispach = useDispatch();
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.employeReducer);
	// console.log(isAuthenticated);

	useEffect(() => {
		dispach(asynccurrentemploye());
		if (isAuthenticated) router.push("/employe/auth");
	}, [isAuthenticated]);

	const SignoutHandler = () => {
		dispach(asyncsignoutemploye());
	};

	return (
		<>
			<nav className="flex gap-3  m-5 ">
				<Link href={isAuthenticated ? "/employe/auth" : "/employe"}>Home</Link>

				{isAuthenticated ? (
					<>
						<Link href="/employe/auth/profile">Profile</Link>
						<br />
						<Link href="/employe/applied">My Application</Link>
						<br />
						<Link onClick={SignoutHandler} href="">
							Logout
						</Link>
					</>
				) : (
					<>
						<Link href="/employe/signup"> Signup</Link>
						<br />
						<Link href="/employe/signin"> Signin</Link>
					</>
				)}
			</nav>
			{children}
		</>
	);
};

export default employeLayout;
