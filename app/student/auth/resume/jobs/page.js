"use client";
import { AddJobsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddjobsHandler = () => {
		const jobs = {
			Time: "1year",
			Profile: "MERN Stack",
			Skills: "Next.js",
		};
		dispatch(AddJobsStudent(jobs));
	};
	return (
		<div className="m-5">
			<button onClick={AddjobsHandler}> Jobs </button>
		</div>
	);
};

export default page;
