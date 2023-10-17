"use client";
import { asyncEditskillsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
	console.log(params);
	const dispatch = useDispatch();
	const EditskillsHandler = () => {
		const skills = {
			skils: "React with next ",
		};
		dispatch(asyncEditskillsStudent(params.id, skills));
	};
	return (
		<div className="mt-5">
			<button
				onClick={EditskillsHandler}
				className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
			>
				Edit skills
			</button>
		</div>
	);
};

export default page;
