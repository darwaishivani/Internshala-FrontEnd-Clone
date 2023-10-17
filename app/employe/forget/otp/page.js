"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncotppasswordemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { errors } = useSelector((state) => state.employeReducer);

	const sendOtpHandler = async () => {
		const newpwd = {
			email: "techshivani26@gmail.com",
			otp: "7369",
			password: "12345678",
		};

		dispatch(asyncotppasswordemploye(newpwd));

		console.log(errors);
		if (errors.length === 1) {
			router.push("/employe/signin");
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
