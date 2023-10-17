"use client";
import { asyncEditCoursesStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
	console.log(params);
	const dispatch = useDispatch();
	const EditcoursesHandler = () => {
		const courses = {
			skils: "React with next ",
		};
		dispatch(asyncEditCoursesStudent(params.id, courses));
	};
	return (
		<div className="mt-5">
			<button
				onClick={EditcoursesHandler}
				className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded"
			>
				Edit courses
			</button>
		</div>
	);
};

export default page;
