"use client";
import {
	asyncapplyinternshipemploye,
	asyncapplyjobemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
	const { employe } = useSelector((state) => state.employeReducer);
	const dispatch = useDispatch();

	useEffect(() => {}, [employe]);

	return (
		<div>
			<h1>Welcome to login </h1>
			<Link href="/employe/auth/create/job">Create Job</Link>
			<br />
			<Link href="/employe/auth/create/internship">Create internship</Link>
		</div>
	);
};

export default page;
