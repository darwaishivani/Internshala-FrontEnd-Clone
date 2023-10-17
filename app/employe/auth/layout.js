"use client";
// import {
// 	asyncallinternships,
// 	asyncalljobs,
// } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeAuth = ({ children }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.employeReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (!isAuthenticated) router.push("/employe/");
		// if (isAuthenticated) {
		// 	dispatch(asyncalljobs());
		// 	dispatch(asyncallinternships());
		// }
	}, [isAuthenticated]);

	return <div>{children}</div>;
};

export default employeAuth;
