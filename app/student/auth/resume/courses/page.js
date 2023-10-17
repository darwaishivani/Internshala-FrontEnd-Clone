"use client";
import { AddCoursesStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddcoursesHandler = () => {
		const courses = {
			courses: "javascript",
		};
		dispatch(AddCoursesStudent(courses));
	};
	return (
		<div className="m-5">
			<button onClick={AddcoursesHandler}> courses</button>
		</div>
	);
};

export default page;
