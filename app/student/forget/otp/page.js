"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncotppasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { errors } = useSelector((state) => state.studentReducer);

	const sendOtpHandler = async () => {
		const newpwd = {
			email: "shrutidarwai@gmail.com",
			otp: "4968",
			password: "12345678",
		};

		dispatch(asyncotppasswordstudent(newpwd));
		
        if (errors.length === 1) {
			router.push("/student/signin");
		} else {
			toast.error(JSON.stringify(errors));
			return;
		}
	};
	return (
		<div className="mt-5">
			<button onClick={sendOtpHandler}>Change passsword </button>
		</div>
	);
};

export default page;
