"use client";
import { asyncEditinternshipStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
	console.log(params);
	const dispatch = useDispatch();
	const EditinternshipHandler = () => {
		const internship = {
			skils: "React with next ",
		};
		dispatch(asyncEditinternshipStudent(params.id, internship));
	};
	return (
		<div className="mt-5">
			<button
				onClick={EditinternshipHandler}
				className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
			>
				Edit internship
			</button>
		</div>
	);
};

export default page;
