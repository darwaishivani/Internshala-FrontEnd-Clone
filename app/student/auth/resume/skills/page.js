"use client";
import { AddskillsStudent } from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
	const dispatch = useDispatch();
	const AddskillsHandler = () => {
		const skills = {
	skills:"MERN"
		};
		dispatch(AddskillsStudent(skills));
	};
	return (
		<div className="m-5">
			<button onClick={AddskillsHandler}> skills</button>
		</div>
	);
};

export default page;
