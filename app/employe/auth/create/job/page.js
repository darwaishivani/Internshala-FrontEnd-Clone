"use client"
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const CreateJobHandler = () => {
		const job = {
			title: "Data Scientist",
			skills: "Python",
			jobtype: "Remote",
			openings: 12,
			description: "anything",
			preferences: "Well trained and experienced",
			Salary: 20000,
			perks: "wifi",
			assesments: "why should I hire you?",
		};
		dispatch(asynccreatejobemploye(job));
	};
	return (
		<div className="mt-5">
			<button onClick={CreateJobHandler} className="border border-blue-500 rounded shadow hover:text-white hover:bg-blue-800 p-2">
				Create Job
			</button>
		</div>
	);
};

export default page;
