"use client";
import { asyncEditprojectsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
	console.log(params);
	const dispatch = useDispatch();
	const EditprojectsHandler = () => {
		const projects = {
			skils: "React with next ",
		};
		dispatch(asyncEditprojectsStudent(params.id, projects));
	};
	return (
		<div className="mt-5">
			<button
				onClick={EditprojectsHandler}
				className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
			>
				Edit projects
			</button>
		</div>
	);
};

export default page;
