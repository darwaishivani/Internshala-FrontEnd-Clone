"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";
// export const metadata = {
// 	title: "Homepage",
// };

const page = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asynccurrentstudent());
	}, []);
	return (
		<>
			<nav className="border-bottom shadow-lg p-4 flex justify-evenly gap-5 ">
				<div>
					<h1 className="border-b rounded p-2 text-blue-950 font-bold text-lg">
						JobFinder
					</h1>
				</div>
				<div className=" flex gap-9">
					<Link className="border-b rounded p-2 shadow-sm" href="/student/auth">
						Jobs
					</Link>
					<Link className="border-b rounded p-2 shadow-sm" href="/student/auth">
						Internships
					</Link>
				</div>
				<div className="flex gap-5">
					<Link
						className="p-2 border border-blue-100 text-black hover:bg-blue-600 hover:text-white shadow-sm rounded "
						href="/student"
					>
						Student
					</Link>
					<br />
					<Link
						className="p-2 border border-blue-100 text-black hover:bg-blue-600 hover:text-white shadow-sm rounded "
						href="/employe"
					>
						Employe
					</Link>
				</div>
			</nav>
			;
		</>
	);
};

export default page;
