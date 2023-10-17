"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { asyncforgetpasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { errors } = useSelector((state) => state.studentReducer);

	const sendEmailHandler = async () => {
		const email = {
			email: "shrutidarwai@gmail.com",
		};

		dispatch(asyncforgetpasswordstudent(email));

		console.log(errors);
		if (errors.length === 1) {
			router.push("/student/forget/otp");
		} else {
			toast.error(JSON.stringify(errors));
			return;
		}
	};
	return (
		<div className="mt-5">
			<button
				onClick={sendEmailHandler}
				className="button p-3 border border-sky-500 text-black font bold hover:text-white hover:bg-blue-900 shadow-md m-5 rounded-lg transition"
			>
				Send mail
			</button>
		</div>
	);
};

export default page;
