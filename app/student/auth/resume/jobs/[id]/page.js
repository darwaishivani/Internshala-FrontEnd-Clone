"use client";
import { asyncEditJobsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
	console.log(params);
	const dispatch = useDispatch();
	const EditjobsHandler = () => {
		const jobs = {
			skils: "React with next ",
		};
		dispatch(asyncEditJobsStudent(params.id, jobs));
	};
	return (
		<div className="mt-5">
			<button
				onClick={EditjobsHandler}
				className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
			>
				Edit Jobs
			</button>
		</div>
	);
};

export default page;
