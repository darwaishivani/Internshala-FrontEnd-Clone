"use client";
import { AddEducationStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddEducationHandler = () => {
		const education = {
			status: "completed",
			year: "2022",
			college: "IIT",
			degree: "phd",
			performance: "4",
		};
		dispatch(AddEducationStudent(education));
	};
	return (
		<div className="m-5">
			<button onClick={AddEducationHandler}> Education</button>
		</div>
	);
};

export default page;
