"use client";
import { AddinternshipStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddinternshipHandler = () => {
		const internship = {
			status: "completed",
			year: "2022",
			role: "Front End Devloper",
		};
		dispatch(AddinternshipStudent(internship));
	};
	return (
		<div className="m-5">
			<button onClick={AddinternshipHandler}> internship</button>
		</div>
	);
};

export default page;
