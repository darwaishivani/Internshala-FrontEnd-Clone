"use client";
import { asyncallinternships, asyncalljobs } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentAuth = ({ children }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { isAuthenticated } = useSelector((state) => state.studentReducer);
	console.log(isAuthenticated);

	useEffect(() => {
		if (!isAuthenticated) router.push("/student/");
		if (isAuthenticated) {
			dispatch(asyncalljobs());
			dispatch(asyncallinternships());

		}
    }, [isAuthenticated]);
    
	return <div>{children}</div>;
};

export default StudentAuth;
