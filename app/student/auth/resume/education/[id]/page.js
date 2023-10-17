"use client"
import { asyncEditEducationStudent } from "@/store/Actions/studentActions";
import { useParams } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const page = ({params}) => {
    console.log(params);
    const dispatch = useDispatch();
    const EditEducationHandler = () => {
        const education = {
				school:"KV",
				};
        dispatch(asyncEditEducationStudent(params.id, education));
    }
	return (
		<div className="mt-5">
			<button onClick={EditEducationHandler} className="mx-4 my-2 p-2 px-4 bg-blue-900 text-white rounded">
				Edit Education
			</button>
		</div>
	);
};

export default page;
