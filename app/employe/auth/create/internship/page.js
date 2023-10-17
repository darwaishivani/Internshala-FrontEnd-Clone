"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const CreateInternshipHandler = () => {
		const internship = {
			profile: "DS",
			skills: "Python c++",
			internshiptype: "In office",
			openings: 3,
			from: "2-oct-2023",
			to: "2-march-2024",
			duration: "6 months",
			responsibity: "Data Handling",
			stipend: {
				status: "Fixed",
				amount: 5000,
			},
			perks: "Wifi subscription",
			assesments: "Why shoul I hire you ? ",
		};
		dispatch(asynccreateinternshipemploye(internship));
	};
	return (
		<div className="mt-5">
			<button
				onClick={CreateInternshipHandler}
				className="border border-blue-500 rounded shadow hover:text-white hover:bg-blue-800 p-2"
			>
				Create internship
			</button>
		</div>
	);
};

export default page;
