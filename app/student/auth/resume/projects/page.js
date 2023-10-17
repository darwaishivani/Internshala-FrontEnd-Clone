"use client";
import { AddprojectsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddprojectsHandler = () => {
		const projects = {
			title: "Get Job",
			technology : "MERN",
		};
		dispatch(AddprojectsStudent(projects));
	};
	return (
		<div className="m-5">
			<button onClick={AddprojectsHandler}> projects</button>
		</div>
	);
};

export default page;
